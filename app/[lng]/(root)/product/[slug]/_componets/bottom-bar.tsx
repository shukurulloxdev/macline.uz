// "use client";
// import { Button } from "@/components/ui/button";
// import { Minus, Plus, ShoppingBag } from "lucide-react";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RootState } from "@/redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { IProduct } from "@/types";
// import {
//   basketDecre,
//   basketIncer,
//   toggleBasket,
// } from "@/redux/reducers/basketState";
// import { toast } from "sonner";
// import Link from "next/link";
// import { formatCurrentPrice } from "@/lib/utils";

// interface Props {
//   product: IProduct;
// }
// function BottomBar({ product }: Props) {
//   const dispatch = useDispatch();
//   const basketProducts = useSelector(
//     (state: RootState) => state.baskets.basketIds,
//   );
//   const basketProduct = basketProducts.find((pro) => pro.id === product._id);
//   return (
//     <div className="fixed inset-x-0 bottom-0 z-50 w-full border-t border-neutral-200 bg-white p-3 md:hidden">
//       <div className="flex items-center justify-between px-4">
//         {product.top ? (
//           <div className="flex flex-col gap-1">
//             <p className="text-[8px] line-through">
//               {product.price.toLocaleString()} so&apos;m
//             </p>
//             <h1 className="text-xl">
//               {formatCurrentPrice(product.price, product.percent)}
//             </h1>
//           </div>
//         ) : (
//           <h1>{formatCurrentPrice(product.price, product.percent)}</h1>
//         )}

//         <AnimatePresence mode="wait">
//           {basketProduct ? (
//             <motion.div
//               key="basket-controls"
//               initial={{ opacity: 0, y: 16, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 12, scale: 0.96 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="grid grid-cols-5 gap-2"
//             >
//               <div className="col-span-3 flex h-14 items-center justify-between overflow-hidden rounded-2xl border border-neutral-200/60 bg-[#f8f8f8] p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300">
//                 {/* Minus tugmasi */}
//                 <button
//                   onClick={() => {
//                     if (basketProduct.count === 1) {
//                       dispatch(toggleBasket(product._id));
//                     } else {
//                       dispatch(basketDecre(product._id));
//                     }
//                   }}
//                   className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
//                 >
//                   <Minus size={18} strokeWidth={3} />
//                 </button>

//                 {/* Raqam qismi */}
//                 <div className="flex flex-col items-center">
//                   <span className="text-[17px] font-black tabular-nums tracking-tighter text-neutral-900">
//                     {basketProduct.count}
//                   </span>
//                   <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
//                     Soni
//                   </span>
//                 </div>

//                 {/* Plus tugmasi */}
//                 <button
//                   onClick={() => {
//                     if (basketProduct.count >= Number(product.count)) {
//                       toast.warning(
//                         `Hozircha faqat ${product.count} ta mavjud`,
//                       );
//                       return;
//                     }
//                     dispatch(basketIncer(product._id));
//                   }}
//                   className="flex size-11 items-center justify-center rounded-xl bg-white text-neutral-400 shadow-sm transition-all hover:text-pink-600 active:scale-90 active:shadow-inner"
//                 >
//                   <Plus size={18} strokeWidth={3} />
//                 </button>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, x: 12 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 8 }}
//                 transition={{ duration: 0.35, delay: 0.05 }}
//               >
//                 <Link href="/shopping/cart">
//                   <Button className="group relative col-span-2 flex h-14 items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] active:scale-95">
//                     <div className="absolute inset-0 z-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                     <div className="relative z-10 flex items-center gap-4">
//                       <ShoppingBag className="!size-6 text-pink-600 transition-transform duration-500 group-hover:rotate-12" />

//                       <span className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-pink-600">
//                         O&apos;tish
//                       </span>
//                     </div>
//                   </Button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="add-button"
//               initial={{ opacity: 0, y: 16, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 12, scale: 0.96 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//             >
//               <Button
//                 onClick={() => dispatch(toggleBasket(product._id))}
//                 className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-pink-600 text-white transition-all duration-300 hover:scale-[1.01] hover:bg-pink-700/90 active:scale-95"
//               >
//                 <ShoppingBag className="size-5 transition-transform duration-300 group-hover:rotate-12" />
//                 <span className="text-[14px] font-black uppercase leading-tight tracking-widest">
//                   Savatga qo&apos;shish
//                 </span>
//               </Button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default BottomBar;
"use client";

import { Minus, Plus, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@/types";
import {
  basketDecre,
  basketIncer,
  toggleBasket,
} from "@/redux/reducers/basketState";
import { toggelFavorite } from "@/redux/reducers/favoriteState";
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
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );

  const basketProduct = basketProducts.find((p) => p.id === product._id);
  const isFav = favoriteIds.includes(product._id);

  const discountedPrice = formatCurrentPrice(product.price, product.percent);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      {/* Blur backdrop */}
      <div className="border-t border-neutral-100 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl">
        {/* Price row */}
        <div className="mb-3 flex items-end justify-between">
          <div>
            <p className="text-[22px] font-black leading-none tracking-tight text-neutral-950">
              {discountedPrice}
              <span className="ml-1 text-[13px] font-semibold text-neutral-500">
                so'm
              </span>
            </p>
            {product.discount && product.percent && (
              <p className="mt-0.5 text-[11px] font-medium text-neutral-400">
                Chegirmasiz:{" "}
                <span className="text-neutral-400 line-through decoration-pink-400">
                  {product.price.toLocaleString()} so'm
                </span>
              </p>
            )}
          </div>

          {product.discount && product.percent && (
            <span className="rounded-lg bg-pink-600 px-2.5 py-1 text-[11px] font-black text-white">
              −{product.percent}%
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2">
          {/* Favorite */}
          <button
            onClick={() => dispatch(toggelFavorite(product._id))}
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-all active:scale-95 ${
              isFav
                ? "border-pink-200 bg-pink-600"
                : "border-neutral-200 bg-neutral-50"
            }`}
          >
            <Heart
              size={18}
              className={isFav ? "fill-white text-white" : "text-neutral-500"}
            />
          </button>

          {/* Cart / Counter */}
          <div className="flex flex-1">
            <AnimatePresence mode="wait">
              {basketProduct ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-1 gap-2"
                >
                  {/* Counter */}
                  <div className="flex h-12 flex-1 items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-1">
                    <button
                      onClick={() => {
                        if (basketProduct.count === 1) {
                          dispatch(toggleBasket(product._id));
                        } else {
                          dispatch(basketDecre(product._id));
                        }
                      }}
                      className="flex size-9 items-center justify-center rounded-xl text-neutral-400 transition-all hover:bg-white hover:text-pink-600 active:scale-90"
                    >
                      <Minus size={15} strokeWidth={2.5} />
                    </button>

                    <span className="text-[16px] font-black tabular-nums text-neutral-900">
                      {basketProduct.count}
                    </span>

                    <button
                      onClick={() => {
                        if (basketProduct.count >= Number(product.count)) {
                          toast.warning(`Faqat ${product.count} ta mavjud`);
                          return;
                        }
                        dispatch(basketIncer(product._id));
                      }}
                      className="flex size-9 items-center justify-center rounded-xl text-neutral-400 transition-all hover:bg-white hover:text-pink-600 active:scale-90"
                    >
                      <Plus size={15} strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Go to cart */}
                  <Link href="/shopping/cart">
                    <button className="flex h-12 items-center gap-2 rounded-2xl bg-pink-600 px-4 text-[12px] font-black text-white transition-all active:scale-95">
                      <ShoppingBag size={16} />
                      <span>O'tish</span>
                      <ArrowRight size={13} />
                    </button>
                  </Link>
                </motion.div>
              ) : (
                <motion.button
                  key="add"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => dispatch(toggleBasket(product._id))}
                  className="group flex h-12 flex-1 items-center justify-center gap-2.5 rounded-2xl bg-pink-600 text-[13px] font-black text-white transition-all hover:bg-pink-700 active:scale-[.98]"
                >
                  <ShoppingBag
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                  Savatga qo'shish
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
