# Viet Flavors

Website for **Vietflavors**, a Vietnamese restaurant in Täby, Sweden. A fast, simple, fully static Next.js site: no database, no CMS, deployed to GitHub Pages.

- **Repo:** https://github.com/vancuongngo/vietflavors-nextjs
- **Live site:** https://vancuongngo.github.io/vietflavors-nextjs/
- **Pages:** Home (`/`), Menu (`/menu`), About (`/about`), Contact (`/contact`)
- **Language:** Swedish content (`<html lang="sv">`)
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, plain CSS, `next/font` (Poppins + Nunito Sans)
- **Output:** fully static export (`output: "export"`), so it can be hosted anywhere that serves files

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # dev server at http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Start the dev server                                      |
| `npm run build`     | Create the static site in `./out`                         |
| `npm start`         | Serve `./out` locally (via `npx serve`) to test the build |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)       |
| `npm run format`    | Prettier (`format:check` runs in CI)                      |
| `npm test`          | Vitest data-integrity tests                               |
| `npm run typecheck` | `tsc --noEmit`                                            |

> Leave `NEXT_PUBLIC_BASE_PATH` unset for local development (see [Base path](#base-path)).

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: lint, typecheck, format check, tests, build, publish
├── public/images/                 # WebP menu photos, logos, hero/CTA/OG images, social icons
├── src/
│   ├── app/                       # Routes only; pages stay thin and compose components
│   │   ├── layout.tsx             # Fonts, site-wide metadata (Open Graph), header + footer
│   │   ├── globals.css            # Design tokens, reset, base typography only
│   │   ├── page.tsx               # Home (+ Restaurant JSON-LD)
│   │   ├── menu/  about/  contact/
│   │   ├── sitemap.ts  robots.ts  # Generated sitemap.xml / robots.txt
│   │   └── icon.svg               # Favicon
│   ├── components/                # Each component has a colocated *.module.css
│   │   ├── ui/                    # Generic building blocks: Button, Container, Section,
│   │   │                          #   SectionHeading, Social
│   │   ├── layout/                # Header, Footer, NavLinks (client components where needed)
│   │   ├── menu/                  # MenuItem, MenuList (two columns), MenuCategory
│   │   └── sections/              # Page sections: HomeHero, PageHero, Features, MenuTeaser, Cta,
│   │                              #   InfoBand, ContactDetails, OpeningHours, PhoneBlock, MapEmbed
│   ├── data/
│   │   ├── site.ts                # Contact info, hours, address, order URL, nav, labels
│   │   └── menu.ts                # Menu sections and dishes (single source of truth)
│   └── lib/                       # asset() base-path helper, cx(), JSON-LD builder
├── tests/data.test.ts             # Data integrity tests (unique ids, photo exists for each dish, ...)
├── next.config.ts                 # Static export + base path
└── eslint.config.mjs, .prettierrc.json
```

### Conventions

- **Server Components by default.** Only `Header` and `NavLinks` are client components (mobile menu state, `usePathname`).
- **Content lives in `src/data`**, not in JSX. The home page's dish list is derived from the same `menu.ts` as the menu page, so a price is edited in one place.
- **Dish photos** are `public/images/menu/<no>-<id>.webp`. Adding a dish means adding an entry to `menu.ts` and the matching photo. `npm test` fails if a photo is missing.
- **Styling:** CSS Modules per component; only tokens (`--c-accent`, `--container`, fonts, ...) and the reset are global. Spacing between page sections comes from `<Section>`, not ad-hoc inline styles.
- **Internal links** use `next/link`; external ones (order page, Google Maps) go through `<Button external>`, which renders a plain `<a target="_blank" rel="noopener noreferrer">`.
- **Images** are pre-optimised WebP and served with `images.unoptimized` because the Next.js image optimiser needs a server.
- **SEO:** per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt` and `Restaurant` JSON-LD (address, hours, phone, menu URL).
- The social links in `site.ts` currently point to `#`. Replace them with the real profile URLs.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` runs on every push to `main` (or manually from the Actions tab). It installs dependencies, runs lint and typecheck, builds the static site, and publishes `./out` to GitHub Pages.

### One-time setup

1. **Push this project to `main`** of https://github.com/vancuongngo/vietflavors-nextjs:

   ```bash
   git remote add origin git@github.com:vancuongngo/vietflavors-nextjs.git
   git push -u origin main
   ```

2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for the _Deploy to GitHub Pages_ run to finish.
4. The site is live at https://vancuongngo.github.io/vietflavors-nextjs/. The URL is also shown on the workflow run.

Every later push to `main` redeploys automatically.

### Base path

A GitHub Pages **project site** is served from a sub-path (`/<repo>/`), so Next.js needs a `basePath`. The workflow handles this:

| Scenario                                                    | What to do                                                                                                     |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Project site (`<user>.github.io/<repo>`)                    | Nothing. The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>` automatically.                                      |
| Custom domain, or a `<user>.github.io` repo (served at `/`) | Add a repository variable **`ROOT_DEPLOY`** = `true` (Settings → Secrets and variables → Actions → Variables). |

For a custom domain, also set it under **Settings → Pages → Custom domain** and add the DNS records GitHub lists.

All asset URLs go through `asset()` in `src/lib.ts`, which prepends the base path, so images and CSS-referenced files keep working under the sub-path.

### Building and checking the deploy locally

To reproduce what GitHub will publish:

```bash
NEXT_PUBLIC_BASE_PATH=/vietflavors-nextjs npm run build
npx serve out      # note: assets are under /vietflavors-nextjs, so open that path
```

### Other hosts

`./out` is plain static HTML, CSS and JS. It also works unchanged on Vercel, Netlify, Cloudflare Pages or any static file host. Leave `NEXT_PUBLIC_BASE_PATH` unset there.

## Troubleshooting

- **Hydration warning in dev mentioning `bis_skin_checked`:** caused by a browser extension (e.g. Bitdefender TrafficLight) modifying the DOM before React loads. Test in a private window or disable the extension for `localhost`. It does not affect the code.
- **Broken images or CSS after deploying to a project site:** the base path was not applied. Check that the build step in the workflow ran with `NEXT_PUBLIC_BASE_PATH=/<repo>`, and that any new image paths use `asset()`.
- **404 on refresh of a sub-page:** the export uses `trailingSlash: true`, so `/menu/` resolves to `menu/index.html`. Make sure links use the Next.js `<Link>` component or end in a slash.
