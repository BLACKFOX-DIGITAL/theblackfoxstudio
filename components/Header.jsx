"use client";
import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import {
  RiArrowDownSFill,
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneFill,
  RiSkypeFill,
  RiWhatsappLine,
  RiYoutubeLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect, Fragment } from "react";
import SidebarMenu from "./SidebarMenu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import TeamsIcon from "./TeamsIcon";

const Header = ({ dbServices = [], dbSettings = {} }) => {
  const pathname = usePathname();

  const dynamicServices = dbServices.length > 0 
    ? dbServices.map(s => ({
        name: s.title.toLowerCase(),
        url: `/services/${s.slug}`
      }))
    : [
        { name: "e-commerce edit", url: "/services/ecommerce-photo-editing" },
        { name: "background removal", url: "/services/background-removal-service" },
        { name: "clipping path", url: "/services/clipping-path-service" },
        { name: "ghost mannequin", url: "/services/ghost-mannequin-service" },
        { name: "image masking", url: "/services/image-masking-service" },
        { name: "shadow & reflection", url: "/services/shadow-reflection-service" },
        { name: "beauty & skin retouch", url: "/services/beauty-skin-retouching-service" },
        { name: "model retouch", url: "/services/model-retouching-service" },
        { name: "product retouch", url: "/services/product-retouching-service" },
        { name: "jewelry retouch", url: "/services/jewelry-retouching-service" },
        { name: "color correction", url: "/services/color-correction-service" },
        { name: "image manipulation", url: "/services/image-manipulation-service" },
        { name: "flatlay retouch", url: "/services/flatlay-photo-editing-service" },
        { name: "multi clipping path", url: "/services/multi-clipping-path-service" },
        { name: "real estate editing", url: "/services/real-estate-photo-editing" },
        { name: "car photo editing", url: "/services/car-photo-editing-service" },
        { name: "360° product editing", url: "/services/360-degree-product-photo-editing" },
        { name: "packshot retouching", url: "/services/packshot-retouching-service" },
        { name: "image web optimization", url: "/services/image-web-optimization-service" },
        { name: "photo restoration", url: "/services/photo-restoration-service" },
      ];

  const links = [
    {
      name: "our services",
      icon: <RiArrowDownSFill className="w-[16px] lg:size-[.833vw] " />,
      url: "/services",
      children: dynamicServices,
    },
    {
      name: "portfolio",
      url: "/portfolio",
    },
    {
      name: "pricing",
      url: "/pricing",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "blog",
      url: "/blog",
    },
    {
      name: "contact",
      url: "/contact",
    },
    {
      name: "free trial",
      url: "/free-trial",
    },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(null);

  const updateHeights = () => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 150) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  const getPx = {
    "/": 96,
    "about": 96,
  };

  return (
    <header
      style={{
        marginBottom: `${
          headerHeight ?? getPx[pathname] ? getPx[pathname] : 134
        }px`,
      }}
    >
      <motion.div
        ref={headerRef}
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: {
            y: `-${navHeight}px`,
            transition: {
              ease: "linear",
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            },
          },
          visible: {
            y: "0%",
            background: "white",
          },
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className="fixed top-0 z-[99] w-full bg-[#ffffffbd] shadow-md   "
      >

        <nav className="py-3 lg:py-4 px-[20px] lg:px-[4vw] flex justify-between items-center bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <Link href={`/`} className="flex items-center">
            <figure className="flex items-center h-[34px] sm:h-[44px] lg:h-[52px]">
              <Image
                src={dbSettings.logoUrl || `/logo.png`}
                alt={dbSettings.siteName || "BLACKFOX DIGITAL"}
                width={400}
                height={160}
                quality={100}
                className="object-contain w-auto h-full pointer-events-none"
                priority
              />
            </figure>
          </Link>
          <SidebarMenu links={links} />
          <div className="hidden lg:flex items-center gap-8">
            {links?.map((ele) => {
              if (ele?.children)
                return (
                  <DropdownMenu
                    ele={ele}
                    key={ele?.name}
                    data={ele?.children}
                  />
                );
              else
                return (
                  <Link
                    key={ele?.name}
                    className={cn(
                      "text-[#011] hover:text-[#EE3A39] transition-colors duration-300 uppercase font-extrabold tracking-[2px] text-sm",
                      getFontFamily("saira-condensed"),
                      pathname === ele.url && "text-[#EE3A39]",
                      ele.name === "free trial" && "bg-[#EE3A39] text-white hover:bg-[#d63030] hover:text-white px-6 py-2.5 rounded-full shadow-md ml-4 tracking-widest text-xs"
                    )}
                    href={ele.url}
                  >
                    {ele?.name}
                  </Link>
                );
            })}
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
