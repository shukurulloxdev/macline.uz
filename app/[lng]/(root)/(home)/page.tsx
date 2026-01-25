import React from "react";
import Hero from "./_components/hero";
import Categories from "./_components/categories";
import PopProducts from "./_components/top-products";
import Location from "./_components/location";
import SearchTabel from "./_components/search-tabel";
import { getTopProducts } from "@/actions/admin-actions";

async function Page() {
  const { data } = await getTopProducts();
  return (
    <div>
      <Hero />
      <Categories />
      <PopProducts topProducts={data || []} />
      {/* <DiscountProducts />
      <BigProducts />
      <SmallProducts /> */}
      <Location />
      <SearchTabel />
    </div>
  );
}

export default Page;
