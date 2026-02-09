'use client'
import { navLinks } from '@/components/constants'
import LngMenu from '@/components/shared/lng-menu'
import Logo from '@/components/shared/logo'
import { Input } from '@/components/ui/input'
import { useTranslation } from '@/i18n/client'
import { cn } from '@/lib/utils'
import { GalleryVerticalEnd, Heart, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string, 'home')
	const pathname = usePathname()
	return (
		<div className='sticky inset-0 z-50 bg-slate-50 shadow-lg'>
			<div className='sticky top-0  border-b bg-slate-100  backdrop-blur-md'>
				<div className='mx-auto max-w-7xl '>
					<div className='flex h-10 items-center justify-between text-[15px] text-gray-600'>
						<nav className='flex items-center gap-6 font-medium'>
							{navLinks.map(item => (
								<Link
									key={item.name}
									href={`/${lng}/${item.route}`}
									className={cn(
										'relative transition-colors hover:text-black',
										pathname === `/${lng}/${item.route}` &&
											'text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-orange-400'
									)}
								>
									{t(item.name)}
								</Link>
							))}
						</nav>

						<div className='flex items-center gap-6 text-[15px]'>
							<span className='transition hover:text-black'>
								texnotech@gmail.com
							</span>

							<span className='transition hover:text-black'>
								+998 (90) 201 58-58
							</span>

							<span className='cursor-pointer font-medium '>
								Malumot qoldirish
							</span>

							<LngMenu />
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 '>
				<div className='pr-12'>
					<Logo />
				</div>

				<Input
					placeholder='Istalgan narsangizni qidiring...'
					className='h-10 w-full rounded-2xl border border-gray-200 bg-white/90 px-5 shadow-sm transition placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-orange-400'
				/>
				<div className='flex items-center gap-4'>
					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-2 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<GalleryVerticalEnd
							className='size-6 text-blue-500 transition group-hover:scale-110'
							size={24}
						/>
						<span className='text-sm font-semibold text-gray-700 transition group-hover:text-blue-600'>
							Katalog
						</span>
					</div>
					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-2 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<Heart
							className='size-6 text-red-500 transition group-hover:scale-110'
							size={24}
						/>
						<span className='text-sm font-semibold text-gray-700 transition group-hover:text-red-600'>
							Sevimlilar
						</span>
					</div>

					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-2 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<ShoppingCart
							className='size-6 text-blue-500 transition group-hover:scale-110'
							size={24}
						/>
						<span className='text-sm font-semibold text-gray-700 transition group-hover:text-blue-600'>
							Savat
						</span>
					</div>

					<div className='group flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 py-2 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl'>
						<User
							className='size-6 text-green-500 transition group-hover:scale-110'
							size={24}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
