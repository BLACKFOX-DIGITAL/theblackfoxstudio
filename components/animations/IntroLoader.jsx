"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jetbrainsClass } from "@/utils/font";
import { cn } from "@/lib";

const ANCHORS = [
  { x: 22, y: 8 }, { x: 68, y: 6 }, { x: 82, y: 24 },
  { x: 86, y: 52 }, { x: 78, y: 78 }, { x: 58, y: 92 },
  { x: 28, y: 90 }, { x: 14, y: 70 }, { x: 18, y: 36 },
];

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [pct, setPct] = useState(0);
  const [reveal, setReveal] = useState(0);
  const [anchors, setAnchors] = useState([]);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bf_intro_done")) return;
    setVisible(true);
    let frame;
    const start = performance.now();
    const DUR = 2200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / DUR);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setPct(Math.floor(eased * 100));
      setReveal(eased);
      setAnchors(ANCHORS.slice(0, Math.floor(eased * ANCHORS.length)));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExit(true);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("bf_intro_done", "1");
          }, 900);
        }, 220);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pathD =
    anchors.length < 2
      ? ""
      : `M ${anchors[0].x} ${anchors[0].y} ` +
        anchors.slice(1).map((a) => `L ${a.x} ${a.y}`).join(" ");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-[#011111] z-[9000] flex items-center justify-center overflow-hidden"
          animate={exit ? { y: "-100%" } : { y: 0 }}
          transition={exit ? { duration: 0.9, ease: [0.7, 0, 0.3, 1] } : { duration: 0 }}
        >
          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          {/* Top-left label */}
          <div className={cn("absolute top-7 left-7 text-white opacity-60 text-[10px] tracking-[0.24em] uppercase", jetbrainsClass)}>
            [ BLACKFOX / SIG ]
          </div>

          {/* Image reveal */}
          <div className="relative" style={{ width: "min(52vw, 560px)", aspectRatio: "4/5" }}>
            <img
              src="/home_slider_woman.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`,
                filter: `grayscale(${1 - reveal}) contrast(${1 + reveal * 0.1})`,
              }}
            />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <path d={pathD} fill="none" stroke="#EE3A39" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
            </svg>
            {anchors.map((a, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${a.x}%`,
                  top: `${a.y}%`,
                  width: 10,
                  height: 10,
                  background: "#fff",
                  border: "2px solid #EE3A39",
                  transform: "translate(-50%, -50%) rotate(45deg)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute bottom-7 left-7 text-white">
            <div className="text-[48px] font-black leading-none tracking-tight" style={{ letterSpacing: "-0.04em" }}>
              {String(pct).padStart(3, "0")}
            </div>
            <div className={cn("text-[10px] tracking-[0.2em] uppercase opacity-60 mt-1.5", jetbrainsClass)}>
              CUTTING PATH
            </div>
          </div>

          {/* Brand */}
          <div className={cn("absolute bottom-7 right-7 text-white flex items-center gap-2.5 text-[10px] tracking-[0.24em] uppercase", jetbrainsClass)}>
            <span className="w-2 h-2 rounded-full bg-[#EE3A39] animate-pulse" />
            BLACKFOX DIGITAL — EST. 2016
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
