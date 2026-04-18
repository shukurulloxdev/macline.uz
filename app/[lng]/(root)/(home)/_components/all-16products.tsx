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
    <section className="mx-auto flex max-w-7xl flex-col py-6 max-md:px-3 md:py-12">
      {/* <div className="mb-2 flex items-end justify-between">
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
      </div> */}
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-4xl">
            Barcha mahsulotlar
          </h2>
          <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
        </div>

        <Link
          href={"/category/tops"}
          className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
        >
          <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
            <span className="font-bold md:hidden">Hammasi</span>
            <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
              Hammasini ko&apos;rish
            </span>
          </span>

          <div className="flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 md:bg-transparent">
            <MoveRight
              size={16}
              strokeWidth={2.5}
              className="text-pink-600 md:size-5"
            />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 py-4 md:grid-cols-4 md:gap-[14px] lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} view="grid" />
        ))}
      </div>
      <Link href={"/products"} className="mx-auto mt-1 md:mt-4">
        <Button
          className="rounded-md bg-pink-600/90 text-xs transition-all duration-300 hover:scale-[1.03] hover:bg-pink-600 md:px-32 md:py-6 md:text-lg"
          size={"lg"}
        >
          Hammasini ko&apos;rish
        </Button>
      </Link>
    </section>
  );
}

export default All16Products;
