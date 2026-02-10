import ProductCard from '@/components/cards/product-card'
import { MoveRight } from 'lucide-react'
import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

function PopProducts() {
	return (
		<section className='mx-auto max-w-7xl py-4'>
			<div className=' flex items-end justify-between'>
				<h1 className='font-sora text-3xl font-semibold tracking-tight text-slate-900'>
					Top texnikalar
				</h1>
				<div className='group flex cursor-pointer items-center gap-1'>
					<span className='text-[18px] text-pink-600 transition-colors duration-300'>
						Hammasini ko&apos;rish
					</span>

					<MoveRight
						size={20}
						className='
			text-pink-600
			transition-transform
			duration-300
			ease-out
			group-hover:translate-x-1
		'
					/>
				</div>
			</div>
			<div>
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className='overflow-visible'
				>
					<CarouselContent className='py-6 '>
						{Array.from({ length: 8 }).map((_, i) => (
							<CarouselItem key={i} className='basis-[24%]'>
								<ProductCard />
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				{/* <Carousel>
					<CarouselContent className='py-6'>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
						<CarouselItem className='basis-1/5'>
							<ProductCard />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel> */}
			</div>
		</section>
	)
}

export default PopProducts
