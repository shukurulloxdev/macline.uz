"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import ProductAbout from "./product-about";
import BenefitsBar from "./benefits-bar";

export default function ProductGallery({ product }: { product: IProduct }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="flex items-start gap-3">
        <div className="flex w-16 flex-col gap-3">
          {product.images.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)} // User tajribasi uchun tezroq
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-xl border border-pink-500 transition-all duration-300",
                active === i
                  ? "border-pink-600 shadow-sm ring-1 ring-pink-400"
                  : "border-neutral-200 bg-white opacity-70 hover:border-neutral-400 hover:opacity-100",
              )}
            >
              <Image src={img} alt="thumb" fill className="object-cover" />
            </button>
          ))}
        </div>

        <div className="flex-1">
          <Carousel
            opts={{
              align: "start",
              dragFree: false,
              loop: true,
            }}
          >
            <CarouselContent>
              {product.images.map((image) => (
                <CarouselItem className="basis-1/2">
                  <div className="relative h-[50vh] w-full rounded-xl border border-neutral-100">
                    <Image
                      src={image}
                      alt={image}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
      <BenefitsBar />
      <div className="mt-6 border-t border-gray-100 pt-4">
        <ProductAbout product={product} />
      </div>
    </div>
  );
}
