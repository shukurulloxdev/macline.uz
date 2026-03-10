import React from "react";
import Hero from "./_components/hero";
import Categories from "./_components/categories";
import PopProducts from "./_components/top-products";
import Location from "./_components/location";
import { getTopProducts } from "@/actions/user-actions";
import DiscountProducts from "./_components/discount-products";
// actionClient ham javobni to'gridan to'gri qaytaramaydi o'zini obyectini qaytaradi

async function Page() {
  const { data } = await getTopProducts();

  return (
    <div>
      <Hero />
      <Categories />
      <PopProducts topProducts={data?.products || []} />
      <DiscountProducts discountProducts={data?.products || []} />
      {/* <BigProducts />
      <SmallProducts /> */}
      <Location />
      {/* <SearchTabel /> */}
    </div>
  );
}

export default Page;
