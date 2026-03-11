import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LayersPlus, Search } from "lucide-react";

import { categories } from "@/components/constants";
import Image from "next/image";

async function Page() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Barcha Kategoriyalar
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Saytdagi barcha kategoriyalar
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* 1. SMART SEARCH - O'zgacha Glassmorphism uslubida */}
          <div className="group relative w-full max-w-md">
            {/* Inputni o'rab turuvchi nurli chegara (Hoverda pushti/ko'k yonadi) */}
            <div className="absolute -inset-0.5 rounded-[1.25rem] bg-gradient-to-r from-blue-500/20 to-pink-500/20 opacity-0 blur transition duration-500 group-focus-within:opacity-100" />

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Kategoriyalardan izlash..."
                className="h-12 w-full rounded-[1.25rem] border border-white/5 bg-white/5 pl-14 pr-6 text-sm font-bold text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
              />

              {/* Ikonka - Fokus bo'lganda rangi o'zgaradi */}
              <div className="absolute left-5 text-slate-500 transition-colors duration-300 group-focus-within:text-blue-500">
                <Search size={20} strokeWidth={2.5} />
              </div>

              {/* Kichik qidiruv ko'rsatkichi (K tugmasi kabi) */}
              <div className="absolute right-4 hidden items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 md:flex">
                <span className="text-[10px] font-black uppercase text-slate-500">
                  Search
                </span>
              </div>
            </div>
          </div>

          {/* 2. ACTION BUTTON - Senior "Elastic" Style */}
          <Button className="group relative h-12 overflow-hidden rounded-[1.25rem] bg-blue-600 px-14 shadow-lg shadow-blue-600/20 transition-all duration-500 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95">
            {/* Tugma ichidagi "Liquid" effekt (Hoverda o'ngga siljiydi) */}
            <div className="absolute inset-0 translate-x-[-100%] rounded-[1.25rem] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:rotate-180">
                <LayersPlus size={18} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
                Kategoriya kiritish
              </span>
            </div>

            {/* Tugma chetidagi nozik nur */}
            <div className="absolute inset-0 rounded-[1.25rem] border border-white/10" />
          </Button>
        </div>
      </div>
      {/* Headerdan keyin qo'shing */}

      <div className="grid grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            className="group relative flex cursor-pointer flex-col items-center"
            key={item.url}
          >
            <div className="ease-[cubic-bezier(0.23,1,0.32,1)] relative aspect-square w-full overflow-hidden rounded-full bg-[#F5F5F7] transition-all duration-700 group-hover:rounded-full group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className='pointer-events-none absolute inset-0 z-10 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-[0.03]' />

              <Image
                src={item.url}
                alt={item.title}
                fill
                className="rounded-[2.5rem] object-cover p-8 transition-transform duration-700 group-hover:scale-110 group-hover:rounded-full"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="translate-y-4 scale-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-600 shadow-xl">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-sora text-[15px] font-bold tracking-tight text-neutral-400 transition-colors group-hover:text-pink-400">
                {item.title}
              </h3>
              <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-white transition-all duration-500 group-hover:w-full" />
            </div>

            <span className="absolute -right-2 -top-4 select-none text-[60px] font-black text-pink-500/40 transition-opacity group-hover:opacity-10">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
