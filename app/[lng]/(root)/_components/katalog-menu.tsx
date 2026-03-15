// "use client";
// import React, { useState } from "react";
// import {
//   LayoutGrid,
//   ChevronRight,
//   Sparkles,
//   Image as ImageIcon,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Image from "next/image";
// import { ICategory } from "@/types"; // Modelni import qilamiz

// interface Props {
//   categories: ICategory[];
// }

// export default function KatalogMenu({ categories }: Props) {
//   const [isOpen, setIsOpen] = useState(false);
//   // Birinchi aktiv kategoriyani o'rnatamiz
//   const [activeTab, setActiveTab] = useState<ICategory | null>(
//     categories[0] || null,
//   );

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* KATALOG TUGMASI */}
//       <button
//         className={cn(
//           "group flex items-center gap-3 rounded-2xl px-6 py-3 transition-all duration-300 active:scale-95",
//           isOpen
//             ? "bg-neutral-900 text-white shadow-xl"
//             : "bg-pink-600 text-white shadow-[0_10px_25px_-5px_rgba(219,39,119,0.4)] hover:bg-pink-700",
//         )}
//       >
//         <LayoutGrid
//           size={20}
//           className={cn(
//             "transition-transform duration-500",
//             isOpen && "rotate-90",
//           )}
//         />
//         <span className="text-sm font-black uppercase tracking-wider">
//           Katalog
//         </span>
//       </button>

//       {/* MEGA MENU PANEL */}
//       <div
//         className={cn(
//           "absolute left-0 top-full z-[120] w-[850px] pt-4 transition-all duration-500",
//           isOpen
//             ? "visible translate-y-0 opacity-100"
//             : "invisible translate-y-4 opacity-0",
//         )}
//       >
//         <div className="overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
//           <div className="flex min-h-[500px]">
//             {/* CHAP TOMON: DB DAN KELGAN KATEGORIYALAR RO'YXATI */}
//             <div className="w-[320px] border-r border-neutral-50 bg-neutral-50/50 p-6">
//               <div className="scrollbar-hide max-h-[450px] space-y-1 overflow-y-auto pr-2">
//                 {categories.map((cat) => (
//                   <div
//                     key={cat._id}
//                     onMouseEnter={() => setActiveTab(cat)}
//                     className={cn(
//                       "group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 transition-all",
//                       activeTab?._id === cat._id
//                         ? "bg-white text-pink-600 shadow-md ring-1 ring-neutral-100"
//                         : "text-neutral-500 hover:bg-white hover:text-neutral-900",
//                     )}
//                   >
//                     <div className="flex items-center gap-3">
//                       {/* Kategoriyaning kichik rasmi yoki default ikonka */}
//                       <div className="relative h-6 w-6 overflow-hidden rounded-md opacity-80 group-hover:opacity-100">
//                         {cat.image ? (
//                           <Image
//                             src={cat.image}
//                             alt={cat.title}
//                             fill
//                             className="object-cover"
//                           />
//                         ) : (
//                           <ImageIcon size={18} className="text-neutral-300" />
//                         )}
//                       </div>
//                       <span className="text-[13px] font-black uppercase tracking-tight">
//                         {cat.title}
//                       </span>
//                     </div>
//                     <ChevronRight
//                       size={14}
//                       className={cn(
//                         "transition-transform",
//                         activeTab?._id === cat._id && "translate-x-1",
//                       )}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* O'NG TOMON: TANLANGAN KATEGORIYA DETALLARI */}
//             <div className="flex-1 p-10">
//               {activeTab && (
//                 <div className="flex h-full flex-col">
//                   <div className="mb-8 flex items-start justify-between">
//                     <div className="space-y-2">
//                       <h3 className="text-3xl font-black uppercase italic tracking-tighter text-neutral-900">
//                         {activeTab.title}
//                       </h3>
//                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
//                         {activeTab.seoTitle || "Eng sara tanlovlar faqat bizda"}
//                       </p>
//                     </div>
//                     <Sparkles className="text-pink-200" size={32} />
//                   </div>

//                   <div className="grid flex-1 grid-cols-2 gap-8">
//                     {/* LINKS AREA */}
//                     <div className="space-y-4">
//                       <p className="text-[11px] font-black uppercase tracking-widest text-pink-600">
//                         Ommabop bo'limlar
//                       </p>
//                       <div className="flex flex-col gap-3">
//                         <Link
//                           href={`/category/${activeTab.slug}`}
//                           className="text-sm font-bold text-neutral-500 transition-colors hover:text-neutral-900"
//                         >
//                           Barcha mahsulotlar
//                         </Link>
//                         <Link
//                           href="#"
//                           className="text-sm font-bold text-neutral-500 transition-colors hover:text-neutral-900"
//                         >
//                           Yangi kelganlar
//                         </Link>
//                         <Link
//                           href="#"
//                           className="text-sm font-bold text-neutral-500 transition-colors hover:text-neutral-900"
//                         >
//                           Chegirmadagi mahsulotlar
//                         </Link>
//                       </div>
//                     </div>

//                     {/* DYNAMIC IMAGE BLOCK - Kategoriya rasmini katta qilib ko'rsatamiz */}
//                     <div className="group relative overflow-hidden rounded-[2rem] bg-neutral-50">
//                       {activeTab.image && (
//                         <Image
//                           src={activeTab.image}
//                           alt={activeTab.title}
//                           fill
//                           className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
//                         />
//                       )}
//                       <div className="absolute inset-0 flex items-end bg-gradient-to-t from-white/80 to-transparent p-6">
//                         <Link
//                           href={`/category/${activeTab.slug}`}
//                           className="w-full rounded-xl bg-neutral-900 py-3 text-center text-[10px] font-black uppercase tracking-widest text-white shadow-xl transition-all active:scale-95"
//                         >
//                           Bo'limga o'tish
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  ImageIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types";
import Image from "next/image";

interface Props {
  categories: ICategory[];
}

export default function KatalogMenu({ categories }: Props) {
  // const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ICategory | null>(
    categories[0] || null,
  );
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* KATALOG TUGMASI */}
          <NavigationMenuTrigger className="group h-12 gap-3 rounded-2xl bg-pink-600 px-6 text-white shadow-[0_10px_25px_-5px_rgba(219,39,119,0.3)] transition-all hover:bg-pink-700 hover:text-white focus:bg-pink-700 active:scale-95">
            <LayoutGrid
              size={20}
              className="transition-transform duration-500 group-data-[state=open]:rotate-90"
            />
            <span className="text-sm font-black uppercase tracking-wider">
              Katalog
            </span>
          </NavigationMenuTrigger>

          {/* MEGA MENU CONTENT */}
          <NavigationMenuContent className="z-[150]">
            <div className="flex w-[850px] overflow-hidden bg-[#FCFCFD]">
              <div className="w-[300px] border-r border-neutral-200/70 bg-white p-4">
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <div
                      key={cat._id}
                      onMouseEnter={() => setActiveTab(cat)}
                      className={cn(
                        "group flex cursor-pointer items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300",
                        activeTab?._id === cat._id
                          ? "bg-pink-50/80 shadow-[0_10px_20px_-5px_rgba(219,39,119,0.1)] ring-1 ring-pink-100"
                          : "hover:bg-neutral-50",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {/* KATEGORIYA RASMI - IXCHAM VA CHIROYLI */}
                        <div
                          className={cn(
                            "relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border transition-all duration-500",
                            activeTab?._id === cat._id
                              ? "scale-110 border-pink-200 bg-white shadow-sm"
                              : "border-neutral-100 bg-neutral-50 grayscale group-hover:border-pink-100 group-hover:grayscale-0",
                          )}
                        >
                          {cat.image ? (
                            <Image
                              src={cat.image}
                              alt={cat.title}
                              fill
                              className="object-contain p-1.5"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                              <ImageIcon
                                size={16}
                                className="text-neutral-300"
                              />
                            </div>
                          )}
                        </div>

                        {/* MATN - ZAMONAVIY TIPOGRAFIYA */}
                        <div className="flex flex-col">
                          <span
                            className={cn(
                              "text-[12px] font-black uppercase italic tracking-tighter transition-colors",
                              activeTab?._id === cat._id
                                ? "text-pink-600"
                                : "text-neutral-700",
                            )}
                          >
                            {cat.title}
                          </span>
                          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                            Kolleksiyani ko'rish
                          </span>
                        </div>
                      </div>

                      {/* O'NG TOMONDAGI BELGI */}
                      <div
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full transition-all",
                          activeTab?._id === cat._id
                            ? "translate-x-1 bg-pink-600 text-white"
                            : "text-neutral-300",
                        )}
                      >
                        <ChevronRight size={14} strokeWidth={3} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-white p-8">
                {activeTab && (
                  <div className="flex h-full flex-col">
                    {/* 1. HEADER - IXCHAM */}
                    <div className="mb-8 flex items-center justify-between border-b border-neutral-50 pb-5">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-600 shadow-[0_0_8px_rgba(219,39,119,0.5)]" />
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
                            Toifa
                          </span>
                        </div>
                        <h3 className="text-2xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
                          {activeTab.title}
                        </h3>
                      </div>

                      <div className="rounded-2xl bg-pink-50/50 p-2.5 text-pink-500 ring-1 ring-pink-100">
                        <Sparkles size={20} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* 2. ASOSIY GRID - 12 USTUNLI IXCHAM TAQSIMOT */}
                    <div className="grid grid-cols-12 gap-8">
                      {/* CHAP USTUN: HAVOLALAR */}
                      <div className="col-span-7 space-y-6">
                        <div className="space-y-4">
                          <p className="text-[9px] font-black uppercase tracking-widest text-pink-600 opacity-70">
                            Ommabop ruknlar
                          </p>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                            {[
                              "Yangi kelganlar",
                              "Hafta chegirmasi",
                              "Eng ommabop",
                              "Premium modellar",
                              "Aksessuarlar",
                              "Barcha brendlar",
                            ].map((item) => (
                              <Link
                                key={item}
                                href={`/category/${activeTab.slug}`}
                                className="group flex items-center gap-2 text-[12px] font-bold text-neutral-500 transition-all hover:text-neutral-900"
                              >
                                <div className="h-1 w-1 rounded-full bg-neutral-200 transition-all group-hover:w-2 group-hover:bg-pink-500" />
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* ISHONCH BELGILARI - IXCHAM */}
                        <div className="flex items-center gap-6 border-t border-neutral-50 pt-6">
                          <div className="flex items-center gap-2 text-neutral-400">
                            <ShieldCheck size={14} />
                            <span className="text-[8px] font-black uppercase leading-none tracking-widest">
                              Rasmiy Kafolat
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-400">
                            <Zap size={14} />
                            <span className="text-[8px] font-black uppercase leading-none tracking-widest">
                              Tezkor yetkazish
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* O'NG USTUN: TASVIR VA CTA */}
                      <div className="col-span-5 flex flex-col items-center justify-between gap-6">
                        <div className="relative aspect-square w-full max-w-[160px] drop-shadow-xl transition-transform duration-700 hover:scale-110">
                          {activeTab.image && (
                            <Image
                              src={activeTab.image}
                              alt={activeTab.title}
                              fill
                              className="object-contain"
                            />
                          )}
                        </div>

                        <Link
                          href={`/category/${activeTab.slug}`}
                          className="group flex w-full items-center justify-between rounded-xl bg-neutral-900 p-1.5 pl-5 text-white shadow-lg shadow-neutral-100 transition-all hover:bg-pink-600 active:scale-95"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            O'tish
                          </span>
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all group-hover:bg-white group-hover:text-pink-600">
                            <ArrowRight size={16} />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
