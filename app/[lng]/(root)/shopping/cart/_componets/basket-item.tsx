"use client";
import Image from "next/image";
import { Trash2, Plus, Minus, ShieldCheck } from "lucide-react";
import { IProduct } from "@/types";
import { formatCurrentPrice } from "@/lib/utils";

export default function BasketItem({ product }: { product: IProduct }) {
  return (
    <div className="group relative flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-white p-6 transition-all hover:border-pink-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] sm:flex-row">
      <div className="relative size-32 shrink-0 overflow-hidden rounded-2xl bg-neutral-50 p-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">
              {product.brand}
            </span>
            <button className="text-neutral-300 transition-colors hover:text-red-500">
              <Trash2 size={18} />
            </button>
          </div>
          <h3 className="pr-10 text-lg font-bold leading-tight text-neutral-900">
            {product.name}
          </h3>
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-500">
              <ShieldCheck size={12} />
              Sotuvda bor
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500">
              Mahsulot kodi: {"11712"}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center rounded-xl bg-neutral-50 p-1 ring-1 ring-neutral-100">
            <button className="flex size-8 items-center justify-center rounded-lg text-neutral-400 transition-all hover:bg-white hover:text-neutral-900">
              <Minus size={14} />
            </button>
            <span className="w-10 text-center text-sm font-black text-neutral-900">
              1
            </span>
            <button className="flex size-8 items-center justify-center rounded-lg text-neutral-400 transition-all hover:bg-white hover:text-neutral-900">
              <Plus size={14} />
            </button>
          </div>

          {/* PRICE */}
          <div className="text-right">
            <p className="text-2xl font-black tracking-tight text-neutral-900">
              {formatCurrentPrice(product.price, product.percent)}
            </p>
            {product.percent > 0 && (
              <p className="text-xs font-bold text-neutral-300 line-through">
                {product.price.toLocaleString()} UZS
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
