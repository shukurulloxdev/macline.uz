"use client";

import { Heart, ShoppingBag, Zap, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";

interface Props {
  product: IProduct;
}

function ProductActions({ product }: Props) {
  const discountedPrice = product.discount
    ? product.price * (1 - product.percent / 100)
    : product.price;

  return (
    <div className="flex flex-col gap-8 rounded-3xl border border-neutral-100 bg-white/50 p-6 shadow-sm backdrop-blur-md">
      {/* Brand & Title for Mobile (Optional) */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
          {product.brand}
        </span>
        <h2 className="text-2xl font-bold leading-tight text-neutral-900">
          {product.name}
        </h2>
      </div>

      {/* Pricing Section */}
      <div className="flex items-end gap-4">
        <div className="flex flex-col">
          {product.discount && (
            <span className="text-sm text-neutral-400 line-through decoration-red-400/50">
              ${product.price.toLocaleString()}
            </span>
          )}
          <span className="text-4xl font-black tracking-tighter text-neutral-900">
            ${discountedPrice.toLocaleString()}
          </span>
        </div>
        {product.discount && (
          <div className="mb-1 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 ring-1 ring-inset ring-red-600/10">
            Saqlab qoling {product.percent}%
          </div>
        )}
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">
        {product.description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button className="group relative h-14 flex-1 overflow-hidden rounded-2xl bg-neutral-900 text-white transition-all hover:bg-neutral-800 active:scale-95">
            <div className="flex items-center justify-center gap-2">
              <ShoppingBag className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              <span className="font-bold">Savatga qo'shish</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-14 w-14 rounded-2xl border-neutral-200 transition-all hover:bg-red-50 hover:text-red-500 active:scale-90"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        <Button
          variant="secondary"
          className="flex h-14 w-full gap-2 rounded-2xl border-none bg-pink-50 text-pink-700 transition-all hover:bg-pink-100 active:scale-95"
        >
          <Zap className="h-5 w-5 fill-current" />
          <span className="font-bold">Hozir sotib olish</span>
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 gap-4 border-t border-neutral-100 pt-6">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
            <Truck className="h-4 w-4" />
          </div>
          <span>O'zbekiston bo'ylab bepul yetkazish</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span>2 yil rasmiy kafolat</span>
        </div>
      </div>
    </div>
  );
}

export default ProductActions;
