"use server";

import { clientAxios } from "@/http/axios";
import { actionClient } from "@/lib/safe-action";
import { idSchema, idsSchema, searchParamsSchema } from "@/lib/validation";
import { ReturnActionType } from "@/types";
import { cookies } from "next/headers";

export const getTopProducts = actionClient.action<ReturnActionType>(
  async () => {
    const res = await fetch(`${process.env.SERVER_URL}/api/user/top-products`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz

    return data;
  },
);
export const getDiscountProducts = actionClient.action<ReturnActionType>(
  async () => {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/user/discount-products`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error("Server error");

    const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz

    return data;
  },
);
export const getCategories = actionClient.action<ReturnActionType>(async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/user/categories`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Server error");

  const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz

  return data;
});

export const getProductById = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/user/product/${parsedInput.id}`,
      {
        cache: "no-store",
      },
    );

    const data = await res.json();

    return data;
  });

export const getProducts = actionClient
  .schema(searchParamsSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const { data } = await clientAxios.get("/api/user/products", {
      params: parsedInput,
    });

    return JSON.parse(JSON.stringify(data));
  });

export const getAllProducts = actionClient
  .schema(searchParamsSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const { data } = await clientAxios.get("/api/user/all-products", {
      params: parsedInput,
    });

    return JSON.parse(JSON.stringify(data));
  });

export const getFavorites = actionClient
  .schema(idsSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(`${process.env.SERVER_URL}/api/user/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: parsedInput.ids }),
    });

    const data = await res.json();

    return data;
  });

export const getBasketProducts = actionClient
  .schema(idsSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/user/basket-products`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: parsedInput.ids }),
      },
    );
    const data = await res.json();

    return data;
  });

export const newOrders = actionClient.action<ReturnActionType>(async () => {
  const token = cookies().get("token")?.value;
  if (!token) return null;

  const res = await fetch(`${process.env.SERVER_URL}/api/user/new-orders`, {
    headers: { Cookie: `token=${token}` },
    cache: "no-store",
  });

  const data = await res.json();
  return data;
});

export const finishedOrders = actionClient.action<ReturnActionType>(
  async () => {
    const token = cookies().get("token")?.value;
    if (!token) return null;

    const res = await fetch(
      `${process.env.SERVER_URL}/api/user/finished-orders`,
      {
        headers: { Cookie: `token=${token}` },
        cache: "no-store",
      },
    );

    const data = await res.json();
    return data;
  },
);

// export async function productsByCategory(
//   category: string,
// ): Promise<ReturnActionType> {
//   const res = await fetch(
//     `${process.env.SERVER_URL}/api/user/by-category/${category}`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!res.ok) {
//     throw new Error("Kategoriya boyicha Mahsulotlarni olishda xatolik");
//   }

//   const data = await res.json();

//   return data;
// }
