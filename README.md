# ☕ My Cafe — Modern Restaurant Web App

A premium, fully responsive **single-page restaurant web application** built with React and Vite. Features smooth animations, an interactive menu modal with cart functionality, and a polished modern UI designed for real-world café businesses.

---

## ✨ Features

- 🎨 **Premium UI Design** — Dark/light section alternation with a curated warm color palette
- 🍔 **Interactive Menu Modal** — Browse by category, add items to cart, and manage orders
- 🎞️ **Smooth Animations** — Powered by [Motion](https://motion.dev/) for fluid transitions and scroll effects
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🧭 **Sticky Navbar** — With active section highlighting and menu trigger
- 🗺️ **Visit Us Section** — Location info with photo showcase and directions
- 📸 **Social / Follow Section** — Instagram-style feed integration
- ⚡ **Fast & Lightweight** — Vite-powered build with optimized assets

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vitejs.dev/) | Dev server & bundler |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Motion](https://motion.dev/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Google Fonts](https://fonts.google.com/) | Bebas Neue, Oswald, Plus Jakarta Sans |

---

## 📁 Project Structure

```
├── index.html              # App entry HTML
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
├── src/
│   ├── main.jsx            # React root mount
│   ├── App.jsx             # Root component & state
│   ├── index.css           # Global styles
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── CategoryShowcase.jsx # Menu category grid
│   │   ├── FeaturedMenu.jsx    # Highlighted dishes
│   │   ├── HowItsMade.jsx      # Ingredients story section
│   │   ├── AboutUsStory.jsx    # Brand story section
│   │   ├── CafeExperience.jsx  # Ambience & experience
│   │   ├── VisitUs.jsx         # Location & photos
│   │   ├── FollowUs.jsx        # Social media bar
│   │   ├── FinalCTA.jsx        # Call-to-action section
│   │   ├── MenuModal.jsx       # Full interactive menu & cart
│   │   └── Footer.jsx          # Site footer
│   └── data/               # Menu items & static data
└── assets/                 # Images & media
```

---

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or above)

**1. Install dependencies:**
```bash
npm install
```

**2. Run the development server:**
```bash
npm run dev
```

The app will be running at **http://localhost:3000**

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run clean` | Remove build artifacts |

---

## 📄 License

This project is intended as a portfolio/demo template. Feel free to adapt it for your own café or restaurant business.
