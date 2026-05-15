# File Reference

## Repository root

- `.gitignore`
  - Standard Node/Next ignore set.
- `package.json`
  - Defines scripts: `dev`, `build`, `start`, `lint`.
  - Current Next pinned to `15.3.3`.
- `package-lock.json`
  - Lockfile for npm dependency graph.
- `next.config.ts`
  - Minimal config, no custom behavior enabled.
- `tsconfig.json`
  - `strict: true`, path alias `@/* -> ./src/*`, no emit.
- `eslint.config.mjs`
  - Extends `next/core-web-vitals` + `next/typescript`.
- `postcss.config.mjs`
  - Loads Tailwind plugin.
- `README.md`
  - Marketing-style overview; partially stale vs actual repo state.
- `next-env.d.ts`
  - Next.js generated type declarations.

## App directory (`src/app`)

- `layout.tsx`
  - Loads Geist fonts and global stylesheet.
  - Exports metadata (currently default Create Next App values).
  - Mounts global `Footer`.
  - Mounts `Analytics` with debug enabled.
- `page.tsx`
  - Single-page portfolio implementation.
  - Contains all major section layout and composition logic.
  - Imports data arrays from `src/data/data.ts`.
- `globals.css`
  - Tailwind import, marquee animation, Swiper bullets, scrollbar styles.
- `favicon.ico`
  - Site icon.

## Components (`src/components`)

- `Navbar.tsx`
  - Client-side navigation UI with desktop and mobile variants.
  - State controls highlighted menu item and mobile menu open state.
  - Does not navigate routes; purely visual selection.
- `Footer.tsx`
  - Global footer with CTA, social links, nav links, contact details, email input.
  - Uses `ClientOnly` around button/input areas.
  - Contains link-construction issue for social URLs (see quality audit).

## UI Components (`src/components/ui`)

- `ArrowButton.tsx`
  - Reusable circular arrow icon wrapper with rotation and size props.
- `Blog.tsx`
  - Blog card with hero image, CTA button, author/date, and title.
- `ClientOnly.tsx`
  - Renders fallback until mounted in browser; prevents SSR output for wrapped children.
- `CustomeText.tsx`
  - Minimal text wrapper for style reuse.
- `DualButtons.tsx`
  - Hero overlay toggle with hover-based active state.
- `GenericSlider.tsx`
  - Swiper wrapper with responsive breakpoints and card-type switch rendering.
  - Includes SSR placeholder mode before client hydration.
- `OrangeButton.tsx`
  - Styled CTA button primitive.
- `PortfolioCard.tsx`
  - Portfolio image card with overlay gradient and hover reveal.
- `ReviewCard.tsx`
  - Testimonial card with star rating visuals.
- `ServicesCard.tsx`
  - Service tile with layered background visuals.

## Data module (`src/data`)

- `data.ts`
  - Declares all TypeScript interfaces and static content arrays:
    - `experiences`
    - `buttons`
    - `iconAndText`
    - `skills`
    - `blogs`
    - `portfolioData`
    - `reviews`
    - `cardData`

## Public assets (`public`)

Used by current UI:

- `Frame 68.svg`
- `Frame 77.svg`
- `Property 1=Default.svg`
- `Property 1=Variant2.svg`
- `girl.svg`
- `sms.svg`
- `Frame 60.svg`
- `Frame 26.svg`
- `Rectangle 6.svg`
- `Rectangle 6 (1).svg`
- `Rectangle 7.svg`

Likely unused (no source references found during audit):

- `down right.svg`
- `filled.svg`
- `file.svg`
- `Frame 325.svg`
- `globe.svg`
- `next.svg`
- `Star 4.svg`
- `vercel.svg`
- `window.svg`

Note: filenames with spaces and symbols (for example `Property 1=Variant2.svg`) are valid but add long-term maintenance friction when assets scale.
