"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { MousePointer2, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Globe, Zap, Clock, Star, ArrowRight } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import Link from "next/link";

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

  // Improved filtering to use the nested content correctly
  const filteredData = category === "all" 
    ? data?.flatMap((ele) => ele.content.map(item => ({ ...item, serviceName: ele.name }))) || []
    : data?.filter((ele) => ele.name === category).flatMap((ele) => ele.content.map(item => ({ ...item, serviceName: ele.name }))) || [];

  return (
    <div className="min-h-screen bg-white pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 border-b border-gray-100 overflow-hidden bg-[#F8F8F8]">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#EE3A39] transition-colors font-black">Home</Link>
            <ArrowRight size={10} className="text-gray-300" />
            <span className="text-[#EE3A39] font-black">Portfolio</span>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-[10px] font-black mb-4 uppercase tracking-[3px] shadow-sm"
          >
            Our Work
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-5 tracking-tighter text-[#011] leading-none uppercase"
          >
            Image Editing Portfolio — <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Before & After Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#011] leading-relaxed font-bold max-w-3xl mx-auto mb-4"
          >
            Browse our work across all 20 image editing services. 500,000+ images edited since 2016. Filter by service category to see exactly what we can do for you.
          </motion.p>
          <p className="text-[#626262] text-xs font-medium max-w-2xl mx-auto mb-10">
            Real before and after results from our professional image editing services.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto py-6 border-y border-gray-200">
            {[
              { val: "500,000+", label: "Images Edited" },
              { val: "20", label: "Service Categories" },
              { val: "500+", label: "Global Clients" },
              { val: "10+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-[#011] mb-1">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[2px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="sticky top-[108px] z-40 bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm py-4 mb-10 group/filter">
        <div className="container mx-auto px-4 relative">
          
          {showLeftArrow && (
            <button 
              onClick={() => { if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: "smooth" }); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white/60 backdrop-blur-lg border border-gray-100 rounded-full text-[#011] opacity-0 group-hover/filter:opacity-100 transition-all hover:bg-[#EE3A39] hover:text-white shadow-xl hover:-translate-x-1"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => { if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: "smooth" }); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white/60 backdrop-blur-lg border border-gray-100 rounded-full text-[#011] opacity-0 group-hover/filter:opacity-100 transition-all hover:bg-[#EE3A39] hover:text-white shadow-xl hover:translate-x-1"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={(e) => {
              const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
              setShowLeftArrow(scrollLeft > 10);
              setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }}
            className="flex overflow-x-auto no-scrollbar justify-start gap-2 md:gap-3 px-12 md:px-0 scroll-smooth items-center"
          >
            {categories.map((ele, ind) => (
              <button
                key={`filter-${ind}`}
                onClick={() => setCategory(ele)}
                className={cn(
                  "px-5 py-2 rounded-xl text-[9px] uppercase tracking-[2px] font-black transition-all duration-500 whitespace-nowrap relative z-10",
                  category === ele 
                    ? "bg-[#011] text-white shadow-md shadow-[#011]/20 scale-105" 
                    : "bg-[#F8F8F8] text-[#011]/40 border border-transparent hover:border-[#EE3A39]/30 hover:text-[#EE3A39] hover:bg-white"
                )}
              >
                {ele.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDIO GRID */}
      <section className="container mx-auto px-4 relative z-10">
        {filteredData.length === 0 ? (
          <div className="text-center py-24 text-[#626262]">
            <p className="text-2xl font-bold">No images found in this category.</p>
          </div>
        ) : (
          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence mode="popLayout">
              {filteredData?.map((ele, ind) => {
                if (!ele?.before || !ele?.after) return null;
                const altPrefix = ele.serviceName || "Image editing";
                return (
                  <motion.div
                    key={`item-${ele.before}-${ind}`}
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setSelectedImage(ele)}
                    className="relative w-full break-inside-avoid overflow-hidden rounded-[2rem] bg-[#F8F8F8] shadow-sm hover:shadow-2xl border border-gray-100 group cursor-zoom-in transition-all duration-500 mb-8"
                  >
                    {/* Crimson Badge */}
                    <div className="absolute top-5 left-5 z-20 bg-[#EE3A39] px-3 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-[2px] shadow-lg pointer-events-none">
                      {ele.serviceName || "Professional Edit"}
                    </div>

                    <div className="relative w-full overflow-hidden">
                       <img
                        src={ele?.after}
                        alt={`${altPrefix} service after image editing result`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <img
                        src={ele?.before}
                        alt={`${altPrefix} service before image editing result`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-10"
                      />
                    </div>

                    <div className="absolute top-5 right-5 z-20 bg-white/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-[#011] text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500 shadow-xl">
                      <MousePointer2 size={12} className="text-[#EE3A39]" /> Raw Comparison
                    </div>
 
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

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-white border-t border-gray-100 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/4"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Star size={32} className="fill-[#EE3A39]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#011] mb-6 tracking-tighter uppercase">Like what you see?</h2>
          <p className="text-xl text-[#011] mb-10 font-bold">
            Try our service with 10 free images — no credit card needed. Experience the quality difference today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/free-trial" className="px-12 py-5 bg-[#EE3A39] text-white font-black rounded-2xl text-sm uppercase tracking-[3px] hover:bg-black hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)]">
               Start Free Trial
             </Link>
          </div>
        </div>
      </section>

      {/* 5. ZOOM MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 bg-black/95 overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 z-[130] p-4 bg-white/5 hover:bg-[#EE3A39] text-white rounded-2xl transition-all duration-500 hover:rotate-90 shadow-2xl border border-white/10"
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
