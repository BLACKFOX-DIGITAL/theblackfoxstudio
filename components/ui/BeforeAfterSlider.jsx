'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider({ beforeImage, afterImage, label = "Before & After" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const hasImages = beforeImage && afterImage;

  return (
    <div 
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-ew-resize select-none bg-neutral-950 group shadow-2xl"
      ref={containerRef}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
    >
      {/* 1. After Image (Base) */}
      {hasImages ? (
        <Image 
          src={afterImage} 
          alt="After" 
          fill
          className="object-contain select-none pointer-events-none" 
          priority
          unoptimized
        />
      ) : (
        <div className="w-full h-full bg-[#111] flex items-center justify-center">
          <span className="text-white/5 font-bold text-4xl">NO IMAGE</span>
        </div>
      )}

      {/* 2. Before Image (Overlay) */}
      {hasImages && (
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image 
            src={beforeImage} 
            alt="Before" 
            fill
            className="object-contain select-none pointer-events-none"
            priority
            unoptimized
          />
        </div>
      )}

      {/* 3. Slider UI */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-orange-500 z-20 pointer-events-none shadow-[0_0_15px_rgba(249,115,22,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      />

      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.6)] border-2 border-white/50 z-30 transition-transform group-hover:scale-110 active:scale-95"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="flex gap-0.5 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      
      {/* 4. Label */}
      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] z-40 pointer-events-none">
        {label}
      </div>
    </div>
  );
}
