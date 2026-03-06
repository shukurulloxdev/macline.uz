import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
  }).format(price);
}

export function formatCurrentPrice(price: number, percent: number) {
  const totalPrice = price - (price * percent) / 100;
  return totalPrice.toLocaleString();
}
export function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/o‘/g, "o")
    .replace(/g‘/g, "g")
    .replace(/'/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
