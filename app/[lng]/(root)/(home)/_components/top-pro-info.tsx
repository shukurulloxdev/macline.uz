"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Plus, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "@/redux/reducers/basketState";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  discountProducts: IProduct[];
}

export default function DiscountProInfo({ discountProducts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  console.log("discountProducts", discountProducts || []);

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
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };
  return (
    <section className="relative mt-4 overflow-hidden bg-white py-6">
      <div className="mx-auto max-w-7xl px-3">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-6"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // ← joyida qoladi
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) {
                // ← chapga surdi → keyingi
                setDirection(1);
                setResetKey((prev) => prev + 1);
                setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
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
            {/* 1. RASM (Mobilda Birinchi turadi) */}
            <div className="order-1 col-span-1">
              <div className="relative aspect-square w-full">
                <Image
                  src={activeProduct.images[0]}
                  alt={activeProduct.name}
                  fill
                  className="object-cover p-8"
                  priority
                />
                {/* <div className="absolute left-0 top-0">
                  Siz uchun -{activeProduct.percent}% chegirma
                </div> */}
                <div className="absolute left-0 top-0 z-20">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                    className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-xl"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 shadow-lg shadow-pink-200">
                      <span className="text-[10px] font-bold text-white">
                        %
                      </span>
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                        Maxsus Taklif
                      </span>
                      <span className="text-sm font-black text-black">
                        -{activeProduct.percent}% Chegirma
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute -bottom-1 left-0 h-1 w-full overflow-hidden rounded-full bg-pink-50">
                  <motion.div
                    key={`mobile-bar-${currentIndex}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-pink-600"
                  />
                </div>
              </div>
            </div>

            {/* 2. MATN VA TUGMALAR (Mobilda Ikkinchi) */}
            {/* <div className="order-2 col-span-1 space-y-5 text-center">
              <div className="flex flex-col items-center gap-3 md:items-start">
                {activeProduct.percent && (
                  <span className="inline-block rounded-full bg-pink-50 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-pink-600">
                    -{activeProduct.percent}% Chegirma
                  </span>
                )}
                <h2 className="line-clamp-2 font-inter text-[28px] font-semibold tracking-tighter text-black">
                  {activeProduct.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 pt-4">
                <Link href={`/product/${activeProduct._id}`} className="">
                  <Button
                    variant="outline"
                    className="h-14 w-full rounded-full border-2 border-neutral-100 bg-neutral-50 px-8 font-bold hover:bg-pink-50 active:scale-95"
                  >
                    Batafsil
                    <Plus size={18} className="ml-2" />
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                    else router.push("/shopping/cart");
                  }}
                  className={cn(
                    "flex h-14 items-center justify-center gap-3 rounded-full px-8 text-white shadow-lg transition-all active:scale-95",
                    isBasket
                      ? "bg-emerald-500 shadow-emerald-100"
                      : "bg-pink-600 shadow-pink-100",
                  )}
                >
                  <span className="font-bold">
                    {isBasket ? "O'tish" : "Savatga"}
                  </span>
                  {isBasket ? (
                    <ArrowRight size={18} />
                  ) : (
                    <ShoppingBag size={18} />
                  )}
                </button>
              </div>
            </div> */}
            <div className="order-2 col-span-1 space-y-6 text-center">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink-600">
                    {activeProduct.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span className="text-[11px] font-medium text-neutral-400">
                    Omborda: {activeProduct.count} dona
                  </span>
                </div>
                <h2 className="line-clamp-2 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
                  {activeProduct.name}
                </h2>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-pink-600 md:text-4xl">
                    {new Intl.NumberFormat("uz-UZ").format(activeProduct.price)}{" "}
                    <small className="text-sm">SO'M</small>
                  </span>
                  {activeProduct.percent && (
                    <span className="text-lg text-neutral-400 line-through decoration-pink-500/30">
                      {new Intl.NumberFormat("uz-UZ").format(
                        activeProduct.price +
                          (activeProduct.price * activeProduct.percent) / 100,
                      )}
                    </span>
                  )}
                </div>
                <p className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  Muddatli to'lovga:{" "}
                  {new Intl.NumberFormat("uz-UZ").format(
                    Math.floor(activeProduct.price / 12),
                  )}{" "}
                  so'mdan / 12 oy
                </p>
              </div>

              {/* <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <div className="flex items-center gap-1.5 rounded-xl border border-neutral-200/50 bg-neutral-100 px-3 py-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-bold text-neutral-700">
                    {activeProduct.kafolat || "1 Yil"} Kafolat
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-neutral-200/50 bg-neutral-100 px-3 py-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="text-[11px] font-bold text-neutral-700">
                    Bepul Yetkazish
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-neutral-200/50 bg-neutral-100 px-3 py-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold text-neutral-700">
                    Original Apple
                  </span>
                </div>
              </div> */}

              {/* <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <button
                  onClick={() => {
                    if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                    else router.push("/shopping/cart");
                  }}
                  className={cn(
                    "flex- relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 transition-all active:scale-95",
                    isBasket
                      ? "bg-black text-white"
                      : "bg-pink-600 text-white shadow-xl shadow-pink-200 hover:bg-pink-700",
                  )}
                >
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-medium uppercase tracking-wider opacity-70">
                      {isBasket ? "Savatda mavjud" : "Hoziroq xarid qilish"}
                    </span>
                    <span className="text-lg font-bold">
                      {isBasket ? "Savatga o'tish" : "Savatga qo'shish"}
                    </span>
                  </div>
                  {isBasket ? (
                    <ArrowRight size={20} />
                  ) : (
                    <ShoppingBag size={20} />
                  )}
                </button>

                <Link href={`/product/${activeProduct._id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="h-16 w-full rounded-2xl border-2 border-neutral-100 bg-white px-8 text-base font-bold text-black hover:bg-neutral-50 active:scale-95"
                  >
                    Batafsil
                    <Plus size={20} className="ml-2 text-neutral-400" />
                  </Button>
                </Link>
              </div> */}
              <div className="grid grid-cols-2 items-center gap-3 pt-2">
                <Link href={`/product/${activeProduct._id}`} className="">
                  <Button
                    variant="outline"
                    className="h-14 w-full rounded-full border-2 border-neutral-100 bg-neutral-50 px-8 font-bold hover:bg-pink-50 active:scale-95"
                  >
                    Batafsil
                    <Plus size={18} className="ml-2" />
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                    else router.push("/shopping/cart");
                  }}
                  className={cn(
                    "flex h-14 items-center justify-center gap-3 rounded-full px-8 text-white shadow-lg transition-all active:scale-95",
                    isBasket
                      ? "bg-emerald-500 shadow-emerald-100"
                      : "bg-pink-600 shadow-pink-100",
                  )}
                >
                  <span className="font-bold">
                    {isBasket ? "O'tish" : "Savatga"}
                  </span>
                  {isBasket ? (
                    <ArrowRight size={18} />
                  ) : (
                    <ShoppingBag size={18} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
          {/* <div className="flex items-center gap-2">
            {discountProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  setResetKey((prev) => prev + 1);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-10 bg-pink-600" : "w-2 bg-pink-200"
                }`}
              />
            ))}
          </div> */}
        </AnimatePresence>
        <div className="mt-6 flex items-center justify-center gap-2 backdrop-blur-xl md:hidden">
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
                  ? "scale-110 bg-pink-500"
                  : "bg-neutral-300 hover:bg-pink-300"
              }`}
              // aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { ShoppingBag, Plus, Check, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { IProduct } from "@/types";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleBasket } from "@/redux/reducers/basketState";
// import Link from "next/link";
// import { RootState } from "@/redux/store";
// import { cn } from "@/lib/utils";
// import { useRouter } from "next/navigation";

// interface Props {
//   discountProducts: IProduct[];
// }

// export default function DiscountProInfo({ discountProducts }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [resetKey, setResetKey] = useState(0);

//   useEffect(() => {
//     if (discountProducts.length <= 1) return;

//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
//       // Qoida: agar son length dan kichik bo'lsa — o'zini qaytaradi. length ga yetganda 0  qaytadi! Chunki maslan 3 % 3 = 0 yani 3 bilan 3 ni qoldig'i 0 ✅
//     }, 8000);

//     return () => clearInterval(interval); // ← component unmount da tozalanadi
//   }, [discountProducts.length, resetKey]);

//   const activeProduct = discountProducts[currentIndex];

//   const variants = {
//     enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
//     center: { opacity: 1, x: 0 },
//     exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
//   };

//   const dispatch = useDispatch();
//   const basketProducts = useSelector(
//     (state: RootState) => state.baskets.basketIds,
//   );
//   const isBasket = basketProducts.find((pro) => pro.id === activeProduct._id);
//   const router = useRouter();
//   return (
//     <section className="relative overflow-hidden bg-white py-10">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Progress dots */}
{
  /* <div className="mb-6 flex items-center gap-2">
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
</div> */
}

//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="relative grid grid-cols-12 gap-4"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }} // ← joyida qoladi
//             dragElastic={0.1}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -50) {
//                 // ← chapga surdi → keyingi
//                 setDirection(1);
//                 setResetKey((prev) => prev + 1);
//                 setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
//               } else if (info.offset.x > 50) {
//                 // ← o'ngga surdi → oldingisi
//                 setDirection(-1);
//                 setResetKey((prev) => prev + 1);
//                 setCurrentIndex((prev) =>
//                   prev === 0 ? discountProducts.length - 1 : prev - 1,
//                 );
//               }
//             }}
//           >
//             {/* Matn */}
//             <div className="col-span-5 flex flex-col justify-center space-y-7">
//               <div className="flex items-center gap-3">
//                 {activeProduct.discount && (
//                   <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">
//                     <span className="text-sm text-pink-600">
//                       -{activeProduct.percent}%{" "}
//                     </span>
//                     chegirmada ulgurib qoling
//                   </span>
//                 )}
//               </div>

//               <h2 className="line-clamp-2 select-text text-7xl font-bold tracking-tighter text-black">
//                 {activeProduct.name}
//               </h2>

//               <p className="line-clamp-4 max-w-lg select-text text-lg leading-relaxed text-gray-500">
//                 {activeProduct.description}
//               </p>

//               <div className="flex items-center gap-4 pt-4">
//                 <button
//                   onClick={() => {
//                     if (!isBasket) {
//                       dispatch(toggleBasket(activeProduct._id));
//                     } else {
//                       router.push("/shopping/cart");
//                     }
//                   }}
//                   className={cn(
//                     "group relative flex h-14 select-none items-center gap-2 rounded-full px-8 text-white shadow-md transition-all duration-200 hover:scale-[1.02]",
//                     isBasket ? "bg-emerald-500" : "bg-pink-600",
//                   )}
//                 >
//                   <span className="text-[17px] font-semibold">
//                     {isBasket ? "Savatga o'tish" : "Savatga qo'shish"}
//                   </span>
//                   {isBasket ? (
//                     <ArrowRight className="size-[17px] transition-transform duration-300 group-hover:-rotate-90" />
//                   ) : (
//                     <ShoppingBag className="size-[17px] transition-transform duration-300 group-hover:rotate-90" />
//                   )}
//                 </button>
//                 <Link href={`/product/${activeProduct._id}`}>
//                   <Button
//                     variant="outline"
//                     className="group flex h-14 select-none items-center gap-2 rounded-full px-8 font-bold text-gray-900 transition-all duration-200 hover:scale-[1.02] hover:text-[#e91e63]"
//                   >
//                     <span className="text-[17px] font-semibold">
//                       Batafsil ko'rish
//                     </span>
//                     <Plus className="size-[17px] transition-transform duration-300 group-hover:rotate-180" />
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             {/* Rasm */}
//             <div className="col-span-6 flex items-center justify-center">
//               <div className="relative aspect-square w-[90%]">
//                 <Image
//                   src={activeProduct.images[0]}
//                   alt={activeProduct.name}
//                   fill
//                   className="pointer-events-none cursor-pointer select-none object-cover"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Progress bar */}
//             <div className="col-span-1 flex justify-end">
//               <div className="relative h-full w-2 cursor-progress overflow-hidden rounded-full bg-pink-100">
//                 <motion.div
//                   key={`bar-${currentIndex}`}
//                   className="origin-top rounded-full bg-pink-600/70"
//                   style={{ width: "8px" }}
//                   initial={{ height: "0%" }}
//                   animate={{ height: "100%" }}
//                   transition={{ duration: 8, ease: "linear" }}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
