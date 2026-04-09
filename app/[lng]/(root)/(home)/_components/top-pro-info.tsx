"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Plus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";

interface Props {
  discountProducts: IProduct[];
}

export default function TopProInfo({ discountProducts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (discountProducts.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % discountProducts.length);
      // Qoida: agar son length dan kichik bo'lsa — o'zini qaytaradi. length ga yetganda 0  qaytadi! Chunki maslan 3 % 3 = 0 yani 3 bilan 3 ni qoldig'i 0 ✅
    }, 8000);

    return () => clearInterval(interval); // ← component unmount da tozalanadi
  }, [discountProducts.length, resetKey]);

  const activeProduct = discountProducts[currentIndex];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Progress dots */}
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
            {/* Matn */}
            <div className="col-span-5 flex flex-col justify-center space-y-7">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">
                  <span className="text-sm text-pink-600">
                    -{activeProduct.percent}%{" "}
                  </span>
                  chegirmada ulgurib qoling
                </span>
              </div>

              <h2 className="line-clamp-2 select-text text-7xl font-bold tracking-tighter text-black">
                {activeProduct.name}
              </h2>

              <p className="line-clamp-4 max-w-lg select-text text-lg leading-relaxed text-gray-500">
                {activeProduct.description}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <button className="group relative flex h-14 select-none items-center gap-2 rounded-full bg-pink-600 px-8 text-white shadow-md transition-all duration-200 hover:scale-[1.02]">
                  <span className="text-[17px] font-semibold">
                    Savatga qo'shish
                  </span>
                  <ShoppingBag className="size-[17px] transition-transform duration-300 group-hover:rotate-90" />
                </button>
                <Button
                  variant="outline"
                  className="group flex h-14 select-none items-center gap-2 rounded-full px-8 font-bold text-gray-900 transition-all duration-200 hover:scale-[1.02] hover:text-[#e91e63]"
                >
                  <span className="text-[17px] font-semibold">
                    Batafsil ko'rish
                  </span>
                  <Plus className="size-[17px] transition-transform duration-300 group-hover:rotate-180" />
                </Button>
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
