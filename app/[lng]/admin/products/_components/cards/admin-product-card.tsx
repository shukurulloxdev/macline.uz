"use client";

import { deleteProduct, productAction } from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import { cn, formatCurrentPrice } from "@/lib/utils";
import { IProduct } from "@/types";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  product: IProduct;
}

function AdminProductCard({ product }: Props) {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  function removeProduct() {
    const isConfirm = confirm("Mahsulotni o'chirmoqchimisiz?");

    if (!isConfirm) return;
    const res = deleteProduct({ id: product._id });

    toast.promise(res, {
      success: "Muvaffaqiyatli o'chirildi ✅",
      error: "Nimadur xato ❌, Boshidan uruning!",
      loading: "Iltimos kuting 👀",
    });
  }

  function productActions() {
    // setIsLoading(true);

    const res = productAction({ id: product._id });

    toast.promise(res, {
      success: `Mahsulot ${!product.active ? "aktiv" : "noaktiv"}  qilindi ✅`,
      error: "Nimadur xato ❌, Boshidan uruning!",
      loading: `Iltimos kuting 👀`,
    });

    // res.finally(() => setIsLoading(false));
  }
  return (
    <div className="grid grid-cols-[1.5fr_1fr_auto] items-center rounded-xl bg-white/10 p-4">
      <div className="flex items-center gap-3">
        <div className="relative size-14">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="rounded-sm object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-sora text-xl font-semibold text-white">
            {product.brand}
          </h1>
          <p className="line-clamp-1 font-inter text-sm text-gray-300">
            {product.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">Narxi</h1>
        <div className="flex items-center gap-2">
          {product.discount ? (
            <p className="font-inter text-sm text-gray-400 line-through">
              {product.price.toLocaleString()} so&apos;m
            </p>
          ) : (
            <p className="font-inter text-sm text-gray-400 line-through">
              Chegirma
            </p>
          )}

          <p className={"font-inter text-sm font-semibold text-green-300"}>
            {formatCurrentPrice(product.price, product.percent)} so&apos;m
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* Sozlash */}
        <Link href={`/admin/products/${product._id}`}>
          <Button
            // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
            className="rounded-lg border border-white/20 bg-white/10 px-4 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:border-white/40 hover:bg-white/20 hover:text-white hover:shadow-lg"
            variant={"outline"}
          >
            Sozlash
          </Button>
        </Link>

        {/* Active / Inactive */}
        <Button
          className={cn(
            "rounded-lg px-4 text-white transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:shadow-lg active:scale-95",
            product.active
              ? "border border-green-400/40 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400"
              : "border border-red-400/40 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400",
          )}
          variant={"outline"}
          onClick={productActions}
        >
          {product.active ? "Faol" : "Faol emas"}{" "}
          {/* {isLoading ? <Loader className="animate-spin" /> : null} */}
        </Button>

        {/* Delete */}
        <Button
          // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
          className="rounded-lg border border-red-400/40 bg-gradient-to-r from-red-600 to-red-500 px-4 text-white transition-all duration-300 hover:-translate-y-[2px] hover:from-red-500 hover:to-red-400 hover:text-white hover:shadow-xl"
          variant={"outline"}
          onClick={removeProduct}
        >
          O&apos;chirish
        </Button>
      </div>
    </div>
  );
}

export default AdminProductCard;
