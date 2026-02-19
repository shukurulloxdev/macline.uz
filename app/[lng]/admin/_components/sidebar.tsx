'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	LayoutDashboard,
	LogOut,
	Folders,
	Handbag,
	LayersPlus,
	UserStar,
	ListChecks,
} from 'lucide-react'
import Logo from '@/components/shared/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
	{ title: 'Statistika', href: '/admin', icon: LayoutDashboard },
	{ title: 'Texnikalar', href: '/admin/products', icon: Folders },
	{
		title: 'Texnika kiritish',
		href: '/admin/add-product',
		icon: LayersPlus,
	},
	{ title: 'Buyurtmalar', href: '/admin/orders', icon: Handbag },
	{
		title: 'Tugatilgan buyurtmalar',
		href: '/admin/end-orders',
		icon: ListChecks,
	},
	{
		title: 'Adminlar nazorati',
		href: '/admin/add-control',
		icon: UserStar,
	},
]

function Sidebar() {
	const pathname = usePathname()

	return (
		<aside
			className='relative flex h-screen w-[300px] flex-col 
			border-r border-white/10 
			bg-slate-950  backdrop-blur-2xl'
		>
			<div className='absolute size-full bg-blue-600/50 blur-[150px]' />

			<div className='relative z-10 flex h-full flex-col'>
				<div className='flex h-20 items-center border-b border-white/10 px-6'>
					<Logo />
				</div>

				<nav className='flex-1 space-y-8 px-4 py-8'>
					<div className='space-y-4'>
						<p className='px-3 text-[11px] uppercase tracking-[0.2em] text-slate-500'>
							Asosiy
						</p>
						<div className='flex flex-col gap-2'>
							{navItems.map(item => {
								return (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] text-gray-300',
											pathname.slice(3) === item.href &&
												'bg-white/20 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/20'
										)}
									>
										<item.icon size={18} />
										{item.title}
									</Link>
								)
							})}
						</div>
					</div>

					{/* <div className='space-y-4'>
						<p className='px-3 text-[11px] uppercase tracking-[0.2em] text-slate-500'>
							System
						</p>

						{systemItems.map(item => {
							const active = pathname === item.href
							const Icon = item.icon

							return (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
										active
											? 'bg-white/10 text-white'
											: 'text-slate-400 hover:bg-white/5 hover:text-white'
									)}
								>
									<Icon size={18} />
									{item.title}
								</Link>
							)
						})}
					</div> */}
				</nav>

				<div className='border-t border-white/10 p-5'>
					<div className='rounded-2xl bg-white/5 p-4 shadow-xl ring-1 ring-white/10 backdrop-blur-xl'>
						<div className='flex items-center gap-3'>
							<div className='flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 text-white shadow-lg'>
								<UserStar size={20} />
							</div>

							<div className='flex flex-col leading-tight'>
								<span className='text-sm font-semibold text-white'>
									Shukurulloh
								</span>
								<span className='text-xs text-slate-400'>
									+998 (90) 201-58-58
								</span>
							</div>
						</div>

						<Button
							className='mt-4 h-9 w-full rounded-xl 
							bg-gradient-to-r from-pink-500 to-indigo-500 
							text-sm font-medium text-white
							transition-all duration-300
							hover:opacity-90 hover:shadow-lg'
						>
							Chiqish
							<LogOut size={16} />
						</Button>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
