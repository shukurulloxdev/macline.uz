// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ShoppingBag,
//   Plus,
//   ArrowRight,
//   ShieldCheck,
//   Truck,
//   MoveRight,
// } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { IProduct } from "@/types";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleBasket } from "@/redux/reducers/basketState";
// import Link from "next/link";
// import { RootState } from "@/redux/store";
// import { cn, formatCurrentPrice } from "@/lib/utils";
// import { useRouter } from "next/navigation";

// interface Props {
//   discountProducts: IProduct[];
// }

// export default function NewsProducts({ discountProducts }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [resetKey, setResetKey] = useState(0);

//   useEffect(() => {
//     if (discountProducts.length <= 1) return;
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [discountProducts.length, resetKey]);

//   const activeProduct = discountProducts[currentIndex];
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const basketProducts = useSelector(
//     (state: RootState) => state.baskets.basketIds,
//   );
//   const isBasket = basketProducts.find((pro) => pro.id === activeProduct?._id);

//   if (!activeProduct) return null;

//   return (
//     <div className="mx-auto max-w-7xl px-3 py-4">
// <div className="mb-5 flex items-center justify-between px-1">
//   <div className="flex flex-col gap-0.5">
//     <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
//       Yangilik mahsulotlar
//     </h2>
//     <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
//   </div>

//   <Link
//     href={"/category/tops"}
//     className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
//   >
//     <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
//       <span className="font-bold md:hidden">Hammasi</span>
//       <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
//         Hammasini ko&apos;rish
//       </span>
//     </span>

//     <div className="flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
//       <MoveRight size={16} strokeWidth={2.5} className="text-pink-600" />
//     </div>
//   </Link>
// </div>
//       <AnimatePresence mode="wait" custom={direction}>
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//           className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragEnd={(_, info) => {
//             if (info.offset.x < -50) {
//               setDirection(1);
//               setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
//             } else if (info.offset.x > 50) {
//               setDirection(-1);
//               setCurrentIndex((prev) =>
//                 prev === 0 ? discountProducts.length - 1 : prev - 1,
//               );
//             }
//             setResetKey((prev) => prev + 1);
//           }}
//         >
//           {/* PRODUCT IMAGE SECTION (IXCHAM) */}
//           <div className="relative aspect-[4/3] w-full bg-white">
//             <Image
//               src={activeProduct.images[0]}
//               alt={activeProduct.name}
//               fill
//               className="object-contain p-6"
//               priority
//             />

//             {/* Floating Badge */}
//             <div className="absolute left-3 top-3">
//               <div className="flex items-center gap-1.5 rounded-full bg-pink-600 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
//                 <span className="text-white">-{activeProduct.percent}%</span>
//                 <span className="h-2 w-[1px] bg-white/20" />
//                 <span>CHEGIRMA</span>
//               </div>
//             </div>
//             <div className="absolute right-3 top-3">
//               <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold text-emerald-600 backdrop-blur-md">
//                 SOTUVDA: {activeProduct.count}
//               </div>
//             </div>

//             {/* Top Right Mini Info */}
//             {/* <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
//               <div className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
//                 SOTUVDA: {activeProduct.count}
//               </div>
//             </div> */}

//             {/* Progress Line */}
//             <div className="absolute bottom-0 left-0 h-1 w-full bg-pink-50">
//               <motion.div
//                 key={`progress-${currentIndex}`}
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 8, ease: "linear" }}
//                 className="h-full bg-pink-600"
//               />
//             </div>
//           </div>

//           {/* CONTENT SECTION (IXCHAM VA BOY) */}
//           <div className="flex flex-col p-5">
//             <div className="mb-4 space-y-1">
//               <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
//                 {activeProduct.category}
//               </p>
//               <h2 className="line-clamp-1 text-xl font-extrabold tracking-tight text-black">
//                 {activeProduct.name}
//               </h2>
//             </div>

//             {/* Quick Specs Grid */}
//             <div className="mb-5 grid grid-cols-2 gap-2 border-y border-neutral-100 py-3">
//               <div className="flex items-center gap-2">
//                 <div className="rounded-lg bg-pink-50 p-1.5 text-pink-600">
//                   <ShieldCheck size={14} />
//                 </div>
//                 <span className="text-[10px] font-bold text-neutral-600">
//                   {activeProduct.kafolat || "2 Yil"} Kafolat
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
//                   <Truck size={14} />
//                 </div>
//                 <span className="text-[10px] font-bold text-neutral-600">
//                   Bepul Yetkazish
//                 </span>
//               </div>
//             </div>

//             {/* Price Area */}
//             <div className="mb-5 flex items-end justify-between">
//               <div className="flex flex-col">
//                 <span className="text-[10px] font-bold text-neutral-400">
//                   YANGI NARX
//                 </span>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-2xl font-black text-black">
//                     {formatCurrentPrice(
//                       activeProduct.price,
//                       activeProduct.percent,
//                     )}{" "}
//                     <span className="text-xl">so&apos;m</span>
//                   </span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="text-[9px] font-bold text-emerald-600">
//                   MUDDATLI TO'LOV
//                 </p>
//                 <p className="text-xs font-black text-black">12 oy gacha</p>
//               </div>
//             </div>

//             {/* Buttons Area */}
//             <div className="flex gap-2">
//               <Link href={`/product/${activeProduct._id}`} className="flex-1">
//                 <button className="h-12 w-full rounded-2xl border-2 border-neutral-100 bg-neutral-50 text-[13px] font-bold text-black transition-all active:scale-95">
//                   Batafsil
//                 </button>
//               </Link>
//               <button
//                 onClick={() => {
//                   if (!isBasket) dispatch(toggleBasket(activeProduct._id));
//                   else router.push("/shopping/cart");
//                 }}
//                 className={cn(
//                   "flex h-12 flex-[1.5] items-center justify-center gap-2 rounded-2xl text-[13px] font-bold text-white transition-all active:scale-95",
//                   isBasket ? "bg-emerald-500" : "bg-pink-600",
//                 )}
//               >
//                 {isBasket ? (
//                   <>
//                     <span>Savatga o'tish</span>
//                     <ArrowRight size={16} />
//                   </>
//                 ) : (
//                   <>
//                     <span>Savatga qo'shish</span>
//                     <ShoppingBag size={16} />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Indicators */}
//       <div className="mt-4 flex justify-center gap-1.5">
//         {discountProducts.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setDirection(i > currentIndex ? 1 : -1);
//               setCurrentIndex(i);
//               setResetKey((prev) => prev + 1);
//             }}
//             className={`h-1 rounded-full transition-all duration-300 ${
//               i === currentIndex ? "w-6 bg-pink-600" : "w-2 bg-neutral-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Plus, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "@/redux/reducers/basketState";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { cn, formatCurrentPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    }, 6000);
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

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <>
      <section className="relative bg-white py-4 md:hidden">
        <div className="mx-auto max-w-7xl px-3">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  setDirection(1);
                  setCurrentIndex(
                    (prev) => (prev + 1) % discountProducts.length,
                  );
                } else if (info.offset.x > 50) {
                  setDirection(-1);
                  setCurrentIndex((prev) =>
                    prev === 0 ? discountProducts.length - 1 : prev - 1,
                  );
                }
                setResetKey((prev) => prev + 1);
              }}
            >
              {/* 1. RASM (Kichraytirilgan va Ixcham) */}
              <div className="bg-white-300 relative mb-2 aspect-[5/4] w-[85%] max-w-[300px]">
                <Image
                  src={activeProduct.images[0]}
                  alt={activeProduct.name}
                  fill
                  className="object-contain p-2"
                  priority
                />
                <div className="absolute -left-5 top-1 z-20">
                  {activeProduct.discount && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-xl"
                    >
                      <span className="text-[11px] font-black text-pink-600">
                        -{activeProduct.percent}% Chegirma
                      </span>
                    </motion.div>
                  )}
                  {!activeProduct.discount && activeProduct.top && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-xl"
                    >
                      <span className="text-[11px] font-black text-pink-600">
                        Top | Mahsulot
                      </span>
                    </motion.div>
                  )}

                  {!activeProduct.discount && !activeProduct.top && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-xl"
                    >
                      <span className="text-[11px] font-black text-pink-600">
                        Siz uchun maxsus
                      </span>
                    </motion.div>
                  )}
                </div>

                <div className="absolute -bottom-2 left-1/2 h-[3px] w-24 -translate-x-1/2 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    key={`progress-${currentIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                    className="h-full bg-pink-600"
                  />
                </div>
              </div>

              {/* 2. MA'LUMOTLAR (Tartibli va Ixcham) */}
              <div className="w-full space-y-5 pt-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-pink-500">
                      {activeProduct.brand}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-200" />
                    <span className="text-[9px] font-bold uppercase text-neutral-400">
                      Kafolat: {activeProduct.kafolat || "1 oy"}
                    </span>
                  </div>
                  <h2 className="mx-auto line-clamp-2 max-w-[300px] text-xl font-bold leading-tight tracking-tight text-black">
                    {activeProduct.name}
                  </h2>
                </div>

                {/* Narx Bloki */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-black">
                      {formatCurrentPrice(
                        activeProduct.price,
                        activeProduct.percent,
                      )}
                      <span className="ml-1 text-[10px] font-bold">SO'M</span>
                    </span>

                    {activeProduct.discount && activeProduct.percent && (
                      <span className="text-xs text-neutral-300 line-through">
                        {new Intl.NumberFormat("uz-UZ").format(
                          activeProduct.price +
                            (activeProduct.price * activeProduct.percent) / 100,
                        )}
                      </span>
                    )}
                  </div>
                  {/* Bo'lib to'lash (ixchamroq) */}
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-md bg-neutral-50 px-2 py-0.5">
                    <span className="text-[10px] font-medium text-neutral-500">
                      Muddatli to'lov:
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      12 / oy gacha
                    </span>
                  </div>
                </div>

                {/* Tugmalar (Grid tizimida ixchamroq) */}
                <div className="grid grid-cols-2 gap-3 px-2">
                  <Link
                    href={`/product/${activeProduct._id}`}
                    className="w-full"
                  >
                    <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white text-xs font-bold text-black transition-all active:scale-95">
                      <span>Batafsil</span> <Plus size={14} />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                      else router.push("/shopping/cart");
                    }}
                    className={cn(
                      "flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-xs font-bold text-white transition-all active:scale-95",
                      isBasket
                        ? "bg-emerald-500"
                        : "bg-pink-600 shadow-sm shadow-neutral-200",
                    )}
                  >
                    <span>{isBasket ? "Savatga o'tish" : "Savatga"}</span>
                    {isBasket ? (
                      <ArrowRight size={14} />
                    ) : (
                      <ShoppingBag size={14} />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-2 backdrop-blur-xl md:hidden">
            {discountProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  setResetKey((prev) => prev + 1);
                }}
                className={`size-[5px] rounded-full transition-all duration-300 md:size-3 ${
                  i === currentIndex
                    ? "w-[15px] scale-110 bg-pink-500"
                    : "bg-neutral-300 hover:bg-pink-300"
                }`}
                aria-label={`Go to slide ${i}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-10 max-md:hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-center gap-2">
            {discountProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  setResetKey((prev) => prev + 1);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-pink-600" : "w-2 bg-pink-200"
                }`}
              />
            ))}
          </div>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative grid grid-cols-12 gap-4"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }} // ← joyida qoladi
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  // ← chapga surdi → keyingi
                  setDirection(1);
                  setResetKey((prev) => prev + 1);
                  setCurrentIndex(
                    (prev) => (prev + 1) % discountProducts.length,
                  );
                } else if (info.offset.x > 50) {
                  // ← o'ngga surdi → oldingisi
                  setDirection(-1);
                  setResetKey((prev) => prev + 1);
                  setCurrentIndex((prev) =>
                    prev === 0 ? discountProducts.length - 1 : prev - 1,
                  );
                }
              }}
            >
              {/* Matn */}
              <div className="col-span-5 flex flex-col justify-center space-y-7">
                <div className="flex items-center gap-3">
                  {activeProduct.discount && (
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">
                      <span className="text-sm text-pink-600">
                        -{activeProduct.percent}%{" "}
                      </span>
                      chegirmada ulgurib qoling
                    </span>
                  )}
                </div>
                <h2 className="line-clamp-2 select-text text-7xl font-bold tracking-tighter text-black">
                  {activeProduct.name}
                </h2>
                <p className="line-clamp-4 max-w-lg select-text text-lg leading-relaxed text-gray-500">
                  {activeProduct.description}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      if (!isBasket) {
                        dispatch(toggleBasket(activeProduct._id));
                      } else {
                        router.push("/shopping/cart");
                      }
                    }}
                    className={cn(
                      "group relative flex h-14 select-none items-center gap-2 rounded-full px-8 text-white shadow-md transition-all duration-200 hover:scale-[1.02]",
                      isBasket ? "bg-emerald-500" : "bg-pink-600",
                    )}
                  >
                    <span className="text-[17px] font-semibold">
                      {isBasket ? "Savatga o'tish" : "Savatga qo'shish"}
                    </span>
                    {isBasket ? (
                      <ArrowRight className="size-[17px] transition-transform duration-300 group-hover:-rotate-90" />
                    ) : (
                      <ShoppingBag className="size-[17px] transition-transform duration-300 group-hover:rotate-90" />
                    )}
                  </button>
                  <Link href={`/product/${activeProduct._id}`}>
                    <Button
                      variant="outline"
                      className="group flex h-14 select-none items-center gap-2 rounded-full px-8 font-bold text-gray-900 transition-all duration-200 hover:scale-[1.02] hover:text-[#e91e63]"
                    >
                      <span className="text-[17px] font-semibold">
                        Batafsil ko'rish
                      </span>
                      <Plus className="size-[17px] transition-transform duration-300 group-hover:rotate-180" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Rasm */}
              <div className="col-span-6 flex items-center justify-center">
                <div className="relative aspect-square w-[90%]">
                  <Image
                    src={activeProduct.images[0]}
                    alt={activeProduct.name}
                    fill
                    className="pointer-events-none cursor-pointer select-none object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Progress bar */}
              <div className="col-span-1 flex justify-end">
                <div className="relative h-full w-2 cursor-progress overflow-hidden rounded-full bg-pink-100">
                  <motion.div
                    key={`bar-${currentIndex}`}
                    className="origin-top rounded-full bg-pink-600/70"
                    style={{ width: "8px" }}
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 5.8, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
