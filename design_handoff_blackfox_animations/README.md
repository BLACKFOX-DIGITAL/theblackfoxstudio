# Handoff: Blackfox Animations — Wow Layer

## Overview
A package of motion / micro-interaction upgrades to layer **on top of** the existing theblackfoxstudio design. No layout changes. Seven signature moments that together give the site a distinctive, premium, "craft studio" feel without breaking anything.

**Target repo:** `BLACKFOX-DIGITAL/theblackfoxstudio` (Next.js 14 App Router, Tailwind, Framer Motion already installed)

## About the Design Files
The files in this bundle are **design references created in HTML/React (inline Babel)** — working prototypes that show the intended look and behavior. They are NOT production code to paste directly into the Next.js app.

Your job: **recreate each animation in the existing Next.js codebase** using its established patterns — Framer Motion for transitions, Tailwind for styling, the existing `components/` structure. The HTML prototype is the spec; the repo's conventions are the implementation.

## Fidelity
**High-fidelity.** Exact brand colors, timings, and easings are used and should be matched 1:1.

---

## The Seven Wow Moments

Each is self-contained. You can ship them one at a time.

### 1. Intro Loader — "Cutting Path"
**What:** Full-screen dark intro on first visit. A hero image is progressively revealed left-to-right while an animated pen-tool path traces anchor points around the subject. Counter ticks 000 → 100. Whole loader slides up off-screen when done.
**Where it lives:** Wraps the whole site. Mount once in `app/(site)/layout.jsx` as a client component. Use `sessionStorage` so it only plays once per session.
**Timing:** 2.2s animation + 220ms pause + 900ms exit slide-up. Easing: `cubic-bezier(0.7, 0, 0.3, 1)` on exit.
**Files to read:** `intro.jsx` in this bundle.
**Framer Motion port:**
```jsx
// components/IntroLoader.jsx - client component
"use client";
import { motion, AnimatePresence } from "framer-motion";
// Use motion.div for the exit transform, useAnimationFrame for the counter
```
**Key values:**
- Background: `#011111`
- Accent: `#EE3A39`
- Anchor points (% of image): `[{x:22,y:8},{x:68,y:6},{x:82,y:24},{x:86,y:52},{x:78,y:78},{x:58,y:92},{x:28,y:90},{x:14,y:70},{x:18,y:36}]`
- Image: `/home_slider_woman.png` (already in `public/`)

---

### 2. Pen-Tool Cursor
**What:** Replaces the OS cursor on desktop. A small rotated red square leaves a fading red trail with anchor-dot squares every 6 points. On `[data-cursor]` elements it morphs into a 56px red circle and shows a tiny monospace label.
**Where it lives:** Mount once in root layout as a client component. Hide on touch devices (`matchMedia('(pointer: fine)')`).
**Implementation notes:**
- Trail = array of `{x, y, t}` pushed on `mousemove`, filtered to `now - t < 650ms`.
- Rendered on a full-viewport `<canvas>` (NOT the DOM — canvas is ~10× cheaper).
- Add `cursor: none;` to `body` when enabled.
- Annotate CTAs, nav links, service cards with `data-cursor="label"` (e.g. `data-cursor="start"`, `data-cursor="drag"`).

**Files to read:** `cursor.jsx` in this bundle.

---

### 3. Curtain Page Transition
**What:** When the user clicks a nav link, a red curtain slides up from below, covers the screen, then slides up off-screen — revealing the new page. A huge word (the link destination, e.g. "PORTFOLIO") is centered on the curtain.
**Where it lives:** Next.js App Router has no native transition hook; use Framer Motion's `AnimatePresence` in a layout wrapper, or intercept nav `onClick`, play the animation, then `router.push()`.
**Timing:** 1.4s total — up 0→50%, hold 50→50%, up 50→100%. `cubic-bezier(0.7,0,0.3,1)`.
**Color:** `#EE3A39`, white text.
**Typography:** `Saira Condensed` (or your existing heading font), 900, clamp(48px, 11vw, 180px), uppercase, letter-spacing -0.05em.
**Files to read:** `curtain.jsx` in this bundle.

**Implementation approach:**
```jsx
// Intercept Link clicks
const handleClick = async (e, href, label) => {
  e.preventDefault();
  await triggerCurtain(label);
  router.push(href);
};
```

---

### 4. Kinetic Giant Word (Hero)
**What:** A huge faded background word (e.g. "RETOUCH", "COMMERCE", "EDITORIAL") floats behind the hero content, one per slide. Slides in from right on slide change.
**Where it lives:** Inside `components/Hero.jsx`, absolutely positioned behind the Swiper content.
**Typography:** 900, `clamp(60px, 11vw, 180px)`, uppercase, letter-spacing -0.05em, line-height 0.85.
**Color:** `rgba(1,17,17,0.05)` on light slides, `rgba(255,255,255,0.08)` on dark slides.
**Animation:** On slide change, animate `x: 8% → 0%` and `opacity: 0 → 1` over 1.4s.
**Per-slide words:** Map each Swiper slide to a word. e.g. home_slider_woman → "RETOUCH"; ecommerce hero → "COMMERCE"; fashion hero → "EDITORIAL".
**Files to read:** `hero.jsx` lines with `hero__kinetic`.

---

### 5. Split-Text Title Reveal
**What:** Hero `<h1>` reveals one word at a time, each word rising from below a clipping mask. Staggered 80ms per word, 900ms duration, `cubic-bezier(0.7,0,0.3,1)`.
**Where it lives:** Replace the current static h1 in `components/Hero.jsx` slide content.
**Framer Motion port:**
```jsx
<h1>{title.split(" ").map((w, i) => (
  <span key={i} className="inline-block overflow-hidden pr-[0.3em]">
    <motion.span
      className="inline-block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay: 0.25 + i*0.08, ease: [0.7,0,0.3,1] }}
    >{w}</motion.span>
  </span>
))}</h1>
```
**Also apply to:** H2s at the top of each section (Services, Workflow, Difference) — only on `whileInView`.

---

### 6. Magnetic CTA Button
**What:** Primary CTAs (`Start Free Trial`, `Get Quote`) pull toward the cursor when within 140px. Subtle scale-up too.
**Where it lives:** Wrap the primary CTA component.
**Formula:**
```js
const dist = Math.hypot(dx, dy);
if (dist < 140) {
  const pull = 1 - dist / 140;
  el.style.transform = `translate(${dx * pull * 0.35}px, ${dy * pull * 0.35}px) scale(${1 + pull * 0.08})`;
}
```
**Transition:** `transform 0.25s cubic-bezier(0.3, 0.9, 0.3, 1)`.
**Reset on mouseleave.** Listen on `window` (not the element) so it works at a distance.
**Files to read:** `sections.jsx` → `FooterCTA` component.

**Make it a reusable hook:** `useMagnetic(ref, { radius: 140, pull: 0.35, scale: 0.08 })`.

---

### 7. Draggable Before/After on Service Cards
**What:** Every service card in the grid gets a draggable vertical divider. Left = before, right = after. Red 3px divider with 40px round white handle (red border, "⇔" icon).
**Where it lives:** The repo already has `components/ui/BeforeAfterSliderClient.jsx`. Likely just needs visual-polish parity with the prototype:
- **Divider:** 3px wide, `#EE3A39`.
- **Handle:** 40px circle, white fill, 3px `#EE3A39` border, grid-centered chevron. Shadow `0 4px 12px rgba(0,0,0,0.15)`.
- **Labels:** `BEFORE` / `AFTER` pill at top corners — 10px JetBrains Mono, black-60% bg, white text.
- **Cursor:** `data-cursor="drag"` so the pen cursor shows "drag" label on hover.

---

## Design Tokens (verified against existing Tailwind config)

```
--brand: #EE3A39   (already in your tailwind.config.js)
--ink:   #011111
--gray:  #626262
--paper: #F8F8F8
--border:#f0f0f0

Fonts:
- Headings: Saira Condensed 800/900 (already imported)
- Body: Inter 400-900
- Mono: JetBrains Mono 400/600 (for cursor labels & intro counter)

Easings:
- Signature: cubic-bezier(0.7, 0, 0.3, 1)   — intro, curtain, split-text
- Elastic:   cubic-bezier(0.3, 0.9, 0.3, 1)  — magnetic button
```

---

## File Map (prototype → repo)

| Prototype file | Port to |
|---|---|
| `intro.jsx` | `components/animations/IntroLoader.jsx` (new) |
| `cursor.jsx` | `components/animations/PenCursor.jsx` (new) |
| `curtain.jsx` | `components/animations/PageCurtain.jsx` (new) |
| `hero.jsx` (kinetic word + split text) | Modify existing `components/Hero.jsx` |
| `sections.jsx` → magnetic CTA | `hooks/useMagnetic.js` (new) + apply to existing CTAs |
| `sections.jsx` → BeforeAfter | Polish existing `components/ui/BeforeAfterSliderClient.jsx` |
| `styles.css` → cursor/intro/curtain blocks | `app/globals.css` (append) |

Mount order in `app/(site)/layout.jsx`:
```jsx
<IntroLoader />     {/* above everything, session-gated */}
<PenCursor />       {/* above everything */}
<PageCurtain />     {/* above everything */}
<Header />
{children}
<Footer />
```

---

## Implementation Order (recommended)

1. **PenCursor** — drop in, immediate wow, zero risk.
2. **Split-text title reveal** — 20 minutes, immediately lifts the hero.
3. **Kinetic giant word** — another 20 minutes in the same file.
4. **Magnetic CTA hook** — 15 minutes, applies everywhere.
5. **BeforeAfter polish** — visual-only changes to existing component.
6. **Curtain page transition** — most involved; needs Next.js router integration.
7. **Intro loader** — last; add session-storage gate so it only fires once.

Ship 1–4 in an afternoon. 5–7 over the next day.

---

## Assets
All required images already exist in `public/` of your repo:
- `logo.png`, `home_slider_woman.png`
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- All service before/afters: `ECommerce.jpg`/`-Done.jpg`, `Ghost-Mannequin-2-Raw.jpg`/`-Done.jpg`, `Beauty-Retouch-Service-Page.jpg`/`-Done.jpg`, `Jewlery-Retouch-5.jpg`/`-Done.jpg`

No new assets required.

---

## Files in this bundle

- `README.md` — this document
- `prototype/index.html` — the live demo, open in a browser
- `prototype/styles.css` — all CSS, organized by animation block
- `prototype/intro.jsx` — intro loader React component
- `prototype/cursor.jsx` — pen-tool cursor React component
- `prototype/curtain.jsx` — page-transition curtain React component
- `prototype/hero.jsx` — hero slider with kinetic word + split-text
- `prototype/sections.jsx` — sections with magnetic button + before/after
- `prototype/app.jsx` — how components compose together
- `prototype/tweaks-panel.jsx` — tweak UI (not needed in production)
- `prototype/public/` — image assets used by the demo

Open `prototype/index.html` in a browser to see the finished behavior. Match to that.
