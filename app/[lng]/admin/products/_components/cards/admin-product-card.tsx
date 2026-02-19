import { Button } from '@/components/ui/button'
import { AdminProductCardTip } from '@/types'
import Image from 'next/image'
import React from 'react'

interface Props {
	product: AdminProductCardTip
}
function AdminProductCard({ product }: Props) {
	return (
		<div
			key={product.image}
			className='grid  grid-cols-[1.5fr_1fr_auto] items-center  rounded-xl bg-white/10 p-4'
		>
			<div className='flex items-center gap-3'>
				<div className='relative size-14'>
					<Image
						src={product.image}
						alt={product.title}
						fill
						className='rounded-sm object-cover'
					/>
				</div>
				<div className='flex flex-col'>
					<h1 className='font-sora text-xl font-semibold text-white'>
						{product.brend}: {product.category}
					</h1>
					<p className='line-clamp-1 font-inter text-sm text-gray-300'>
						{product.title}
					</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<h1 className='font-sora text-xl font-semibold text-white'>Narxi</h1>
				<div className='flex items-center gap-2'>
					<p className='font-inter text-sm text-red-500 line-through'>
						{product.oldPrice.toLocaleString()} s&apos;om
					</p>
					<p className='font-inter text-sm font-semibold text-gray-100'>
						{product.price.toLocaleString()} s&apos;om
					</p>
				</div>
			</div>
			<div className='flex items-center gap-2 '>
				<Button
					className='cursor-pointer bg-white/20 text-white'
					variant={'outline'}
				>
					Sozlash
				</Button>
				<Button
					className='cursor-pointer bg-red-600 text-white hover:bg-red-500 hover:text-white'
					variant={'outline'}
				>
					Draf
				</Button>

				<Button
					className='cursor-pointer bg-red-600 text-white hover:bg-red-700 hover:text-white'
					variant={'outline'}
				>
					O&apos;chirish
				</Button>
			</div>
		</div>
	)
}

export default AdminProductCard
