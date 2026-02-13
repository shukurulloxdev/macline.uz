'use client'
import StatisticsCard from '@/app/[lng]/admin/(dashboard)/_components/cards/statistics-card'
import { bestSeller, statistics } from '@/components/constants'
import React from 'react'
import BestSellerCard from './_components/cards/bestseller-card'
import StatisticsRadio from './_components/statistics-radio'

function Page() {
	return (
		<div className='overflow-hidden'>
			<div className='space-y-8'>
				<div>
					<h1 className='text-4xl font-bold tracking-tight text-white'>
						Sayt statistikasi
					</h1>
					<p className='mt-2 text-sm text-slate-400'>
						Saytning real-vaqt nazorati paneli
					</p>
				</div>
				<div className='grid grid-cols-4 gap-5'>
					{statistics.map((card, i) => (
						<StatisticsCard key={i} card={card} />
					))}
				</div>

				<div className='grid grid-cols-3 gap-5'>
					<div
						className='col-span-2 flex flex-col gap-4 rounded-3xl border
	border-white/20 bg-white/10 p-6'
					>
						{bestSeller.map(item => (
							<BestSellerCard key={item.image} product={item} />
						))}
					</div>
					{/**/}
					<div className='rounded-3xl border border-white/20 bg-white/10'>
						<StatisticsRadio />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
