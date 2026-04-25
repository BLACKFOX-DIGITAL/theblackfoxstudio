// Custom pen-tool cursor with trailing path
const { useEffect, useState, useRef } = React;

function PenCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  const trailRef = useRef([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      trailRef.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (trailRef.current.length > 40) trailRef.current.shift();
      const t = e.target.closest("[data-cursor]");
      if (t) { setHover(true); setLabel(t.getAttribute("data-cursor") || ""); }
      else { setHover(false); setLabel(""); }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width = innerWidth*devicePixelRatio; canvas.height = innerHeight*devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); };
    resize(); window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      const pts = trailRef.current.filter(p => now - p.t < 650);
      trailRef.current = pts;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i-1], b = pts[i];
        const alpha = 1 - (now - b.t) / 650;
        ctx.strokeStyle = `rgba(238,58,57,${alpha * 0.5})`;
        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        if (i % 6 === 0) { ctx.fillStyle = `rgba(238,58,57,${alpha})`; ctx.fillRect(b.x-2, b.y-2, 4, 4); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail" style={{ width: "100vw", height: "100vh" }} />
      <div
        className={`cursor ${hover ? "hover" : ""}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%) rotate(${hover?0:45}deg)` }}
      />
      <div
        className={`cursor__label ${hover && label ? "show" : ""}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)` }}
      >{label}</div>
    </>
  );
}

window.PenCursor = PenCursor;
