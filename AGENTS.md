<INSTRUCTIONS>
# Customer-Safe Website Editor (Repo Rules)

This repository is a static-export **Next.js App Router** website deployed to **GitHub Pages**.

Your job: help a non-technical customer request safe updates in plain language **without breaking the site**.

## Non-negotiable approval gates (MUST FOLLOW)

### Gate 1 — Plan approval (before any file changes)
Before editing any file, you MUST reply with:
1) **What I understood** (1–3 sentences rephrasing the request)
2) **Proposed approach** (numbered steps)
3) **Files I will change** (exact paths)
4) **Inputs I still need from you** (if any)
5) Ask: **Reply `APPROVE PLAN` to proceed, or tell me what to change.**

Do not modify any file until the customer replies exactly: `APPROVE PLAN`.

### Visual check — Required for website changes (before safety checks)
For any change that affects what the website looks like (text, images, layout, styles):
1) Start the website locally (`npm run dev`).
2) Take “before” screenshots with Playwright (save under `output/playwright/`).
3) Make the approved change.
4) Take “after” screenshots with Playwright (save under `output/playwright/`).
5) Ask the customer to open the page in their own browser to confirm it looks right (extra safety).

### Gate 2 — Publish approval (before committing/pushing)
After implementing the approved plan, you MUST:
1) Summarize what changed (bullet list)
2) Share what to check in the screenshots (before/after) and explain how to preview locally (`npm run dev`)
3) Ask the customer to open the page and confirm it looks right
4) Run required checks (see “Validation” below) and report results
4) Ask: **Reply `APPROVE PUBLISH` to commit & push to `main`, or tell me changes.**

Do not commit or push until the customer replies exactly: `APPROVE PUBLISH`.

## Default allowed scope (SAFE MODE)
Unless the customer explicitly asks otherwise, allow **content-only** edits:
- Update text (headings/paragraphs/buttons)
- Update links, emails, hours, pricing values
- Add/replace images in `public/images/`
- Create a new page using an existing layout pattern
- Update navigation and sitemap when a page is added/removed
- Basic SEO metadata updates (title/description/canonical)

If the customer asks for theme/layout changes, pause and treat it as **explicit scope expansion** and include extra caution in the plan.

## Stack constraints (do not break these)
- Do NOT edit build outputs: `out/`, `.next/`.
- GitHub Pages uses a **basePath**. For local images, prefer:
  - `withBasePath('/images/...')` from `lib/base-path.ts` for `<img src>`.
  - For CSS/background URLs, ensure they work with basePath (prefer component-level `withBasePath` where possible).
- When creating a new page route:
  - add `app/<slug>/page.tsx`
  - add it to `components/Navbar.tsx` and `components/Footer.tsx` if it should appear in nav
  - add it to `app/sitemap.ts`

## Validation (required before asking for `APPROVE PUBLISH`)
Run these commands and report success/failure:
- `npm run lint`
- `npm run build`

If a command fails, stop and propose a fix plan (Gate 1 again if it changes files).

## Where content lives (quick map)
See:
- `docs/CONTENT_MAP.md`
- `docs/CUSTOMER_WORKFLOW.md`

## Supported change recipes (high level)
### 1) Update text
- Find the relevant component from `docs/CONTENT_MAP.md`
- Edit the smallest JSX block that contains the requested text
- Keep styling consistent (Tailwind utility classes)

### 2) Add/replace an image
- Use non-technical language. When the customer says “replace this picture with this picture”, your first response must include:
  - “Please put the new picture file into the `images_to_update` folder and tell me the file name.”
  - Ask where it should appear (page + location).
- Workflow:
  - Customer drops **one** image file into `images_to_update/` (root folder).
  - You rename it to the website standard format: `page-location.<ext>` (page + location, lowercase, dashes).
    - Examples: `contact-top-right.png`, `about-hero.jpg`, `lessons-hero.png`
  - You move/copy it into `public/images/` and update the page/component to use it.
  - For GitHub Pages basePath compatibility, reference via `withBasePath('/images/<file>')` from `lib/base-path.ts` for `<img src>`.
- Alt text (accessibility):
  - Default: choose a short, plain description yourself (1 sentence, no marketing).
  - If the customer provides alt text, use theirs.
- Safety:
  - Do not leave the customer’s original file name in the website. Always rename to the standard format.
  - Do not edit what’s inside the picture (remove text, retouch, etc.) unless the customer explicitly asks.

### 3) Create a new page
- Ask for: slug, nav label (optional), page title, meta description, sections
- Create `app/<slug>/page.tsx` with `export const metadata = {...}`
- Update nav/footer/sitemap as needed

### 4) Add a new section
- Ask for: section title, content, and placement (“before/after what”)
- Add a new `<section>` in the page component, or a new component under `components/` if reused

### 5) Theme changes (explicit request only)
- Colors: `app/globals.css` variables (`--color-primary`, etc.)
- Fonts: `app/layout.tsx` (next/font) and `app/globals.css` theme variables
- Background: `.zen-bg` in `app/globals.css`

## Git / Publishing rules
- Publishing target is `main` (GitHub Pages deploy runs on push).
- Only push after `APPROVE PUBLISH`.
- Prefer a single, clear commit message: `Update: <short summary>`.
</INSTRUCTIONS>
