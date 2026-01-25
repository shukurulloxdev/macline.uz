"use server";

import { actionClient } from "@/lib/safe-action";
import { addProductSchema } from "@/lib/validation";
import { ProductType } from "@/types";
import { revalidatePath } from "next/cache";

export const createProduct = actionClient
  .schema(addProductSchema)
  .action<ProductType>(async ({ parsedInput }) => {
    const response = await fetch(
      // response hardoyim res obyectini qaytaradi malumotni emas malumotni olish uchun
      "http://localhost:8080/api/admin/add-product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsedInput,
          price: parseFloat(parsedInput.price),
          percent: parsedInput.percent ? parseFloat(parsedInput.percent) : 0,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Server error");
    }
    revalidatePath("/");

    const data = await response.json(); // shunday qilish kerak yani javobni ochib olamiz yani kutib olamiz response obyectidagi javobni js obyectga aylantiramiz
    return data;
  });

export const getTopProducts = actionClient.action<ProductType[]>(async () => {
  const res = await fetch("http://localhost:8080/api/admin/top-products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Server error");

  const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz

  return data;
});

// {
//   "_id": "123",
//   "price": 100000,
//   "discount": true,
//   "percent": 10,
//   "top": true,
//   "images": ["url1", "url2"],
//   "translations": {
//     "uz": {
//       "title": "Samsung kir yuvish mashinasi",
//       "description": "Uy uchun eng zo‘r mashina",
//       "category": "Kir yuvish texnikasi",
//       "brand": "Samsung"
//     },
//     "ru": {
//       "title": "Стиральная машина Самсунг",
//       "description": "Лучшая машина для дома",
//       "category": "Стиральная техника",
//       "brand": "Samsung"
//     }
//   }
// }
