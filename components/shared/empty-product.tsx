"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // SearchX ko'proq mos keladi
import Image from "next/image";
import { motion } from "framer-motion";

export default function EmptyCategory() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <motion.div
        className="relative size-60"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/menejer/nopro.webp"}
          alt="empty favorites"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Kichik sarlavha */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 text-[9px] font-black uppercase tracking-[0.5em] text-neutral-400"
      >
        Natija topilmadi
      </motion.p>

      {/* Asosiy Sarlavha */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-black uppercase italic leading-none tracking-tighter text-neutral-900"
      >
        Hozircha <span className="text-pink-600">bo&apos;sh!</span>
      </motion.h1>

      {/* Izoh matni */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-4 max-w-[380px] text-xs font-bold uppercase leading-relaxed tracking-tight text-neutral-400"
      >
        Ushbu bo&apos;limda hozircha mahsulotlar mavjud emas. Tez orada yangi
        tovarlar qo&apos;shiladi!
      </motion.p>

      {/* Tugma qismi */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="group flex h-12 items-center gap-2 rounded-2xl bg-pink-600 px-8 text-[11px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
        >
          Mahsulotlarga o&apos;tish
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
