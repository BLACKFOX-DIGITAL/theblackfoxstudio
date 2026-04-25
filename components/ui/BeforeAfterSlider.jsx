'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { jetbrainsClass } from '@/utils/font';
import { cn } from '@/lib';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
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
      className="relative w-full h-full overflow-hidden select-none bg-neutral-950 group"
      ref={containerRef}
      data-cursor="none"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
      style={{ cursor: "none" }}
    >
      {/* After image (base) */}
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

      {/* Before image (clip overlay) */}
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

      {/* Divider — 3px brand red */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, width: 3, background: "#EE3A39", transform: "translateX(-50%)" }}
      />


      {/* Before / After corner labels */}
      <div className="absolute inset-0 pointer-events-none z-40 flex justify-between p-3 items-start">
        <span className={cn("text-[10px] tracking-[0.2em] uppercase text-white px-2.5 py-1 rounded", jetbrainsClass)} style={{ background: "rgba(0,0,0,0.6)" }}>
          Before
        </span>
        <span className={cn("text-[10px] tracking-[0.2em] uppercase text-white px-2.5 py-1 rounded", jetbrainsClass)} style={{ background: "rgba(0,0,0,0.6)" }}>
          After
        </span>
      </div>
    </div>
  );
}
