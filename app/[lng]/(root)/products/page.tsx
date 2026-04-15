import { getAllProducts } from "@/actions/user-actions";
import { searchParamsProps } from "@/types";
import React from "react";
import AllProducts from "./_components/all-products";
import SidebarFilter from "../category/_componets/filter-sidebar";

async function Page({ searchParams }: searchParamsProps) {
  const search = searchParams.search;

  const res = await getAllProducts({ searchQuery: search });
  console.log("Searched", res.data?.products);

  const price = searchParams.price || "";

  let min = 0;
  let max = Infinity;

  if (price) {
    const [minStr, maxStr] = price.split("-");
    min = Number(minStr);
    max = Number(maxStr);
  }

  const filteredProducts = (res.data?.products || []).filter((product) => {
    return product.price >= min && product.price <= max;
  });
  return (
    <main className="mx-auto max-w-7xl py-6">
      <div className="flex gap-4">
        <aside className="w-72">
          <div className="sticky top-36 space-y-6">
            <SidebarFilter />
          </div>
        </aside>

        <div className="flex-1">
          <AllProducts products={filteredProducts || []} title={search || ""} />
        </div>
      </div>
    </main>
  );
}

export default Page;
