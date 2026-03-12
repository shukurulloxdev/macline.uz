"use client";

import {
  Search,
  ChevronRight,
  SlidersHorizontal,
  Sparkles,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
} from "lucide-react";

export default function CategoryControls({
  slug,
  total,
}: {
  slug: string;
  total: number;
}) {
  const title = slug.replace(/-/g, " ");

  return (
    <div className="space-y-6">
      {/* 1 & 2: PATH VA NOM (TARTIBLI) */}
      <div className="flex flex-col gap-2">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
          <span>Katalog</span>
          <ChevronRight size={10} />
          <span className="italic text-pink-600">{title}</span>
        </nav>
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-neutral-900">
            {title}
          </h1>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-500">
            {total} mahsulot
          </span>
        </div>
      </div>

      {/* 3 & 4: ACTION BAR (FILTERLAR VA SEARCH) */}
      <div className="grid grid-cols-1 items-center gap-4 rounded-[2rem] border border-neutral-100 bg-white p-3 shadow-sm lg:grid-cols-12">
        {/* SEARCH INPUT */}
        <div className="relative lg:col-span-4">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Bo'lim ichidan izlash..."
            className="h-12 w-full rounded-xl border-none bg-neutral-50 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:bg-neutral-100 focus:ring-2 focus:ring-pink-500/20"
          />
        </div>

        {/* QUICK SORT BUTTONS */}
        <div className="flex items-center justify-center gap-2 border-x border-neutral-100 px-4 lg:col-span-4">
          <button className="flex h-12 items-center gap-2 rounded-xl bg-neutral-900 px-4 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-pink-600 active:scale-95">
            <Sparkles size={14} /> Yangilari
          </button>
          <button className="flex h-12 items-center gap-2 rounded-xl border border-neutral-100 px-4 text-[10px] font-black uppercase tracking-widest text-neutral-600 transition-all hover:border-pink-500 hover:text-pink-600">
            <ArrowDownWideNarrow size={14} /> Arzon
          </button>
          <button className="flex h-12 items-center gap-2 rounded-xl border border-neutral-100 px-4 text-[10px] font-black uppercase tracking-widest text-neutral-600 transition-all hover:border-pink-500 hover:text-pink-600">
            <ArrowUpWideNarrow size={14} /> Qimmat
          </button>
        </div>

        {/* PRICE RANGE INPUTS */}
        <div className="flex items-center gap-2 lg:col-span-4">
          <div className="flex flex-1 items-center rounded-xl bg-neutral-50 px-3 ring-1 ring-neutral-100 transition-all focus-within:ring-pink-500/50">
            <span className="mr-2 text-[10px] font-bold uppercase text-neutral-400">
              Dan
            </span>
            <input
              type="number"
              placeholder="0"
              className="h-12 w-full bg-transparent text-xs font-bold outline-none"
            />
          </div>
          <div className="flex flex-1 items-center rounded-xl bg-neutral-50 px-3 ring-1 ring-neutral-100 transition-all focus-within:ring-pink-500/50">
            <span className="mr-2 text-[10px] font-bold uppercase text-neutral-400">
              Gacha
            </span>
            <input
              type="number"
              placeholder="max"
              className="h-12 w-full bg-transparent text-xs font-bold outline-none"
            />
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-600 text-white shadow-lg shadow-pink-200 transition-all hover:bg-pink-700 active:scale-90">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
