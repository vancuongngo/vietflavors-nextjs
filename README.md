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
| `npm run typecheck` | `tsc --noEmit`                                            |

> Leave `NEXT_PUBLIC_BASE_PATH` unset for local development (see [Base path](#base-path)).

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: lint, typecheck, build, publish to GitHub Pages
├── public/images/                 # Static assets (WebP menu photos, logos, hero/CTA images, social icons)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout: fonts, metadata, header + footer
│   │   ├── globals.css            # All styling (CSS variables + component classes)
│   │   ├── page.tsx               # Home
│   │   ├── menu/page.tsx          # Menu
│   │   ├── about/page.tsx         # About
│   │   ├── contact/page.tsx       # Contact
│   │   └── icon.svg               # Favicon
│   ├── components/
│   │   ├── Header.tsx             # Sticky header, mobile menu toggle (client component)
│   │   ├── NavLinks.tsx           # Nav links with active-page state (client component)
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx               # Inner-page hero banner
│   │   ├── MenuItemCard.tsx       # Dish row + two-column menu layout
│   │   ├── Cta.tsx                # Full-width image call-to-action band
│   │   ├── InfoBand.tsx           # Google Maps embed + opening hours / phone block
│   │   └── Social.tsx             # Social icon links
│   ├── data/
│   │   ├── site.ts                # Phone, address, hours, nav, social links
│   │   └── menu.ts                # All dishes: name, price (SEK), description, image
│   └── lib.ts                     # `asset()` helper that prefixes the base path
├── next.config.ts                 # Static export + base path config
└── eslint.config.mjs
```

### Design notes

- **Server Components by default.** Only `Header` and `NavLinks` are client components (mobile menu state and `usePathname`).
- **Content lives in `src/data`**, not in the JSX. To change a price, add a dish or update the phone number, edit `menu.ts` / `site.ts`. Dish photos go in `public/images/menu/<name>.webp` and are referenced by file name (without extension).
- **Design tokens** (`--c-accent: #38b6ff`, `--c-tint`, `--c-dark`, container width, fonts) are CSS variables at the top of `globals.css`.
- **Images** are pre-optimised WebP and served with `images.unoptimized` because the Next.js image optimiser needs a server and this is a static export.
- **Maps** use a keyless Google Maps `<iframe>` embed (`InfoBand.tsx`). Change the address in `site.ts` and the query in `MapEmbed` if the restaurant moves.
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
3. Open the **Actions** tab and wait for the *Deploy to GitHub Pages* run to finish.
4. The site is live at https://vancuongngo.github.io/vietflavors-nextjs/. The URL is also shown on the workflow run.

Every later push to `main` redeploys automatically.

### Base path

A GitHub Pages **project site** is served from a sub-path (`/<repo>/`), so Next.js needs a `basePath`. The workflow handles this:

| Scenario                                                 | What to do                                                                                                   |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Project site (`<user>.github.io/<repo>`)                 | Nothing. The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>` automatically.                                    |
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
