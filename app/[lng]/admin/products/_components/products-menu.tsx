import { allAdminProducts } from '@/components/constants'
import React from 'react'
import AdminProductCard from './cards/admin-product-card'

function ProductsMenu() {
	return (
		<div className='rounded-3xl bg-white/5 p-6'>
			<div className='flex flex-col gap-4'>
				{allAdminProducts.map(product => (
					<AdminProductCard key={product.image} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductsMenu
