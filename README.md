# Ace Custom Renovations

This repository contains a Next.js 14 project for Ace Custom Renovations. It is configured for modern deployments such as Vercel, Netlify, or any Node.js hosting provider.

## Getting Started

```bash
# install dependencies
yarn install   # or npm install

# run development server
yarn dev
# or
npm run dev
```

## Build & Run

Production build commands are defined in `package.json`:

```bash
yarn build    # or npm run build
# then
yarn start    # or npm start
```

## Deployment

1. **Push to GitHub**
   - make sure all files are committed:
     ```bash
     git add .
     git commit -m "prepare for deployment"
     git push origin main
     ```
   - remote is already set to `https://github.com/Wissem7155hack/Ace-Custom-Renovations-.git`.

2. **Choose a platform**
   - **Vercel** (recommended for Next.js):
     - Sign in with GitHub and import the repository.
     - Set `NODE_ENV=production` (Vercel adds this automatically).
     - If you use any environment variables (e.g. API keys), add them under **Settings > Environment Variables**.
     - Deploy. Vercel will run `npm run build` and then `npm start`.
   - **Netlify**: configure `build command` to `npm run build` and `publish` to `.next`.
   - **Other hosts**: build locally and serve the `.next` folder with a Node.js server.

3. **GitHub Actions (optional)**
   - You can add a workflow to automatically build & deploy on push. Example:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: yarn install --frozen-lockfile
      - run: yarn build
      # add deployment step for your provider
```
```

## Preparation Checklist

- [x] `package.json` includes `dev`, `build`, and `start` scripts (already configured).
- [x] All source files committed; consider adding `.gitignore` entries if not present.
- [x] Environment variables stored in `.env.local` and not committed; production values set via hosting provider.
- [x] Optimize images using Next.js `next/image` (already in use).
- [x] TailwindCSS configured and compiled during build (existing setup is correct).

Once the repository is on GitHub and the build script works locally, the project is ready for deployment. Just connect it to a hosting platform of your choice and trigger a build!

### GitHub Pages (static export)

This app can also be hosted on GitHub Pages by exporting a fully static site:

1. Add `output: 'export'` to `next.config.mjs` (already done).
2. Run `npm run export` – the build will output static files under `.next/output/export` because `output: 'export'` is set in `next.config.mjs`.
3. Commit the exported files to the `gh-pages` branch or use the `gh-pages` npm package to push them. For example:

   ```bash
   npm install --save-dev gh-pages
   # script already added to package.json:
   #   "deploy:gh": "npm run export && gh-pages -d .next/output/export"
   
   npm run deploy:gh
   ```

   (alternatively, copy `.next/output/export` content into a separate `out/` directory before deploying.)

**Important:** because the site will be served at `https://wissem7155hack.github.io/Ace-Custom-Renovations-/`, the project is configured with `basePath` and `assetPrefix` in `next.config.mjs`. This ensures all links and assets use the correct subpath.

4. In your repository settings > Pages, set the source to `gh-pages` branch.

> Note: Dynamic features such as API routes, server-side rendering, or `next/image` optimization won’t work on GH Pages; only plain static markup and assets are supported. The existing pages are mostly static, so they should export fine.
