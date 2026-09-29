import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./astro/content/projects",
  }),
  schema: z.object({
    name: z.string(),
    heading: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    imageBordered: z.boolean().default(false),
    imageVariant: z.enum(["generator", "vault"]).optional(),
    skills: z.array(z.string()),
    description: z.string(),
    siteUrl: z.string().url().optional(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { projects };
