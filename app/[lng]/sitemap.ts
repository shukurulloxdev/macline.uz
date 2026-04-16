// // app/sitemap.ts
// import { getCategories } from "@/actions/user-actions";
// import { MetadataRoute } from "next";
// // getCategories funksiyangizni import qiling

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const res = await getCategories();

//   const categoryEntries = res.data?.categories.map((cat) => ({
//     url: `https://macline.uz/category/${cat.slug}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly" as const,
//     priority: 0.8,
//   }));

//   return [
//     {
//       url: "https://macline.uz",
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 1.0,
//     },
//     ...categoryEntries,
//   ];
// }
// app/sitemap.ts

import { getCategories } from "@/actions/user-actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getCategories();

  // Agar ma'lumot bo'lsa map qilamiz, bo'lmasa bo'sh massiv qaytaramiz
  const categories = res.data?.categories || [];

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `https://macline.uz/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Asosiy sahifalar (bularni qo'lda qo'shish foydali)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://macline.uz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://macline.uz/contact", // Aloqa sahifasi SEO uchun muhim
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticPages, ...categoryEntries];
}
