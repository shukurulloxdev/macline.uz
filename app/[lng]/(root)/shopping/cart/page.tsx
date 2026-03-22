"use client";
import React, { useEffect, useState } from "react";
import { Loader2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { getBasketProducts } from "@/actions/user-actions";
import BasketSummary from "./_componets/basket-summary";
import AllBasketProducts from "./_componets/all-basket-products";
import { IProduct } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function Page() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

  async function getBasketPro() {
    if (basketIds.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const res = await getBasketProducts({ ids: basketIds });
    if (res.data?.products) {
      setProducts(res.data?.products);
    }
    setLoading(false);
  }

  useEffect(() => {
    getBasketPro();
  }, [basketIds]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-pink-600" size={40} />
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="h-[60vh] rounded-[3rem] border-2 border-dashed border-neutral-100 bg-neutral-50/50 py-24 text-center">
        <div className="mx-auto mb-6 w-fit rounded-full bg-white p-8 shadow-sm">
          <ShoppingBag size={48} className="text-neutral-200" strokeWidth={1} />
        </div>
        <h2 className="text-2xl font-black uppercase italic tracking-tight text-neutral-900">
          Savat bosh
        </h2>
        <Link
          href="/"
          className="mt-6 inline-flex h-14 items-center rounded-2xl bg-neutral-900 px-10 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-pink-600"
        >
          Xaridni boshlash
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl py-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <AllBasketProducts products={products} />
        </div>

        <aside className="w-full lg:w-96">
          <div className="sticky top-36">
            <BasketSummary products={products} />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Page;
