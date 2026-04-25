import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const DropdownMenu = ({ data, ele }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();
  const lockedRef = useRef(false);

  useEffect(() => { setIsHovered(false); }, [pathName]);
  useEffect(() => {
    const close = () => {
      setIsHovered(false);
      lockedRef.current = true;
      setTimeout(() => { lockedRef.current = false; }, 1800);
    };
    window.addEventListener("page-curtain-start", close);
    return () => window.removeEventListener("page-curtain-start", close);
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      transition: { duration: 0.15, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
      <div className="relative" onMouseLeave={() => setIsHovered(false)}>
      <Link
        href={ele?.url}
        onMouseEnter={() => { if (!lockedRef.current) setIsHovered(true); }}
        className={cn(
          "text-[#011] hover:text-[#EE3A39] transition-colors duration-300 uppercase font-extrabold tracking-[2px] text-sm flex items-center gap-1",
          getFontFamily("saira-condensed"),
          pathName.includes("service") && "text-[#EE3A39]"
        )}
        key={ele.name}
      >
        {ele?.name} {ele?.icon}
      </Link>
      <motion.div
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
        variants={containerVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        className="absolute top-full left-auto right-0 lg:right-[-120px] pt-6 w-[300px] lg:w-[650px] z-50"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-3xl p-5 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EE3A39]/5 blur-[30px] rounded-full pointer-events-none"></div>

          {data?.map((item) => (
            <motion.div
              className="w-full relative z-10"
              key={item?.url}
              variants={itemVariants}
            >
              <Link
                className={cn(
                  "flex items-center w-full min-h-[32px] px-3 py-1 rounded-md text-[0.7rem] font-bold uppercase tracking-wider text-[#626262] transition-all duration-300 hover:bg-[#F8F8F8] hover:text-[#EE3A39] hover:pl-4 leading-relaxed whitespace-normal break-words",
                  pathName === item?.url && "bg-[#F8F8F8] text-[#EE3A39] pl-4"
                )}
                href={item?.url}
              >
                {item?.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
