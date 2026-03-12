import React from "react";
import Hero from "./_components/hero";
import Categories from "./_components/categories";
import PopProducts from "./_components/top-products";
import Location from "./_components/location";
import { getCategories, getTopProducts } from "@/actions/user-actions";
import DiscountProducts from "./_components/discount-products";
// actionClient ham javobni to'gridan to'gri qaytaramaydi o'zini obyectini qaytaradi

async function Page() {
  const topProducts = await getTopProducts();
  const allCategories = await getCategories();

  return (
    <div>
      <Hero />
      <Categories allCategories={allCategories.data?.categories || []} />
      <PopProducts topProducts={topProducts.data?.products || []} />
      <DiscountProducts discountProducts={topProducts.data?.products || []} />
      {/* <BigProducts />
      <SmallProducts /> */}
      <Location />
      {/* <SearchTabel /> */}
    </div>
  );
}

export default Page;
