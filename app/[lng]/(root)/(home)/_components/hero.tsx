"use client";

import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { IProduct } from "@/types";
import ProductCard from "@/components/cards/product-card";

interface Props {
  discountProducts: IProduct[];
}

function Hero({ discountProducts }: Props) {
  const heroImages = [
    {
      src: "/heroimages/iphone17.png",
      slug: "smartfonlar",
    },
    {
      src: "/heroimages/iphone17pro.png",
      slug: "smartfonlar",
    },
    {
      src: "/heroimages/chegirma.png",
      slug: "discounts",
    },
    {
      src: "/menejer/client.jpg",
      slug: "discount",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="mx-auto max-w-7xl py-5 max-md:px-3">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-4 md:gap-6">
        <div className="md:col-span-3">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={`${image.src}-${index}`}>
                  <Link href={`category/${image.slug}`}>
                    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl border border-pink-100 md:h-[50vh]">
                      <Image
                        src={image.src}
                        alt="Texnotech"
                        fill
                        priority={index === 0}
                        className="rounded-2xl object-cover object-center transition-all duration-300 hover:scale-[1.01]"
                      />
                      {/* <div className="absolute inset-0 bg-black/[0.01]" /> */}
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 top-1/2 z-20 size-8 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 md:left-4 md:size-10 [&_svg]:size-4 [&_svg]:text-pink-600 md:[&_svg]:size-6" />

            <CarouselNext className="absolute right-2 top-1/2 z-20 size-8 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 md:right-4 md:size-10 [&_svg]:size-4 [&_svg]:text-pink-600 md:[&_svg]:size-6" />

            {/* DOTS */}
            <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 md:bottom-4">
              <div className="flex items-center gap-2 rounded-full bg-white/85 px-2 py-1 shadow-2xl backdrop-blur-xl md:gap-4 md:px-6 md:py-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`size-[7px] rounded-full transition-all duration-300 md:size-3 ${
                      current === index
                        ? "scale-110 bg-pink-500"
                        : "bg-neutral-300 hover:bg-pink-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
        <div className="max-md:hidden md:col-span-1">
          <div className="flex items-center rounded-2xl bg-white md:h-[50vh]">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {discountProducts.map((product, index) => (
                  <CarouselItem key={product._id || index} className="h-full">
                    <div className="h-full">
                      <ProductCard
                        product={product}
                        view="grid"
                        // className="h-full border-none bg-transparent shadow-none"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
