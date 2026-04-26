'use client';

import { useState, useRef } from 'react';
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
      className="absolute inset-0 overflow-hidden select-none group"
      ref={containerRef}
      data-cursor="none"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
      style={{ cursor: 'none' }}
    >
      {hasImages ? (
        <>
          {/* After image — base layer */}
          <img
            src={afterImage}
            alt="After"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* Before image — clipped overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Before"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-[#f8f8f8] flex items-center justify-center">
          <span className="text-[#011]/5 font-bold text-4xl uppercase tracking-widest">No Image</span>
        </div>
      )}

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, width: 3, background: '#EE3A39', transform: 'translateX(-50%)' }}
      />

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none z-40 flex justify-between p-3 items-start">
        <span className={cn('text-[10px] tracking-[0.2em] uppercase text-white px-2.5 py-1 rounded font-bold', jetbrainsClass)} style={{ background: 'rgba(0,0,0,0.6)' }}>
          Before
        </span>
        <span className={cn('text-[10px] tracking-[0.2em] uppercase text-white px-2.5 py-1 rounded font-bold', jetbrainsClass)} style={{ background: 'rgba(0,0,0,0.6)' }}>
          After
        </span>
      </div>
    </div>
  );
}
