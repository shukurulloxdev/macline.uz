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
  Minus,
  Plus,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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

export default function ProductActions({ product }: Props) {
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
    <aside className="flex w-full flex-col gap-4 px-1 font-sans">
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-sm bg-pink-500 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
          Arzon narx kafolati
          <ChevronRightIcon size={10} className="ml-0.5" />
        </div>
        {product.kafolat && (
          <div className="flex items-center rounded-sm bg-emerald-400 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
            {product.kafolat} kafolat
            <ChevronRightIcon size={10} className="ml-0.5" />
          </div>
        )}
        {product.discount && (
          <div className="rounded-sm bg-pink-50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-pink-600 ring-1 ring-inset ring-pink-100">
            —{product.percent}% Chegirma
          </div>
        )}
        {!product.discount && product.top && (
          <div className="flex items-center rounded-sm bg-sky-500 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
            Top
            <ChevronRightIcon size={10} className="ml-0.5" />
          </div>
        )}
      </div>

      {/* <h1 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900">
        {product.name}
      </h1> */}

      {/* Asosiy Mahsulot Nomi */}
      <h1 className="font-inter text-2xl font-black leading-[1.1] tracking-tight text-neutral-900">
        {product.name}
      </h1>
      <div className="flex w-full flex-col gap-2 font-sans">
        <div className="flex items-center gap-2">
          <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100/80 text-emerald-600 transition-colors">
            <BadgeCheck size={24} strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-neutral-800">
            {product.count} dona xarid qilish mumkin
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-full rounded-xl bg-neutral-100 p-4 font-sans">
          {/* 1. Badge - Chegirma haqida ma'lumot */}
          <div className="mb-2 flex w-fit items-center rounded-sm bg-pink-500 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
            -{product.percent}% chegirma
            <ChevronRightIcon size={10} className="ml-0.5" />
          </div>

          {/* 2. Asosiy Narx */}
          <div className="mb-1 flex items-baseline">
            <h2 className="text-2xl font-black leading-none tracking-tighter text-pink-600">
              {formatCurrentPrice(product.price, product.percent)}
              <span className="ml-1 text-[24px] font-bold text-pink-600">
                so'm
              </span>
            </h2>
          </div>

          {/* 3. Ikkinchi darajali narxlar */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-[12px] font-medium text-neutral-800">
              Chegirmasiz:
            </p>

            {/* Eski narx - o'chirilgan holatda */}
            <span className="relative text-[12px] font-medium text-neutral-400">
              {product.price.toLocaleString()} so&apos;m
              {/* Rasmdagi pushti o'chirish chizig'i */}
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-pink-500/60" />
            </span>
          </div>
        </div>

        <div className="group relative cursor-pointer rounded-xl bg-neutral-100 p-4 transition-all">
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
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button className="h-14 flex-[4.5] rounded-xl border border-pink-200 bg-neutral-50 text-sm font-bold uppercase text-black backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] active:scale-95">
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
          {/* <AnimatePresence mode="wait">
            {basketProduct ? (
              <motion.div
                key="basket-controls"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-5 gap-2"
              >
                <div className="col-span-3 flex h-14 items-center justify-between overflow-hidden rounded-2xl border border-neutral-200/60 bg-[#f8f8f8] p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300">
               
                  <button
                    onClick={() => {
                      if (basketProduct.count === 1) {
                        dispatch(toggleBasket(product._id));
                      } else {
                        dispatch(basketDecre(product._id));
                      }
                    }}
                    className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
                  >
                    <Minus size={18} strokeWidth={3} />
                  </button>

                  <div className="flex flex-col items-center">
                    <span className="text-[17px] font-black tabular-nums tracking-tighter text-neutral-900">
                      {basketProduct.count}
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
                      Soni
                    </span>
                  </div>

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
                    className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
                  >
                    <Plus size={18} strokeWidth={3} />
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
          </AnimatePresence> */}
        </div>
        <div className="mt-2 w-full rounded-xl bg-neutral-100 p-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-inter text-2xl font-bold tracking-tight text-pink-600">
                Mahsulot tavsifi
              </h3>
            </div>

            <p className="line-clamp-2 text-[14px] leading-relaxed text-neutral-500">
              Ushbu mahsulot haqida to'liq malumot olish uchun "To'liq tavsif"
              ni bosing
            </p>

            {/* Tugma qismi */}

            <Drawer>
              <DrawerTrigger asChild>
                <button className="group relative flex h-[52px] w-full items-center justify-center rounded-2xl border border-pink-100 bg-white transition-all hover:shadow-sm active:scale-[0.98]">
                  <span className="text-[15px] font-bold text-neutral-900">
                    To'liq tavsif
                  </span>
                  <ChevronRight
                    size={18}
                    className="ml-1 text-neutral-400 transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </DrawerTrigger>

              {/* DrawerContent balandligini belgilaymiz */}
              <DrawerContent className="flex max-h-[80vh] flex-col outline-none">
                {/* 1. Header - Qotib turadi (Sticky) */}
                <DrawerHeader className="shrink-0 border-b border-neutral-100 pb-4">
                  {/* Mobil tutqich */}
                  <div className="relative flex items-center justify-center">
                    <DrawerTitle className="font-inter text-lg font-black uppercase tracking-tighter text-neutral-900">
                      Mahsulot tavsifi
                    </DrawerTitle>
                    <DrawerClose className="absolute right-0 rounded-full bg-neutral-100 p-1.5 text-neutral-500 active:scale-90">
                      <Plus className="rotate-45" size={20} />
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                {/* 2. Scrollable Area - Faqat shu qism skrol bo'ladi */}
                <div className="flex-1 overflow-y-auto scroll-smooth p-6">
                  <div className="mx-auto space-y-6 pb-4">
                    {/* Sarlavha va Breand chizig'i */}
                    <div className="space-y-2">
                      <h2 className="font-inter text-2xl font-bold tracking-tight text-neutral-900">
                        {product.name}
                      </h2>
                      <div className="h-1.5 w-14 rounded-full bg-pink-600" />
                    </div>

                    {/* Asosiy matn */}
                    <div className="prose prose-neutral max-w-none">
                      <div
                        className="space-y-4 text-[15.5px] leading-[1.6] text-neutral-600"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </div>

                    {/* Spec Card */}
                    {product.kafolat && (
                      <div className="space-y-3 rounded-lg bg-white p-5 ring-1 ring-neutral-100">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                            Kafolat
                          </span>
                          <span className="text-sm font-bold text-neutral-900">
                            {product.kafolat}
                          </span>
                        </div>
                        <div className="h-px bg-neutral-200/60" />
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                            Yetkazib berish
                          </span>
                          <span className="text-sm font-bold text-emerald-600">
                            Bepul (24 soatda)
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Uzun matn bo'lsa oxirida bo'sh joy qoldiramiz */}
                    {/* <div className="h-20" /> */}
                  </div>
                </div>

                {/* 3. Footer - Pastda qotib turadi */}
                <DrawerFooter className="shrink-0 border-t border-neutral-100 bg-white/95 p-4 shadow-md backdrop-blur-md">
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
                        <div className="col-span-3 flex h-14 items-center justify-between overflow-hidden rounded-2xl border border-neutral-200/60 bg-[#f8f8f8] p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300">
                          {/* Minus tugmasi */}
                          <button
                            onClick={() => {
                              if (basketProduct.count === 1) {
                                dispatch(toggleBasket(product._id));
                              } else {
                                dispatch(basketDecre(product._id));
                              }
                            }}
                            className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
                          >
                            <Minus size={18} strokeWidth={3} />
                          </button>

                          {/* Raqam qismi */}
                          <div className="flex flex-col items-center">
                            <span className="text-[17px] font-black tabular-nums tracking-tighter text-neutral-900">
                              {basketProduct.count}
                            </span>
                            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
                              Soni
                            </span>
                          </div>

                          {/* Plus tugmasi */}
                          <button
                            onClick={() => {
                              if (
                                basketProduct.count >= Number(product.count)
                              ) {
                                toast.warning(
                                  `Hozircha faqat ${product.count} ta mavjud`,
                                );
                                return;
                              }
                              dispatch(basketIncer(product._id));
                            }}
                            className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
                          >
                            <Plus size={18} strokeWidth={3} />
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
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </aside>
  );
}
