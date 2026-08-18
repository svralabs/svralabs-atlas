# ATLAS — Spaces Designed to Outlast Trend

A React + Vite + Tailwind + Framer Motion portfolio website for ATLAS architecture studio.

## Overview

This is a single-page portfolio website showcasing ATLAS architecture studio's work across residential, civic, and commercial architecture. Built from Google Stitch design exports.

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Styling with custom design tokens
- **Framer Motion** - Animations and scroll-triggered effects
- **React Router DOM v6** - Client-side routing

## Design System

The design system is extracted from the original Stitch export:
- **Fonts**: Cormorant (display) + Inter (body)
- **Colors**: Charcoal background (#141412), warm off-white (#EDEAE3), brass/gold accent (#C9A227)
- **Glass morphism**: Semi-transparent cards with backdrop blur
- **Border radius**: Custom scale up to 3.5rem

## Project Structure

```
src/
├── main.jsx              # Entry point with BrowserRouter
├── App.jsx               # Routes
├── index.css             # Tailwind + custom styles + design tokens
├── data/
│   └── site.js           # Brand, nav links, footer links
├── lib/
│   └── motion.jsx        # Framer Motion variants & helpers
├── components/
│   ├── Navbar.jsx        # Navigation with active link highlighting
│   ├── Hero.jsx          # Hero section with background image
│   ├── FeaturedProjects.jsx
│   ├── Philosophy.jsx
│   └── Services.jsx
└── pages/
    └── Home.jsx          # Composes all sections
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts Vite dev server at http://localhost:5173

### Build

```bash
npm run build
```

Production build outputs to `dist/`

### Preview Production Build

```bash
npm run preview
```

## Deployment

Configured for Cloudflare Pages via `deploy.json`:

```json
{
  "target": "cloudflare",
  "project_name": "svralabs-atlas",
  "domain": "atlas.app.svralabs.com",
  "output_dir": "dist",
  "framework": "vite"
}
```

Deploy to Cloudflare Pages by connecting the GitHub repository.

## Features

- Responsive design (mobile, tablet, desktop)
- Scroll-triggered animations with Framer Motion
- Glass morphism UI with custom Tailwind config
- Active navigation highlighting
- Smooth hover/tap interactions
- Reduced motion support
- SEO-friendly semantic HTML

## Screens

1. **Hero** - Full-screen hero with background image, navigation, stats card, latest work widget
2. **Featured Projects** - Project grid with hover effects
3. **Philosophy** - Split layout with image and studio philosophy
4. **Services** - Three-column service cards (Residential, Commercial, Civic)

## License

Proprietary - All rights reserved by SVRALABS. See [LICENSE](LICENSE) for details.