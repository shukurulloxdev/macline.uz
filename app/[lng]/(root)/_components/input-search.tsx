"use client";

import { cn, formatQuery, formatQueryRemove } from "@/lib/utils";
import { Search, Sparkles } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";

function InputSearch() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const isProductPage = pathname.split("/").includes("products");
    const value = e.target.value;

    if (value && value.length > 2) {
      const newUrl = formatQuery({
        params: searchParams.toString(),
        key: "search",
        toProducts: !isProductPage,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchDebounce = useCallback(debounce(onInputChange, 400), []);

  return (
    <div
      className={cn(
        "relative max-w-2xl flex-1 transition-all duration-500",
        isSearchFocused ? "z-40 scale-[1.01]" : "z-10",
      )}
    >
      <div className="group relative flex items-center">
        <input
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          onChange={handleSearchDebounce}
          type="text"
          placeholder="Smart qidiruv: iPhone 15 Pro..."
          className="h-[54px] w-full rounded-2xl border-2 border-neutral-100 bg-neutral-50 pl-6 pr-16 text-sm font-bold outline-none transition-all placeholder:font-medium placeholder:text-neutral-400 focus:border-pink-200 focus:bg-white focus:ring-4 focus:ring-pink-100/30"
        />

        <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2">
          {/* Qidiruv tugmasi ham h-10 w-10 qilib biroz kattalashtirildi */}
          <button className="flex size-10 items-center justify-center rounded-xl bg-pink-600 text-white shadow-md transition-all hover:scale-105 active:scale-95">
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {isSearchFocused && (
        <div className="absolute left-0 top-[115%] z-40 w-full rounded-b-2xl rounded-t-sm border border-neutral-100 bg-white p-6 shadow-2xl backdrop-blur-xl duration-200 animate-in fade-in zoom-in-95">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pink-600">
            <Sparkles size={14} className="text-pink-600" />
            Ommabop qidiruvlar
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "AirPods Pro",
              "Samsung S24",
              "Gaming Laptop",
              "Nike Air",
              "Samsung S24",
              "Gaming Laptop",
            ].map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-xl border border-pink-100 bg-pink-50 px-4 py-2 text-[11px] font-bold transition-all hover:border-pink-100 hover:bg-pink-50 hover:text-pink-600 active:scale-95"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputSearch;
