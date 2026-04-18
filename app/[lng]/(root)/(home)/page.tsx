import Hero from "./_components/hero";
import Categories from "./_components/categories";
import PopProducts from "./_components/top-products";
import LocationSection from "./_components/location";
import {
  getCategories,
  getDiscountProducts,
  getTopProducts,
} from "@/actions/user-actions";
import DiscountProducts from "./_components/discount-products";
import MaclineServices from "./_components/services";
import DiscountProInfo from "./_components/top-pro-info";
import BigProducts from "./_components/big-products";
import SmallProducts from "./_components/small-products";
import All16Products from "./_components/all-16products";
import Profession from "./_components/profession";
import NewsProducts from "./_components/news-products";

// actionClient ham javobni to'gridan to'gri qaytaramaydi o'zini obyectini qaytaradi
async function Page() {
  const topProducts = await getTopProducts();
  const discountProducts = await getDiscountProducts();
  const allCategories = await getCategories();

  return (
    <div>
      <Hero discountProducts={discountProducts.data?.products || []} />
      <Categories allCategories={allCategories.data?.categories || []} />
      <PopProducts topProducts={topProducts.data?.products || []} />
      <DiscountProducts
        discountProducts={discountProducts.data?.products || []}
      />
      <NewsProducts discountProducts={discountProducts.data?.products || []} />
      <BigProducts bigProducts={discountProducts.data?.products || []} />
      <SmallProducts smallProducts={discountProducts.data?.products || []} />
      <DiscountProInfo
        discountProducts={discountProducts.data?.products || []}
      />
      <All16Products
        products={discountProducts.data?.products.slice(0, 12) || []}
      />
      <Profession />
      {/* <LocationSection /> */}
      {/* <Location /> */}
      <MaclineServices />
    </div>
  );
}

export default Page;
