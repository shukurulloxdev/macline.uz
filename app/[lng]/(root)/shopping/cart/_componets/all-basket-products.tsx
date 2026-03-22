import { IProduct } from "@/types";
import { ChevronRight, Home, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import BasketItem from "./basket-item";

interface Props {
  products: IProduct[];
}

function AllBasketProducts({ products }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
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
          {/* Ajratuvchi ingichka chiziq */}
          <div className="hidden h-10 w-px bg-neutral-100 sm:block" />

          <div className="flex flex-col items-end gap-0.5">
            {/* Yuqori qism: Kichik tushuntirish */}
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Sizning tanlovingiz
            </span>

            {/* Pastki qism: Asosiy ma'lumot */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black italic tracking-tighter text-neutral-900">
                6 <span className="text-lg not-italic text-pink-600">ta</span>
              </span>
              <div className="flex size-8 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                <ShoppingBag size={15} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {products.map((product) => (
          <BasketItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllBasketProducts;
