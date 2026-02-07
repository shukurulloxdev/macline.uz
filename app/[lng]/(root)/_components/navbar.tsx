import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GalleryVerticalEnd, Heart, ShoppingCart, User } from 'lucide-react'
import React from 'react'

function Navbar() {
	return (
		<div className='sticky inset-0 bg-slate-100 shadow-2xl'>
			{/*  */}
			<div className='sticky inset-0 bg-slate-200'>
				<div className='mx-auto max-w-7xl py-2'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
					consequuntur quis voluptatem sint, ab similique possimus officia
					placeat dolor accusantium
				</div>
			</div>
			{/*  */}
			<div className='mx-auto flex max-w-7xl items-center justify-between gap-6 py-4'>
				<div>
					<Logo />
				</div>

				{/* CATEGORY BUTTON */}
				<Button className='flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl'>
					<GalleryVerticalEnd size={18} /> Kategoriyalar
				</Button>

				{/* SEARCH INPUT */}
				<div className='flex-1'>
					<Input
						placeholder='Qidiruv...'
						className='h-10 w-full rounded-full border border-gray-200 bg-white/90 px-5 shadow-sm transition placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-orange-400'
					/>
				</div>

				<div className='flex items-center gap-4'>
					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<Heart
							className='size-6 text-red-500 transition group-hover:scale-125'
							size={24}
						/>
						<span className='text-sm font-semibold text-gray-700 transition group-hover:text-red-600'>
							Sevimlilar
						</span>
					</div>

					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<ShoppingCart
							className='size-6 text-blue-500 transition group-hover:scale-125'
							size={24}
						/>
						<span className='text-sm font-semibold text-gray-700 transition group-hover:text-blue-600'>
							Savat
						</span>
					</div>

					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<User
							className='size-6 text-green-500 transition group-hover:scale-125'
							size={24}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
