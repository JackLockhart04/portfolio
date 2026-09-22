import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  srcDir: "./astro",
  publicDir: "./.astro-public",
  integrations: [react()],
  vite: {
    publicDir: "./public",
    define: {
      "process.env.PUBLIC_URL": JSON.stringify(""),
    },
  },
});
