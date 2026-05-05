import React from "react";
import AllProducts from "../_componets/all-products";
import { getProducts } from "@/actions/user-actions";
import SidebarFilter from "../_componets/filter-sidebar";
import AllProductsMd from "../_componets/all-products-md";
import Footer from "../../_components/footer";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    search?: string;
    filter?: string;
    price?: string;
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

  const price = sParams.price || "";

  let min = 0;
  let max = Infinity;

  if (price) {
    const [minStr, maxStr] = price.split("-");
    min = Number(minStr);
    max = Number(maxStr);
  }

  const filteredProducts = (data?.products || []).filter((product) => {
    return product.price >= min && product.price <= max;
  });

  const title = slug.replace(/-/g, " ");

  return (
    <>
      <main className="mx-auto max-w-7xl py-2 max-md:px-3 md:py-6">
        <div className="hidden gap-4 md:flex">
          <aside className="w-72">
            <div className="sticky top-36 space-y-6">
              <SidebarFilter />
            </div>
          </aside>

          <div className="flex-1">
            <AllProductsMd products={filteredProducts || []} title={title} />
          </div>
        </div>
        {/*  */}
        <div className="pb-4 md:hidden">
          <AllProducts products={filteredProducts || []} title={title} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Page;
