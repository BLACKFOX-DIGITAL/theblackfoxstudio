"use client";
import dynamic from "next/dynamic";

const BeforeAfterSlider = dynamic(() => import("./BeforeAfterSlider"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900 animate-pulse" />
  ),
});

export default BeforeAfterSlider;
