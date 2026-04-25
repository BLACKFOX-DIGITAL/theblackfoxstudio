// Hero slider — matches original BLACKFOX design: red wedge w/ woman, dark photo slides
const { useState, useEffect, useRef } = React;

const SLIDES = [
  {
    kind: "graphic",
    badge: "Premium Image Editing",
    title: "Transform Your Photos Into Masterpieces",
    desc: "Professional photo editing services trusted by 5,000+ brands worldwide. Fast turnaround, unmatched quality.",
    ctaA: "Start Free Trial", ctaB: "View Portfolio",
    kinetic: "RETOUCH",
  },
  {
    kind: "bg", bg: "public/hero-1.jpg",
    badge: "E-Commerce Photography",
    title: "Sell More with Stunning Product Images",
    desc: "Clean, conversion-focused retouching for Amazon, Shopify & DTC brands.",
    ctaA: "Get a Quote", ctaB: "See Samples",
    kinetic: "COMMERCE",
  },
  {
    kind: "bg", bg: "public/hero-2.jpg",
    badge: "Fashion & Beauty",
    title: "Editorial-Grade Retouching at Scale",
    desc: "Skin, color, composition — handled by seasoned artists, shipped in 24h.",
    ctaA: "Start Free Trial", ctaB: "Meet the Team",
    kinetic: "EDITORIAL",
  },
];

function SplitTitle({ text, active }) {
  const words = text.split(" ");
  return (
    <h1 className="hero__title">
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", paddingRight: "0.3em" }}>
          <span style={{
            display: "inline-block",
            transform: active ? "translateY(0)" : "translateY(110%)",
            transition: `transform 0.9s cubic-bezier(0.7,0,0.3,1) ${0.25 + i*0.08}s`,
          }}>{w}</span>
        </span>
      ))}
    </h1>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);
  const womanRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  // re-trigger animations on slide change
  useEffect(() => { setTick(t => t + 1); }, [idx]);

  // Parallax on the woman image
  useEffect(() => {
    const onMove = (e) => {
      if (!womanRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      womanRef.current.style.transform = `translate(${x * -20}px, ${y * -14}px)`;
    };
    const el = heroRef.current;
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {SLIDES.map((s, i) => (
        <div key={i} className={`hero__slide ${s.kind === "graphic" ? "hero__slide--graphic" : "hero__slide--bg"} ${i === idx ? "active" : ""}`}>
          {s.kind === "graphic" ? (
            <>
              <div className="wedge" />
              <div className="woman" ref={i === 0 ? womanRef : null}>
                <img src="public/home_slider_woman.png" alt="model" />
              </div>
            </>
          ) : (
            <>
              <img className="bg" src={s.bg} alt="" />
              <div className="scrim" />
            </>
          )}
          <div
            className="hero__kinetic"
            style={{
              transform: i === idx ? "translateX(0)" : "translateX(8%)",
              opacity: i === idx ? 1 : 0,
              transition: "opacity 1s, transform 1.4s cubic-bezier(0.7,0,0.3,1)",
            }}
          >{s.kinetic}</div>
        </div>
      ))}

      {/* static content pane sits above; content switches */}
      <div className={`hero__content ${SLIDES[idx].kind === "graphic" ? "light" : "dark"}`} key={tick}>
        <div className="hero__badge"><span>✦</span> {SLIDES[idx].badge}</div>
        <SplitTitle text={SLIDES[idx].title} active={true} />
        <p className="hero__desc" style={{ opacity: 0, animation: "fadeUp 0.8s 0.8s forwards" }}>{SLIDES[idx].desc}</p>
        <div className="hero__btns" style={{ opacity: 0, animation: "fadeUp 0.8s 1s forwards" }}>
          <a className="btn btn-primary" data-cursor="start" href="#">{SLIDES[idx].ctaA} →</a>
          <a className="btn btn-ghost" data-cursor="view" href="#">{SLIDES[idx].ctaB}</a>
        </div>
      </div>

      <div className="hero__pagination">
        {SLIDES.map((_, i) => (
          <button key={i} className={`dot ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)} data-cursor="go" />
        ))}
      </div>

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}

window.Hero = Hero;
