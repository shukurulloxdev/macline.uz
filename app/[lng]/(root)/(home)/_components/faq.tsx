'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/components/constants'
import { cn } from '@/lib/utils'
export default function Questions() {
	const items = [
		'Samsung televizorlari',
		'Alisa bilan kolonka',
		'Kenwood elektr choynaklari',
		'Philips elektr choynaklari',
		'Tefal elektr choynaklari',
		'Shivaki elektr choynaklari',
		'Apple iPhone smartfonlari',
		'Braun elektr choynaklari',
		'Apple iPhone smartfonlari',
	]
	const [openId, setOpenId] = useState<number | null>(1)

	const toggle = (id: number) => {
		setOpenId(prev => (prev === id ? null : id))
	}

	return (
		<section className='mt-4 bg-white py-8'>
			<div className='mx-auto max-w-7xl px-4'>
				<div className='mx-auto mb-10  text-center'>
					<span className=' inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-medium tracking-wide text-pink-500'>
						Real savollarga javoblar
					</span>
					<h2 className='mt-3 font-inter text-5xl font-semibold text-gray-800'>
						<span className='bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'>
							Mijozlarimiz beradigan savollar
						</span>
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{/* FAQ LIST */}
					<div className='space-y-4'>
						{faqs.map(item => {
							const isOpen = openId === item.id

							return (
								<div
									key={item.id}
									className={`relative overflow-hidden rounded-3xl border transition-all duration-300
                  ${
										isOpen
											? 'border-pink-400/40 bg-gradient-to-br from-pink-50 to-white shadow-[0_5px_15px_rgba(236,72,153,0.25)]'
											: 'border-gray-200 bg-white shadow-md hover:border-pink-300 hover:shadow-lg'
									}`}
								>
									{isOpen && (
										<div
											className='pointer-events-none absolute inset-0
                      bg-gradient-to-r
                      from-pink-500/10
                      via-transparent
                      to-fuchsia-500/10'
										/>
									)}

									<div
										onClick={() => toggle(item.id)}
										className={cn(
											'relative z-10 flex cursor-pointer items-center justify-between px-6 py-5',
											!isOpen && 'shadow-xl'
										)}
									>
										<h3 className='font-sora text-[16px] font-semibold text-gray-900 lg:text-sm'>
											{item.question}
										</h3>

										<div
											className={`flex size-10 items-center justify-center rounded-full transition
                      ${
												isOpen
													? 'bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg'
													: 'bg-white text-pink-500'
											}`}
										>
											{isOpen ? <Minus size={18} /> : <Plus size={18} />}
										</div>
									</div>

									<div
										className={`grid transition-all duration-300 ease-in-out ${
											isOpen
												? 'grid-rows-[1fr] px-8 pb-6'
												: 'grid-rows-[0fr] px-8'
										}`}
									>
										<div className='overflow-hidden text-base leading-relaxed text-gray-600'>
											{item.answer}
										</div>
									</div>
								</div>
							)
						})}
					</div>
					<div
						className=' w-full rounded-2xl border bg-gradient-to-b
from-white
via-pink-50
to-blue-50 p-6 shadow-xl'
					>
						<h2 className='mb-6 text-xl font-semibold text-gray-800'>
							Odamlar ko‘pincha qidirishadi
						</h2>

						<ul className='divide-y divide-gray-300'>
							{items.map((item, index) => (
								<li
									key={index}
									className='cursor-pointer py-3 text-gray-700 transition hover:text-black'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div
						className='w-full
rounded-2xl
border
bg-gradient-to-b

 from-white via-pink-50 to-blue-50 p-6 shadow-xl'
					>
						<h2 className='mb-6 text-xl font-semibold text-gray-800'>
							Odamlar ko‘pincha qidirishadi
						</h2>

						<ul className='divide-y divide-gray-300'>
							{items.map((item, index) => (
								<li
									key={index}
									className='cursor-pointer py-3 text-gray-700 transition hover:text-black'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
// {/* <div className='space-y-8'>
// 						<div
// 							className='relative overflow-hidden rounded-3xl
//               border border-pink-200
//               bg-gradient-to-br from-white to-pink-50
//               p-8 text-center shadow-xl'
// 						>
// 							<div
// 								className='absolute inset-0
//                 bg-gradient-to-br
//                 from-pink-500/5
//                 via-transparent
//                 to-fuchsia-500/5'
// 							/>

// 							<div className='relative z-10'>
// 								<div className='mb-6 flex justify-center'>
// 									<div className='flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg'>
// 										<MessageCircle />
// 									</div>
// 								</div>

// 								<h3 className='mb-3 text-xl font-bold text-gray-900'>
// 									Qo‘shimcha savollar bormi?
// 								</h3>

// 								<p className='mb-6 text-sm text-gray-600'>
// 									Qo‘shimcha savollaringiz bo‘lsa, bizning mutaxassislar bilan
// 									har doim bepul va ochiq muloqot qilishingiz mumkin.
// 								</p>

// 								<button
// 									className='rounded-full
//                   bg-gradient-to-r from-pink-500 to-fuchsia-500
//                   px-8 py-3 text-sm font-semibold text-white
//                   shadow-lg transition hover:opacity-90'
// 								>
// 									Bog‘lanish
// 								</button>
// 							</div>
// 						</div>

// 						<div
// 							className='flex items-center gap-4 rounded-3xl
//               border border-pink-200
//               bg-white p-6 shadow-md'
// 						>
// 							<div className='flex size-12 items-center justify-center rounded-full bg-pink-100 text-pink-500'>
// 								<Phone size={20} />
// 							</div>

// 							<div>
// 								<p className='text-xs text-gray-500'>
// 									Mutaxassis bilan bepul aloqa
// 								</p>
// 								<p className='text-lg font-bold text-gray-900'>08:00 | 22:00</p>
// 								<p className='text-sm text-gray-600'>+998 (90) 201-58-58</p>
// 							</div>
// 						</div>
// 					</div> */}
