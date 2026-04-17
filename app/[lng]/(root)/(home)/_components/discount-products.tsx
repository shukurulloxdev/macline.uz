"use client";
import ProductCard from "@/components/cards/product-card";
import { MoveRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IProduct } from "@/types";
import Link from "next/link";

interface Props {
  discountProducts: IProduct[];
}

function DiscountProducts({ discountProducts }: Props) {
  return (
    <section className="mx-auto my-4 max-w-7xl max-md:px-3">
      <div className="relative overflow-hidden rounded-3xl border border-pink-200 bg-pink-600/5 p-5 shadow-sm">
        {/* <div className="relative z-10 mb-2 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-neutral-900">
            Katta <span className="text-pink-600">Chegirmalar</span>
          </h2>

          <Link
            href={"/category/discounts"}
            className="group/btn flex items-center gap-3 rounded-2xl bg-pink-600 px-5 py-[6px] text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-pink-500 hover:shadow-xl active:scale-95"
          >
            <span>Barchasini ko&apos;rish</span>

            <MoveRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div> */}
        <div className="mb-2 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
              Katta <span className="text-pink-600">Chegirmalar</span>
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

        {/* CAROUSEL */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="relative z-10 overflow-visible max-md:hidden"
        >
          <CarouselContent className="-ml-3 py-4">
            {discountProducts?.map((product, index) => (
              <CarouselItem
                key={product._id + index}
                className="basis-[22%] pl-3"
              >
                <ProductCard product={product} view={"grid"} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

          {/* NEXT */}
          <CarouselNext className="-right-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
        </Carousel>
        <div className="grid grid-cols-2 gap-[14px] py-4 md:hidden">
          {discountProducts.map((product) => (
            <ProductCard key={product._id} product={product} view="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiscountProducts;
