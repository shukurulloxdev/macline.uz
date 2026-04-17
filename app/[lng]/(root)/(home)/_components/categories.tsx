// "use client";

// import React from "react";
// import { MoveRight } from "lucide-react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { ICategory } from "@/types";
// import CategoryCard from "@/components/cards/category-card";

// interface Props {
//   allCategories: ICategory[];
// }

// function Categories({ allCategories }: Props) {
//   return (
//     <section className="mx-auto max-w-7xl py-4 max-md:px-3">
// <div className="mb-2 flex items-end justify-between">
//   <h1 className="font-sora text-3xl font-semibold tracking-tight text-gray-800">
//     Barcha toifalar
//   </h1>
//   <div className="group flex cursor-pointer items-center gap-1">
//     <span className="text-[18px] text-pink-600 transition-colors duration-300">
//       Hammasini ko&apos;rish
//     </span>

//     <MoveRight
//       size={20}
//       className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
//     />
//   </div>
// </div>

//       {/* Carousel Section: Borderless & High-End */}
//       <Carousel
//         opts={{ align: "start", loop: true }}
//         plugins={[
//           Autoplay({
//             delay: 3000,
//             stopOnInteraction: false,
//           }),
//         ]}
//         className="w-full"
//       >
//         <CarouselContent className="px-1 py-4">
//           {allCategories.map((category, index) => (
//             <CarouselItem
//               key={category._id}
//               className="basis-1/6 max-md:basis-1/2"
//             >
//               <CategoryCard category={category} index={index} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </section>
//   );
// }

// export default Categories;
"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ICategory } from "@/types";
import CategoryCard from "@/components/cards/category-card";
import Link from "next/link";

interface Props {
  allCategories: ICategory[];
}

function Categories({ allCategories }: Props) {
  return (
    <section className="mx-auto max-w-7xl py-4 max-md:px-3">
      {/* Header Section */}
      {/* <div className="mb-4 flex items-center justify-between px-4 md:mb-8 md:px-0">
        <h2 className="font-sora text-xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Barcha toifalar
        </h2>

        <Link
          href="/categories"
          className="group flex items-center gap-1.5 transition-opacity active:opacity-70"
        >
          <span className="text-sm font-bold text-pink-600 md:text-lg">
            Hammasi
          </span>
          <MoveRight
            size={18}
            className="text-pink-600 transition-transform duration-300 group-hover:translate-x-1 md:size-5"
          />
        </Link>
      </div> */}
      <div className="mb-1 flex items-end justify-between md:mb-3">
        <h1 className="font-sora text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl">
          Barcha toifalar
        </h1>
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-sm text-pink-600 transition-colors duration-300 md:hidden">
            Hammasini
          </span>
          <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true, // Mobil foydalanuvchilar uchun qulay sudrash
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true, // Foydalanuvchi tekkanda to'xtashi yaxshiroq (UX)
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="my-6 px-1">
          {allCategories.map((category, index) => (
            <CarouselItem
              key={category._id || index}
              // Mobil: 2.5 ta karta (keyingi karta ko'rinib turishi userga "surish kerak" degan signal beradi)
              // Tablet: 4 ta karta, Desktop: 6 ta karta
              className="basis-[38%] pl-[2px] sm:basis-1/3 md:basis-1/4 md:pl-4 lg:basis-1/6"
            >
              <div className="h-full">
                <CategoryCard category={category} index={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Categories;
