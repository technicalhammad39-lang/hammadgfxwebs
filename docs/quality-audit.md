# Quality Audit

Audit date: 2026-05-15

## Verification commands run

- `npm run lint`
  - Result: pass (no warnings/errors)
- `npm run build`
  - Result: pass
  - Generated routes: `/`, `/_not-found`
- `npm outdated`
  - Result: many packages behind latest majors/minors (details below)

## Findings (prioritized)

### High impact

1. Broken social URLs in footer
   - Evidence:
     - `src/components/Footer.tsx:11` stores URLs with `https://`
     - `src/components/Footer.tsx:64` prepends `https://` again (`href={`https://${item.url}`}`)
   - Impact:
     - Produces invalid URLs like `https://https://facebook.com`.
   - Fix direction:
     - Store bare domains and prepend once, or store full URLs and use directly.

2. Portfolio links point to non-existent pages
   - Evidence:
     - `src/data/data.ts:132`, `:138`, `:144`, `:150` use `/project-1` ... `/project-4`.
     - Build route list contains only `/` and `/_not-found`.
   - Impact:
     - User clicks lead to 404 pages.
   - Fix direction:
     - Create routes for each project or change links to valid destinations.

3. Footer in-page navigation anchors have no targets
   - Evidence:
     - `src/components/Footer.tsx:80` uses `href={`#${key.toLowerCase()}`}`.
     - `src/app/page.tsx` has no `id=` attributes for matching sections.
   - Impact:
     - Navigation items do not scroll to intended sections.
   - Fix direction:
     - Add section ids (`id="home"`, `id="about"`, etc.) or switch to route navigation.

### Medium impact

1. Default metadata still present
   - Evidence:
     - `src/app/layout.tsx:19` title is `Create Next App`.
     - `src/app/layout.tsx:20` description is default boilerplate.
   - Impact:
     - Weak SEO/share previews and incorrect branding.

2. Analytics debug mode enabled in layout
   - Evidence:
     - `src/app/layout.tsx:36` uses `<Analytics debug={true} />`.
   - Impact:
     - Debug noise in environments where debug should be off.

3. Stray semicolon rendered in layout tree
   - Evidence:
     - `src/app/layout.tsx:36` has `<Analytics debug={true} />;`
   - Impact:
     - Can render an extra text node (`;`) in DOM.

4. Tailwind class typo causes missing width
   - Evidence:
     - `src/app/page.tsx:433` uses `w-fll` (invalid class).
   - Impact:
     - Section width does not behave as intended.

5. Invalid arbitrary height value class
   - Evidence:
     - `src/app/page.tsx:18` uses `lg:h-[700]`.
   - Impact:
     - CSS class likely not emitted as intended (`700` has no explicit CSS unit).

6. Heavy `ClientOnly` usage for non-problematic elements
   - Evidence:
     - Multiple wrappers in `src/app/page.tsx` and `src/components/Footer.tsx`.
   - Impact:
     - Defers meaningful content to client hydration, reducing SSR value and potentially affecting SEO/perceived performance.

### Low impact / maintenance debt

1. README drift from actual repository
   - Evidence:
     - `README.md:53` references `tailwind.config.js` (file does not exist in root).
   - Impact:
     - Onboarding confusion.

2. Unused public assets
   - Evidence:
     - Several SVGs in `public/` are not referenced in `src/`.
   - Impact:
     - Asset clutter and harder maintenance.

3. Placeholder content remains in production UI text
   - Impact:
     - Lowers content credibility and brand quality.

## Dependency upgrade snapshot

From `npm outdated` on 2026-05-15:

- Core stack behind latest:
  - `next`: `15.3.3` -> latest `16.2.6`
  - `react`: `19.1.0` -> latest `19.2.6`
  - `react-dom`: `19.1.0` -> latest `19.2.6`
- Tooling behind latest:
  - `tailwindcss`: `4.1.10` -> latest `4.3.0`
  - `typescript`: `5.8.3` -> latest `6.0.3`
  - `eslint`: `9.29.0` -> latest `10.3.0`
- UI libs behind latest:
  - `swiper`: `11.2.8` -> latest `12.1.4`
  - `lucide-react`: `0.517.0` -> latest `1.16.0`

Recommendation: upgrade in staged batches (framework first, then UI libraries, then lint/types) with snapshot visual regression checks between batches.

