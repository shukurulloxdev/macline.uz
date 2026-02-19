import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link
			href={'/'}
			className='flex select-none items-center justify-center text-[42px]'
		>
			<span className='font-bold italic tracking-tight text-pink-600'>
				Texnotech
			</span>
		</Link>
	)
}

export default Logo
