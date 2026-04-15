"use client";

import { getAllProducts } from "@/actions/user-actions";
import { Button } from "@/components/ui/button";
import { cn, formatQuery, formatQueryRemove } from "@/lib/utils";
import { ICategory, IProduct } from "@/types";
import { Search, Sparkles } from "lucide-react";
import { debounce } from "lodash";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

interface Props {
  categories: ICategory[];
}
function InputSearch({ categories }: Props) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchedProducts);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  async function getSerchProducts(value: string) {
    const trimmedValue = value.trim();

    if (trimmedValue.length <= 2) {
      setSearchedProducts([]);
      return;
    }

    const res = await getAllProducts({ searchQuery: trimmedValue });

    if (res.serverError) {
      setSearchedProducts([]);
      return;
    }

    setSearchedProducts(res.data?.products || []);
  }

  const handleSearchDebounce = useCallback(
    debounce((value: string) => {
      getSerchProducts(value);
    }, 400),
    [],
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchValue(value);

    const trimmedValue = value.trim();

    if (trimmedValue.length <= 2) {
      handleSearchDebounce.cancel();
      setSearchedProducts([]);
      return;
    }

    handleSearchDebounce(trimmedValue);
  }

  function handleSearch() {
    const isProductPage = pathname.split("/").includes("products");
    const value = searchValue.trim();

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
    setIsSearchFocused(false);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  useEffect(() => {
    return () => {
      handleSearchDebounce.cancel();
    };
  }, [handleSearchDebounce]);
  return (
    <div
      className={cn(
        "relative max-w-2xl flex-1 transition-all duration-500",
        isSearchFocused ? "z-40 scale-[1.01]" : "z-10",
      )}
    >
      <div className="group relative flex items-center">
        <input
          value={searchValue}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          type="text"
          placeholder="Smart qidiruv: iPhone 15 Pro..."
          className="h-[54px] w-full rounded-2xl border-2 border-neutral-100 bg-neutral-50 pl-6 pr-16 text-sm font-bold outline-none transition-all placeholder:font-medium placeholder:text-neutral-400 focus:border-pink-200 focus:bg-white focus:ring-4 focus:ring-pink-100/30"
        />

        <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2">
          <button
            type="button"
            onClick={handleSearch}
            className="flex size-10 items-center justify-center rounded-xl bg-pink-600 text-white shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {searchedProducts.length > 0 && isSearchFocused && (
        <div
          className={cn(
            "absolute left-0 top-[115%] z-40 w-full overflow-y-scroll rounded-b-2xl rounded-t-sm border border-neutral-100 bg-white p-5 shadow-2xl backdrop-blur-xl duration-200 animate-in fade-in zoom-in-95",
            searchedProducts.length > 4 && "pink-scroll h-[42vh]",
          )}
        >
          <div className="mb-4 flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-pink-600">
            <Sparkles size={14} className="text-pink-600" />
            Qidruvga mos
          </div>
          <div>
            {searchedProducts.map((product) => (
              <div
                key={product._id}
                onMouseDown={() => router.push(`/product/${product._id}`)}
                className="group flex cursor-pointer items-center gap-[10px] rounded-xl border-b border-neutral-100 p-2 transition-all duration-200 hover:bg-pink-50 active:scale-[0.98]"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-pink-100 bg-neutral-400">
                  <Image
                    src={product.images?.[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col overflow-hidden">
                  <p className="truncate text-sm font-semibold text-neutral-900 group-hover:text-pink-600">
                    {product.name}
                  </p>

                  <span className="text-xs text-neutral-400">
                    {product.price?.toLocaleString()} so'm
                  </span>
                </div>

                <div className="pr-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </div>
              </div>
            ))}
          </div>
          <Button
            onMouseDown={handleSearch}
            className="group mt-4 w-full bg-pink-600 py-2 transition-all duration-300 hover:scale-[1.01] hover:bg-pink-600"
          >
            Hammasini ko'rish
            <div className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </div>
          </Button>
        </div>
      )}
      {searchValue.length === 0 && isSearchFocused && (
        <div className="absolute left-0 top-[115%] z-40 w-full rounded-b-2xl rounded-t-sm border border-neutral-100 bg-white p-6 shadow-2xl backdrop-blur-xl duration-200 animate-in fade-in zoom-in-95">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pink-600">
            <Sparkles size={14} className="text-pink-600" />
            Ommabop qidiruvlar
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 8).map((katalog) => (
              <span
                onMouseDown={() => router.push(`/category/${katalog.slug}`)}
                key={katalog._id}
                className="cursor-pointer rounded-xl border border-pink-100 bg-pink-50 px-4 py-2 text-[11px] font-bold transition-all hover:border-pink-100 hover:bg-pink-50 hover:text-pink-600 active:scale-95"
              >
                {katalog.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputSearch;
