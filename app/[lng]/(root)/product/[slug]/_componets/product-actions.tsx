// "use client";

// import React from "react";
// import {
//   Heart,
//   ShoppingBag,
//   ChevronRight,
//   CheckCircle2,
//   ShoppingBasket,
//   ChevronRightIcon,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { IProduct } from "@/types";

// interface Props {
//   product: IProduct;
// }

// export default function UzumExactSidebar({ product }: Props) {
//   const currentPrice = product.discount
//     ? product.price * (1 - product.percent / 100)
//     : product.price;

//   return (
//     <aside className="flex w-full flex-col gap-3 font-sans">
//       {/* 1. ASOSIY BLOK */}
//       <div className="flex flex-col gap-6 rounded-[1.5rem] border border-neutral-100 bg-white p-6 shadow-sm">
//         {/* BADGE-LAR (Rasmda tepada turgandek) */}
//         <div className="flex items-center gap-2">
//           <div className="flex items-center rounded-sm bg-pink-600 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white">
//             Arzon narx kafolati
//             <ChevronRightIcon size={10} className="ml-0.5" />
//           </div>
//           <div className="rounded-sm bg-[#7000ff1a] px-1.5 py-0.5 text-[9px] font-bold text-[#7000ff]">
//             —{product.percent}% CHEGIRMA
//           </div>
//         </div>

//         {/* NARX QISMI */}
//         <div className="space-y-1">
//           <div className="flex items-baseline gap-2">
//             <span className="text-[32px] font-black leading-none text-[#7000ff]">
//               {currentPrice.toLocaleString()} so'm
//             </span>
//           </div>
//           <div className="flex items-center gap-2 text-[13px] font-medium">
//             <span className="text-neutral-900">
//               Texnotech kartasiz {product.price.toLocaleString()} so'm
//             </span>
//             {product.discount && (
//               <span className="text-neutral-400 line-through">
//                 {(product.price + 50000).toLocaleString()}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* BO'LIB TO'LASH O'RNIGA: AKTSIYA/KAFOLAT BLOKI (Dizayn 1-ga-1) */}
//         <div className="group relative cursor-pointer rounded-2xl bg-[#f2f4f7] p-4 transition-all hover:bg-[#ebedf0]">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-sm">
//                 <div className="size-6 rounded-md bg-neutral-200" />{" "}
//                 {/* Logo placeholder */}
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[13px] font-bold text-neutral-900">
//                   Rasmiy kafolat mavjud
//                 </span>
//                 <span className="text-[11px] font-medium text-[#7000ff]">
//                   Xaridni rasmiylashtirishda tanlang
//                 </span>
//               </div>
//             </div>
//             <ChevronRight size={18} className="text-neutral-400" />
//           </div>
//           {/* Sariq indikator chizig'i (rasmdagi 24 oy o'rniga vizual element) */}
//           <div className="mt-3 flex items-center gap-2">
//             <div className="rounded-md bg-[#ffff00] px-2 py-1 text-[11px] font-black italic shadow-sm">
//               KAFOLAT +2 YIL
//             </div>
//             <span className="text-[11px] font-bold text-neutral-400">
//               × 0% komissiya
//             </span>
//           </div>
//         </div>

//         {/* TUGMALAR */}
//         <div className="flex flex-col gap-3">
//           <div className="flex gap-2">
//             <Button className="h-[52px] flex-[4.5] rounded-xl bg-[#f2f4f7] text-[14px] font-bold text-neutral-950 transition-all hover:bg-[#ebedf0] active:scale-[0.98]">
//               1 klikda xarid qilish
//             </Button>
//             <Button
//               variant="outline"
//               className="h-[52px] w-[52px] shrink-0 rounded-xl border-neutral-200 transition-all hover:bg-neutral-50 active:scale-95"
//             >
//               <Heart size={24} strokeWidth={1.5} className="text-neutral-900" />
//             </Button>
//           </div>

//           <Button className="h-[60px] w-full rounded-xl bg-[#7000ff] text-white transition-all hover:bg-[#5e00d9] active:scale-[0.98]">
//             <div className="flex flex-col items-center justify-center leading-tight">
//               <span className="text-[15px] font-bold tracking-tight">
//                 Savatga qo'shish
//               </span>
//               <span className="text-[11px] font-medium opacity-90">
//                 Ertaga yetkazib beramiz
//               </span>
//             </div>
//           </Button>
//         </div>

//         {/* STATUSLAR */}
//         <div className="space-y-3 pt-1">
//           <div className="flex items-center gap-3">
//             <div className="flex size-6 items-center justify-center rounded-lg bg-[#eefbf3] text-[#20ad59]">
//               <CheckCircle2 size={16} strokeWidth={2.5} />
//             </div>
//             <span className="text-[13px] font-medium text-neutral-700">
//               41 dona xarid qilish mumkin
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="flex size-6 items-center justify-center rounded-lg bg-[#f4f3ff] text-[#7000ff]">
//               <ShoppingBasket size={16} strokeWidth={2.5} />
//             </div>
//             <span className="text-[13px] font-medium text-neutral-700">
//               Bu haftada 13 kishi sotib oldi
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 2. YETKAZIB BERISH KARTASI */}
//       <div className="rounded-[1.25rem] border border-neutral-100 bg-white p-5">
//         <h4 className="text-[17px] font-bold tracking-tight text-neutral-900">
//           Ertaga yetkazib beramiz
//         </h4>
//         <p className="text-[14px] font-medium text-neutral-500">
//           Topshirish punktiga yoki kuryer orqali
//         </p>
//       </div>

//       {/* 3. TO'LOV VA QAYTARISH */}
//       <div className="flex flex-col gap-6 rounded-[1.25rem] border border-neutral-100 bg-white p-6">
//         <div className="space-y-4">
//           <div className="space-y-1">
//             <h4 className="text-[15px] font-bold text-neutral-900">
//               Qulay usulda xavfsiz to'lov
//             </h4>
//             <p className="text-[12px] font-medium text-neutral-400">
//               Karta orqali, naqd pulda yoki bo'lib to'lang
//             </p>
//           </div>
//           {/* Ikonka logotiplari qatori */}
//           <div className="flex flex-wrap gap-2">
//             {["Uzum", "Bank", "Nasiya", "Humo", "Uzcard", "Visa", "Master"].map(
//               (i) => (
//                 <div
//                   key={i}
//                   className="h-7 w-10 rounded-md bg-[#f2f4f7] ring-1 ring-neutral-100"
//                 />
//               ),
//             )}
//           </div>
//         </div>

//         <div className="h-[1px] w-full bg-neutral-100" />

//         <div className="space-y-2 text-[12px] font-medium leading-relaxed">
//           <h4 className="text-[15px] font-bold text-neutral-900">
//             Qaytarish oson va tez
//           </h4>
//           <p className="text-neutral-500">
//             Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz.{" "}
//             <span className="cursor-pointer text-[#7000ff] hover:underline">
//               Batafsil
//             </span>
//           </p>
//         </div>
//       </div>
//     </aside>
//   );
// }
"use client";

import React from "react";
import {
  Heart,
  ChevronRight,
  CheckCircle2,
  ShoppingBasket,
  ChevronRightIcon,
  ShieldCheck,
  ShoppingBag,
  BadgeCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCurrentPrice, formatPrice } from "@/lib/utils";
import { IProduct } from "@/types";

interface Props {
  product: IProduct;
}

export default function TeknotechSidebar({ product }: Props) {
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
              {formatCurrentPrice(product.price, product.percent)} so'm
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
        {/*  GARANTiya */}
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
                  Xaridni rasmiylashtirishda tanlang
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-neutral-400" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="rounded-md bg-[#ffff00] px-2 py-1 text-[11px] font-black italic shadow-sm">
              KAFOLAT +2 YIL
            </div>
            <span className="text-[11px] font-bold text-neutral-400">
              × 0% komissiya
            </span>
          </div>
        </div>

        {/* TUGMALAR */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button className="h-14 flex-[4.5] rounded-xl bg-neutral-100 text-[14px] font-bold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-[0.98]">
              Hoziroq xarid qilish
            </Button>
            <Button className="group size-14 shrink-0 rounded-xl bg-pink-100 p-0 transition-all hover:bg-[#f7d9ec] active:scale-95">
              <Heart className="!size-6 text-neutral-900 transition-all duration-200 group-hover:scale-110 group-hover:text-pink-600" />
            </Button>
          </div>

          <Button className="h-14 w-full rounded-xl bg-pink-600 text-white shadow-lg shadow-pink-600/20 transition-all hover:bg-[#e31497] active:scale-[0.98]">
            <div className="flex flex-col items-center justify-center leading-tight">
              <span className="text-[14px] font-black uppercase tracking-widest">
                Savatga qo'shish
              </span>
              <span className="text-[10px] font-medium opacity-90">
                Ertaga yetkazib beramiz
              </span>
            </div>
          </Button>
        </div>

        {/* STATUSLAR */}
        <div className="border-t border-neutral-50 pt-1">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <BadgeCheck size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-semibold text-neutral-700">
              41 dona xarid qilish mumkin
            </span>
          </div>
        </div>
      </div>

      {/* 3. TO'LOV VA QAYTARISH */}
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

          {/* O'ng tomondagi nafis strelka (faqat hoverda biroz suriladi) */}
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
            Mahsulotni olganingizdan so'ng naqt yoki plastik orqali to'lash
            mumkun.{" "}
            <span className="cursor-pointer font-bold text-pink-600 underline decoration-pink-200 underline-offset-2">
              Batafsil
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
