"use client";
import React from "react";
import {
  ShoppingBag,
  Trash2,
  Sparkles,
  HandCoins,
  Truck,
  FileInput,
} from "lucide-react";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Separator } from "@/components/ui/separator";
import { removeBasketIds } from "@/redux/reducers/basketState";
import Link from "next/link";

interface Props {
  products: IProduct[];
}

function BasketSummary({ products }: Props) {
  const dispatch = useDispatch();

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

  // count bilan hisoblash
  const enriched = products.map((product) => {
    const basketItem = basketIds.find((item) => item.id === product._id);
    const count = basketItem?.count ?? 0;
    return { ...product, count };
  });

  const totalItems = enriched.reduce((acc, p) => acc + p.count, 0);
  const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
  const totalDiscount = enriched.reduce(
    (acc, p) => acc + p.price * (p.percent / 100) * p.count,
    0,
  );
  const finalPrice = subtotal - totalDiscount;

  return (
    <div className="flex flex-col gap-4">
      {/* YETKAZIB BERISH */}

      {/* XULOSA */}
      <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
              <Truck size={26} />
            </div>
            <div className="flex flex-col gap-px">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-900">
                Bepul yetkazib berish {subtotal < 1000000 && "uchun"}
              </h4>
              {subtotal > 1000000 ? (
                <span className="text-[10px] font-bold italic text-emerald-500">
                  Bepul yetkazib beramiz
                </span>
              ) : (
                <span className="text-[10px] font-bold text-red-500">
                  Harid {(1000000).toLocaleString()} dan oshsa
                </span>
              )}
            </div>
          </div>
          <Separator className="my-4 bg-neutral-100" />
          {/* HEADER */}
          <div className="mb-8 flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-pink-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-500/60">
                  Savat tahlili
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
                Xulosa
              </h2>
            </div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-neutral-50 text-pink-600 shadow-sm ring-1 ring-neutral-100">
              <ShoppingBag size={22} strokeWidth={2.5} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <span>Mahsulotlar soni:</span>
              <span className="font-black text-neutral-900">
                {totalItems || 0} ta
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <span>Jami:</span>
              <span className="text-neutral-900">
                {subtotal.toLocaleString()} so&apos;m
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <span>Chegirma:</span>
              <span className="font-black text-pink-600">
                -{totalDiscount.toLocaleString()} so&apos;m
              </span>
            </div>

            <div className="mt-4 border-t border-pink-100 px-1 pt-6">
              <div className="mb-2 flex items-center gap-2">
                <HandCoins size={14} className="text-neutral-300" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  To&apos;lov miqdori:
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tighter text-neutral-900">
                  {finalPrice.toLocaleString()}
                </span>
                <span className="text-xs font-bold uppercase italic text-neutral-400">
                  so&apos;m
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => dispatch(removeBasketIds())}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 transition-all hover:border-red-100 hover:bg-red-50 hover:text-red-500 active:scale-95"
            >
              <Trash2 size={14} />
              Hammasini tozalash
            </button>
            <Link href={"/shopping/checkout"}>
              <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-pink-600 transition-all active:scale-95">
                <div className="absolute inset-0 translate-y-full bg-pink-700/40 transition-transform duration-300 group-hover:translate-y-0" />
                <div className="relative z-10 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  <FileInput size={18} />
                  <span>Rasmiylashtirish</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketSummary;

// "use client";
// import React from "react";
// import {
//   ShoppingBag,
//   Trash2,
//   Sparkles,
//   HandCoins,
//   Truck,
//   FileInput,
// } from "lucide-react";
// import { IProduct } from "@/types";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { removeBasketIds } from "@/redux/reducers/basketState";
// import { Separator } from "@/components/ui/separator";

// interface Props {
//   products: IProduct[];
// }

// function BasketSummary({ products }: Props) {
//   const dispatch = useDispatch();
//   const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

//   // Har bir mahsulotni count bilan hisoblash
//   const enriched = products.map((product) => {
//     const basketItem = basketIds.find((item) => item.id === product._id);
//     const count = (basketItem?.count ?? 0) + 1; // count 0 dan boshlanadi
//     return { ...product, count };
//   });

//   const totalItems = enriched.reduce((acc, p) => acc + p.count, 0);
//   const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
//   const totalDiscount = enriched.reduce(
//     (acc, p) => acc + p.price * (p.percent / 100) * p.count,
//     0,
//   );
//   const finalPrice = subtotal - totalDiscount;

//   // Bepul yetkazib berish limiti
//   const FREE_DELIVERY_LIMIT = 20000000;
//   const progress = Math.min((finalPrice / FREE_DELIVERY_LIMIT) * 100, 100);
//   const remaining = Math.max(FREE_DELIVERY_LIMIT - finalPrice, 0);

//   return (
//     <div className="flex flex-col gap-4">
//       {/* YETKAZIB BERISH */}

//       {/* XULOSA */}
//       <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
//         <div className="p-6">
//           <div className="flex items-center gap-3">
//             <div className="flex size-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
//               <Truck size={26} />
//             </div>
//             <div>
//               <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-900">
//                 Bepul yetkazib berish
//               </h4>
//               <p className="text-[10px] font-bold italic text-emerald-500">
//                 {progress >= 100
//                   ? "Tabriklaymiz! Bepul yetkazib beramiz 🎉"
//                   : `Yana ${remaining.toLocaleString()} so'm qoldi`}
//               </p>
//             </div>
//           </div>
//           <Separator className="my-4 bg-neutral-100" />
//           {/* HEADER */}
//           <div className="mb-8 flex items-start justify-between">
//             <div className="space-y-1">
//               <div className="flex items-center gap-2">
//                 <Sparkles size={12} className="text-pink-500" />
//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-500/60">
//                   Savat tahlili
//                 </span>
//               </div>
//               <h2 className="text-3xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
//                 Xulosa
//               </h2>
//             </div>
//             <div className="flex size-12 items-center justify-center rounded-2xl bg-neutral-50 text-pink-600 shadow-sm ring-1 ring-neutral-100">
//               <ShoppingBag size={22} strokeWidth={2.5} />
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
//               <span>Mahsulotlar soni:</span>
//               <span className="font-black text-neutral-900">
//                 {totalItems} ta
//               </span>
//             </div>
//             <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
//               <span>Jami:</span>
//               <span className="text-neutral-900">
//                 {subtotal.toLocaleString()} so&apos;m
//               </span>
//             </div>
//             <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-500">
//               <span>Chegirma:</span>
//               <span className="font-black text-pink-600">
//                 -{totalDiscount.toLocaleString()} so&apos;m
//               </span>
//             </div>

//             <div className="mt-4 border-t border-pink-100 px-1 pt-6">
//               <div className="mb-2 flex items-center gap-2">
//                 <HandCoins size={14} className="text-neutral-300" />
//                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
//                   To&apos;lov miqdori:
//                 </p>
//               </div>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-4xl font-black tracking-tighter text-neutral-900">
//                   {finalPrice.toLocaleString()}
//                 </span>
//                 <span className="text-xs font-bold uppercase italic text-neutral-400">
//                   so&apos;m
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 space-y-3">
//             <button
//               onClick={() => dispatch(removeBasketIds())}
//               className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 transition-all hover:border-red-100 hover:bg-red-50 hover:text-red-500 active:scale-95"
//             >
//               <Trash2 size={14} />
//               Hammasini tozalash
//             </button>
//             <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-pink-600 transition-all active:scale-95">
//               <div className="absolute inset-0 translate-y-full bg-pink-700/40 transition-transform duration-300 group-hover:translate-y-0" />
//               <div className="relative z-10 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-white">
//                 <FileInput size={18} />
//                 <span>Rasmiylashtirish</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BasketSummary;
