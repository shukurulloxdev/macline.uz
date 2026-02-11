import React from 'react'
import Hero from './_components/hero'
import Categories from './_components/categories'
import PopProducts from './_components/top-products'
import DiscountProducts from './_components/discount-products'
import BigProducts from './_components/big-products'
import SmallProducts from './_components/small-products'

function Page() {
	return (
		<div>
			<Hero />
			<Categories />
			<PopProducts />
			<DiscountProducts />
			<BigProducts />
			<SmallProducts />
		</div>
	)
}

export default Page
