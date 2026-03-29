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
import { ArrowRight, Scissors, Layers, CheckCircle } from "lucide-react";

export default function Hero() {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideData = [
    {
      img: "/home_slider_woman.png",
      title: "Image Post-Production for Global Brands",
      subtitle: "Editing At Scale",
      description: "Premium photo editing and retouching services for e-commerce brands, fashion houses and global enterprises. Pixel-perfect results. 24-hour delivery. Trusted by 500+ brands worldwide.",
      bgImage: null, // First slide uses custom layout
      isGraphic: true,
    },
    {
      img: "/hero-1.jpg",
      title: "Image Post-Production for Global Brands",
      subtitle: "Flawless Execution",
      description: "Remove blemishes, smooth skin, and retain natural textures. Perfect for glamour and fashion.",
      isGraphic: false,
    },
    {
      img: "/hero-2.jpg",
      title: "Image Post-Production for Global Brands",
      subtitle: "Vibrant & Accurate",
      description: "Fix white balance, saturation, and exposure to represent your products in their truest light.",
      isGraphic: false,
    },
    {
      img: "/hero-3.jpg",
      title: "Image Post-Production for Global Brands",
      subtitle: "End-to-End Solutions",
      description: "From clipping paths to complex image manipulations, we handle thousands of images overnight.",
      isGraphic: false,
    }
  ];

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
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden w-full h-full flex items-center">
              
              {/* Background Handle */}
              {slide.isGraphic ? (
                 <div className="absolute inset-0 w-full h-full bg-[#EE3A39] overflow-hidden">
                    {/* Animated Geometric overlay mimicking original first slide feel perfectly */}
                    <div className="absolute right-0 top-0 w-[65%] lg:w-[60%] h-full bg-[#f2f2f4]" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
                    {!isMobile && (
                      <motion.div 
                        initial={{ y: 80, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.5, duration: 1 }} 
                        className="absolute bottom-[-5%] xl:bottom-[-10%] right-[5%] xl:right-[8%] z-10 w-[55vw] xl:w-[50vw] 2xl:w-[45vw]"
                      >
                        <Image src={slide.img} alt="Hero graphic" width={1184} height={1184} className="w-full h-auto object-contain drop-shadow-2xl" priority />
                      </motion.div>
                    )}
                 </div>
              ) : (
                 <div className="absolute inset-0 w-full h-full">
                    <Image src={slide.img} alt={slide.title} fill className="object-cover" priority={index === 1} />
                    {/* Subtle gradient so text remains readable on dark backgrounds */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                 </div>
              )}

              {/* Foreground Content - Glassmorphic / Light Theme Styling */}
              <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={cn(
                    "max-w-xl md:max-w-2xl lg:max-w-3xl p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl backdrop-blur-md transition-all",
                    slide.isGraphic ? "bg-white/95" : "bg-white/10 border border-white/20"
                  )}
                >
                   <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 uppercase tracking-widest shadow-sm", slide.isGraphic ? "bg-[#EE3A39]/10 text-[#EE3A39]" : "bg-white/20 text-white")}>
                     {slide.subtitle}
                   </div>
                   
                   <h1 className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tighter leading-[1.05]", slide.isGraphic ? "text-[#011]" : "text-white")}>
                     {slide.title}
                   </h1>
                   
                   <p className={cn("text-base lg:text-lg leading-relaxed font-medium mb-8", slide.isGraphic ? "text-[#626262]" : "text-gray-200")}>
                     {slide.description}
                   </p>

                   <div className="flex flex-wrap items-center gap-4">
                     <Link href="/free-trial" className="px-8 py-4 2xl:px-10 2xl:py-5 bg-[#EE3A39] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2 2xl:text-lg">
                       Start Free Trial <ArrowRight size={18} />
                     </Link>
                     <Link href="/portfolio" className={cn("px-8 py-4 2xl:px-10 2xl:py-5 font-bold rounded-xl border transition-all hover:-translate-y-1 2xl:text-lg", slide.isGraphic ? "bg-[#F8F8F8] text-[#011] border-gray-200 hover:bg-gray-200" : "bg-transparent text-white border-white/30 hover:bg-white/10")}>
                       View Portfolio
                     </Link>
                   </div>
                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>

      {/* Custom CSS overrides for Swiper navigation to match light theme gracefully */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: transparent !important;
          width: 60px !important;
          height: 60px !important;
          transition: all 0.3s ease;
          opacity: 0.6;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 40px !important;
          font-weight: 200;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(1.1);
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #EE3A39;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
