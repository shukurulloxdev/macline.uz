// "use client";
// import Image from "next/image";
// import { Trash2, Plus, Minus, ShieldCheck } from "lucide-react";
// import { IProduct } from "@/types";
// import { formatCurrentPrice } from "@/lib/utils";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   basketDecre,
//   basketIncer,
//   toggleBasket,
// } from "@/redux/reducers/basketState";
// import { RootState } from "@/redux/store";

// export default function BasketItem({ product }: { product: IProduct }) {
//   const basketProduct = useSelector((state: RootState) =>
//     state.baskets.basketIds.find((item) => item.id === product._id),
//   );
//   console.log(basketProduct);
//   const dispatch = useDispatch();
//   return (
//     <div className="group relative flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-white p-6 transition-all hover:border-pink-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] sm:flex-row">
//       <div className="relative size-32 shrink-0 overflow-hidden rounded-2xl bg-neutral-50 p-4">
//         <Image
//           src={product.images[0]}
//           alt={product.name}
//           fill
//           className="object-contain transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="flex flex-1 flex-col justify-between">
//         <div className="space-y-1">
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">
//               {product.brand}
//             </span>
//             <button
//               onClick={() => dispatch(toggleBasket(product._id))}
//               className="text-neutral-300 transition-colors hover:text-red-500"
//             >
//               <Trash2 size={18} />
//             </button>
//           </div>
//           <h3 className="pr-10 text-lg font-bold leading-tight text-neutral-900">
//             {product.name}
//           </h3>
//           <div className="flex items-center gap-3 pt-1">
//             <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-500">
//               <ShieldCheck size={12} />
//               Sotuvda bor
//             </div>
//             <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500">
//               Mahsulot kodi: {"11712"}
//             </span>
//           </div>
//         </div>

//         <div className="mt-6 flex items-center justify-between">
//           <div className="flex items-center rounded-xl bg-neutral-50 p-1 ring-1 ring-neutral-100">
//             <button
//               disabled={basketProduct?.count === 1}
//               onClick={() => dispatch(basketDecre(product._id))}
//               className="flex size-8 items-center justify-center rounded-lg text-neutral-400 transition-all hover:bg-white hover:text-neutral-900"
//             >
//               <Minus size={14} />
//             </button>
//             <span className="w-10 text-center text-sm font-black text-neutral-900">
//               {basketProduct?.count}
//             </span>
//             <button
//               onClick={() => dispatch(basketIncer(product._id))}
//               className="flex size-8 items-center justify-center rounded-lg text-neutral-400 transition-all hover:bg-white hover:text-neutral-900"
//             >
//               <Plus size={14} />
//             </button>
//           </div>

//           {/* PRICE */}
//           <div className="text-right">
//             {/* <p className="text-2xl font-black tracking-tight text-neutral-900">
//               {formatCurrentPrice(product.price, product.percent)} s&apos;om
//             </p> */}
//             <div className="flex items-baseline gap-1 font-sans">
//               <span className="text-3xl font-extrabold tracking-tight text-pink-600">
//                 {formatCurrentPrice(
//                   product.price * (basketProduct?.count || 1),
//                   product.percent,
//                 )}
//               </span>
//               <span className="text-sm font-semibold text-pink-500">
//                 s&apos;om
//               </span>
//             </div>
//             {product.percent > 0 && (
//               <p className="text-xs font-bold text-neutral-300 line-through">
//                 {(product.price * (basketProduct?.count || 1)).toLocaleString()}{" "}
//                 UZS
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import { Trash2, Plus, Minus, ShieldCheck } from "lucide-react";
import { IProduct } from "@/types";
import { formatCurrentPrice } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  basketDecre,
  basketIncer,
  toggleBasket,
} from "@/redux/reducers/basketState";
import { RootState } from "@/redux/store";

export default function BasketItem({ product }: { product: IProduct }) {
  const basketProduct = useSelector((state: RootState) =>
    state.baskets.basketIds.find((item) => item.id === product._id),
  );
  const dispatch = useDispatch();

  return (
    <div className="group relative flex flex-row gap-3 rounded-2xl border border-neutral-100 bg-white p-3 transition-all hover:border-pink-100 sm:shadow-sm md:gap-6 md:p-6">
      {/* RASM QISMI - Mobil uchun kichraytirilgan */}
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-neutral-50 p-2 md:size-32 md:rounded-2xl md:p-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* MA'LUMOTLAR QISMI */}
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-pink-600 md:text-[10px]">
                {product.brand}
              </span>
              <h3 className="line-clamp-2 text-sm font-bold leading-tight text-neutral-900 md:line-clamp-none md:text-lg">
                {product.name}
              </h3>
            </div>

            <button
              onClick={() => dispatch(toggleBasket(product._id))}
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-50 text-neutral-400 transition-colors hover:bg-red-50 hover:text-red-500 md:size-9"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <div className="flex items-center gap-1 text-[8px] font-bold uppercase text-green-500 md:text-[10px]">
              <ShieldCheck size={10} className="md:size-3" />
              Bor
            </div>
            <span className="text-[8px] font-medium uppercase text-neutral-400 md:text-[10px]">
              Kod: 11712
            </span>
          </div>
        </div>

        {/* PRICE & COUNTER - Mobil uchun ixchamroq */}
        <div className="mt-3 flex items-end justify-between md:mt-6">
          {/* COUNTER */}
          <div className="flex items-center rounded-lg bg-neutral-50 p-0.5 ring-1 ring-neutral-100 md:rounded-xl md:p-1">
            <button
              disabled={basketProduct?.count === 1}
              onClick={() => dispatch(basketDecre(product._id))}
              className="flex size-6 items-center justify-center rounded-md text-neutral-400 transition-all hover:bg-white hover:text-neutral-900 md:size-8"
            >
              <Minus size={12} />
            </button>
            <span className="w-7 text-center text-xs font-black text-neutral-900 md:w-10 md:text-sm">
              {basketProduct?.count}
            </span>
            <button
              onClick={() => dispatch(basketIncer(product._id))}
              className="flex size-6 items-center justify-center rounded-md text-neutral-400 transition-all hover:bg-white hover:text-neutral-900 md:size-8"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* PRICE */}
          <div className="text-right">
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-black tracking-tight text-pink-600 md:text-2xl md:text-pink-600">
                {formatCurrentPrice(
                  product.price * (basketProduct?.count || 1),
                  product.percent,
                )}
              </span>
              <span className="text-[10px] font-bold text-pink-500 md:text-sm md:text-pink-500">
                so&apos;m
              </span>
            </div>
            {product.percent > 0 && (
              <p className="text-[9px] font-bold text-neutral-300 line-through md:text-xs">
                {(product.price * (basketProduct?.count || 1)).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
