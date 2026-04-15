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

function Hero() {
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
    <section className="mx-auto max-w-7xl py-5">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={`${image.src}-${index}`}>
              <Link href={`category/${image.slug}`}>
                <div className="relative h-[52vh] w-full overflow-hidden rounded-2xl border border-pink-100">
                  <Image
                    src={image.src}
                    alt="Texnotech"
                    fill
                    priority={index === 0}
                    className="rounded-2xl object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/[0.01]" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 z-20 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 [&_svg]:size-6 [&_svg]:text-pink-600" />

        <CarouselNext className="absolute right-4 top-1/2 z-20 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 [&_svg]:size-6 [&_svg]:text-pink-600" />

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-4 rounded-full bg-white/85 px-6 py-3 shadow-2xl backdrop-blur-xl">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`size-3 rounded-full transition-all duration-300 ${
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
    </section>
  );
}

export default Hero;
