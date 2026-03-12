import { z } from "zod";

export const addProductSchema = z
  .object({
    name: z.string().min(5, "Kamida 5 ta harf"),

    category: z.string().min(1, "Kategoriya majburiy"),

    description: z.string().min(10, "Kamida 10 ta harf"),

    brand: z.string().min(1, "Brend majburiy"),

    price: z.string().min(1, "Narx majburiy"),

    top: z.boolean().optional(),
    discount: z.boolean().optional(),
    percent: z.string().optional(),
    images: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.discount === true &&
      (!data.percent || data.percent.trim() === "")
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["percent"],
        message: "Chegirma bosilganda, foiz majburiy",
      });
    }
  });

export const idSchema = z.object({
  id: z.string(),
});

export const searchParamsSchema = z.object({
  searchQuery: z.string().optional(),
  filter: z.string().optional(),
  category: z.string().optional(),
  page: z.string().default("1"),
  pageSize: z.string().default("10"),
});

export const addCategorySchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, "Kategoriya nomi kamida 4 ta harf bo‘lishi kerak"),
  slug: z.string().optional(),

  seoTitle: z
    .string()
    .trim()
    .min(10, "SEO title kamida 10 ta belgi bo‘lishi kerak")
    .max(70, "SEO title 70 ta harfdan oshmasligi kerak"),

  seoDescription: z
    .string()
    .trim()
    .min(20, "SEO description kamida 30 ta belgi bo‘lishi kerak")
    .max(160, "SEO description 160 ta harfdan oshmasligi kerak"),

  active: z.boolean().default(true).optional(),
  image: z.string().optional(),
});
