"use client";
import React from "react";
import Image from "next/image";
import { ShoppingBag, Truck, Sparkles, HandCoins } from "lucide-react";
import { IProduct } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Props {
  products: IProduct[];
}

export default function CheckoutSummary({ products }: Props) {
  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

  const enriched = products.map((product) => {
    const item = basketIds.find((b) => b.id === product._id);
    const count = item?.count ?? 1;
    return { ...product, count };
  });

  const totalItems = enriched.reduce((acc, p) => acc + p.count, 0);

  const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);

  const totalDiscount = enriched.reduce(
    (acc, p) => acc + p.price * (p.percent / 100) * p.count,
    0,
  );

  const finalPrice = subtotal - totalDiscount;

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <Sparkles size={11} className="text-pink-500" />
          <h3 className="text-2xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
            Xulosa
          </h3>
        </div>
        <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-50 text-pink-600 ring-1 ring-neutral-100">
          <ShoppingBag size={16} strokeWidth={2.3} />
        </div>
      </div>
      <div className="divide-y divide-neutral-100/80 px-6">
        {enriched.map((product) => {
          const itemPrice = product.price * product.count;
          const discounted = itemPrice - itemPrice * (product.percent / 100);

          return (
            <div
              key={product._id}
              className="flex items-center gap-3 py-5 transition-all"
            >
              {/* IMAGE SECTION */}
              <div className="relative shrink-0">
                <div className="relative size-16 overflow-hidden rounded-lg bg-neutral-50 ring-1 ring-neutral-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-1 mix-blend-multiply"
                  />
                </div>
                {/* Badge: Soni */}
                <div className="absolute -right-2 -top-2 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-neutral-900 px-1.5 text-[10px] font-black text-white shadow-sm ring-4 ring-white">
                  {product.count}
                </div>
              </div>

              {/* INFO SECTION */}
              <div className="flex flex-1 flex-col gap-0.5">
                <h4 className="line-clamp-1 text-[13px] font-bold leading-tight text-neutral-800">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-pink-500">
                    {product.brand}
                  </span>
                  {product.percent > 0 && (
                    <span className="rounded-md bg-pink-50 px-1.5 py-0.5 text-[9px] font-black text-pink-600">
                      -{product.percent}%
                    </span>
                  )}
                </div>
              </div>

              {/* PRICE SECTION */}
              <div className="flex shrink-0 flex-col items-end pt-1">
                <p className="text-[14px] font-black tabular-nums tracking-tight text-neutral-900">
                  {discounted.toLocaleString()}
                  <span className="ml-0.5 text-[10px] font-bold text-neutral-700">
                    so&apos;m
                  </span>
                </p>
                {product.percent > 0 && (
                  <p className="text-[11px] font-medium tabular-nums text-neutral-300 line-through decoration-neutral-300/50">
                    {itemPrice.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* TOTALS */}
      <div className="space-y-2.5 border-t border-neutral-50 px-6 py-4">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          <span>Mahsulotlar soni</span>
          <span className="font-black text-neutral-800">{totalItems} ta</span>
        </div>
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          <span>Jami</span>
          <span className="font-bold text-neutral-700">
            {subtotal.toLocaleString()} so&apos;m
          </span>
        </div>
        {totalDiscount > 0 && (
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400">
            <span>Chegirma</span>
            <span className="font-black text-pink-600">
              -{totalDiscount.toLocaleString()} so&apos;m
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Truck size={11} />
            Yetkazib berish
          </span>
          <span className="font-black text-emerald-500">
            {subtotal > 1000000
              ? "Bepul"
              : (50000).toLocaleString() + " " + "so'm"}
          </span>
        </div>
      </div>

      {/* FINAL PRICE */}
      <div className="border-t border-neutral-100 bg-pink-100 px-6 py-5">
        <div className="mb-1.5 flex items-center gap-1.5">
          <HandCoins size={12} className="text-neutral-600" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
            To&apos;lov miqdori
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black tracking-tighter text-neutral-900">
            {finalPrice.toLocaleString()}
          </span>
          <span className="text-xs font-bold uppercase italic text-neutral-700">
            so&apos;m
          </span>
        </div>
      </div>
    </div>
  );
}
