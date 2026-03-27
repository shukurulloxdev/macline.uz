import { basketIdsTyp } from "@/redux/reducers/basketState";

const BASKET_KEY = "basket_ids";

export function setBasketIdsStorage(ids: basketIdsTyp[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(BASKET_KEY, JSON.stringify(ids));
}

export function getBasketIdsStorage() {
  if (typeof window === "undefined") return [];
  const res = localStorage.getItem(BASKET_KEY);
  if (!res) return [];
  try {
    const data = JSON.parse(res);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
export function removeBasketIdsStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(BASKET_KEY);
}
