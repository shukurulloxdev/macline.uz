import React from "react";
import { Button } from "@/components/ui/button";
import CategoryCardAd from "./_components/category-card-ad";
import { getCategories } from "@/actions/user-actions";
import { LayersPlus, Search } from "lucide-react";
import EmptyAdminCategoris from "@/components/shared/empty-admin-categoris";

async function Page() {
  const { data } = await getCategories();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-sora text-4xl font-black uppercase italic leading-tight tracking-tighter text-white">
            Barcha{" "}
            <span className="not-italic text-pink-600">Kategoriyalar</span>
          </h1>

          <p className="max-w-md text-[13px] font-medium leading-relaxed text-slate-400">
            Tizimdagi barcha kategoriyalar
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* 1. SMART SEARCH - O'zgacha Glassmorphism uslubida */}
          <div className="group relative w-full max-w-md">
            {/* Inputni o'rab turuvchi nurli chegara (Hoverda pushti/ko'k yonadi) */}
            <div className="absolute -inset-0.5 rounded-[1.25rem] bg-gradient-to-r from-blue-500/20 to-pink-500/20 opacity-0 blur transition duration-500 group-focus-within:opacity-100" />

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Kategoriyalardan izlash..."
                className="h-12 w-full rounded-xl border border-white/5 bg-white/5 pl-14 pr-6 text-sm font-bold text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10"
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
          <Button className="group relative h-12 overflow-hidden rounded-xl bg-blue-600 px-14 shadow-lg shadow-blue-600/20 transition-all duration-500 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95">
            {/* Tugma ichidagi "Liquid" effekt (Hoverda o'ngga siljiydi) */}
            <div className="absolute inset-0 -translate-x-full rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:rotate-180">
                <LayersPlus size={18} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
                Kategoriya kiritish
              </span>
            </div>

            {/* Tugma chetidagi nozik nur */}
            <div className="absolute inset-0 rounded-xl border border-white/10" />
          </Button>
        </div>
      </div>
      {/* Headerdan keyin qo'shing */}
      {data && data?.categories.length === 0 ? (
        <EmptyAdminCategoris />
      ) : (
        <div className="grid grid-cols-6 gap-4">
          {data?.categories.map((category, index) => (
            <CategoryCardAd
              category={category}
              index={index}
              key={category._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
