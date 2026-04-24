"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSlider({ testimonials }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 20);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scrollBy = (direction) => {
    if (scrollRef.current) {
      // Scroll by exactly one card width (approx 33% on desktop, 100% on mobile)
      const scrollAmount = scrollRef.current.clientWidth >= 1024 
        ? scrollRef.current.clientWidth / 3 
        : scrollRef.current.clientWidth;
      
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      
      {/* Desktop Navigation Arrows */}
      <div className="absolute -top-24 right-4 hidden md:flex gap-2">
        <button 
          onClick={() => scrollBy(-1)}
          disabled={!showLeft}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
            showLeft 
              ? "border-[#011] text-[#011] hover:bg-[#011] hover:text-white" 
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          <ArrowLeft size={18} />
        </button>
        <button 
          onClick={() => scrollBy(1)}
          disabled={!showRight}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
            showRight 
              ? "border-[#011] text-[#011] hover:bg-[#011] hover:text-white" 
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
          >
            <div className="bg-[#F8F8F8] p-5 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col cursor-grab active:cursor-grabbing">
              <div className="flex text-orange-400 mb-6">
                {Array(t.stars).fill(0).map((_, s) => (
                  <span key={s} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-[#011] font-medium leading-relaxed italic mb-8 flex-grow">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-bold text-[#011]">— {t.author}</div>
                <div className="text-xs font-black uppercase tracking-[2px] text-[#EE3A39] mt-1">{t.role}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[2px]">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty padding element at the end for proper scrolling bounce on mobile */}
        <div className="snap-end flex-shrink-0 w-4 md:hidden"></div>
      </div>
    </div>
  );
}
