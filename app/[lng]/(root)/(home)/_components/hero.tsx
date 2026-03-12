import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Hero() {
  return (
    <div className="mx-auto max-w-7xl py-6">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[450px] w-full">
              <Image
                src={"/heroimages/img3.jpg"}
                alt="Texnotech"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[450px] w-full">
              <Image
                src={"/heroimages/img5.jpg"}
                alt="Texnotech"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[450px] w-full">
              <Image
                src={"/heroimages/img1.jpg"}
                alt="Texnotech"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 z-10 size-11 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />

        {/* NEXT */}
        <CarouselNext className="absolute right-2 top-1/2 z-10 size-11 rounded-full border bg-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-600 [&_svg]:text-pink-600" />
      </Carousel>
    </div>
  );
}

export default Hero;
