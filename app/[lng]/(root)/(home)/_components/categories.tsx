"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { ICategory } from "@/types";
import CategoryCard from "@/components/cards/category-card";

interface Props {
  allCategories: ICategory[];
}

function Categories({ allCategories }: Props) {
  return (
    <section className="mx-auto max-w-7xl py-4">
      <div className="mb-2 flex items-end justify-between">
        <h1 className="font-sora text-3xl font-semibold tracking-tight text-gray-800">
          Barcha toifalar
        </h1>
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-[18px] text-pink-600 transition-colors duration-300">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Carousel Section: Borderless & High-End */}
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 px-1 py-4">
          {allCategories.map((category, index) => (
            <CategoryCard
              category={category}
              key={category._id}
              index={index}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Categories;
