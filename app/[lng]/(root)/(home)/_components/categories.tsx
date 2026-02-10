'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { categories } from '@/components/constants'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { MoveRight } from 'lucide-react'

function Categories() {
	return (
		<section className='mx-auto max-w-7xl py-4'>
			<div className='flex items-end justify-between'>
				<h1 className='font-sora text-3xl font-semibold tracking-tight text-slate-900'>
					Mahsulot toifalari
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
			<Carousel
				opts={{ align: 'start', loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
			>
				<CarouselContent className='py-6'>
					{categories.map(item => (
						<CarouselItem className='basis-1/6 select-none' key={item.route}>
							<div className='group relative cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg'>
								<div className='relative aspect-square w-full overflow-hidden'>
									<Image
										src={item.url}
										alt={item.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>

									<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
								</div>
								<Separator />

								<div className='p-4 text-center group-hover:bg-gray-100'>
									<h3 className='font-poppins text-sm font-semibold text-slate-800 transition-opacity duration-300 '>
										{item.title}
									</h3>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}

export default Categories
