import ProductCard from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  products: IProduct[];
}
function All16Products({ products }: Props) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col py-12">
      <div className="mb-2 flex items-end justify-between">
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-gray-800">
          Siz uchun maxsus
        </h1>
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-[20px] text-pink-600 transition-colors duration-300">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[14px] py-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} view="grid" />
        ))}
      </div>
      <Link href={"/products"} className="mx-auto mt-4">
        <Button
          className="rounded-md bg-pink-600/90 px-32 py-6 text-lg transition-all duration-300 hover:scale-[1.03] hover:bg-pink-600"
          size={"lg"}
        >
          Hammasini ko&apos;rish
        </Button>
      </Link>
    </section>
  );
}

export default All16Products;
