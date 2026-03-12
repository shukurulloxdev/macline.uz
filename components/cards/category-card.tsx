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
  return (
    <CarouselItem
      key={category._id}
      className="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
    >
      <Link
        href={`/category/${category.slug}`}
        className="group relative flex cursor-pointer flex-col items-center"
      >
        <div className="ease-[cubic-bezier(0.23,1,0.32,1)] relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] transition-all duration-700 group-hover:rounded-full group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className='pointer-events-none absolute inset-0 z-10 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-[0.03]' />

          <Image
            src={category.image}
            alt={category.title}
            fill
            className="rounded-[2.5rem] object-cover p-8 transition-transform duration-700 group-hover:scale-110 group-hover:rounded-full"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="translate-y-4 scale-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-600 shadow-xl">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="font-sora text-[15px] font-bold tracking-tight text-neutral-400 transition-colors group-hover:text-pink-500">
            {category.title}
          </h3>
          <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-black transition-all duration-500 group-hover:w-full" />
        </div>

        <span className="absolute -right-2 -top-4 select-none text-[60px] font-black text-pink-500/15 transition-opacity group-hover:opacity-10">
          0{index + 1}
        </span>
      </Link>
    </CarouselItem>
  );
}

export default CategoryCard;
