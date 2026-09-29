import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jacklockhart04.github.io",
  base: "/portfolio",
  output: "static",
  srcDir: "./astro",
  publicDir: "./public",
  integrations: [mdx()],
});
