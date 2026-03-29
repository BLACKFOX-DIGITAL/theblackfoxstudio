# Blackfox Digital - Static Frontend

Professional image post-production studio website. This version is a **pure frontend demonstration**, meaning it runs entirely in the browser using static mock data and has no database or server-side dependencies.

## 🚀 Key Features

- **Static Architecture**: No database (PostgreSQL/Prisma) required. All content is served from `lib/mock-data.js`.
- **High-Fidelity UI**: Premium dark/light themes with Framer Motion animations and responsive Tailwind CSS layouts.
- **Dynamic Services**: Fully functional `/services/[slug]` routing that consumes static data.
- **Mock Interactions**: All forms (Free Trial, Contact, Order) simulate real-world API delays and provide feedback via `sonner` toasts.
- **Portfolio Comparison**: Interactive before/after image sliders across the Gallery and Portfolio pages.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & Remix Icon
- **State/Form**: React Hook Form (client-sided)

## 📁 Project Structure

- `app/(site)`: Website routes and page layouts.
- `components/`: Reusable UI components.
- `lib/mock-data.js`: Centralized store for all site content (Services, Portfolio, FAQ, etc.).
- `public/`: Optimized image assets.

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

Visit `http://localhost:3000` to see the site.

---
*Note: This project was refactored from a full-stack Prisma-based application to a static-exportable frontend for demonstration and performance purposes.*
