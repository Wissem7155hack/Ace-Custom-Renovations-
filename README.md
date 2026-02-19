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