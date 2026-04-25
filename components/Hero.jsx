"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-creative";
import { cn } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sairaCondensedClass } from "@/utils/font";
import useMagnetic from "@/hooks/useMagnetic";

const slideData = [
  {
    img: "/home_slider_woman.png",
    title: "5,000+ Images Edited Daily — Delivered in 24 Hours",
    subtitle: "Editing At Scale",
    description: "Premium photo editing and retouching services for e-commerce brands, fashion houses and global enterprises. Pixel-perfect results. From $0.29/image. Trusted by 500+ brands worldwide.",
    bgImage: null,
    isGraphic: true,
    kinetic: "RETOUCH",
  },
  {
    img: "/hero-1.jpg",
    title: "Human Retouchers, Not AI — Commercial-Grade Quality",
    subtitle: "Flawless Execution",
    description: "Every image edited by a specialist using frequency separation, dodge & burn, and natural texture preservation. Perfect for beauty, fashion, and glamour.",
    isGraphic: false,
    kinetic: "PRECISION",
  },
  {
    img: "/hero-2.jpg",
    title: "Pantone-Accurate Color Correction at Scale",
    subtitle: "Vibrant & Accurate",
    description: "Fix white balance, saturation, and exposure to represent your products in their truest light. Multi-SKU batch recoloring with zero color drift across your catalog.",
    isGraphic: false,
    kinetic: "COMMERCE",
  },
  {
    img: "/hero-3.jpg",
    title: "From Clipping Paths to Ghost Mannequin — One Studio",
    subtitle: "End-to-End Solutions",
    description: "20+ specialized editing services under one roof. We handle thousands of images overnight so your team doesn't have to.",
    isGraphic: false,
    kinetic: "EDITORIAL",
  },
];

function SplitTitle({ text, isLight }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const words = text.split(" ");
  return (
    <h2 className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tighter leading-[1.05]", isLight ? "text-[#011]" : "text-white")}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.3em]">
          {mounted ? (
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease: [0.7, 0, 0.3, 1] }}
            >
              {w}
            </motion.span>
          ) : (
            <span className="inline-block">{w}</span>
          )}
        </span>
      ))}
    </h2>
  );
}

function MagneticLink({ href, className, children, dataCursor }) {
  const ref = useRef(null);
  useMagnetic(ref);
  return (
    <Link
      href={href}
      ref={ref}
      className={className}
      data-cursor={dataCursor}
      style={{ willChange: "transform", transition: "transform 0.25s cubic-bezier(0.3,0.9,0.3,1), box-shadow 0.3s, background 0.3s" }}
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="h-[90vh] lg:h-screen w-full relative bg-[#F8F8F8]">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-10 h-10 border-4 border-[#EE3A39] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Swiper
          ref={swiperRef}
          className="h-full w-full relative"
          loop={true}
          slidesPerView={1}
          speed={1500}
          effect={"creative"}
          creativeEffect={{
            prev: { shadow: true, translate: ["-20%", 0, -1] },
            next: { translate: ["100%", 0, 0] },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[EffectCreative, Navigation, Pagination, Autoplay]}
          onSlideChange={(s) => setActiveIdx(s.realIndex)}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden w-full h-full flex items-center">

              {/* Background */}
              {slide.isGraphic ? (
                <div className="absolute inset-0 w-full h-full bg-[#EE3A39] overflow-hidden">
                  <div className="absolute right-0 top-0 w-[65%] lg:w-[60%] h-full bg-[#f2f2f4]" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }} />
                  {!isMobile && (
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="absolute bottom-[-5%] xl:bottom-[-10%] right-[5%] xl:right-[8%] z-10 w-[55vw] xl:w-[50vw] 2xl:w-[45vw]"
                    >
                      <Image src={slide.img} alt="BLACKFOX DIGITAL professional photo editing and retouching services" width={1184} height={1184} className="w-full h-auto object-contain drop-shadow-2xl" priority />
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  <Image src={slide.img} alt={slide.title} fill className="object-cover" priority={index === 1} />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
              )}

              {/* Kinetic background word — CSS transition, no SSR mismatch */}
              <div
                className={cn(
                  "absolute right-[4vw] top-[18%] pointer-events-none font-black uppercase leading-[0.85] text-right select-none",
                  sairaCondensedClass
                )}
                style={{
                  fontSize: "clamp(60px, 11vw, 180px)",
                  letterSpacing: "-0.05em",
                  color: slide.isGraphic ? "rgba(1,17,17,0.05)" : "rgba(255,255,255,0.08)",
                  zIndex: 5,
                  opacity: activeIdx === index ? 1 : 0,
                  transform: activeIdx === index ? "translateX(0)" : "translateX(8%)",
                  transition: "opacity 1s, transform 1.4s cubic-bezier(0.7,0,0.3,1)",
                }}
              >
                {slide.kinetic}
              </div>

              {/* Foreground content */}
              <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
                <motion.div
                  key={`content-${activeIdx}-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={cn(
                    "max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl backdrop-blur-md",
                    slide.isGraphic ? "bg-white/95" : "bg-white/10 border border-white/20"
                  )}
                >
                  <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 uppercase tracking-widest shadow-sm", slide.isGraphic ? "bg-[#EE3A39]/10 text-[#EE3A39]" : "bg-white/20 text-white")}>
                    {slide.subtitle}
                  </div>

                  <SplitTitle text={slide.title} isLight={slide.isGraphic} key={`title-${activeIdx}-${index}`} />

                  <motion.p
                    className={cn("text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-6 sm:mb-8", slide.isGraphic ? "text-[#626262]" : "text-gray-200")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <MagneticLink
                      href="/free-trial"
                      className="px-8 py-4 2xl:px-10 2xl:py-5 bg-[#EE3A39] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)] flex items-center gap-2 2xl:text-lg"
                      dataCursor="start"
                    >
                      Start Free Trial <ArrowRight size={18} />
                    </MagneticLink>
                    <Link
                      href="/portfolio"
                      className={cn("px-8 py-4 2xl:px-10 2xl:py-5 font-bold rounded-xl border transition-all hover:-translate-y-1 2xl:text-lg", slide.isGraphic ? "bg-[#F8F8F8] text-[#011] border-gray-200 hover:bg-gray-200" : "bg-transparent text-white border-white/30 hover:bg-white/10")}
                      data-cursor="view"
                    >
                      View Portfolio
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: transparent !important;
          width: 40px !important;
          height: 40px !important;
          transition: all 0.3s ease;
          opacity: 0.6;
          display: none !important;
        }
        @media (min-width: 640px) {
          .swiper-button-next, .swiper-button-prev {
            display: flex !important;
            width: 60px !important;
            height: 60px !important;
          }
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 24px !important;
          font-weight: 200;
        }
        @media (min-width: 640px) {
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 40px !important;
          }
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(1.1);
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: white;
          opacity: 0.5;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
        .swiper-pagination-bullet-active {
          background: #EE3A39;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
