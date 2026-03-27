import React from "react";
import AllProducts from "../_componets/all-products";
import { getProducts } from "@/actions/user-actions";
import SidebarFilter from "../_componets/filter-sidebar";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    search?: string;
    filter?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  }>;
}

async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const sParams = await searchParams;

  const { data } = await getProducts({
    searchQuery: sParams.search || "",
    category: slug,
    filter: sParams.filter || "",
    page: sParams.page || "1",
  });

  const title = slug.replace(/-/g, " ");
  return (
    <main className="mx-auto max-w-7xl py-6">
      <div className="flex gap-4">
        <aside className="w-72">
          <div className="sticky top-36 space-y-6">
            <SidebarFilter />
          </div>
        </aside>

        <div className="flex-1">
          <AllProducts products={data?.products || []} title={title} />
        </div>
      </div>
    </main>
  );
}

export default Page;
