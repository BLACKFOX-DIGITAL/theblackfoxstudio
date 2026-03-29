"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { MousePointer2, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Compare } from "@/components/ui/compare";

const Gallery = ({ data = [] }) => {
  const [category, setCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scrollRef = React.useRef(null);
  
  const categories = ["all", ...(data?.map((ele) => ele?.name) || [])];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    },
  };

  let filteredData = category === "all" 
    ? data?.map((ele) => ele?.content).flat() || []
    : data?.filter((ele) => ele.name === category).flatMap((ele) => ele.content) || [];

  return (
    <div className="min-h-screen bg-white pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 border-b border-gray-100 overflow-hidden bg-[#F8F8F8]">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-xs font-black mb-6 uppercase tracking-[3px] shadow-sm"
          >
            Showcase Overview
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-[#011] leading-[0.9]"
          >
            Pixel Perfect <br/> <span className="text-[#EE3A39]">Precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#011]/60 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Observe the technical transformation. Hover over any project to reveal the raw file, or click to enter our interactive high-resolution comparison suite.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER TABS (ELITE NAVIGATION HUB) */}
      <section className="sticky top-[108px] z-40 bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm py-5 mb-12 group/filter">
        <div className="container mx-auto px-4 relative">
          
          {/* Smart Navigation Arrows: ONLY SHOW ON HOVER & IF SCROLLABLE */}
          {showLeftArrow && (
            <button 
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white/60 backdrop-blur-lg border border-gray-100 rounded-full text-[#011] opacity-0 group-hover/filter:opacity-100 transition-all hover:bg-[#EE3A39] hover:text-white shadow-xl hover:-translate-x-1"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white/60 backdrop-blur-lg border border-gray-100 rounded-full text-[#011] opacity-0 group-hover/filter:opacity-100 transition-all hover:bg-[#EE3A39] hover:text-white shadow-xl hover:translate-x-1"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Vignette Fades (The Boutique Edge) */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-30 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-30 bg-gradient-to-l from-white to-transparent"></div>

          <div 
            ref={scrollRef}
            onScroll={(e) => {
              const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
              setShowLeftArrow(scrollLeft > 10);
              setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }}
            className="flex overflow-x-auto no-scrollbar justify-start gap-2 md:gap-3 px-12 md:px-0 scroll-smooth"
          >
            {categories.map((ele, ind) => (
              <button
                key={`filter-${ind}`}
                onClick={() => setCategory(ele)}
                className={cn(
                  "px-6 py-2.5 rounded-2xl text-[10px] uppercase tracking-[2px] font-black transition-all duration-500 whitespace-nowrap relative z-10",
                  category === ele 
                    ? "bg-[#011] text-white shadow-xl shadow-[#011]/20 scale-105" 
                    : "bg-[#F8F8F8] text-[#011]/40 border border-transparent hover:border-[#EE3A39]/30 hover:text-[#EE3A39] hover:bg-white"
                )}
              >
                {ele.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDIO GRID (PERFECT ALIGNMENT) */}
      <section className="container mx-auto px-4 relative z-10">
        {filteredData.length === 0 ? (
          <div className="text-center py-24 text-[#626262]">
            <p className="text-2xl font-bold">No images found in this category.</p>
          </div>
        ) : (
          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence mode="popLayout">
              {filteredData?.map((ele, ind) => {
                if (!ele?.before || !ele?.after) return null;
                return (
                  <motion.div
                    key={`item-${ele.before}-${ind}`}
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setSelectedImage(ele)}
                    className="relative w-full break-inside-avoid overflow-hidden rounded-[2.5rem] bg-[#F8F8F8] shadow-sm hover:shadow-2xl border border-gray-100 group cursor-zoom-in transition-all duration-500 mb-6"
                  >
                    {/* Image Container (Bento Mosaic: Natural Aspect, No Dead Space) */}
                    <div className="relative w-full overflow-hidden">
                       {/* Base Image (After) - Using relative Img to respect aspect ratio */}
                       <img
                        src={ele?.after}
                        alt="Final Edited Image"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Before Image (Hover Reveal) */}
                      <img
                        src={ele?.before}
                        alt="Raw Unedited Image"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-10"
                      />
                    </div>

                    {/* Default View: Instructional Pill */}
                    <div className="absolute top-5 right-5 z-20 bg-white/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-[#011] text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500 shadow-xl">
                      <MousePointer2 size={12} className="text-[#EE3A39]" /> Raw Comparison
                    </div>
 
                    {/* Hover View: Action Overlay */}
                    <div className="absolute inset-x-5 bottom-5 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-[#011]/80 backdrop-blur-xl px-5 py-5 rounded-[1.5rem] border border-white/5 shadow-2xl overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3A39]/10 blur-[40px] rounded-full pointer-events-none"></div>
                       <span className="relative z-10 text-white text-[11px] font-black uppercase tracking-[3px] flex items-center justify-center gap-3">
                         <Maximize2 size={16} className="text-[#EE3A39] animate-pulse"/> Interactive Suite
                       </span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* 4. LIGHTBOX ZOOM MODAL (Immersive) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            {/* Immersive Blurred Background */}
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <Image 
                src={selectedImage.after} 
                fill 
                className="object-cover blur-[100px] grayscale brightness-50" 
                alt="bg-blur"
              />
            </motion.div>
 
            <button 
              className="absolute top-8 right-8 z-[110] p-4 bg-white/5 hover:bg-[#EE3A39] text-white rounded-2xl transition-all duration-500 hover:rotate-90 shadow-2xl border border-white/10"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} strokeWidth={3} />
            </button>
 
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl h-[75vh] md:h-[90vh] bg-[#011] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full relative group/compare cursor-col-resize">
                <Compare
                   firstImage={selectedImage.before}
                   secondImage={selectedImage.after}
                   slideMode="drag"
                   autoplay={false}
                   className="w-full h-full object-contain !bg-transparent"
                   firstImageClassName="object-contain w-full h-full !bg-transparent"
                   secondImageClassname="object-contain w-full h-full !bg-transparent"
                />
 
                {/* Floating Labels Overlay (Stacked on mobile to prevent overlap) */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
                  <div className="px-4 py-1.5 md:px-6 md:py-2 bg-[#000000]/40 backdrop-blur-md rounded-full border border-white/10 text-white/40 text-[9px] md:text-[10px] uppercase font-black tracking-[4px]">
                    Original Raw
                  </div>
                </div>
                <div className="absolute top-16 left-6 md:top-10 md:right-10 z-50 md:flex flex-col items-end">
                  <div className="px-4 py-1.5 md:px-6 md:py-2 bg-[#EE3A39]/20 backdrop-blur-md rounded-full border border-[#EE3A39]/30 text-white text-[9px] md:text-[10px] uppercase font-black tracking-[4px]">
                    The Black Fox Edit
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#EE3A39] px-8 py-3 rounded-2xl text-white text-[10px] font-black uppercase tracking-[3px] shadow-2xl flex gap-3 items-center pointer-events-none group-hover/compare:scale-105 transition-transform duration-500">
                 Drag Slider To Analyze Quality
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
