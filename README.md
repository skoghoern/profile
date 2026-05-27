# My profile
Welcome to the github repo of my profile.

### GitHub Pages (this repo)

Live site: [skoghoern.github.io/profile](https://skoghoern.github.io/profile/)

### 🎨 Switching Themes

This template comes with multiple built-in color palettes. To change the theme of your portfolio, open `src/config.ts` and update the `baseTheme` variable to one of the available options:

```typescript
export const SITE_CONFIG = {
  // Options: 'default', 'strategic', 'innovator', 'executive'
  baseTheme: "default",
};
```

_(The template will automatically handle the dark/light mode toggles for whichever base theme you choose!)_

### 📁 Directory Structure

```
├── public/              # Global static assets (placeholder.jpg, favicon)
├── src/
│   ├── assets/          # Project & Profile images (Supports automatic Astro optimization)
│   ├── components/      # Reusable Astro components
│   ├── data/            # JSON files for project data
│   ├── layouts/         # Layout templates with Meta tags
│   ├── pages/           # Site routes (index.astro)
│   └── styles/          # global css styles
│   └── config.ts        # Global site configuration
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # Typescript configuration
```

#### Useful commands and links for reference:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `git add .` `git commit -m "text"` `git push` | `git push` triggers automatic build via github actions                     |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Tailwind CSS: `npx astro add tailwind`

Inter font: `npm install @fontsource-variable/inter`

Space Grotesk font: `npm install @fontsource-variable/space-grotesk`

Astro-icon: `npx astro add astro-icon`

Material Desing Icons: `npm install @iconify-json/mdi`

https://docs.astro.build/en/guides/styling/#add-tailwind-4

https://www.astroicon.dev

https://icon-sets.iconify.design/mdi/?category=Material