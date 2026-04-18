"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Plus,
  ArrowRight,
  ShieldCheck,
  Truck,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "@/redux/reducers/basketState";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { cn, formatCurrentPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  discountProducts: IProduct[];
}

export default function NewsProducts({ discountProducts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (discountProducts.length <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [discountProducts.length, resetKey]);

  const activeProduct = discountProducts[currentIndex];
  const dispatch = useDispatch();
  const router = useRouter();
  const basketProducts = useSelector(
    (state: RootState) => state.baskets.basketIds,
  );
  const isBasket = basketProducts.find((pro) => pro.id === activeProduct?._id);

  if (!activeProduct) return null;

  return (
    <div className="mx-auto max-w-7xl px-3 py-4">
      <div className="mb-5 flex items-center justify-between px-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
            Yangilik mahsulotlar
          </h2>
          <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
        </div>

        <Link
          href={"/category/tops"}
          className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
        >
          <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
            <span className="font-bold md:hidden">Hammasi</span>
            <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
              Hammasini ko&apos;rish
            </span>
          </span>

          <div className="flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
            <MoveRight size={16} strokeWidth={2.5} className="text-pink-600" />
          </div>
        </Link>
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              setDirection(1);
              setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
            } else if (info.offset.x > 50) {
              setDirection(-1);
              setCurrentIndex((prev) =>
                prev === 0 ? discountProducts.length - 1 : prev - 1,
              );
            }
            setResetKey((prev) => prev + 1);
          }}
        >
          {/* PRODUCT IMAGE SECTION (IXCHAM) */}
          <div className="relative aspect-[4/3] w-full bg-white">
            <Image
              src={activeProduct.images[0]}
              alt={activeProduct.name}
              fill
              className="object-contain p-6"
              priority
            />

            {/* Floating Badge */}
            <div className="absolute left-3 top-3">
              <div className="flex items-center gap-1.5 rounded-full bg-pink-600 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                <span className="text-white">-{activeProduct.percent}%</span>
                <span className="h-2 w-[1px] bg-white/20" />
                <span>CHEGIRMA</span>
              </div>
            </div>
            <div className="absolute right-3 top-3">
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold text-emerald-600 backdrop-blur-md">
                SOTUVDA: {activeProduct.count}
              </div>
            </div>

            {/* Top Right Mini Info */}
            {/* <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
              <div className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
                SOTUVDA: {activeProduct.count}
              </div>
            </div> */}

            {/* Progress Line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-pink-50">
              <motion.div
                key={`progress-${currentIndex}`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-pink-600"
              />
            </div>
          </div>

          {/* CONTENT SECTION (IXCHAM VA BOY) */}
          <div className="flex flex-col p-5">
            <div className="mb-4 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {activeProduct.category}
              </p>
              <h2 className="line-clamp-1 text-xl font-extrabold tracking-tight text-black">
                {activeProduct.name}
              </h2>
            </div>

            {/* Quick Specs Grid */}
            <div className="mb-5 grid grid-cols-2 gap-2 border-y border-neutral-100 py-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-pink-50 p-1.5 text-pink-600">
                  <ShieldCheck size={14} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600">
                  {activeProduct.kafolat || "2 Yil"} Kafolat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
                  <Truck size={14} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600">
                  Bepul Yetkazish
                </span>
              </div>
            </div>

            {/* Price Area */}
            <div className="mb-5 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-neutral-400">
                  YANGI NARX
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-black">
                    {formatCurrentPrice(
                      activeProduct.price,
                      activeProduct.percent,
                    )}{" "}
                    <span className="text-xl">so&apos;m</span>
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold text-emerald-600">
                  MUDDATLI TO'LOV
                </p>
                <p className="text-xs font-black text-black">12 oy gacha</p>
              </div>
            </div>

            {/* Buttons Area */}
            <div className="flex gap-2">
              <Link href={`/product/${activeProduct._id}`} className="flex-1">
                <button className="h-12 w-full rounded-2xl border-2 border-neutral-100 bg-neutral-50 text-[13px] font-bold text-black transition-all active:scale-95">
                  Batafsil
                </button>
              </Link>
              <button
                onClick={() => {
                  if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                  else router.push("/shopping/cart");
                }}
                className={cn(
                  "flex h-12 flex-[1.5] items-center justify-center gap-2 rounded-2xl text-[13px] font-bold text-white transition-all active:scale-95",
                  isBasket ? "bg-emerald-500" : "bg-pink-600",
                )}
              >
                {isBasket ? (
                  <>
                    <span>Savatga o'tish</span>
                    <ArrowRight size={16} />
                  </>
                ) : (
                  <>
                    <span>Savatga qo'shish</span>
                    <ShoppingBag size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="mt-4 flex justify-center gap-1.5">
        {discountProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
              setResetKey((prev) => prev + 1);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 bg-pink-600" : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
