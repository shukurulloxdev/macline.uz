"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { IProduct } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

interface Props {
  products: IProduct[];
}

function BasketSummaryMobile({ products }: Props) {
  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

  const enriched = products.map((product) => {
    const basketItem = basketIds.find((item) => item.id === product._id);
    return { ...product, count: basketItem?.count ?? 0 };
  });

  const totalItems = enriched.reduce((acc, p) => acc + p.count, 0);
  const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
  const totalDiscount = enriched.reduce(
    (acc, p) => acc + p.price * (p.percent / 100) * p.count,
    0,
  );
  const finalPrice = subtotal - totalDiscount;

  if (totalItems === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:hidden">
      {/* Orqa fon blur (Glassmorphism) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative overflow-hidden rounded-[28px] border border-neutral-100 bg-white/95 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          {/* Narx va Ma'lumot qismi */}
          <div className="flex flex-col pl-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">
                Jami:
              </span>
              {totalDiscount > 0 && (
                <span className="text-[8px] font-bold text-pink-500 line-through decoration-1">
                  {subtotal.toLocaleString()} so&apos;m
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-xl font-[1000] tracking-tighter text-neutral-950">
                {finalPrice.toLocaleString()}
              </span>
              <span className="text-[10px] font-black uppercase italic text-pink-600">
                so&apos;m
              </span>
            </div>
          </div>

          {/* Rasmiylashtirish tugmasi */}
          <Link href="/shopping/checkout">
            <button className="group relative flex h-12 w-fit items-center justify-center gap-2 overflow-hidden rounded-[20px] bg-pink-600 px-4 text-white shadow-lg shadow-neutral-200 transition-all active:scale-95">
              {/* Animatsiyali fon */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-widest">
                  Buyurtma
                </span>
                <div className="flex size-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* iPhone Home Indicator uchun bo'sh joy (Safe Area) */}
      <div className="h-2" />
    </div>
  );
}

export default BasketSummaryMobile;
