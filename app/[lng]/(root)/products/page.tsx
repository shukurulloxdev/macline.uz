import { getAllProducts } from "@/actions/user-actions";
import { searchParamsProps } from "@/types";
import React from "react";
import AllProducts from "./_components/all-products";
import SidebarFilter from "../category/_componets/filter-sidebar";
import AllProductsSm from "./_components/all-products-sm";

// async function Page({ searchParams }: searchParamsProps) {
//   const sParams = await searchParams;

//   const res = await getAllProducts({
//     searchQuery: sParams.search || "",
//     filter: sParams.filter || "",
//     page: sParams.page || "1",
//   });

//   console.log("Searched", res.data?.products);

//   const price = searchParams.price || "";

//   let min = 0;
//   let max = Infinity;

//   if (price) {
//     const [minStr, maxStr] = price.split("-");
//     min = Number(minStr);
//     max = Number(maxStr);
//   }

//   const filteredProducts = (res.data?.products || []).filter((product) => {
//     return product.price >= min && product.price <= max;
//   });
//   return (
//     <main className="mx-auto max-w-7xl py-2 max-md:px-3 md:py-6">
//       <div className="hidden gap-4 md:flex">
//         <aside className="w-72">
//           <div className="sticky top-36 space-y-6">
//             <SidebarFilter />
//           </div>
//         </aside>

//         <div className="flex-1">
//           <AllProducts products={filteredProducts || []} title={search || ""} />
//         </div>
//       </div>
//       <div className="mb-4 md:hidden">
//         <AllProductsSm products={filteredProducts || []} title={search || ""} />
//       </div>
//     </main>
//   );
// }

// export default Page;
async function Page({ searchParams }: searchParamsProps) {
  const sParams = await searchParams; // faqat bir marta, await bilan

  const res = await getAllProducts({
    searchQuery: sParams.search || "",
    filter: sParams.filter || "",
    page: sParams.page || "1",
    pageSize: "20", // ← QO'SHILDI
  });

  const price = sParams.price || ""; // sParams dan o'qing
  let min = 0;
  let max = Infinity;

  if (price) {
    const [minStr, maxStr] = price.split("-");
    min = Number(minStr);
    max = Number(maxStr);
  }

  const filteredProducts = (res.data?.products || []).filter(
    (product) => product.price >= min && product.price <= max,
  );

  return (
    <main className="mx-auto max-w-7xl py-2 max-md:px-3 md:py-6">
      <div className="hidden gap-4 md:flex">
        <aside className="w-72">
          <div className="sticky top-36 space-y-6">
            <SidebarFilter />
          </div>
        </aside>
        <div className="flex-1">
          <AllProducts
            products={filteredProducts}
            title={sParams.search || ""}
          />
        </div>
      </div>
      <div className="mb-4 md:hidden">
        <AllProductsSm
          products={filteredProducts}
          title={sParams.search || ""}
        />
      </div>
    </main>
  );
}

export default Page;
