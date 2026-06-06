# SH4D0W Portfolio — Next.js 15

Premium portfolio for a Telegram Infrastructure & Backend Systems Engineer.

## Stack
- **Next.js 16** (App Router, static export)
- **TypeScript** — strict mode
- **Tailwind CSS** — utility classes + custom CSS animations
- **Geist** — font family (sans + mono)
- **Framer Motion** — (available, used for architecture diagram)

## Deploy to Vercel (2 steps)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init" && git remote add origin YOUR_REPO && git push -u origin main

# 2. Import at vercel.com → auto-detects Next.js → Deploy
```

No extra config needed. Vercel detects Next.js automatically.

## Local Dev

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Project Structure

```
app/
├── layout.tsx          # Root layout, metadata, OG tags, favicon
├── page.tsx            # Main page — intro + nav orchestration
├── globals.css         # Tailwind + custom animations
├── heroData.ts         # Hero artwork (embedded base64 — always loads)
├── components/
│   ├── BgLayers.tsx    # Grid, noise, radial glow, mouse glow
│   ├── Intro.tsx       # Cinematic boot sequence overlay
│   ├── Nav.tsx         # Fixed nav with active section tracking
│   ├── Reveal.tsx      # Intersection Observer scroll animations
│   └── SectionLabel.tsx
└── sections/
    ├── Hero.tsx        # Split layout: text left, artwork right + parallax
    ├── Build.tsx       # 6 service cards in premium grid
    ├── Cases.tsx       # 3 full case studies + 3 compact cards
    ├── Philosophy.tsx  # 6 infrastructure principles
    ├── Architecture.tsx # Animated pipeline diagram + code terminals
    ├── Stack.tsx       # 6 tech groups with gradient bars
    ├── Process.tsx     # 5-step horizontal process
    ├── Contact.tsx     # Links + availability card
    └── Footer.tsx

public/
├── hero-artwork.png    # Source artwork
└── favicon.svg         # Crimson lightning bolt favicon
```

## Key Design Decisions

- **Hero image embedded as base64** in `heroData.ts` — guarantees it loads on any Vercel/CDN setup without `next/image` domain config
- **CSS-only animations** for scan line, dot pulse, and reveals — no runtime overhead
- **Animated dashed arch lines** using `requestAnimationFrame` background-position trick
- **No external image dependencies** — fully self-contained
