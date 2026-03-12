// import ProductCard from "@/components/cards/product-card";
// import { IProduct } from "@/types";
// import React from "react";

// interface Props {
//   products: IProduct[];
// }

// function AllProducts({ products }: Props) {
//   return (
//     <div className="grid grid-cols-5 gap-4 py-12">
//       {products.map((product) => (
//         <ProductCard product={product} />
//       ))}
//     </div>
//   );
// }

// export default AllProducts;
// _componets/all-products.tsx
"use client";

import ProductListCard from "@/components/cards/card-list";
import ProductCard from "@/components/cards/product-card";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { ChevronRight, LayoutGrid, List } from "lucide-react";
import { useState } from "react";

export default function AllProducts({
  products,
  title,
}: {
  products: IProduct[];
  title: string;
}) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-2">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            <span>Kategoriya</span>
            <ChevronRight size={10} />
            <span className="italic text-pink-600">{title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-neutral-900">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "rounded-xl p-2.5 transition-all duration-300",
              view === "grid"
                ? "bg-neutral-900 text-white shadow-xl shadow-neutral-200 ring-4 ring-neutral-900/10"
                : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900",
            )}
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "rounded-xl p-2.5 transition-all duration-300",
              view === "list"
                ? "bg-neutral-900 text-white shadow-xl shadow-neutral-200 ring-4 ring-neutral-900/10"
                : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900",
            )}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Products Grid/List Container */}
      <div
        className={cn(
          "grid gap-3 transition-all duration-500 ease-in-out",
          view === "grid"
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
            : "grid-cols-1",
        )}
      >
        {products.map((product) => (
          <div
            key={product._id}
            className="duration-500 animate-in fade-in zoom-in-95"
          >
            {view === "grid" ? (
              <ProductCard product={product} />
            ) : (
              <ProductListCard product={product} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
