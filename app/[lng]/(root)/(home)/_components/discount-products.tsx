"use client";
import ProductCard from "@/components/cards/product-card";
import { MoveRight, Sparkles } from "lucide-react";
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

interface Props {
  discountProducts: IProduct[];
}

function DiscountProducts({ discountProducts }: Props) {
  return (
    <section className="mx-auto max-w-7xl py-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-pink-200 bg-pink-50 p-6 shadow-xl">
        {/* <div className="relative z-10 mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-pink-600">
              🔥 Maxsus taklif
            </p>
            <h1 className="mt-1 font-sora text-3xl font-semibold text-gray-800">
              Chegirmadagi texnikalar
            </h1>
          </div>

          <div className="group flex cursor-pointer items-center gap-1">
            <span className="text-[16px] text-pink-600 transition-colors duration-300 group-hover:text-pink-700">
              Hammasini ko‘rish
            </span>

            <MoveRight
              size={18}
              className="text-pink-600 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div> */}
        <div className="relative z-10 mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          {/* <div className="space-y-3"> */}
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-1.5 shadow-sm">
              <Sparkles size={14} className="animate-pulse text-pink-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-600">
                Limited Time Deals
              </span>
            </div> */}
          <h2 className="font-sora text-4xl font-bold tracking-tight text-neutral-900">
            Katta <span className="text-pink-600">Chegirmalar</span>
          </h2>
          {/* </div> */}
          <button className="group/btn flex items-center gap-3 rounded-2xl bg-pink-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-pink-500 hover:shadow-xl active:scale-95">
            <span>Barchasini ko'rish</span>

            <MoveRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
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
          className="relative z-10 overflow-visible"
        >
          <CarouselContent className="-ml-2 py-2">
            {discountProducts.map((product) => (
              <CarouselItem key={product._id} className="basis-1/5 pl-3">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

          {/* NEXT */}
          <CarouselNext className="-right-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
        </Carousel>
      </div>
    </section>
  );
}

export default DiscountProducts;
