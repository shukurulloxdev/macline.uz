"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getFavorites } from "@/actions/user-actions";
import { Loader2 } from "lucide-react"; // Yuklanish uchun
import AllProducts from "./all-products";
import FavoriteFidebar from "./favorite-sidebar";
import { IProduct } from "@/types";

export default function FavoriteContent() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );

  async function fetchFavorites() {
    if (favoriteIds.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const res = await getFavorites({ ids: favoriteIds });

    if (res.data?.products) {
      setProducts(res.data.products);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchFavorites();
  }, [favoriteIds]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-pink-600" size={40} />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-black uppercase italic text-neutral-300">
          Saralanganlar bosh
        </h2>
        <p className="text-sm text-neutral-400">
          Sizga yoqqan mahsulotlarni shu yerda saqlashingiz mumkin.
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl py-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <AllProducts products={products || []} />
        </div>
        <aside className="w-80">
          <div className="sticky top-36 space-y-6">
            <FavoriteFidebar products={products || []} />
          </div>
        </aside>
      </div>
    </main>
  );
}
