"use client";
import {
  Search,
  Sparkles,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ShieldCheck,
} from "lucide-react";

export default function SidebarFilter() {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      <div className="space-y-8">
        {/* Section: Bo'lim ichida qidiruv */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Qidiruv
          </h3>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Model yoki brend..."
              className="h-12 w-full rounded-2xl border-none bg-neutral-50 pl-11 pr-4 text-xs font-bold outline-none ring-1 ring-neutral-100 transition-all focus:ring-2 focus:ring-pink-500/20"
            />
          </div>
        </div>

        {/* Section: Narx filtri */}
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Narx oralig&apos;i
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Dan"
              className="h-11 rounded-xl bg-neutral-50 px-3 text-xs font-bold outline-none ring-1 ring-neutral-100 focus:ring-2 focus:ring-pink-500/20"
            />
            <input
              type="number"
              placeholder="Gacha"
              className="h-11 rounded-xl bg-neutral-50 px-3 text-xs font-bold outline-none ring-1 ring-neutral-100 focus:ring-2 focus:ring-pink-500/20"
            />
          </div>
        </div>

        {/* Section: Saralash (Quick Sort) */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Saralash
          </h3>
          <div className="flex flex-col gap-2">
            <button className="flex h-12 items-center gap-3 rounded-2xl bg-pink-600 px-4 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-pink-700">
              <Sparkles size={14} /> Yangilari
            </button>
            <button className="flex h-12 items-center gap-3 rounded-2xl border border-neutral-100 px-4 text-[10px] font-black uppercase tracking-widest text-neutral-600 transition-all hover:border-pink-500 hover:text-pink-600">
              <ArrowDownWideNarrow size={14} /> Arzonroq
            </button>
            <button className="flex h-12 items-center gap-3 rounded-2xl border border-neutral-100 px-4 text-[10px] font-black uppercase tracking-widest text-neutral-600 transition-all hover:border-pink-500 hover:text-pink-600">
              <ArrowUpWideNarrow size={14} /> Qimmatroq
            </button>
          </div>
        </div>

        {/* Ad: Kichik reklama yoki ma'lumot */}
        <div className="rounded-3xl bg-pink-50 p-5">
          <div className="mb-2 flex items-center gap-2 text-pink-600">
            <ShieldCheck size={16} />
            <span className="text-[14px] font-black uppercase">
              Rasmiy kafolat
            </span>
          </div>
          <p className="text-[11px] font-medium leading-relaxed text-pink-900/60">
            Barcha mahsulotlar Texnotech sifat nazoratidan o&apos;tgan.
          </p>
        </div>
      </div>
    </div>
  );
}
