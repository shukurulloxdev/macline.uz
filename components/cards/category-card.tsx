// import { ICategory } from "@/types";
// import React from "react";
// import { CarouselItem } from "../ui/carousel";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// interface Props {
//   category: ICategory;
//   index: number;
// }
// function CategoryCard({ category, index }: Props) {
//   return (
//     <CarouselItem
//       key={category._id}
//       className="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
//     >
//       <Link
//         href={`/category/${category.slug}`}
//         className="group relative flex cursor-pointer flex-col items-center"
//       >
//         <div className="ease-[cubic-bezier(0.23,1,0.32,1)] bg-[#F5F5F7]transition-all relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-transparent bg-slate-400 duration-500 group-hover:border-pink-600/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
//           <div className='pointer-events-none absolute inset-0 z-10 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-[0.03]' />

//           <Image
//             src={category.image}
//             alt={category.title}
//             fill
//             className="rounded-[2.5rem] bg-white object-cover p-8 transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//             <div className="scale-95 opacity-0 transition-all duration-300 hover:scale-105 group-hover:scale-100 group-hover:opacity-100">
//               <div className="flex size-12 items-center justify-center rounded-full bg-white text-pink-600 shadow-xl">
//                 <ArrowUpRight size={20} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
//           <h3 className="font-sora text-[15px] font-bold tracking-tight text-neutral-400 transition-colors group-hover:text-pink-500">
//             {category.title}
//           </h3>
//           <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-black transition-all duration-500 group-hover:w-full" />
//         </div>

//         <span className="absolute -right-2 -top-4 select-none text-[60px] font-black text-pink-500/15 transition-opacity group-hover:opacity-10">
//           0{index + 1}
//         </span>
//       </Link>
//     </CarouselItem>
//   );
// }

// export default CategoryCard;

import { ICategory } from "@/types";
import React from "react";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  category: ICategory;
  index: number;
}

function CategoryCard({ category, index }: Props) {
  // 🔧 padStart: 1 → "01", 10 → "10" (0dan boshlamaydi)
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    // 🔧 key prop bu yerda emas — parent map() da beriladi
    <CarouselItem className="pl-4">
      <Link
        href={`/category/${category.slug}`}
        className="group relative flex cursor-pointer flex-col items-center"
      >
        <div className="ease-[cubic-bezier(0.23,1,0.32,1)] relative aspect-square w-full rounded-3xl border border-transparent bg-[#F5F5F7] transition-all duration-500 group-hover:border-pink-600/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:rounded-[2.5rem]">
          {/* overflow-hidden ni Image wrapper ga ko'chirdik */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-[2.5rem]">
            <Image
              src={category.image}
              alt={category.title}
              fill
              // 🔧 sizes prop qo'shildi — Next.js talab qiladi
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
              className="bg-white object-cover p-4 transition-transform duration-700 group-hover:scale-110 md:p-6"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:rounded-[2.5rem]">
            {/* 🔧 hover:scale-105 olib tashlandi — group-hover bilan boshqariladi */}
            <div className="scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <div className="flex size-12 items-center justify-center rounded-full bg-white text-pink-600 shadow-xl transition-all duration-300 hover:scale-105 hover:border-pink-500">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* 🔧 Raqam div ichiga ko'chirildi, overflow-hidden tashqarisida */}
          <span className="pointer-events-none absolute left-1 select-none text-3xl font-black text-pink-500/15 transition-opacity group-hover:opacity-10 md:-right-2 md:-top-4 md:text-[60px]">
            {displayIndex}
          </span>
        </div>

        <div className="mt-3 text-center transition-transform duration-500 group-hover:-translate-y-2 md:mt-5">
          <h3 className="font-sora text-[15px] font-bold tracking-tight text-neutral-400 transition-colors group-hover:text-pink-500">
            {category.title}
          </h3>
          <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-black transition-all duration-500 group-hover:w-full" />
        </div>
      </Link>
    </CarouselItem>
  );
}

export default CategoryCard;
