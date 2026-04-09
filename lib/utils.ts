import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

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
export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return `Bugun, ${date.toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  return date.toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface FormatQueryProps {
  params: string;
  key: string;
  toProducts: boolean;
  value: string | null;
}
export function formatQuery({
  params,
  key,
  toProducts,
  value,
}: FormatQueryProps) {
  const parsedUrl = qs.parse(params);

  parsedUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: toProducts
        ? `${window.location.pathname.split("/")[0]}/products`
        : window.location.pathname,
      query: parsedUrl,
    },
    { skipNull: true },
  );
}

export function formatQueryRemove({
  params,
  key,
}: {
  params: string;
  key: string;
}) {
  const parsedUrl = qs.parse(params);

  delete parsedUrl[key];

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: parsedUrl,
    },
    { skipNull: true },
  );
}
