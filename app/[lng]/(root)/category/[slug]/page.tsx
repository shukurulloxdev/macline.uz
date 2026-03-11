import React from "react";
import AllProducts from "../_componets/all-products";
import { getProducts } from "@/actions/user-actions";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    search?: string;
    filter?: string;
    page?: string;
  };
}

async function Page({ params, searchParams }: Props) {
  const { data } = await getProducts({
    searchQuery: searchParams.search || "",
    category: params.slug,
    filter: searchParams.filter || "",
    page: searchParams.page || "1",
  });

  return (
    <div className="mx-auto max-w-7xl">
      <AllProducts products={data?.products || []} />
    </div>
  );
}

export default Page;
