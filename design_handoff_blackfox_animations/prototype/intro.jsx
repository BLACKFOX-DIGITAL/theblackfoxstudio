// Intro loader — pen-tool cutting animation
const { useState, useEffect } = React;

function Intro({ onDone }) {
  const [pct, setPct] = useState(0);
  const [reveal, setReveal] = useState(0);
  const [anchors, setAnchors] = useState([]);
  const [exit, setExit] = useState(false);

  const ANCHORS = [
    { x: 22, y: 8 }, { x: 68, y: 6 }, { x: 82, y: 24 },
    { x: 86, y: 52 }, { x: 78, y: 78 }, { x: 58, y: 92 },
    { x: 28, y: 90 }, { x: 14, y: 70 }, { x: 18, y: 36 },
  ];

  useEffect(() => {
    let frame;
    const start = performance.now();
    const DUR = 2200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / DUR);
      const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
      setPct(Math.floor(eased * 100));
      setReveal(eased);
      setAnchors(ANCHORS.slice(0, Math.floor(eased * ANCHORS.length)));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => { setExit(true); setTimeout(onDone, 900); }, 220);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pathD = anchors.length < 2 ? "" : `M ${anchors[0].x} ${anchors[0].y} ` + anchors.slice(1).map(a => `L ${a.x} ${a.y}`).join(" ");

  return (
    <div className={`intro ${exit ? "exit" : ""}`}>
      <div className="intro__grid" />
      <div className="intro__label">[ BLACKFOX / SIG ]</div>
      <div className="intro__image">
        <img
          src="public/home_slider_woman.png"
          alt=""
          style={{
            clipPath: `inset(0 ${(1-reveal)*100}% 0 0)`,
            filter: `grayscale(${1-reveal}) contrast(${1 + reveal*0.1})`
          }}
        />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <path d={pathD} fill="none" stroke="#EE3A39" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
        </svg>
        {anchors.map((a, i) => (
          <div key={i} className="anchor show" style={{ left: `${a.x}%`, top: `${a.y}%`, position: "absolute" }} />
        ))}
      </div>
      <div className="intro__counter">
        <div className="big">{String(pct).padStart(3, "0")}</div>
        <div className="lbl">CUTTING PATH</div>
      </div>
      <div className="intro__brand">
        <span className="mark" />
        <span>BLACKFOX DIGITAL — EST. 2016</span>
      </div>
    </div>
  );
}

window.Intro = Intro;
