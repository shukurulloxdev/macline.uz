"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { RootState } from "@/redux/store";
import { IProduct } from "@/types";
import { getBasketProducts } from "@/actions/user-actions";
import CheckoutForm from "./_components/checkout-form";
import CheckoutSummary from "./_components/checkout-summary";

function CheckoutPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);
  const ids = basketIds.map((i) => i.id);

  useEffect(() => {
    if (basketIds.length === 0) {
      setLoading(false);
      return;
    }
    getBasketProducts({ ids }).then((res) => {
      if (res.data?.products) setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-pink-600" size={32} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl py-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <CheckoutForm products={products} />
        </div>

        <aside className="w-full lg:w-[450px]">
          <div className="sticky top-36">
            <CheckoutSummary products={products} />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
