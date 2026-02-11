'use client'
import ProductCard from '@/components/cards/product-card'
import { MoveRight } from 'lucide-react'
import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

function DiscountProducts() {
	return (
		<section className='mx-auto max-w-7xl py-8'>
			{/* OUTER PREMIUM CONTAINER */}
			<div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6 shadow-xl'>
				{/* Decorative glow */}

				<div className='absolute -right-20 -top-20 size-72 rounded-full bg-pink-400/20 blur-3xl' />
				<div className='absolute -bottom-20 -left-20 size-72 rounded-full bg-rose-400/20 blur-3xl' />

				{/* HEADER */}
				<div className='relative z-10 mb-6 flex items-end justify-between'>
					<div>
						<p className='text-sm font-medium uppercase tracking-widest text-pink-600'>
							🔥 Maxsus taklif
						</p>
						<h1 className='mt-1 font-sora text-3xl font-semibold text-gray-800'>
							Chegirmadagi texnikalar
						</h1>
					</div>

					<div className='group flex cursor-pointer items-center gap-1'>
						<span className='text-[16px] text-pink-600 transition-colors duration-300 group-hover:text-pink-700'>
							Hammasini ko‘rish
						</span>

						<MoveRight
							size={18}
							className='text-pink-600 transition-transform duration-300 group-hover:translate-x-1'
						/>
					</div>
				</div>

				{/* CAROUSEL */}
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnInteraction: false,
						}),
					]}
					className='relative z-10 overflow-visible'
				>
					<CarouselContent className='py-4'>
						{Array.from({ length: 8 }).map((_, i) => (
							<CarouselItem key={i} className='basis-1/5'>
								<ProductCard />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}

export default DiscountProducts
