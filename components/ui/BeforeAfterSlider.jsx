'use client';

import { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, label = "Before & After" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  
  // Use CSS variable workaround or a fallback since true images might not exist early on
  // For safety and cinematic look, we use div blocks with specific background colors as placeholders if imagery is missing
  const hasImages = beforeImage && afterImage;

  return (
    <div 
      className="relative w-full h-auto rounded-2xl overflow-hidden cursor-ew-resize select-none bg-[#111]"
      ref={containerRef}
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
      onTouchMove={(e) => {
        if (!containerRef.current || !e.touches[0]) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
    >
      {/* After Image (Background) */}
      {hasImages ? (
        <img src={afterImage} alt="After editing" draggable="false" className="w-full h-auto block select-none" />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-end pr-8">
          <span className="text-white/30 font-bold text-4xl transform -rotate-90 origin-right">AFTER</span>
        </div>
      )}

      {/* Before Image (Foreground overlay) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        {hasImages ? (
          <img src={beforeImage} alt="Before editing" draggable="false" className="absolute top-0 left-0 h-full object-cover max-w-none select-none" style={{ width: containerRef.current?.offsetWidth || '100vw' }} />
        ) : (
          <div className="absolute top-0 left-0 w-screen h-full bg-[#0a0a0a] border-r-2 border-orange-500/50 flex items-center justify-start pl-8" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
            <span className="text-white/30 font-bold text-4xl transform rotate-90 origin-left">BEFORE</span>
          </div>
        )}
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-orange-500 cursor-ew-resize flex items-center justify-center -ml-0.5 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-ml-3">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Category Label */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
