# Jack Lockhart Portfolio

**Live site:** [https://jacklockhart04.github.io/portfolio/](https://jacklockhart04.github.io/portfolio/)

My personal portfolio website, built with Astro and TypeScript. It presents my featured software projects, technical skills, CompTIA certifications, résumé, and contact information.

## Tech stack

- [Astro](https://astro.build/) with static site generation
- TypeScript
- MDX content collections for project pages
- CSS organized by page and component
- GitHub Actions and GitHub Pages for deployment

## Local development

Install the dependencies and start the development server:

```sh
npm install
npm run dev
```

The site is then available at the local URL printed by Astro.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Render the résumé preview and start the Astro development server. |
| `npm start` | Alias for starting the development server. |
| `npm run build` | Render the résumé preview and create the production site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run typecheck` | Check the TypeScript source without emitting files. |
| `npm run render:resume` | Generate the résumé preview image from the résumé PDF. |

## Project structure

```text
astro/
  components/        Reusable Astro components
  content/projects/  Project metadata and detail pages written in MDX
  data/               Shared site and contact information
  layouts/            Shared page layouts
  pages/              File-based routes
  styles/             Global, component, and page styles
  utils/              Shared utilities
public/               Static images, certificates, résumé, and favicon
scripts/              Build-time utility scripts
.github/workflows/    GitHub Pages deployment workflow
```

## Adding a project

Create an `.mdx` file in `astro/content/projects/`. Its filename becomes the project's URL slug, and its frontmatter must follow the schema in `astro/content.config.ts`.

Project entries may use `ProjectPanel` and `ProjectMedia` in their MDX content for additional text panels and screenshots. The collection automatically supplies the home page, projects page, and the dynamic project detail route at `/projects/[slug]`.

## Deployment

The site is configured for the `/portfolio` base path in `astro.config.mjs`. A push to the `main` branch triggers `.github/workflows/deploy.yml`, which builds the static site and deploys it to GitHub Pages.
