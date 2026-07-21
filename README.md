# Whiskey Tortilla Foxtrot — Marketing Site

Marketing website for [SeenAt](https://github.com/WhiskeyTortillaFoxtrot/seen-at), built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Prerequisites

- **Node.js** v22.12.0 or higher
- **npm** (or pnpm/yarn)

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── screenshots/        # App screenshots from seen-at repo
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ScreenshotShowcase.astro
│   │   ├── FeatureCard.astro
│   │   ├── LeagueBadge.astro
│   │   └── ComingSoonButton.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Home
│   │   ├── app.astro       # SeenAt app page
│   │   ├── about.astro     # About Whiskey Tortilla Foxtrot
│   │   └── contact.astro   # Contact
│   └── styles/
│       └── global.css      # Theme variables, reset, utilities
├── .github/workflows/
│   ├── ci.yml              # Pull request build verification
│   └── deploy.yml          # GitHub Pages deployment
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Updating Screenshots

Screenshots are stored in `public/screenshots/`. To update them, replace the PNG files with new versions from the [seen-at](https://github.com/WhiskeyTortillaFoxtrot/seen-at) repository.

## Deployment

The site deploys automatically to `https://whiskeytortillafoxtrot.github.io/` via GitHub Actions when changes are merged to `main`.

To configure for your own GitHub Pages URL, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/',
});
```

## Customization

- **Colors**: Edit CSS custom properties in `src/styles/global.css` (look for `--accent`, `--bg`, etc.)
- **Logo**: Replace `public/favicon.svg` and add a logo image as needed
- **Copy**: Page content is in `src/pages/*.astro` — look for `<!-- TODO -->` comments

## License

Mozilla Public License 2.0 — see [LICENSE](LICENSE).
