"use client";
import React from "react";
import { RefreshCcw } from "lucide-react"; // Ikonkani mantiqan o'zgartirdim
import Image from "next/image";
import { motion } from "framer-motion";

interface NoOrderProps {
  status?: "new" | "process" | "finished";
}

export default function NoOrder({ status }: NoOrderProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <motion.div
        className="relative size-80"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/menejer/noorder.webp"}
          alt="no orders"
          fill
          className="object-contain grayscale-[0.3]" // Admin uchun biroz jiddiyroq
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400"
      >
        Tizim monitoringi
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-black uppercase italic leading-tight tracking-tighter text-pink-600"
      >
        {status === "new" && (
          <span className="text-white">Yangi buyurtmalar</span>
        )}
        {status === "process" && (
          <span className="text-white">Jarayondagi buyurtmalar</span>
        )}
        {status === "finished" && (
          <span className="text-white">Yakunlangan buyurtmalar</span>
        )}{" "}
        topilmadi!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-3 max-w-xs text-xs font-bold uppercase tracking-tight text-neutral-400"
      >
        Hozircha hech qanday buyurtma kelib tushmagan. Yangi so&apos;rovlarni
        shu yerda kuzatishingiz mumkin.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <button
          onClick={() => window.location.reload()}
          className="group flex h-14 items-center gap-3 rounded-2xl bg-pink-500 px-10 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-pink-600 active:scale-95"
        >
          Ma&apos;lumotni yangilash
          <RefreshCcw
            size={14}
            strokeWidth={3}
            className="transition-transform duration-500 group-hover:rotate-180"
          />
        </button>
      </motion.div>
    </div>
  );
}
