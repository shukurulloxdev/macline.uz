'use client'
import React from 'react'
import ProductsMenu from './_components/products-menu'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Page() {
	const router = useRouter()
	return (
		<div className='overflow-hidden'>
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

					<Button
						className='bg-blue-600 hover:bg-blue-700 flex items-center'
						onClick={() => router.push(`/uz/admin/add-product`)}
					>
						<Plus />
						<span>Add Product</span>
					</Button>
				</div>
				<ProductsMenu />
			</div>
		</div>
	)
}

export default Page
