"use client";

import { Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@/types";
import {
  basketDecre,
  basketIncer,
  toggleBasket,
} from "@/redux/reducers/basketState";
import { toast } from "sonner";
import Link from "next/link";
import { formatCurrentPrice } from "@/lib/utils";

interface Props {
  product: IProduct;
}

export default function BottomBar({ product }: Props) {
  const dispatch = useDispatch();

  const basketProducts = useSelector(
    (state: RootState) => state.baskets.basketIds,
  );

  const basketProduct = basketProducts.find((p) => p.id === product._id);
  const discountedPrice = formatCurrentPrice(product.price, product.percent);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-neutral-100 bg-white/80 px-4 py-3 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          {/* ── NARX (chap) ─────────────────────────────────────── */}
          <div className="flex flex-col">
            <span className="text-[20px] font-black leading-none tracking-tight text-neutral-950">
              {discountedPrice}
              <span className="ml-0.5 text-[12px] font-semibold text-neutral-400">
                {" "}
                so&apos;m
              </span>
            </span>
            {product.discount && product.percent ? (
              <span className="mt-0.5 text-[10px] font-medium text-neutral-400 line-through decoration-pink-400">
                {product.price.toLocaleString()} so'm
              </span>
            ) : null}
          </div>

          {/* ── ACTIONS (o'ng) ──────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {basketProduct ? (
              <motion.div
                key="counter"
                initial={{ opacity: 0, x: 16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                {/* Counter pill */}

                {/* Go to cart */}
                <Link href="/shopping/cart">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.08 }}
                    className="flex h-11 items-center gap-1.5 rounded-2xl border border-pink-600/30 bg-pink-600/10 pl-4 pr-3 text-[12px] font-black text-pink-600 transition-all active:scale-95"
                  >
                    <ShoppingBag size={14} />
                    <span>O&apos;tish</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </motion.button>
                </Link>
              </motion.div>
            ) : (
              <motion.button
                key="add"
                initial={{ opacity: 0, x: 16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => dispatch(toggleBasket(product._id))}
                className="group flex h-11 items-center gap-2 rounded-2xl bg-pink-600 pl-5 pr-4 text-[13px] font-black text-white transition-all hover:bg-pink-700 active:scale-[.97]"
              >
                <ShoppingBag
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Savatga qo'shish
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
