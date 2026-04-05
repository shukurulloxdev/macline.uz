"use client";
import React from "react";
import Link from "next/link";
import { CopyPlus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EmptyAdminProducts() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <motion.div
        className="relative size-80"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/menejer/noproduct.webp"}
          alt="empty favorites"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400"
      >
        Sayt bo&apos;sh
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-black uppercase italic leading-tight tracking-tighter text-white"
      >
        Saytda mahsulot <span className="text-pink-600">yo&apos;q!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-3 max-w-xs text-sm text-neutral-400"
      >
        Saytga mahsulot qo&apos;shilsa shu yerda chiqadi
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <Link
          href="/admin/add-product"
          className="group flex h-12 items-center gap-2 rounded-2xl bg-pink-600 px-8 text-[11px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
        >
          Mahsulot q&apos;shish
          <CopyPlus
            size={14}
            strokeWidth={2.5}
            className="transition-transform group-hover:-translate-x-0.5"
          />
        </Link>
      </motion.div>
    </div>
  );
}
