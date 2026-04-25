"use client";
import { useEffect } from "react";

export default function useMagnetic(ref, { radius = 140, pull = 0.35, scale = 0.08 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        const p = 1 - dist / radius;
        el.style.transform = `translate(${dx * p * pull}px, ${dy * p * pull}px) scale(${1 + p * scale})`;
      } else {
        el.style.transform = "translate(0,0) scale(1)";
      }
    };

    const onLeave = () => { el.style.transform = "translate(0,0) scale(1)"; };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, radius, pull, scale]);
}
