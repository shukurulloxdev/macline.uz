// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { useState } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { IProduct } from "@/types";
// import ProductAbout from "./product-about";
// import BenefitsBar from "./benefits-bar";

// export default function ProductGallery({ product }: { product: IProduct }) {
//   const [active, setActive] = useState(0);

//   return (
//     <>
//       <div className="w-full max-md:hidden">
//         <div className="flex items-start gap-3">
//           <div className="flex w-16 flex-col gap-3">
//             {product.images.map((img, i) => (
//               <button
//                 key={i}
//                 onMouseEnter={() => setActive(i)} // User tajribasi uchun tezroq
//                 className={cn(
//                   "relative aspect-square w-full overflow-hidden rounded-sm border border-pink-500 bg-white transition-all duration-300",
//                   active === i
//                     ? "border-pink-600 shadow-sm ring-1 ring-pink-400"
//                     : "border-neutral-200 bg-white opacity-70 hover:border-neutral-400 hover:opacity-100",
//                 )}
//               >
//                 <Image src={img} alt="thumb" fill className="object-cover" />
//               </button>
//             ))}
//           </div>

//           <div className="flex-1">
//             <Carousel
//               opts={{
//                 align: "start",
//                 dragFree: false,
//                 loop: true,
//               }}
//             >
//               <CarouselContent>
//                 {product.images.map((image) => (
//                   <CarouselItem className="basis-1/2" key={image}>
//                     <div className="relative h-[50vh] w-full rounded-xl border border-neutral-100 bg-white">
//                       <Image
//                         src={image}
//                         alt={image}
//                         fill
//                         className="rounded-xl object-cover"
//                       />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               {/* <CarouselPrevious />
//             <CarouselNext /> */}
//             </Carousel>
//           </div>
//         </div>
//         <BenefitsBar />
//         <div className="mt-6 border-t border-gray-100 pt-4">
//           <ProductAbout product={product} />
//         </div>
//       </div>
//       <div className="w-full md:hidden">
//         <div className="relative block md:hidden">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent className="-ml-0">
//               {product.images.map((image, index) => (
//                 <CarouselItem key={index} className="pl-0">
//                   <div className="relative aspect-[1/1] w-full overflow-hidden bg-neutral-50">
//                     <Image
//                       src={image}
//                       alt={`${product.name} - ${index}`}
//                       fill
//                       priority={index === 0}
//                       className="object-contain"
//                     />
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <div className="absolute bottom-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md"></div>

//             {/* Instagram style Pagination Dots */}
//             <div className="mt-4 flex justify-center gap-1.5">
//               {product.images.map((_, index) => (
//                 <div
//                   key={index}
//                   className={cn(
//                     "h-1.5 rounded-full transition-all duration-300",

//                     "w-1.5 bg-neutral-200",
//                   )}
//                 />
//               ))}
//             </div>
//           </Carousel>
//         </div>

//         <div className="hidden items-start gap-3 md:flex">
//           <div className="flex w-16 flex-col gap-3">
//             {product.images.map((img, i) => (
//               <button
//                 key={i}
//                 className={cn(
//                   "relative aspect-square w-full overflow-hidden rounded-xl border transition-all duration-300",
//                   i === 0
//                     ? "border-pink-600 ring-1 ring-pink-400"
//                     : "border-neutral-200",
//                 )}
//               >
//                 <Image src={img} alt="thumb" fill className="object-cover" />
//               </button>
//             ))}
//           </div>
//           <div className="flex-1">
//             {/* Desktop uchun karusel qismi qoladi... */}
//           </div>
//         </div>

//         {/* Umumiy qismlar */}
//         <div className="px-4 max-md:hidden md:px-0">
//           <BenefitsBar />
//           <div className="mt-6 border-t border-gray-100 pt-4">
//             <ProductAbout product={product} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  Share2,
  Heart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
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
          {/* <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div> */}
        </Carousel>
        <div className="flex items-center justify-center gap-2">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "group relative aspect-square w-20 overflow-hidden rounded-xl border-2 bg-white transition-all duration-300",
                current === i ? "border-pink-600" : "border-pink-400/10",
              )}
            >
              <Image src={img} alt="thumb" fill className="object-cover p-2" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: STICKY INFO PANEL */}
      {/* <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                New Arrival
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                ID: 482901
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-pink-600">$1,299.00</p>
          </div>

          <div className="space-y-6 border-t border-neutral-100 pt-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                Tanlangan Rang
              </p>
              <div className="flex gap-2">
                {["#000", "#F1F1F1", "#E2C4B9"].map((c) => (
                  <div
                    key={c}
                    style={{ backgroundColor: c }}
                    className="size-8 cursor-pointer rounded-full border border-neutral-200 ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-500"
                  />
                ))}
              </div>
            </div>

            <button className="h-16 w-full rounded-2xl bg-neutral-900 text-[15px] font-black uppercase tracking-widest text-white shadow-2xl shadow-neutral-200 transition-all hover:bg-pink-600 active:scale-95">
              Savatga qo'shish
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-100 p-4 text-center">
              <p className="text-[10px] font-bold uppercase text-neutral-400">
                Kafolat
              </p>
              <p className="font-bold">12 Oy</p>
            </div>
            <div className="rounded-2xl border border-neutral-100 p-4 text-center">
              <p className="text-[10px] font-bold uppercase text-neutral-400">
                Yetkazib berish
              </p>
              <p className="font-bold">24 Soat</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
