# 🚀 Nikhil Soni | 3D Portfolio

A jaw-dropping developer portfolio packed with interactive 3D animations, buttery smooth transitions, and a space-themed aesthetic. Features a fully interactive 3D keyboard where each keycap represents a skill.

🔗 **Live site:** [nikportfolio-psi.vercel.app](https://nikportfolio-psi.vercel.app)

---

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Analytics (optional)** — Umami analytics integration

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js, React, TypeScript |
| Styling | Tailwind CSS, Shadcn UI, Aceternity UI |
| Animation | GSAP, Framer Motion |
| 3D | Spline Runtime |
| Email | Resend |
| Misc | Lenis (smooth scroll), Zod, next-themes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended), npm, or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/niksoni28/3d-portfolio-main.git
cd 3d-portfolio-main
```

Install dependencies:

```bash
pnpm install
```

Set up environment variables:

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
| `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
| `UMAMI_DOMAIN` | No | Umami analytics script URL |
| `UMAMI_SITE_ID` | No | Umami website ID |

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see it live.

---

## 🎨 Customization

All personal info is centralized in `src/data/config.ts` — this is the single file that controls branding across the site.

Other files worth knowing about:

| File | What it controls |
|---|---|
| `src/data/projects.tsx` | Projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list (name, description, icon) and work experience |
| `public/assets/` | Images, OG image, and project screenshots |

---

## ⌨️ Updating the 3D Keyboard Skills

The 3D keyboard keycaps are baked into a Spline file. To update the skills displayed on the keyboard:

1. Import `public/assets/skills-keyboard.spline` into Spline
2. Unhide the keycap objects to edit
3. Update the logo images on each keycap to the desired skill icons
4. Rename each keycap object to match the skill's `name` field in `src/data/constants.ts` (e.g. `js`, `react`, `docker`)
5. Hide all keycap objects again
6. Export the scene and overwrite `public/assets/skills-keyboard.spline`

The `SkillNames` enum, `SKILLS` record in `constants.ts`, and the Spline keycap names must stay in sync for keyboard interactions to work correctly.

---

## 🔌 Realtime Features (Optional)

The portfolio supports optional realtime features powered by a separate backend API:

- 🖱️ **Live cursors** — See other visitors' cursors in realtime
- 👥 **Online presence** — Shows who's currently on the site
- 💬 **Chat** — Live chat between visitors

These features activate automatically when `NEXT_PUBLIC_WS_URL` is set. Without it, the portfolio works perfectly fine as a static site.

---

## 🚀 Deployment

This site is deployed on [Vercel](https://vercel.com).

1. Push code to a GitHub repository
2. Connect the repository to Vercel
3. Add environment variables in the Vercel dashboard (**Settings → Environment Variables**)
4. Vercel handles automatic deployments on every push to `main`

---

## 🙏 Credits

This portfolio is built on top of the open-source [3D Portfolio template](https://github.com/Naresh-Khatri/3d-portfolio) by [Naresh Khatri](https://github.com/Naresh-Khatri), licensed under MIT. Huge thanks for the original design and codebase.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
