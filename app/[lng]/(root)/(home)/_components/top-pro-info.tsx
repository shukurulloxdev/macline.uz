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
    <section className="relative overflow-hidden bg-white py-6 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* DESKTOP PROGRESS DOTS (Mobil qurilmada yashirinadi) */}
        <div className="mb-8 hidden items-center gap-2 md:flex">
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
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 md:grid md:grid-cols-12 md:items-center"
            // Drag faqat mobil uchun qulayroq
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
            {/* 1. RASM (Mobilda Birinchi turadi) */}
            <div className="order-1 col-span-1 md:order-2 md:col-span-6">
              <div className="relative aspect-square w-full scale-95 transition-transform duration-500 hover:scale-100 md:w-[90%]">
                <Image
                  src={activeProduct.images[0]}
                  alt={activeProduct.name}
                  fill
                  className="object-contain"
                  priority
                />

                {/* MOBIL PROGRESS BAR (Rasm ostida chiroyli chiqadi) */}
                <div className="absolute -bottom-4 left-0 h-1 w-full overflow-hidden rounded-full bg-pink-50 md:hidden">
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
            <div className="order-2 col-span-1 space-y-5 text-center md:order-1 md:col-span-5 md:text-left">
              <div className="flex flex-col items-center gap-2 md:items-start">
                {activeProduct.percent && (
                  <span className="inline-block rounded-full bg-pink-50 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-pink-600">
                    -{activeProduct.percent}% Chegirma
                  </span>
                )}
                <h2 className="text-4xl font-bold tracking-tighter text-black md:text-7xl">
                  {activeProduct.name}
                </h2>
              </div>

              {/* <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-500 md:mx-0 md:text-lg">
                {activeProduct.description}
              </p> */}

              <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-center md:justify-start">
                <button
                  onClick={() => {
                    if (!isBasket) dispatch(toggleBasket(activeProduct._id));
                    else router.push("/shopping/cart");
                  }}
                  className={cn(
                    "flex h-14 w-full items-center justify-center gap-3 rounded-full px-8 text-white shadow-lg transition-all active:scale-95 sm:w-auto",
                    isBasket
                      ? "bg-emerald-500 shadow-emerald-100"
                      : "bg-pink-600 shadow-pink-100",
                  )}
                >
                  <span className="font-bold">
                    {isBasket ? "Savatga o'tish" : "Savatga qo'shish"}
                  </span>
                  {isBasket ? (
                    <ArrowRight size={18} />
                  ) : (
                    <ShoppingBag size={18} />
                  )}
                </button>

                <Link
                  href={`/product/${activeProduct._id}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="h-14 w-full rounded-full border-2 border-neutral-100 px-8 font-bold hover:bg-neutral-50 active:scale-95"
                  >
                    Batafsil
                    <Plus size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3. DESKTOP VERTICAL PROGRESS (Faqat Desktop) */}
            <div className="col-span-1 hidden justify-end md:flex">
              <div className="relative h-64 w-1.5 overflow-hidden rounded-full bg-pink-50">
                <motion.div
                  key={`desktop-bar-${currentIndex}`}
                  className="w-full bg-pink-600"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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
