// import { categories } from '@/components/constants'
// import Image from 'next/image'
// import React from 'react'

// function Categories() {
// 	return (
// 		<div className='mx-auto max-w-7xl py-8'>
// 			<div className='flex flex-col gap-4'>
// 				<h1 className='font-sora text-3xl font-bold'>Mahsulot toifalari</h1>
// 				<div className='grid grid-cols-7 gap-10'>
// 					{categories.map(item => (
// 						<div key={item.route} className='flex flex-col gap-1'>
// 							<div className='relative size-44'>
// 								<Image
// 									src={item.url}
// 									alt={item.title}
// 									fill
// 									className='rounded-2xl object-cover'
// 								/>
// 							</div>
// 							<h1>{item.title}</h1>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Categories
import { categories } from '@/components/constants'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

function Categories() {
	return (
		<section className='mx-auto max-w-7xl py-8'>
			{/* Header */}
			<div className='mb-10 flex items-end justify-between'>
				<h1 className='font-sora text-4xl font-bold tracking-tight text-slate-900'>
					Mahsulot toifalari
				</h1>
				<span className='text-sm text-slate-500'>
					Barcha kategoriyalarni ko‘ring
				</span>
			</div>

			{/* Grid */}
			<div className='grid grid-cols-6 gap-6 '>
				{categories.map(item => (
					<div
						key={item.route}
						className='group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl'
					>
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
							<h3 className='text-sm font-medium text-slate-800 transition-opacity duration-300 '>
								{item.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Categories
