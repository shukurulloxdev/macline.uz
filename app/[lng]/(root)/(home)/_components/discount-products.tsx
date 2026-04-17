// "use client";
// import ProductCard from "@/components/cards/product-card";
// import { MoveRight } from "lucide-react";
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { IProduct } from "@/types";
// import Link from "next/link";

// interface Props {
//   discountProducts: IProduct[];
// }

// function DiscountProducts({ discountProducts }: Props) {
//   return (
//     <section className="mx-auto my-4 max-w-7xl max-md:px-4">
//       <div className="relative overflow-hidden rounded-3xl border border-pink-200 bg-pink-600/5 p-5 shadow-sm">
// <div className="mb-2 flex items-center justify-between">
//   <div className="flex flex-col gap-0.5">
//     <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
//       Katta <span className="text-pink-600">Chegirmalar</span>
//     </h2>
//     <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
//   </div>

//   <Link
//     href={"/category/tops"}
//     className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
//   >
//     <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
//       <span className="font-bold md:hidden">Hammasi</span>
//       <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
//         Hammasini ko&apos;rish
//       </span>
//     </span>

//     <div className="flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 md:bg-transparent">
//       <MoveRight
//         size={16}
//         strokeWidth={2.5}
//         className="text-pink-600 md:size-5"
//       />
//     </div>
//   </Link>
// </div>

//         {/* CAROUSEL */}
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           plugins={[
//             Autoplay({
//               delay: 3000,
//             }),
//           ]}
//           className="relative z-10 overflow-visible"
//         >
//           <CarouselContent className="-ml-3 py-4">
//             {discountProducts?.map((product, index) => (
//               <CarouselItem
//                 key={product._id + index}
//                 className="basis-[22%] pl-3"
//               >
//                 <ProductCard product={product} view={"grid"} />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="-left-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

//           {/* NEXT */}
//           <CarouselNext className="-right-4 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default DiscountProducts;

/* <div className="grid grid-cols-2 gap-[14px] py-4 md:hidden">
          {discountProducts.map((product) => (
            <ProductCard key={product._id} product={product} view="grid" />
          ))}
        </div> */

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
    <section className="mx-auto my-4 max-w-7xl max-md:px-3 md:px-0">
      {/* Konteyner: Mobil uchun paddingni kamaytirdik va rangni yumshatdik */}
      <div className="mx- relative overflow-hidden rounded-[1rem] border border-pink-100 shadow-sm max-md:bg-pink-100 md:rounded-[2rem] md:bg-gradient-to-br md:from-pink-50/50 md:to-white md:p-8">
        <div className="flex items-center justify-between max-md:p-4 md:mb-2">
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
            <span className="text-[11px] uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
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
              delay: 4000,
            }),
          ]}
          className="relative ml-2 w-full pb-4"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {discountProducts?.map((product, index) => (
              <CarouselItem
                key={product._id + index}
                className="basis-[57%] pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-[22%]"
              >
                <div className="h-full py-2">
                  {/* ProductCard ichida padding/margin bo'lsa uni tekshiring */}
                  <ProductCard product={product} view={"grid"} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigatsiya tugmalari: Mobilda yashiramiz, chunki sudrash qulayroq */}
          <CarouselPrevious className="-left-6 hidden bg-white/90 md:flex" />
          <CarouselNext className="-right-6 hidden bg-white/90 md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default DiscountProducts;
