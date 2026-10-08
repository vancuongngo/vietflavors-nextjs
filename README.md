# Viet Flavors

Next.js (App Router, TypeScript) rebuild of the Vietflavors WordPress/Elementor site. Fully static (`output: "export"`), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck
npm run build      # static site in ./out
```

## Structure

- `src/app` – routes: `/`, `/menu`, `/about`, `/contact`
- `src/components` – header, footer, hero, menu list, etc.
- `src/data` – site info (`site.ts`) and menu content (`menu.ts`) – edit these to change content
- `public/images` – optimised assets

## Deploy (GitHub Pages)

1. Push to a GitHub repo on `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` lints, type-checks, builds and publishes. It sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` automatically (project site).
   For a custom domain or a `<user>.github.io` repo, set the repo variable `BASE_PATH` to `/` is **not** valid – instead edit the workflow to use an empty value.

The output is plain static files, so it also deploys unchanged to Vercel/Netlify/Cloudflare Pages (leave `NEXT_PUBLIC_BASE_PATH` unset).
