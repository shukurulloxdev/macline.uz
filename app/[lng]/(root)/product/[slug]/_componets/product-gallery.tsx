"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IProduct } from "@/types";

export default function ProductGallery({ product }: { product: IProduct }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="flex flex-col gap-8">
      <div className="group relative flex flex-col bg-white pb-3">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent className="ml-0">
            {product.images.map((img, i) => (
              <CarouselItem key={i} className="pl-0">
                <div className="relative h-[40vh] w-full rounded-[1rem]">
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    priority={i === 0}
                    className="object-contain py-3 transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation - Faqat Hoverda chiqadi */}
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex size-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="flex size-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div>
        </Carousel>
        <div className="flex items-center justify-center gap-2">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "group relative aspect-square w-16 overflow-hidden rounded-xl border-2 bg-white transition-all duration-300",
                current === i ? "border-pink-600" : "border-pink-400/10",
              )}
            >
              <Image src={img} alt="thumb" fill className="object-cover p-2" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
