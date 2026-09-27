import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jacklockhart04.github.io",
  base: "/portfolio",
  output: "static",
  srcDir: "./astro",
  publicDir: "./public",
});
