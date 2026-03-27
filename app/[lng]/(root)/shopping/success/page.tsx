"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      {/* Floating rasm */}
      <motion.div
        className="relative size-80"
        animate={{
          y: [0, -16, 0], // pastdan tepaga va qaytib
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={"/menejer/ordersuc.webp"}
          alt="orderSucces"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500"
      >
        Muvaffaqiyatli
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-black uppercase italic leading-tight tracking-tighter text-neutral-900"
      >
        Buyurtmangiz <span className="text-pink-600">qabul qilindi!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-3 max-w-xs text-sm text-neutral-400"
      >
        Tez orada operatorimiz siz bilan bog'lanadi va buyurtmangizni
        tasdiqlaydi
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex items-center gap-3"
      >
        <Link
          href="/profile"
          className="flex h-12 items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-6 text-[11px] font-black uppercase tracking-widest text-neutral-700 transition-all hover:border-neutral-400 active:scale-95"
        >
          <ShoppingBag size={14} />
          Buyurtmalarim
        </Link>
        <Link
          href="/"
          className="group flex h-12 items-center gap-2 rounded-2xl bg-pink-600 px-6 text-[11px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
        >
          Bosh sahifa
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>
    </div>
  );
}
