import { getAdminProduct } from "@/actions/admin-actions";
import { getCategories } from "@/actions/user-actions";
import ProductEditForm from "./_components/product-edit-form";
import React from "react";
import { ICategory } from "@/types";

async function Page({ params }: { params: { slug: string } }) {
  const [productRes, categoriesRes] = await Promise.all([
    getAdminProduct({ id: params.slug }),
    getCategories(),
  ]);

  const product = productRes.data?.product;
  const categories = categoriesRes.data?.categories ?? [];

  if (!product) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-white/40">Mahsulot topilmadi</p>
      </div>
    );
  }

  return (
    <ProductEditForm
      product={product}
      categories={categories.map((category: ICategory) => ({
        title: category.title,
        slug: category.slug,
      }))}
    />
  );
}

export default Page;
