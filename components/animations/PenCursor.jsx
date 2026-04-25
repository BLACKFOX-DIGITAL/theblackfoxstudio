"use client";
import { useEffect, useRef, useState } from "react";
import { jetbrainsClass } from "@/utils/font";
import { cn } from "@/lib";

export default function PenCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const trailRef = useRef([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      trailRef.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (trailRef.current.length > 40) trailRef.current.shift();
      const t = e.target.closest("[data-cursor]");
      const val = t ? t.getAttribute("data-cursor") : null;
      if (t && val !== "none") { setHover(true); setLabel(val || ""); }
      else { setHover(false); setLabel(""); }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      const pts = trailRef.current.filter((p) => now - p.t < 650);
      trailRef.current = pts;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        const alpha = 1 - (now - b.t) / 650;
        ctx.strokeStyle = `rgba(238,58,57,${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        if (i % 6 === 0) {
          ctx.fillStyle = `rgba(238,58,57,${alpha})`;
          ctx.fillRect(b.x - 2, b.y - 2, 4, 4);
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9998, width: "100vw", height: "100vh" }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 9999,
          width: hover ? 56 : 10,
          height: hover ? 56 : 10,
          background: "#EE3A39",
          border: hover ? "3px solid #EE3A39" : "2px solid #fff",
          borderRadius: hover ? "50%" : 0,
          boxShadow: hover ? "none" : "0 0 0 1px rgba(238,58,57,0.3)",
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%) rotate(${hover ? 0 : 45}deg)`,
          transition: "width 0.2s, height 0.2s, border-radius 0.2s, border 0.2s",
        }}
      />
      <div
        className={cn("fixed top-0 left-0 pointer-events-none text-white uppercase tracking-[0.2em] text-[9px]", jetbrainsClass)}
        style={{
          zIndex: 10000,
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`,
          opacity: hover && label ? 1 : 0,
          transition: "opacity 0.25s",
        }}
      >
        {label}
      </div>
    </>
  );
}
