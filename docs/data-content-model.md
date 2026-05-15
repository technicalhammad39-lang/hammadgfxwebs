# Data and Content Model

## Single source of content truth

All reusable content is currently hardcoded in `src/data/data.ts`.

## Type contracts

Interfaces in use:

- `Experience`
  - `company: string`
  - `duration: string`
  - `role: string`
  - `desc: string`
  - `dotColor: string`
- `IconAndText`
  - `icon: LucideIcon`
  - `name: string`
- `Blog`
  - `image: string`
  - `button: string`
  - `name: string`
  - `date: string`
  - `title: string`
- `PortfolioItem`
  - `image: string`
  - `title: string`
  - `href: string`
  - `desc: string`
- `Review`
  - `name: string`
  - `role: string`
  - `rating: number`
  - `text: string`
- `CardData`
  - `title: string`
  - `imageSrc: string`

## Current dataset sizes

- `experiences`: 3 items
- `buttons`: 5 items
- `iconAndText`: 3 items
- `skills`: 9 items
- `blogs`: 3 items
- `portfolioData`: 4 items
- `reviews`: 4 items
- `cardData`: 6 items

## Consumption map

- `experiences` -> Work Experience timeline in `page.tsx`
- `buttons` -> Portfolio filter-like tags in `page.tsx`
- `iconAndText` -> Contact quality indicators in `page.tsx`
- `skills` -> Scrolling marquee in `page.tsx`
- `blogs` -> `GenericSlider` with `cardType="blog"`
- `portfolioData` -> `GenericSlider` with `cardType="portfolio"`
- `reviews` -> `GenericSlider` with `cardType="review"`
- `cardData` -> `GenericSlider` with `cardType="hover"`

## Content quality observations

- Significant placeholder copy (`Lorem ipsum`) remains across major sections.
- Some values are repeated and not semantically unique (for example duplicated "Project Completed" metrics).
- Portfolio `href` paths target pages that do not exist yet (`/project-1` to `/project-4`).
- Footer contact details are placeholder values.

## Scaling guidance for content ownership

Short-term:

- Keep `data.ts` as canonical data file.
- Split it into domain files as content grows:
  - `src/data/experience.ts`
  - `src/data/portfolio.ts`
  - `src/data/reviews.ts`
  - `src/data/blog.ts`

Medium-term:

- Introduce schema validation (for example `zod`) so content errors fail fast at build time.
- Migrate content to a CMS or structured local content system (MDX/JSON with validation) once non-developers need edits.

Long-term:

- Add typed API/content layer for localization and A/B variants without hardcoded JSX changes.

