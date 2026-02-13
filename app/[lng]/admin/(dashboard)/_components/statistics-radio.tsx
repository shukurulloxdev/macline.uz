'use client'

import { categoryStatistics } from '@/components/constants'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

function StatisticsRadio() {
	return (
		<div className='relative h-[380px] w-full'>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						data={categoryStatistics}
						dataKey='sold'
						nameKey='category'
						cx='50%'
						cy='50%'
						innerRadius={80}
						outerRadius={130}
						label={({ percent }) => {
							const safePercent = percent ? percent * 100 : 0
							return `${safePercent.toFixed(0)}%`
						}}
					>
						{categoryStatistics.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
					{/* Tooltip - Hover da nechta sotilganligi chiqaradi */}
					<Tooltip
						wrapperStyle={{ zIndex: 1000 }}
						contentStyle={{
							backgroundColor: '#ffffff',
							borderRadius: '12px',
						}}
						labelStyle={{ color: '#fff' }}
						formatter={(value, name) => [`${Number(value) || 0} ta`, name]}
					/>
				</PieChart>
			</ResponsiveContainer>

			<div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center'>
				<span className='text-sm text-slate-400'>Umumiy</span>
				<span className='text-3xl font-bold text-white'>
					{categoryStatistics.reduce((a, b) => a + b.sold, 0)} ta
				</span>
			</div>
		</div>
	)
}

export default StatisticsRadio
