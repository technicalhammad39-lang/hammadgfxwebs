# Architecture

## Stack and platform

- Framework: Next.js `15.3.3` (App Router)
- Language: TypeScript (`strict: true`)
- React: `19.x`
- Styling: Tailwind CSS `4.x` via `@tailwindcss/postcss`
- UI libraries:
  - `lucide-react` for icons
  - `swiper` for carousels
  - `@vercel/analytics` for telemetry

## Runtime model

- Routes:
  - `/` (home page, static)
  - `/_not-found` (framework default)
- Rendering:
  - `src/app/page.tsx` is a Server Component that composes many Client Components.
  - Several interactive sections are wrapped in `ClientOnly`, which defers rendering until client hydration.
- Layout:
  - `src/app/layout.tsx` injects fonts, global CSS, analytics, and footer.
  - Footer is global for all app routes because it is mounted in root layout.

## Build characteristics (from production build)

- Build command: `npm run build`
- Result: success
- Route sizes:
  - `/`: `38.4 kB` route JS, `143 kB` first load JS
  - shared JS: `101 kB`
- Output mode:
  - Static prerendered page (`Static`)

## Top-level page composition (`src/app/page.tsx`)

1. `Navbar`
2. Hero section
3. Services section (`GenericSlider` + `ServicesCard`)
4. Work experience timeline
5. Hire-me section
6. Portfolio section (`GenericSlider` + `PortfolioCard`)
7. Testimonials (`GenericSlider` + `ReviewCard`)
8. Contact call-to-action
9. Skills marquee
10. Blog section (`GenericSlider` + `Blog`)

## Component interaction model

- Data source:
  - All content data is centralized in `src/data/data.ts`.
- Presentation:
  - `GenericSlider` dispatches card rendering by `cardType` union:
    - `'hover'` -> `ServicesCard`
    - `'portfolio'` -> `PortfolioCard`
    - `'review'` -> `ReviewCard`
    - `'blog'` -> `Blog`
- Navigation state:
  - `Navbar` tracks local selected item state only (no route changes).
- Footer links:
  - Navigation links are fragment anchors (expected in-page ids).

## Client component surface

Files explicitly marked with `'use client'`:

- `src/components/Navbar.tsx`
- `src/components/ui/ArrowButton.tsx`
- `src/components/ui/ClientOnly.tsx`
- `src/components/ui/DualButtons.tsx`
- `src/components/ui/GenericSlider.tsx`
- `src/components/ui/OrangeButton.tsx`
- `src/components/ui/ReviewCard.tsx`

## Styling model

- Tailwind utility classes are the primary styling mechanism.
- Global custom CSS in `src/app/globals.css` handles:
  - skills marquee animation
  - Swiper pagination styles
  - custom scrollbar theme
- Layout uses many fixed pixel widths/heights (desktop-first in many sections), which is a key scaling constraint for responsive evolution.
