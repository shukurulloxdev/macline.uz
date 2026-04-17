"use client";
import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { IProduct } from "@/types";
// import { cn } from "@/lib/utils";

interface Props {
  product: IProduct;
}

function DiscountProductCard({ product }: Props) {
  // Narxni formatlash (masalan: 2 212 550)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price);
  };

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-0 transition-all hover:shadow-lg">
      {/* IMAGE SECTION */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Sevimlilar tugmasi (Uzum uslubida tepada o'ngda) */}
        <button className="absolute right-2 top-2 z-10 flex size-8 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm transition-colors hover:bg-white">
          <Heart
            size={18}
            className="text-gray-400 transition-colors hover:text-red-500"
          />
        </button>
      </div>

      {/* INFO SECTION */}
      <div className="flex flex-1 flex-col p-3">
        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-sm font-medium leading-tight text-gray-800">
          {product.name}
        </h3>

        <div className="mt-auto">
          {/* Eski narx (Chizilgan) */}
          <span className="text-[11px] font-medium text-gray-400 line-through">
            {formatPrice(product.price)}
          </span>

          {/* Yangi narx va Savat tugmasi bir qatorda */}
          <div className="mt-0.5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">
                {formatPrice(product.price)}
                <span className="ml-1 text-[10px]">so&apos;m</span>
              </span>
            </div>

            {/* Savat tugmasi (Uzum binafsha rangli ikonkasi) */}
            <button className="flex size-9 items-center justify-center rounded-xl border border-gray-200 transition-all hover:border-purple-600 hover:bg-purple-50 group-active:scale-90">
              <ShoppingCart
                size={18}
                className="text-gray-700 transition-colors group-hover:text-purple-600"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountProductCard;
