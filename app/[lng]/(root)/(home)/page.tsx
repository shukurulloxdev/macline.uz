import React from "react";
import Hero from "./_components/hero";
import Categories from "./_components/categories";
import PopProducts from "./_components/top-products";
import Location from "./_components/location";
import { getCategories, getTopProducts } from "@/actions/user-actions";
import DiscountProducts from "./_components/discount-products";
import MaclineServices from "./_components/services";
import TopProInfo from "./_components/top-pro-info";

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
      <TopProInfo discountProducts={topProducts.data?.products || []} />
      <Location />
      <MaclineServices />;
    </div>
  );
}

export default Page;

{
  /* <BigProducts bigProducts={topProducts.data?.products || []} />
      <SmallProducts smallProducts={topProducts.data?.products || []} /> */
}
{
  /* <MaclineServices />; */
}
{
  /* <SearchTabel /> */
}
