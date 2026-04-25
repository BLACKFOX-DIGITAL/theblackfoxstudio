// App orchestrator — intro → site
const { useState, useEffect } = React;

function Tweaks() {
  const [tw, setTw] = useTweaks(/*EDITMODE-BEGIN*/{
    "brand": "#EE3A39",
    "intro": true,
    "cursor": true,
    "kineticType": true,
    "marquee": true,
    "curtain": true,
    "magnetic": true
  }/*EDITMODE-END*/);

  useEffect(() => { document.documentElement.style.setProperty("--brand", tw.brand); }, [tw.brand]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakColor label="Accent" value={tw.brand} onChange={v => setTw({ brand: v })} />
      </TweakSection>
      <TweakSection title="Wow moments">
        <TweakToggle label="Intro loader (replay on reload)" value={tw.intro} onChange={v => setTw({ intro: v })} />
        <TweakToggle label="Pen-tool cursor" value={tw.cursor} onChange={v => setTw({ cursor: v })} />
        <TweakToggle label="Kinetic background type" value={tw.kineticType} onChange={v => setTw({ kineticType: v })} />
        <TweakToggle label="Marquee strip" value={tw.marquee} onChange={v => setTw({ marquee: v })} />
        <TweakToggle label="Curtain page transition" value={tw.curtain} onChange={v => setTw({ curtain: v })} />
        <TweakToggle label="Magnetic CTA button" value={tw.magnetic} onChange={v => setTw({ magnetic: v })} />
      </TweakSection>
      <TweakSection title="Try it">
        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>
          • Drag the slider on any service card<br />
          • Click nav links to see the curtain<br />
          • Hover the "Start Your Free Trial" button<br />
          • Watch the giant word behind the hero
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);
  const tw = window.__tw || {};

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <PenCursor />
      <Curtain />

      <header className="nav">
        <a className="nav__logo" href="#" data-curtain="HOME"><img src="public/logo.png" alt="Blackfox" /></a>
        <nav className="nav__links">
          <a href="#services" data-curtain="SERVICES">Our Services</a>
          <a href="#portfolio" data-curtain="PORTFOLIO">Portfolio</a>
          <a href="#pricing" data-curtain="PRICING">Pricing</a>
          <a href="#about" data-curtain="ABOUT">About</a>
          <a href="#blog" data-curtain="BLOG">Blog</a>
          <a href="#contact" data-curtain="CONTACT">Contact</a>
          <a className="cta" href="#free-trial" data-curtain="TRY FREE">Free Trial</a>
        </nav>
      </header>

      <Hero />
      <TrustBar />
      <Workflow />
      <Marquee />
      <Services />
      <BulkBanner />
      <Difference />
      <FooterCTA />

      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
