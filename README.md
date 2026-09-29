# Jack Lockhart Portfolio

This is a native Astro portfolio. Every active page is rendered by Astro.

## Setup and commands

- `npm install` - Install dependencies.
- `npm run dev` - Start the Astro development server.
- `npm run build` - Create the production build in `dist/`.
- `npm run preview` - Preview the production build locally.
- `npm run typecheck` - Run TypeScript without emitting files.

Astro source, styles, components, layouts, and pages live under `astro/`. Static images and documents live under `public/`. Deployment configuration has not been added yet.

## Adding a project

Projects are stored as MDX entries in `astro/content/projects/`. To add one,
create a new `.mdx` file whose filename is the desired URL slug, then provide
the metadata required by `astro/content.config.ts`. The home page, projects
page, and project detail route are generated from that collection.

Project entries can use `ProjectPanel` and `ProjectMedia` in their MDX body for
additional text panels and screenshots. The dynamic route at
`astro/pages/projects/[slug].astro` supplies the title, primary image, and
optional external-site button.
