'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingBag } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function ProductCard() {
	return (
		<Card className='group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg'>
			<button className='absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow hover:bg-rose-50'>
				<Heart size={22} className='text-rose-500' />
			</button>
			<Badge className='absolute left-3 top-3 z-10  bg-blue-600 text-sm shadow'>
				Top
			</Badge>
			<CardContent className='p-5'>
				<div className='relative mb-5 aspect-square w-full overflow-hidden rounded-2xl bg-slate-50'>
					<Image
						src='/categories/gaz.jpg'
						alt='iPhone'
						fill
						className='object-contain transition-transform duration-700 group-hover:scale-105'
					/>
				</div>

				<p className='mb-1 text-2xl font-bold text-pink-600'>18 999 000 so‘m</p>

				<h3 className='mb-1 line-clamp-2 text-sm font-medium text-slate-900'>
					IPHONE Air 1TB Cloud White
				</h3>

				<p className='mb-4 text-xs text-slate-400'>
					Brand: <span className='underline'>Iphone</span>
				</p>

				<div className='flex items-center gap-2'>
					<Button
						variant='secondary'
						className='h-10 flex-1 rounded-xl bg-slate-100 text-slate-900 hover:bg-pink-600 hover:text-white'
					>
						Hozir xarid qilish
					</Button>

					<Button
						size='icon'
						className='size-10 rounded-xl bg-pink-600 hover:bg-pink-700'
					>
						<ShoppingBag size={18} />
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
