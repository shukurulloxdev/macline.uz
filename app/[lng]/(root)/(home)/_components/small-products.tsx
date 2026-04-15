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
import { IProduct } from "@/types";

interface Props {
  smallProducts: IProduct[];
}
function SmallProducts({ smallProducts }: Props) {
  return (
    <section className="mx-auto mb-6 max-w-7xl py-2">
      <div className="mb-2 flex items-end justify-between">
        <h1 className="font-sora text-3xl font-semibold tracking-tight text-gray-800">
          Uy uchun kichik texnika
        </h1>
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-[18px] text-pink-600 transition-colors duration-300">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="overflow-visible"
        >
          <CarouselContent className="-ml-3 py-4">
            {smallProducts &&
              smallProducts.map((product) => (
                <CarouselItem
                  key={product.images[0]}
                  className="basis-[22%] pl-3"
                >
                  <ProductCard product={product} view={"grid"} />
                </CarouselItem>
              ))}
          </CarouselContent>

          <CarouselPrevious className="-left-6 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

          {/* NEXT */}
          <CarouselNext className="-right-6 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
        </Carousel>
      </div>
    </section>
  );
}

export default SmallProducts;
