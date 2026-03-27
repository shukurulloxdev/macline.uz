"use server";
import { cookies } from "next/headers";
import { actionClient } from "@/lib/safe-action";
import { orderSchema, orderStatusSchema } from "@/lib/validation";
import { ReturnActionType } from "@/types";

export const createOrder = actionClient
  .schema(orderSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const token = cookies().get("token")?.value;
    if (!token) return null;

    const res = await fetch("http://localhost:8080/api/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parsedInput),
    });

    const data = await res.json();
    return data;
  });

export const getAdminOrders = actionClient.action<ReturnActionType>(
  async () => {
    const res = await fetch(`http://localhost:8080/api/order/admin-orders`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  },
);
export const adminOrderUpdate = actionClient
  .schema(orderStatusSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/order/update-order/${parsedInput.orderId}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify({ status: parsedInput.status }),
      },
    );

    const data = await res.json();
    return data;
  });
