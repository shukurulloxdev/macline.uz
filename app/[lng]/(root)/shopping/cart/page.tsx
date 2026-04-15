"use client";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { getBasketProducts } from "@/actions/user-actions";
import BasketSummary from "./_componets/basket-summary";
import AllBasketProducts from "./_componets/all-basket-products";
import { IProduct } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EmptyBasket from "@/components/shared/cart-empty";

function Page() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);
  const ids = basketIds.map((itm) => itm.id);

  async function getBasketPro() {
    if (basketIds.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const res = await getBasketProducts({ ids });
    if (res.data?.products) {
      setProducts(res.data?.products);
    }
    setLoading(false);
  }

  useEffect(() => {
    getBasketPro();
  }, [basketIds.length]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-pink-600" size={40} />
      </div>
    );
  }
  if (products.length === 0) {
    return <EmptyBasket />;
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
