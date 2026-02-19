'use client'
import React from 'react'
import ProductsMenu from './_components/products-menu'
import { Button } from '@/components/ui/button'
import { LayersPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { selectCategories } from '@/components/constants'

function Page() {
	const router = useRouter()
	return (
		<div className=''>
			<div className='space-y-8'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='text-4xl font-bold tracking-tight text-white'>
							Barcha texnikalar
						</h1>
						<p className='mt-2 text-sm text-slate-400'>
							Saytdagi barcha aktiv texnikalar jadvali
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<Select>
							<SelectTrigger
								className='w-[350px] border border-white bg-white/15
		text-white
		transition-all 
		duration-200 hover:bg-white/20 focus:ring-1  data-[placeholder]:font-inter data-[placeholder]:text-white'
							>
								<SelectValue
									placeholder='Texnikalarni filtrlash
'
								/>
							</SelectTrigger>

							<SelectContent
								className='border border-white/50  bg-white/5 
		text-white backdrop-blur-3xl'
							>
								{selectCategories.map(category => (
									<SelectItem
										key={category.label}
										value={category.label}
										className='cursor-pointer 
				focus:bg-blue-600/30 
				focus:text-white
				data-[state=checked]:bg-blue-600
				data-[state=checked]:text-white'
									>
										{category.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						<Button
							className='flex items-center bg-blue-600 hover:bg-blue-700'
							onClick={() => router.push(`/uz/admin/add-product`)}
						>
							<LayersPlus />
							<span>Texnika kiritish</span>
						</Button>
					</div>
				</div>
				<ProductsMenu />
			</div>
		</div>
	)
}

export default Page
