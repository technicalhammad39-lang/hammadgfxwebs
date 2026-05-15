# Scaling Roadmap

This roadmap is optimized for this specific codebase (single-page portfolio, static data, heavy UI composition in one file).

## Phase 0: Stabilize foundation (1-3 days)

Goal: remove current breakages before adding features.

1. Fix broken links and navigation
   - Correct footer social link construction.
   - Add section ids for anchor navigation or replace with route navigation.
   - Resolve portfolio `href` targets.
2. Fix obvious UI implementation defects
   - Remove stray semicolon next to analytics component.
   - Correct `w-fll` and other typo classes.
   - Correct invalid `lg:h-[700]` class value.
3. Update metadata and branding
   - Replace default title/description.
   - Add Open Graph/Twitter metadata.

## Phase 1: Restructure for maintainability (3-7 days)

Goal: make future feature work low-risk.

1. Split monolithic `page.tsx`
   - Create section components under `src/components/sections/`:
     - `HeroSection.tsx`
     - `ServicesSection.tsx`
     - `ExperienceSection.tsx`
     - `PortfolioSection.tsx`
     - `TestimonialsSection.tsx`
     - `ContactSection.tsx`
     - `BlogSection.tsx`
2. Decompose data module
   - Split `src/data/data.ts` into domain files.
3. Remove unnecessary `ClientOnly` wrappers
   - Keep only where hydration mismatch is proven.
4. Establish constants/tokens
   - Move hardcoded color hex values into a shared token layer.

## Phase 2: Prepare for content growth (1-2 weeks)

Goal: support real content updates and new pages without code churn.

1. Create actual project detail routes
   - Example: `src/app/projects/[slug]/page.tsx`
2. Introduce typed content schema validation
   - Validate portfolio/blog/review structures at build time.
3. Add CMS or structured content files
   - Start with local JSON/MDX + schema, then migrate to headless CMS if needed.
4. Improve asset governance
   - Rename SVG files to slug format (`hero-frame.svg`, `service-card-bg.svg`) and remove unused assets.

## Phase 3: Performance and reliability hardening (ongoing)

Goal: scale traffic and iteration speed.

1. Performance controls
   - Add `next/image` `sizes` attributes for all `fill` images.
   - Measure LCP/CLS with Vercel Analytics and Lighthouse CI.
2. Quality gates
   - Add formatting and lint checks in CI.
   - Add smoke E2E tests for nav and primary CTA flows.
3. Release safety
   - Add preview deployment checks and basic visual regression snapshots.

## Suggested target structure

```text
src/
  app/
    layout.tsx
    page.tsx
    projects/
      [slug]/
        page.tsx
  components/
    sections/
      HeroSection.tsx
      ServicesSection.tsx
      ExperienceSection.tsx
      PortfolioSection.tsx
      TestimonialsSection.tsx
      ContactSection.tsx
      BlogSection.tsx
    ui/
      ...
  data/
    experience.ts
    portfolio.ts
    reviews.ts
    blog.ts
    skills.ts
  lib/
    content-schema.ts
```

## Definition of done for "ready to scale"

- All links resolve to valid destinations.
- Navigation works on both desktop and mobile.
- Page sections are componentized (no monolithic `page.tsx`).
- Data model is split and schema-validated.
- CI runs lint, typecheck, and at least one E2E smoke suite.
- Real metadata and share cards are in place.

