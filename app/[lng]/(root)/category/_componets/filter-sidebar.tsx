"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn, formatQuery, formatQueryRemove } from "@/lib/utils";
import { debounce } from "lodash";
import {
  Search,
  Sparkles,
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ShieldCheck,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function SidebarFilter() {
  const [inpValue, setInpValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function hendleSearch(value: string) {
    if (value && value.length > 2) {
      const newUrl = formatQuery({
        params: searchParams.toString(),
        key: "search",
        toProducts: false,
        value,
      });

      router.push(newUrl);
    } else {
      const removedUrl = formatQueryRemove({
        params: searchParams.toString(),
        key: "search",
      });

      router.push(removedUrl);
    }
  }
  function handlePrice() {
    if (min && max) {
      const url = formatQuery({
        params: searchParams.toString(),
        key: "price",
        value: `${min}-${max}`,
        toProducts: false,
      });

      router.replace(url);
    } else {
      return toast.message(
        "Narxlarni belgilang, Msalan: 1 000 000 | 3 000 000 ",
      );
    }
  }
  function filterProducts(value: string) {
    const url = formatQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
      toProducts: false,
    });

    router.replace(url);
  }

  function deleteFilter() {
    const url = formatQueryRemove({
      params: searchParams.toString(),
      key: "filter",
    });

    router.replace(url);
  }

  const handleSearchDebounce = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      hendleSearch(e.target.value);
    }, 400),
    [],
  );

  useEffect(() => {
    if (!min && !max) {
      const price = searchParams.get("price");
      if (!price) return; // ← price yo'q bo'lsa hech narsa qilma

      const removedUrl = formatQueryRemove({
        params: searchParams.toString(),
        key: "price",
      });
      router.replace(removedUrl);
    }
  }, [min, max]);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    if (search) {
      setInpValue(search);
    }

    const price = searchParams.get("price") || "";
    if (!price) return;
    const [minStr, maxStr] = price.split("-");
    setMin(minStr || "");
    setMax(maxStr || "");
  }, [searchParams]);

  const filter = searchParams.get("filter");

  // Shuni ishlatamiz:
  const appliedPrice = searchParams.get("price") || "";
  const [appliedMin, appliedMax] = appliedPrice
    ? appliedPrice.split("-")
    : ["", ""];

  // Derived — re-render bo'lsa avtomatik hisoblanadi
  const isApplied = !!appliedPrice;
  const isChanged = isApplied && (min !== appliedMin || max !== appliedMax);
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      <div className="space-y-6">
        {/* Section: Bo'lim ichida qidiruv */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
            Qidiruv
          </h3>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              size={16}
            />
            <input
              type="text"
              value={inpValue}
              onChange={(e) => {
                setInpValue(e.target.value);
                handleSearchDebounce(e);
              }}
              placeholder="Model yoki brend..."
              className="h-12 w-full rounded-2xl border-none bg-neutral-100 pl-11 pr-4 text-xs font-bold outline-none ring-1 ring-neutral-100 transition-all focus:ring-2 focus:ring-pink-500/40"
            />
          </div>
        </div>

        {/* Section: Narx filtri */}
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
            Narx oralig&apos;i
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <NumericFormat
              placeholder="Dan"
              value={min}
              thousandSeparator=" "
              onValueChange={(values) => {
                setMin(values.value); // 🔥 bu RAW number (10000000)
              }}
              className="h-11 rounded-xl bg-neutral-100 px-3 text-xs font-bold outline-none ring-1 ring-neutral-100 focus:ring-2 focus:ring-pink-500/40"
            />
            <NumericFormat
              value={max}
              onValueChange={(values) => {
                setMax(values.value); // 🔥 bu RAW number (10000000)
              }}
              thousandSeparator=" "
              placeholder="Gacha"
              className="h-11 w-full rounded-xl bg-neutral-100 px-3 text-xs font-bold outline-none ring-1 ring-neutral-100 focus:ring-2 focus:ring-pink-500/40"
            />
          </div>
          <Button
            onClick={handlePrice}
            className={cn(
              "h-12 w-full rounded-xl text-sm transition-all duration-300 hover:scale-[1.01]",
              isApplied && !isChanged
                ? "bg-pink-600/90 hover:bg-pink-600"
                : "border border-neutral-200 bg-white text-neutral-600 hover:border-pink-500 hover:bg-neutral-50 hover:text-pink-600 active:scale-95",
            )}
          >
            {(!isApplied || isChanged) && <Search />}
            {isApplied && !isChanged
              ? "Narx bo'yicha qidirildi ✅"
              : "Narx bo'yicha qidirish"}
          </Button>
        </div>
        <Separator className="my-2" />
        {/* Section: Saralash (Quick Sort) */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
            Saralash
          </h3>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                if (filter === "news") {
                  deleteFilter();
                } else {
                  filterProducts("news");
                }
              }}
              className={cn(
                "flex h-12 items-center gap-3 rounded-2xl px-4 text-[10px] font-black uppercase tracking-widest transition-all",
                filter === "news"
                  ? "bg-pink-600 text-white"
                  : "border border-neutral-200 text-neutral-600 hover:border-pink-500 hover:text-pink-600 active:scale-95",
              )}
            >
              <ArrowUpWideNarrow size={14} /> Yangilar
            </button>
            <button
              onClick={() => {
                if (filter === "oldest") {
                  deleteFilter();
                } else {
                  filterProducts("oldest");
                }
              }}
              className={cn(
                "flex h-12 items-center gap-3 rounded-2xl px-4 text-[10px] font-black uppercase tracking-widest transition-all",
                filter === "oldest"
                  ? "bg-pink-600 text-white"
                  : "border border-neutral-200 text-neutral-600 hover:border-pink-500 hover:text-pink-600 active:scale-95",
              )}
            >
              <ArrowDownWideNarrow size={14} /> Eskilar
            </button>
          </div>
        </div>

        {/* Ad: Kichik reklama yoki ma'lumot */}
        <div className="rounded-2xl bg-pink-50 p-5">
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
