"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import ProductAbout from "./product-about";
import BenefitsBar from "./benefits-bar";

export default function ProductGalleryMd({ product }: { product: IProduct }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <>
      <div className="w-full max-md:hidden">
        <div className="flex items-start gap-3">
          <div className="flex w-16 flex-col gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => api?.scrollTo(i)} // User tajribasi uchun tezroq
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-sm border border-pink-500 bg-white transition-all duration-300",
                  current === i
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
              setApi={setApi}
              opts={{
                align: "start",
                dragFree: false,
                loop: true,
              }}
            >
              <CarouselContent>
                {product.images.map((image) => (
                  <CarouselItem className="basis-1/2" key={image}>
                    <div className="relative h-[50vh] w-full rounded-xl border border-neutral-100 bg-white">
                      <Image
                        src={image}
                        alt={image}
                        fill
                        className="rounded-xl object-contain p-4"
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
      <div className="w-full md:hidden">
        <div className="relative block md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="relative aspect-[1/1] w-full overflow-hidden bg-neutral-50">
                    <Image
                      src={image}
                      alt={`${product.name} - ${index}`}
                      fill
                      priority={index === 0}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md"></div>

            {/* Instagram style Pagination Dots */}
            <div className="mt-4 flex justify-center gap-1.5">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",

                    "w-1.5 bg-neutral-200",
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>

        <div className="hidden items-start gap-3 md:flex">
          <div className="flex w-16 flex-col gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-xl border transition-all duration-300",
                  i === 0
                    ? "border-pink-600 ring-1 ring-pink-400"
                    : "border-neutral-200",
                )}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1">
            {/* Desktop uchun karusel qismi qoladi... */}
          </div>
        </div>

        {/* Umumiy qismlar */}
        <div className="px-4 max-md:hidden md:px-0">
          <BenefitsBar />
          <div className="mt-6 border-t border-gray-100 pt-4">
            <ProductAbout product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
