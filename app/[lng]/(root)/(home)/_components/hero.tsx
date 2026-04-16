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
    <section className="mx-auto max-w-7xl py-5">
      <div className="grid grid-cols-4 items-center gap-6">
        <div className="col-span-3">
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
                    <div className="relative h-[50vh] w-full overflow-hidden rounded-2xl border border-pink-100">
                      <Image
                        src={image.src}
                        alt="Texnotech"
                        fill
                        priority={index === 0}
                        className="rounded-2xl object-cover object-center"
                      />
                      {/* <div className="absolute inset-0 bg-black/[0.01]" /> */}
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
        </div>
        {/* <div className="col-span-1 h-[48vh]">
          <Carousel
            setApi={setApi}
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
                <CarouselItem key={`${product._id}-${index}jncw`}>
                  <ProductCard product={product} view="grid" white={false} />
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </div> */}
        <div className="col-span-1">
          <div className="flex h-[50vh] items-center rounded-2xl bg-white">
            <Carousel
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

// "use client";

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import { IProduct } from "@/types";
// import ProductCard from "@/components/cards/product-card";

// interface Props {
//   discountProducts: IProduct[];
// }

// const HERO_IMAGES = [
//   { src: "/heroimages/iphone17.png", slug: "smartfonlar" },
//   { src: "/heroimages/iphone17pro.png", slug: "smartfonlar" },
//   { src: "/heroimages/chegirma.png", slug: "discounts" },
//   { src: "/menejer/client.jpg", slug: "discount" },
// ];

// export default function Hero({ discountProducts }: Props) {
//   // Har bir karusel uchun alohida API state
//   const [mainApi, setMainApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);

//   React.useEffect(() => {
//     if (!mainApi) return;
//     setCurrent(mainApi.selectedScrollSnap());
//     mainApi.on("select", () => {
//       setCurrent(mainApi.selectedScrollSnap());
//     });
//   }, [mainApi]);

//   return (
//     <section className="mx-auto max-w-7xl py-8">
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
//         {/* ASOSIY BANNER (3 qism) */}
//         {/* <div className="lg:col-span-3">
//           <Carousel
//             setApi={setMainApi}
//             plugins={[Autoplay({ delay: 5000 })]}
//             className="group relative overflow-hidden rounded-3xl border border-zinc-100 shadow-sm"
//           >
//             <CarouselContent>
//               {HERO_IMAGES.map((item, index) => (
//                 <CarouselItem key={index}>
//                   <Link
//                     href={`/category/${item.slug}`}
//                     className="relative block h-[480px] w-full"
//                   >
//                     <Image
//                       src={item.src}
//                       alt="Banner"
//                       fill
//                       priority={index === 0}
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                   </Link>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <CarouselPrevious className="absolute left-4 opacity-0 transition-opacity group-hover:opacity-100" />
//             <CarouselNext className="absolute right-4 opacity-0 transition-opacity group-hover:opacity-100" />

//             <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
//               {HERO_IMAGES.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => mainApi?.scrollTo(i)}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     current === i ? "w-8 bg-white" : "w-2 bg-white/50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </Carousel>
//         </div> */}
//         <div className="col-span-3">
//           <Carousel
//             setApi={setApi}
//             opts={{ align: "start", loop: true }}
//             plugins={[
//               Autoplay({
//                 delay: 6000,
//                 stopOnInteraction: false,
//               }),
//             ]}
//             className="w-full"
//           >
//             <CarouselContent>
//               {heroImages.map((image, index) => (
//                 <CarouselItem key={`${image.src}-${index}`}>
//                   <Link href={`category/${image.slug}`}>
//                     <div className="relative h-[48vh] w-full overflow-hidden rounded-2xl border border-pink-100">
//                       <Image
//                         src={image.src}
//                         alt="Texnotech"
//                         fill
//                         priority={index === 0}
//                         className="rounded-2xl object-cover object-center"
//                       />
//                       {/* <div className="absolute inset-0 bg-black/[0.01]" /> */}
//                     </div>
//                   </Link>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <CarouselPrevious className="absolute left-4 top-1/2 z-20 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 [&_svg]:size-6 [&_svg]:text-pink-600" />

//             <CarouselNext className="absolute right-4 top-1/2 z-20 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500 [&_svg]:size-6 [&_svg]:text-pink-600" />

//             {/* DOTS */}
//             <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
//               <div className="flex items-center gap-4 rounded-full bg-white/85 px-6 py-3 shadow-2xl backdrop-blur-xl">
//                 {heroImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => api?.scrollTo(index)}
//                     className={`size-3 rounded-full transition-all duration-300 ${
//                       current === index
//                         ? "scale-110 bg-pink-500"
//                         : "bg-neutral-300 hover:bg-pink-300"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </Carousel>
//         </div>

//         {/* CHEGIRMADAGI MAHSULOTLAR (1 qism) */}

//       </div>
//     </section>
//   );
// }
