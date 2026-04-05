"use server";

import { actionClient } from "@/lib/safe-action";
import {
  addCategorySchema,
  addProductSchema,
  categoryUpdateSchema,
  getCategorySchema,
  idSchema,
  updateProductSchema,
} from "@/lib/validation";
import { ReturnActionType } from "@/types";
import { revalidatePath } from "next/cache";

export const createProduct = actionClient
  .schema(addProductSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
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
    revalidatePath("/admin/products");

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json(); // shunday qilish kerak yani javobni ochib olamiz yani kutib olamiz response obyectidagi javobni js obyectga aylantiramiz
    return data;
  });

export const createCategory = actionClient
  .schema(addCategorySchema)
  .action(async ({ parsedInput }) => {
    const res = await fetch("http://localhost:8080/api/admin/add-category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedInput),
    });
    revalidatePath("/admin/categories");

    const data = await res.json();
    return data;
  });

export const getAdminProducts = actionClient.action<ReturnActionType>(
  async () => {
    const res = await fetch("http://localhost:8080/api/admin/admin-products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    return data;
  },
);

export const deleteProduct = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/delete-product/${parsedInput.id}`,
      {
        method: "DELETE",
      },
    );

    if (!res.ok) throw new Error("Server error");
    revalidatePath("/admin/products");

    const data = await res.json();
    return data;
  });
export const adminCategoryDelete = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/admin-category-delete/${parsedInput.id}`,
      {
        method: "DELETE",
      },
    );

    if (!res.ok) throw new Error("Server error");
    revalidatePath("/admin/categories");

    const data = await res.json();
    return data;
  });

export const productAction = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/update-active/${parsedInput.id}`,
      {
        method: "PUT",
      },
    );

    if (!res.ok) throw new Error("Server error");
    revalidatePath("/admin/products");

    const date = await res.json();
    return date;
  });

export const getCategory = actionClient
  .schema(getCategorySchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/admin-category/${parsedInput.slug}`,
      { cache: "no-store" },
    );

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    return data;
  });

export const adminCategoryUpdate = actionClient
  .schema(categoryUpdateSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/admin-category-update/${parsedInput.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInput),
      },
    );

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();

    revalidatePath(`/admin/categories/${parsedInput.id}`);
    revalidatePath("/admin/categories");

    return data;
  });
export const getStatistics = actionClient.action<ReturnActionType>(async () => {
  const res = await fetch(`http://localhost:8080/api/admin/statistics`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Server error");

  const data = await res.json();
  return data;
});

export const getAdminProduct = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/admin/product/${parsedInput.id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    return data;
  });
export const adminProductUpdate = actionClient
  .schema(updateProductSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const { id, ...body } = parsedInput;
    const res = await fetch(
      `http://localhost:8080/api/admin/update-product/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
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
