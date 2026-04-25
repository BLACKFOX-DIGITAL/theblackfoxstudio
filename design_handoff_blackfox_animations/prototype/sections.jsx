// Sections that match the original Blackfox site layout
const { useRef, useState, useEffect } = React;

// ---------- Before/After slider ----------
function BeforeAfter({ before, after }) {
  const [pct, setPct] = useState(50);
  const ref = useRef(null);
  const drag = useRef(false);

  const setFromX = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPct(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const move = (e) => { if (drag.current) setFromX(e.clientX); };
    const up = () => { drag.current = false; };
    window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, []);

  return (
    <div
      className="ba"
      ref={ref}
      style={{ "--reveal": pct + "%" }}
      onMouseDown={(e) => { drag.current = true; setFromX(e.clientX); }}
      onMouseMove={(e) => { if (!drag.current) setFromX(e.clientX); }}
      data-cursor="drag"
    >
      <img className="before" src={before} alt="before" />
      <img className="after" src={after} alt="after" />
      <div className="ba__divider" />
      <div className="ba__handle">⇔</div>
      <div className="ba__labels"><span>Before</span><span>After</span></div>
    </div>
  );
}

// ---------- Trust bar ----------
function TrustBar() {
  const items = [
    { big: "TRUSTED BY 5000+", sm: "Global Brands" },
    { big: "24-HOUR", sm: "Turnaround" },
    { big: "ESTABLISHED 2016", sm: "9 Years Experience" },
    { big: "99% SATISFACTION", sm: "Rating" },
    { big: "100+ EXPERTS", sm: "In-House Team" },
  ];
  return (
    <div className="trust">
      <div className="trust__inner">
        {items.map((it, i) => (
          <React.Fragment key={i}>
            <div className="trust__item">
              <span className="star">★</span>
              <div>
                <div className="big">{it.big}</div>
                <div className="sm">{it.sm}</div>
              </div>
            </div>
            {i < items.length - 1 && <div className="trust__sep" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ---------- Workflow ----------
function Workflow() {
  const steps = [
    { n: 1, ic: "📤", t: "Upload Files", d: "Send files through our secure portal or FTP." },
    { n: 2, ic: "📋", t: "Share Requirements", d: "Tell us your specs, reference images, and style." },
    { n: 3, ic: "✂️", t: "We Edit", d: "Expert artists craft each image by hand." },
    { n: 4, ic: "✓", t: "Quality Check", d: "Two-stage QA guarantees pixel-perfect delivery." },
    { n: 5, ic: "🚀", t: "You Receive", d: "Final files delivered within 24 hours." },
  ];
  return (
    <section className="section section--gray" data-section>
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">● How it works</div>
          <h2 className="section__title">Our Simple Workflow</h2>
          <p className="section__desc">From upload to delivery — a proven five-step process that gets you market-ready images in under 24 hours.</p>
        </div>
        <div className="workflow">
          {steps.map(s => (
            <div className="workflow__step" key={s.n} data-cursor="step">
              <div className="workflow__num">{s.n}</div>
              <div className="workflow__icon">{s.ic}</div>
              <div className="workflow__title">{s.t}</div>
              <div className="workflow__desc">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Services (before/after cards) ----------
const SERVICES = [
  { title: "E-Commerce Photo Editing", desc: "Clean backgrounds, crisp shadows, consistent color — ready for Amazon, Shopify & DTC.", before: "public/ECommerce.jpg", after: "public/ECommerce-Done.jpg", from: "$0.39", tag: "BEST SELLER" },
  { title: "Ghost Mannequin", desc: "Hollow-man 3D effect that gives apparel true dimension without a live model.", before: "public/Ghost-Mannequin-2-Raw.jpg", after: "public/Ghost-Mannequin-2-Done.jpg", from: "$1.20", tag: "APPAREL" },
  { title: "Jewelry Retouching", desc: "High-end sparkle enhancement, stone clarity, and flawless metal detailing.", before: "public/Jewlery-Retouch-5.jpg", after: "public/Jewlery-Retouch-5-Done.jpg", from: "$2.50", tag: "LUXURY" },
  { title: "Beauty & Skin Retouching", desc: "Editorial-grade skin, frequency separation, dodge & burn by hand.", before: "public/Beauty-Retouch-Service-Page.jpg", after: "public/Beauty-Retouch-Service-Page-Done.jpg", from: "$3.00", tag: "EDITORIAL" },
  { title: "Clipping Path", desc: "Hand-drawn pen-tool paths with pixel-precise edges — no AI artifacts.", before: "public/ECommerce.jpg", after: "public/ECommerce-Done.jpg", from: "$0.29", tag: "FOUNDATION" },
  { title: "Color Correction", desc: "True-to-life color, white balance, and brand-consistent palettes across catalogs.", before: "public/Jewlery-Retouch-5.jpg", after: "public/Jewlery-Retouch-5-Done.jpg", from: "$0.59", tag: "ESSENTIAL" },
];

function Services() {
  return (
    <section className="section" data-section>
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">● Our services</div>
          <h2 className="section__title">What We Do Best</h2>
          <p className="section__desc">Drag the slider on any card to see the transformation. Every image is edited by hand by our in-house team.</p>
        </div>
        <div className="services">
          {SERVICES.map((s, i) => (
            <article className="service-card" key={i} data-cursor="open">
              <BeforeAfter before={s.before} after={s.after} />
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__foot">
                  <span>From {s.from}/image</span>
                  <a href="#">Learn more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Bulk banner ----------
function BulkBanner() {
  return (
    <section className="bulk-banner">
      <div className="bulk-banner__skew" />
      <div className="bulk-banner__inner">
        <div>
          <h3>Need Bulk Editing for 1,000+ Images?</h3>
          <p>Enterprise pricing, dedicated project manager, SLA-backed turnaround.</p>
        </div>
        <a className="btn" href="#" data-cursor="contact">Get a Bulk Quote →</a>
      </div>
    </section>
  );
}

// ---------- Difference ----------
function Difference() {
  const cards = [
    { ic: "⚡", t: "24-Hour Turnaround", d: "Most projects delivered within 24 hours — expedited options available." },
    { ic: "🎨", t: "Handcrafted Quality", d: "Every image edited by experienced artists — no AI shortcuts." },
    { ic: "🔒", t: "Secure File Handling", d: "NDA-protected, encrypted transfer, and private project portals." },
    { ic: "♾️", t: "Unlimited Revisions", d: "We tweak until it's perfect — no extra fees, no questions asked." },
  ];
  return (
    <section className="section section--gray" data-section>
      <div className="section__inner diff-grid">
        <div>
          <div className="section__eyebrow">● The difference</div>
          <h2 className="section__title" style={{ textAlign: "left" }}>Why Brands Choose Blackfox</h2>
          <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.6, marginTop: 18 }}>
            We're not a faceless edit farm. We're a team of 100+ retouchers, stylists, and color artists working out of Dhaka — obsessed with craft, speed, and the quiet details that separate a good image from one that sells.
          </p>
          <a className="btn btn-primary" href="#" data-cursor="meet" style={{ marginTop: 32 }}>Meet the Team →</a>
        </div>
        <div className="diff-cards">
          {cards.map((c, i) => (
            <div className="diff-card" key={i} data-cursor="learn">
              <div className="ic">{c.ic}</div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Footer CTA with magnetic button ----------
function FooterCTA() {
  const btnRef = useRef(null);
  useEffect(() => {
    const el = btnRef.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2);
      const dy = e.clientY - (r.top + r.height/2);
      const dist = Math.hypot(dx, dy);
      if (dist < 140) {
        const pull = 1 - dist / 140;
        el.style.transform = `translate(${dx * pull * 0.35}px, ${dy * pull * 0.35}px) scale(${1 + pull * 0.08})`;
      } else {
        el.style.transform = "translate(0,0)";
      }
    };
    const leave = () => { el.style.transform = "translate(0,0)"; };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <section className="footer-cta">
      <h2>Ready to Transform<br/>Your Images?</h2>
      <p>Try us free on 2 images. No credit card, no commitment — just 24 hours until you see what Blackfox can do.</p>
      <div className="footer-cta__btns">
        <a className="btn btn-primary magnet" href="#" ref={btnRef} data-cursor="start" style={{ position: "relative" }}>Start Your Free Trial →</a>
        <a className="btn btn-ghost" href="#" data-cursor="portfolio">Browse Portfolio</a>
      </div>
    </section>
  );
}

// ---------- Marquee strip ----------
function Marquee() {
  const items = ["AMAZON", "SHOPIFY", "ZARA", "H&M", "ASOS", "FARFETCH", "NET-A-PORTER", "MYTHERESA", "REVOLVE", "TIFFANY", "CARTIER", "BULGARI"];
  const line = items.concat(items).concat(items);
  return (
    <div className="accent-marquee">
      <div className="accent-marquee__track">
        {line.map((x, i) => (<React.Fragment key={i}><span>{x}</span><span className="dot">◆</span></React.Fragment>))}
      </div>
    </div>
  );
}

window.TrustBar = TrustBar;
window.Workflow = Workflow;
window.Services = Services;
window.BulkBanner = BulkBanner;
window.Difference = Difference;
window.FooterCTA = FooterCTA;
window.Marquee = Marquee;
