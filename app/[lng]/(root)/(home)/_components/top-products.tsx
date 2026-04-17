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
// import { IProduct } from "@/types";
// import Link from "next/link";

// interface Props {
//   topProducts: IProduct[];
// }

// function PopProducts({ topProducts }: Props) {
//   console.log("Hammasi", topProducts.length);
//   return (
//     <section className="mx-auto max-w-7xl px-3 py-4">
//       <div className="flex items-end justify-between pb-2">
//         <h1 className=" font-sora text-3xl font-semibold tracking-tight text-gray-800">
//           Top mahsulotlar
//         </h1>
//         <Link
//           href={"/category/tops"}
//           className="group flex cursor-pointer items-center gap-1"
//         >
//           <span className="text-[18px] text-pink-600 transition-colors duration-300">
//             Hammasini ko&apos;rish
//           </span>

//           <MoveRight
//             size={20}
//             className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
//           />
//         </Link>
//       </div>
//       <div>
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="overflow-visible"
//         >
//           <CarouselContent className="-ml-3 py-4">
//             {topProducts?.map((product) => (
//               <CarouselItem
//                 key={product._id}
//                 className="basis-[52%] pl-3 md:basis-[22%]"
//               >
//                 <ProductCard product={product} view={"grid"} />
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <CarouselPrevious className="-left-6 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

//           {/* NEXT */}
//           <CarouselNext className="-right-6 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default PopProducts;

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
import Link from "next/link";

interface Props {
  topProducts: IProduct[];
}

function PopProducts({ topProducts }: Props) {
  console.log("Hammasi", topProducts.length);
  return (
    <section className="mx-auto max-w-7xl px-3 py-4">
      {/* <div className="flex items-end justify-between pb-2">
        <h1 className="font-sora text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl">
          Top mahsulotlar
        </h1>
        <Link
          href={"/category/tops"}
          className="group flex cursor-pointer items-center gap-1"
        >
          <span className="text-[16px] text-pink-600 transition-colors duration-300 md:hidden">
            Hammasini
          </span>
          <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </Link>
      </div> */}
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
            Top mahsulotlar
          </h2>
          <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
        </div>

        <Link
          href={"/category/tops"}
          className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
        >
          <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
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
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="overflow-visible"
        >
          <CarouselContent className="-ml-3 py-4">
            {topProducts?.map((product) => (
              <CarouselItem
                key={product._id}
                className="basis-[52%] pl-3 md:basis-[22%]"
              >
                <ProductCard product={product} view={"grid"} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 md:-left-6 [&_svg]:text-pink-600" />

          {/* NEXT */}
          <CarouselNext className="-right-6 top-1/2 size-11 -translate-y-1/2 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
        </Carousel>
      </div>
    </section>
  );
}

export default PopProducts;
