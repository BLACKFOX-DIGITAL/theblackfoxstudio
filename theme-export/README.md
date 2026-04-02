# Theme Export: The BLACKFOX DIGITAL Design System

This folder contains the core styling and design tokens for the theme.

## 📦 Prerequisites

To use this theme in your project, ensure you have the following Tailwind CSS plugins installed:

```bash
npm install mini-svg-data-uri tailwindcss-animate @tailwindcss/typography
```

## 🚀 How to Apply

### 1. Tailwind Configuration
Copy the contents of `tailwind.config.js` into your project's `tailwind.config.js` file. This defines:
- **Brand Colors**: `brandPrimary` (#EE3A39) and standard gray scales.
- **Custom Plugins**: Logic for `bg-grid`, `bg-dot`, and automatic CSS variable generation.
- **Animations**: Standard accordion and animate transitions.

### 2. Global Styles
Import or copy the contents of `theme-styles.css` into your global CSS file (e.g., `globals.css`).
- Contains **CSS Variables** for light/dark mode.
- Includes **Brand Utilities** like `.brand-title`, `.btn-brand-primary`, and `.brand-gap`.
- Sets up **3D Perspective** utilities for flip cards.

### 3. Fonts (Optional)
The current project uses **Geist** and **Geist Mono** fonts. If you want to match the typography exactly, you can download these from [Vercel Fonts](https://vercel.com/font) or use Google Fonts equivalent (like Inter or Roboto).

## 🛠 Key Utilities

- `text-brandPrimary`: Uses the signature red.
- `bg-grid-white/[0.05]`: Generates a subtle grid background.
- `brand-title`: Perfect for landing page headers.
- `btn-brand-primary`: Use for high-conversion CTAs.
