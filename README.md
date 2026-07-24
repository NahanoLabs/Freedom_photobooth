# Freedom Photobooth 📸✨

> *Oh, Snap!* — A vintage modern sassy photobooth experience.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#FDF6ED` | Page background |
| `--color-yellow` | `#E8B84B` | Primary accent, CTAs |
| `--color-yellow-light` | `#F5D98C` | Highlights, glows |
| `--color-yellow-pale` | `#FFF4E0` | Subtle backgrounds |
| `--color-rose` | `#C98A8A` | Secondary accent |
| `--color-charcoal` | `#2C2C2C` | Text, dark sections |
| `--color-warm-gray` | `#8B8078` | Body text |
| `--color-white-warm` | `#FFFBFA` | Cards, surfaces |

### Typography
- **Headings:** Playfair Display (serif — vintage)
- **Body:** Inter (sans-serif — modern)

## 📁 Project Structure

```
src/
├── index.css          # Design system, CSS variables, global styles
├── App.jsx             # Root component
├── App.css             # Layout, scrollbar, selection styles
├── main.jsx            # Entry point
└── components/
    ├── Header.jsx/css  # Sticky nav with logo, links, CTA
    ├── Hero.jsx/css    # Hero with tagline, photo strip visual
    ├── About.jsx/css   # Brand story + stats
    ├── Features.jsx/css # 6 service cards with yellow/rose accent
    ├── Gallery.jsx/css  # 3-tier pricing packages
    ├── Contact.jsx/css  # Contact info + booking form
    └── Footer.jsx/css   # Dark footer with links + copyright
```

## ✨ Features

- **Vintage modern aesthetic** — Playfair serif + warm cream/yellow palette
- **Fully responsive** — Mobile-first with breakpoints at 640px, 768px, 1024px
- **Smooth scroll navigation** — Anchor-based section scrolling
- **Pricing tiers** — Classic / The Vibe / Premium
- **Contact form** — With event type selector
- **Atmospheric animations** — Floating blobs, hover effects, fade-in
- **Custom design system** — CSS custom properties throughout

## 🛠️ Stack

- **React 19** + **Vite 8**
- **Plain CSS** with custom properties (no framework)
- **Google Fonts** (Playfair Display + Inter)

---

*Built with ✨ and a vintage lens.*
