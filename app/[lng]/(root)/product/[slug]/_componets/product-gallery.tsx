"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { Maximize2 } from "lucide-react";
import ProductAbout from "./product-about";

export default function ProductGallery({ product }: { product: IProduct }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* 1. Miniatyuralar - Endi yanada ingichka va tartibli */}
        <div className="order-2 flex flex-row gap-3 lg:order-1 lg:flex-col">
          {product.images.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)} // User tajribasi uchun tezroq
              className={cn(
                "relative aspect-square w-16 overflow-hidden rounded-xl border transition-all duration-300 lg:w-20",
                active === i
                  ? "border-black shadow-sm ring-1 ring-black"
                  : "border-neutral-200 bg-white opacity-70 hover:border-neutral-400 hover:opacity-100",
              )}
            >
              <Image src={img} alt="thumb" fill className="object-cover p-1" />
            </button>
          ))}
        </div>

        {/* 2. Asosiy Rasm - Balandligi qisqartirilgan va ixcham (Compact Canvas) */}
        <div className="relative order-1 h-[400px] w-full flex-1 overflow-hidden rounded-3xl border border-neutral-100 bg-[#ffffff] lg:order-2 lg:h-[600px]">
          {/* Badge - Premium ko'rinish uchun */}
          <div className="absolute left-6 top-6 z-10">
            <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black backdrop-blur-md">
              New Arrival
            </span>
          </div>

          <Image
            src={product.images[active]}
            alt={product.name}
            fill
            priority
            className="object-cover p-10 transition-all duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Floating Actions */}
          <div className="absolute bottom-6 right-6">
            <button className="flex size-11 items-center justify-center rounded-full bg-white text-neutral-800 shadow-md transition-all hover:bg-black hover:text-white active:scale-90">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-100 pt-8">
        <ProductAbout product={product} />
      </div>
    </div>
  );
}
