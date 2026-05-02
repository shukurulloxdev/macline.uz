"use client";

import ProductCard from "@/components/cards/product-card";
import EmptyCategory from "@/components/shared/empty-product";
import { cn, formatQuery, formatQueryRemove } from "@/lib/utils";
import { IProduct } from "@/types";
import {
  LayoutGrid,
  List,
  SlidersHorizontal,
  X,
  Search,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NumericFormat } from "react-number-format";
import { debounce } from "lodash";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// FilterPanel — OUTSIDE of AllProducts (fixes focus loss on every keystroke)
// ─────────────────────────────────────────────────────────────────────────────
interface FilterPanelProps {
  inpValue: string;
  onInpChange: (val: string) => void;
  onClearSearch: () => void;
  min: string;
  max: string;
  setMin: (v: string) => void;
  setMax: (v: string) => void;
  onHandlePrice: () => void;
  isApplied: boolean;
  isChanged: boolean;
  filter: string | null;
  onFilterProducts: (v: string) => void;
  onDeleteFilter: () => void;
  productsCount: number;
  onApply?: () => void;
}

function FilterPanel({
  inpValue,
  onInpChange,
  onClearSearch,
  min,
  max,
  setMin,
  setMax,
  onHandlePrice,
  isApplied,
  isChanged,
  filter,
  onFilterProducts,
  onDeleteFilter,
  productsCount,
  onApply,
}: FilterPanelProps) {
  return (
    <div className="space-y-5">
      {/* Qidiruv */}
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400">
          Qidiruv
        </p>
        <div className="relative">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            size={14}
          />
          <input
            type="text"
            value={inpValue}
            onChange={(e) => onInpChange(e.target.value)}
            placeholder="Model yoki brend..."
            className="h-11 w-full rounded-xl border-none bg-neutral-100 pl-10 pr-9 text-[13px] font-semibold text-neutral-900 outline-none ring-1 ring-neutral-200 transition-all placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-pink-400/40"
          />
          {inpValue && (
            <button
              onClick={onClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Narx */}
      <div className="space-y-2.5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400">
          Narx oralig&apos;i (so&apos;m)
        </p>
        <div className="grid grid-cols-2 gap-2">
          <NumericFormat
            placeholder="Dan"
            value={min}
            thousandSeparator=" "
            onValueChange={(values) => setMin(values.value)}
            className="h-11 rounded-xl bg-neutral-100 px-3 text-[13px] font-bold text-neutral-900 outline-none ring-1 ring-neutral-200 transition-all placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-pink-400/40"
          />
          <NumericFormat
            value={max}
            onValueChange={(values) => setMax(values.value)}
            thousandSeparator=" "
            placeholder="Gacha"
            className="h-11 w-full rounded-xl bg-neutral-100 px-3 text-[13px] font-bold text-neutral-900 outline-none ring-1 ring-neutral-200 transition-all placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-pink-400/40"
          />
        </div>
        <button
          onClick={onHandlePrice}
          className={cn(
            "flex h-11 w-full items-center justify-center gap-2 rounded-xl text-[12px] font-bold transition-all duration-200",
            isApplied && !isChanged
              ? "bg-pink-600 text-white hover:bg-pink-700"
              : "border border-neutral-200 bg-white text-neutral-700 hover:border-pink-400 hover:text-pink-600",
          )}
        >
          {isApplied && !isChanged ? (
            <>
              <CheckCircle2 size={14} />
              Narx qo&apos;llanildi
            </>
          ) : (
            <>
              <Search size={14} />
              Narx bo&apos;yicha qidirish
            </>
          )}
        </button>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Saralash */}
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400">
          Saralash
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              filter === "news" ? onDeleteFilter() : onFilterProducts("news")
            }
            className={cn(
              "flex h-11 items-center justify-center gap-2 rounded-xl text-[12px] font-bold transition-all",
              filter === "news"
                ? "bg-pink-600 text-white"
                : "border border-neutral-200 text-neutral-600 hover:border-pink-400 hover:text-pink-600",
            )}
          >
            <ArrowUpWideNarrow size={14} />
            Yangilar
          </button>
          <button
            onClick={() =>
              filter === "oldest"
                ? onDeleteFilter()
                : onFilterProducts("oldest")
            }
            className={cn(
              "flex h-11 items-center justify-center gap-2 rounded-xl text-[12px] font-bold transition-all",
              filter === "oldest"
                ? "bg-pink-600 text-white"
                : "border border-neutral-200 text-neutral-600 hover:border-pink-400 hover:text-pink-600",
            )}
          >
            <ArrowDownWideNarrow size={14} />
            Eskilar
          </button>
        </div>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Kafolat */}
      <div className="flex items-start gap-3 rounded-2xl bg-pink-50 p-4">
        <ShieldCheck size={18} className="mt-0.5 shrink-0 text-pink-600" />
        <div>
          <p className="text-[12px] font-black text-pink-700">Rasmiy kafolat</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-pink-900/50">
            Barcha mahsulotlar sifat nazoratidan o&apos;tgan.
          </p>
        </div>
      </div>

      {onApply && (
        <button
          onClick={onApply}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-pink-600 text-[13px] font-black text-white transition-all hover:bg-pink-700 active:scale-[.98]"
        >
          Natijalarni ko&apos;rish — {productsCount} ta
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// AllProducts
// ─────────────────────────────────────────────────────────────────────────────
export default function AllProductsSm({
  products,
  title,
}: {
  products: IProduct[];
  title: string;
}) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  const [inpValue, setInpValue] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const filter = searchParams.get("filter");
  const appliedPrice = searchParams.get("price") || "";
  const [appliedMin, appliedMax] = appliedPrice
    ? appliedPrice.split("-")
    : ["", ""];
  const isApplied = !!appliedPrice;
  const isChanged = isApplied && (min !== appliedMin || max !== appliedMax);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    if (search) setInpValue(search);
    const price = searchParams.get("price") || "";
    if (!price) return;
    const [minStr, maxStr] = price.split("-");
    setMin(minStr || "");
    setMax(maxStr || "");
  }, []);

  useEffect(() => {
    if (!min && !max) {
      const price = searchParamsRef.current.get("price");
      if (!price) return;
      router.replace(
        formatQueryRemove({
          params: searchParamsRef.current.toString(),
          key: "price",
        }),
      );
    }
  }, [min, max]);

  const handleSearchDebounce = useCallback(
    debounce((value: string) => {
      const params = searchParamsRef.current;
      if (value && value.length > 2) {
        router.push(
          formatQuery({
            params: params.toString(),
            key: "search",
            toProducts: false,
            value,
          }),
        );
      } else if (!value) {
        router.push(
          formatQueryRemove({ params: params.toString(), key: "search" }),
        );
      }
    }, 400),
    [],
  );

  function handleInpChange(val: string) {
    setInpValue(val);
    handleSearchDebounce(val);
  }

  function handleClearSearch() {
    setInpValue("");
    router.push(
      formatQueryRemove({ params: searchParams.toString(), key: "search" }),
    );
  }

  function handlePrice() {
    if (min && max) {
      router.replace(
        formatQuery({
          params: searchParams.toString(),
          key: "price",
          value: `${min}-${max}`,
          toProducts: false,
        }),
      );
    } else {
      toast.message("Narxlarni belgilang, masalan: 1 000 000 | 3 000 000");
    }
  }

  function filterProducts(value: string) {
    router.replace(
      formatQuery({
        params: searchParams.toString(),
        key: "filter",
        value,
        toProducts: false,
      }),
    );
  }

  function deleteFilter() {
    router.replace(
      formatQueryRemove({ params: searchParams.toString(), key: "filter" }),
    );
  }

  const activeFiltersCount = [
    !!appliedPrice,
    !!filter,
    !!searchParams.get("search"),
  ].filter(Boolean).length;

  // shared props for FilterPanel
  const filterPanelProps = {
    inpValue,
    onInpChange: handleInpChange,
    onClearSearch: handleClearSearch,
    min,
    max,
    setMin,
    setMax,
    onHandlePrice: handlePrice,
    isApplied,
    isChanged,
    filter,
    onFilterProducts: filterProducts,
    onDeleteFilter: deleteFilter,
    productsCount: products.length,
  };

  return (
    <div className="space-y-3">
      {/* ── HEADER ────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white px-4 py-3.5 shadow-sm md:px-6 md:py-4">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
            <span>Katalog</span>
            <span className="text-neutral-300">/</span>
            <span className="font-bold text-pink-600">
              {title || "Mahsulotlar"}
            </span>
          </div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter text-neutral-900">
            {title || "Barcha Mahsulotlar"}
          </h1>
          <p className="mt-1 text-[11px] font-medium text-neutral-400">
            {products.length} ta mahsulot
          </p>
        </div>

        <div className="flex w-full items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="relative flex h-9 w-4/5 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 text-[12px] font-bold text-neutral-700 transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600 md:hidden"
          >
            <SlidersHorizontal size={14} className="text-pink-600" />
            <span>Mahsulotlarni filterlash</span>
            {activeFiltersCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-[18px] items-center justify-center rounded-full bg-pink-600 text-[9px] font-black text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative flex flex-1 items-center gap-0.5 rounded-xl border border-neutral-100 bg-neutral-50 p-1">
            <div
              className={cn(
                "absolute h-8 w-8 rounded-lg bg-pink-600 shadow-sm transition-all duration-300",
                view === "grid" ? "translate-x-0" : "translate-x-9",
              )}
            />
            {(
              [
                { v: "grid" as const, Icon: LayoutGrid },
                { v: "list" as const, Icon: List },
              ] as const
            ).map(({ v, Icon }) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  "relative z-10 flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200",
                  view === v
                    ? "text-white"
                    : "text-neutral-400 hover:text-neutral-600",
                )}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── ACTIVE CHIPS (mobile) ──────────────────────────────────────── */}
      <AnimatePresence>
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2 overflow-hidden md:hidden"
          >
            {searchParams.get("search") && (
              <span className="flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-bold text-pink-700">
                🔍 &quot;{searchParams.get("search")}&quot;
                <button onClick={handleClearSearch}>
                  <X size={11} />
                </button>
              </span>
            )}
            {appliedPrice && (
              <span className="flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-bold text-pink-700">
                💰 {Number(appliedMin).toLocaleString()} –{" "}
                {Number(appliedMax).toLocaleString()}
                <button
                  onClick={() => {
                    setMin("");
                    setMax("");
                  }}
                >
                  <X size={11} />
                </button>
              </span>
            )}
            {filter && (
              <span className="flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-bold text-pink-700">
                {filter === "news" ? "↑ Yangilar" : "↓ Eskilar"}
                <button onClick={deleteFilter}>
                  <X size={11} />
                </button>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LAYOUT ────────────────────────────────────────────────────── */}
      <div className="flex items-start gap-4">
        {/* Desktop sidebar */}
        <aside className="hidden w-[250px] shrink-0 rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm md:block">
          <FilterPanel {...filterPanelProps} />
        </aside>

        {/* Products */}
        <div className="min-w-0 flex-1">
          {products.length === 0 ? (
            <EmptyCategory />
          ) : (
            <div
              className={cn(
                "grid gap-2 transition-all duration-300",
                view === "grid" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1",
              )}
            >
              {products.map((product, i) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: i * 0.025 }}
                >
                  <ProductCard product={product} view={view} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE BOTTOM SHEET ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              key="sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-[28px] bg-white px-5 pb-10 pt-3 md:hidden"
            >
              <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-neutral-200" />
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-[18px] font-black text-neutral-950">
                    Filterlar
                  </h2>
                  {activeFiltersCount > 0 && (
                    <p className="text-[11px] font-semibold text-pink-600">
                      {activeFiltersCount} ta filter faol
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex size-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500"
                >
                  <X size={15} />
                </button>
              </div>

              <FilterPanel
                {...filterPanelProps}
                onApply={() => setMobileFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
