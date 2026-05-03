import { IProduct } from "@/types";
import { ChevronRight, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import BasketItem from "./basket-item";

interface Props {
  products: IProduct[];
}

function AllBasketProducts({ products }: Props) {
  return (
    <div>
      <div className="w-full rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:hidden">
        <nav className="flex items-center gap-1 text-[11px] font-medium text-neutral-400">
          <Link
            href="/"
            className="flex items-center gap-1 transition hover:text-neutral-600"
          >
            <Home size={14} />
            <span>Bosh sahifa</span>
          </Link>
          <ChevronRight size={12} />
          <span className="text-pink-600">Savat</span>
        </nav>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Savat
            </h1>
            <span className="text-sm text-neutral-400">
              {products.length || 0} ta mahsulot
            </span>
          </div>

          <div className="relative">
            <div className="flex size-11 items-center justify-center rounded-full bg-pink-50">
              <ShoppingBag size={20} className="text-pink-600" />
            </div>

            <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold text-white shadow">
              {products.length || 0}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-between rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)] md:flex">
        <div className="flex flex-col gap-2">
          <nav className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-neutral-400">
            <Link href={"/"} className="flex items-center gap-1">
              <Home size={15} />
              <span>Bosh sahifa</span>
            </Link>
            <ChevronRight size={10} />
            <span className="italic text-pink-600">Savat</span>
          </nav>
          <h1 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
            Savatdagi{" "}
            <span className="not-italic text-pink-600">mahsulotlar</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 py-2">
          <div className="hidden h-10 w-px bg-neutral-100 sm:block" />

          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Sizning tanlovingiz
            </span>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-black italic tracking-tighter text-neutral-900">
                {products.length || 0}{" "}
                <span className="text-lg not-italic text-pink-600">ta</span>
              </span>
              <div className="flex size-8 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                <ShoppingBag size={15} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {products.map((product) => (
          <BasketItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllBasketProducts;
