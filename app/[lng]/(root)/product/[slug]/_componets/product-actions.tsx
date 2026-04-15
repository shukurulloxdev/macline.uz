"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  Heart,
  ChevronRight,
  ChevronRightIcon,
  ShieldCheck,
  ShoppingBag,
  BadgeCheck,
  Truck,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrentPrice } from "@/lib/utils";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  basketDecre,
  basketIncer,
  toggleBasket,
} from "@/redux/reducers/basketState";
import { toggelFavorite } from "@/redux/reducers/favoriteState";
import Link from "next/link";
import { toast } from "sonner";

interface Props {
  product: IProduct;
}

export default function TeknotechSidebar({ product }: Props) {
  const dispatch = useDispatch();
  const basketProducts = useSelector(
    (state: RootState) => state.baskets.basketIds,
  );
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );
  const basketProduct = basketProducts.find((pro) => pro.id === product._id);
  const favoriteProduct = favoriteIds.find((id) => id === product._id);
  console.log(product);
  return (
    <aside className="flex w-full flex-col gap-3 font-sans">
      {/* 1. ASOSIY BLOK */}
      <div className="flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
        {/* BADGE-LAR (Rasmda tepada turgandek) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-sm bg-pink-600 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
            Arzon narx kafolati
            <ChevronRightIcon size={10} className="ml-0.5" />
          </div>
          <div className="rounded-sm bg-pink-50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-pink-600 ring-1 ring-inset ring-pink-100">
            —{product.percent}% Chegirma
          </div>
        </div>

        {/* NARX QISMI */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[32px] font-black leading-none text-pink-600">
              {formatCurrentPrice(product.price, product.percent)} so&apos;m
            </span>
          </div>
          {product.discount && (
            <span className="text-[12px] font-medium">
              Chegirmasiz:{" "}
              <span className="text-gray-500 line-through">
                {" "}
                {product.price.toLocaleString()} so&apos;m
              </span>
            </span>
          )}
        </div>

        <div className="group relative cursor-pointer rounded-2xl bg-[#f2f4f7] p-4 transition-all hover:bg-[#ebedf0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-sm">
                <ShieldCheck className="size-full p-[6px] text-pink-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-neutral-900">
                  Rasmiy kafolat mavjud
                </span>
                <span className="text-[11px] font-medium text-pink-600">
                  Macline tomonidan {product.kafolat} kafolat
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-neutral-400" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="rounded-md bg-[#ffff00] px-2 py-1 text-[11px] font-black italic shadow-sm">
              KAFOLAT +{product.kafolat}
            </div>
            <span className="text-[11px] font-bold text-neutral-400">
              × 0% komissiya
            </span>
          </div>
        </div>

        {/* TUGMALAR */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button className="h-14 flex-[4.5] rounded-xl border border-gray-100 bg-[#f2f4f7] text-sm font-bold uppercase text-black backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] active:scale-95">
              Hoziroq xarid qilish
            </Button>
            {favoriteProduct ? (
              <Button
                onClick={() => dispatch(toggelFavorite(product._id))}
                className="group size-14 shrink-0 rounded-xl bg-pink-100 p-0 transition-all hover:scale-[1.01] hover:bg-[#f7d9ec] active:scale-95"
              >
                <Heart className="!size-6 fill-pink-600 text-pink-600 transition-all duration-200 group-hover:scale-110" />
              </Button>
            ) : (
              <Button
                onClick={() => dispatch(toggelFavorite(product._id))}
                className="group size-14 shrink-0 rounded-xl bg-pink-100 p-0 transition-all hover:scale-[1.01] hover:bg-[#f7d9ec] active:scale-95"
              >
                <Heart className="!size-6 text-neutral-900 transition-all duration-200 group-hover:scale-110 group-hover:text-pink-600" />
              </Button>
            )}
          </div>
          <AnimatePresence mode="wait">
            {basketProduct ? (
              <motion.div
                key="basket-controls"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-5 gap-2"
              >
                <div className="col-span-3 flex h-14 items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-white/80 px-2 backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] active:scale-95">
                  <button
                    onClick={() => {
                      if (basketProduct.count === 1) {
                        dispatch(toggleBasket(product._id));
                      } else {
                        dispatch(basketDecre(product._id));
                      }
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-white hover:text-pink-600 active:scale-90"
                  >
                    <Minus size={16} strokeWidth={3} />
                  </button>

                  <span className="text-[16px] font-bold tabular-nums text-gray-900">
                    {basketProduct.count}
                  </span>

                  <button
                    onClick={() => {
                      if (basketProduct.count >= Number(product.count)) {
                        toast.warning(
                          `Hozircha faqat ${product.count} ta mavjud`,
                        );
                        return;
                      }
                      dispatch(basketIncer(product._id));
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-white hover:text-pink-600 active:scale-90"
                  >
                    <Plus size={16} strokeWidth={3} />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                >
                  <Link href="/shopping/cart">
                    <Button className="group relative col-span-2 flex h-14 items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] active:scale-95">
                      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex items-center gap-4">
                        <ShoppingBag className="!size-6 text-pink-600 transition-transform duration-500 group-hover:rotate-12" />

                        <span className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-pink-600">
                          O&apos;tish
                        </span>
                      </div>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="add-button"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Button
                  onClick={() => dispatch(toggleBasket(product._id))}
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-pink-600 text-white transition-all duration-300 hover:scale-[1.01] hover:bg-pink-700/90 active:scale-95"
                >
                  <ShoppingBag className="size-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-[14px] font-black uppercase leading-tight tracking-widest">
                    Savatga qo&apos;shish
                  </span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* STATUSLAR */}
        <div className="border-t border-neutral-100 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <BadgeCheck size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-semibold text-neutral-700">
              {product.count} dona xarid qilish mumkin
            </span>
          </div>
        </div>
      </div>

      {/* 3. TO&apos;LOV VA QAYTARISH */}
      <div className="flex flex-col gap-4 rounded-[1.25rem] border border-neutral-100 bg-white p-6 shadow-sm">
        <div className="group relative flex items-center gap-4 transition-all duration-300 hover:border-pink-200/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Chap tomondagi nafis vizual indikator */}
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 transition-colors">
            <Truck
              size={20}
              strokeWidth={2.2}
              className="text-pink-600 transition-colors"
            />
            <div className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-white bg-emerald-500" />
          </div>

          {/* Matn qismi */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h4 className="font-sora text-[15px] font-black uppercase italic tracking-tighter text-neutral-900 md:text-[16px]">
                Ertaga <span className="text-pink-600">yetkazamiz</span>
              </h4>
            </div>
            <p className="text-[12px] font-bold leading-tight text-neutral-600 group-hover:text-neutral-700">
              Haydovchilar uyingizgacha yetkazadi
            </p>
          </div>

          {/* O&apos;ng tomondagi nafis strelka (faqat hoverda biroz suriladi) */}
          <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ChevronRight size={16} className="text-pink-300" />
          </div>

          {/* Orqa fondagi sezilar-sezilmas gradient nur */}
          <div className="absolute -right-4 -top-4 size-20 rounded-full bg-pink-500/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
        </div>

        <div className="h-[1px] w-full bg-neutral-100" />

        <div className="space-y-2">
          <h4 className="text-[15px] font-black uppercase text-neutral-950">
            Tolov usuli
          </h4>
          <p className="text-[12px] font-medium leading-relaxed text-neutral-500">
            Mahsulotni olganingizdan so&apos;ng naqt yoki plastik orqali
            to&apos;lash mumkun.{" "}
            <span className="cursor-pointer font-bold text-pink-600 underline decoration-pink-200 underline-offset-2">
              Batafsil
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
