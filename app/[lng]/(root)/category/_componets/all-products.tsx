import ProductCard from "@/components/cards/product-card";
import { IProduct } from "@/types";
import React from "react";

interface Props {
  products: IProduct[];
}

function AllProducts({ products }: Props) {
  return (
    <div className="grid grid-cols-5 gap-4 py-12">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
