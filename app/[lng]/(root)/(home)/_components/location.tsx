import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

function Location() {
	return (
		<div className='mx-auto max-w-7xl py-6'>
			<Tabs
				defaultValue='1xona'
				className='rounded-2xl bg-gradient-to-br from-white via-rose-50 to-pink-100 p-6  shadow-xl'
			>
				<div className='mb-4 flex items-center justify-between gap-10'>
					<div className='flex flex-col gap-1'>
						<h1 className='font-sora text-3xl font-semibold tracking-tight text-gray-800'>
							Bizning barcha Filiallarimiz
						</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto itaque provident quia beatae pariatur excepturi
							similique atque exercitationem facilis rerum placeat, a
							repellendus.
						</p>
					</div>
					<TabsList className='mx-auto flex justify-center gap-3 rounded-2xl bg-white p-9 shadow-xl backdrop-blur-md'>
						<TabsTrigger
							value='1xona'
							className='flex-1 rounded-xl bg-slate-100 py-3 text-center text-base font-semibold transition-all duration-300
							ease-in-out
               hover:scale-105 hover:shadow-lg
               data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl'
						>
							Fargona Filial
						</TabsTrigger>

						<TabsTrigger
							value='2xona'
							className='flex-1 rounded-xl bg-slate-100 py-3 text-center text-base font-semibold transition-all duration-300 ease-in-out
               hover:scale-105 hover:shadow-lg
               data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl'
						>
							Toshkent Filial
						</TabsTrigger>

						<TabsTrigger
							value='3xona'
							className='flex-1 rounded-xl bg-slate-100 py-3 text-center text-base font-semibold transition-all duration-300 ease-in-out
               hover:scale-105 hover:shadow-lg
               data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl'
						>
							Samarqand Filial
						</TabsTrigger>
					</TabsList>
				</div>

				<div className='grid grid-cols-3 items-center gap-4'>
					{/* Rasm */}
					<div className='relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg'>
						<Image
							src={'/menejer/showroom.png'}
							alt='Showroom'
							fill
							className='object-cover transition-transform duration-700 hover:scale-105'
						/>
					</div>

					<div className='col-span-2'>
						<TabsContent value='1xona'>
							<iframe
								src='https://yandex.ru/map-widget/v1/?um=constructor%3A0b843d3353a9d831a1493ca53d631d3777888b0b86dbdd57e92a1d4e44872049&source=constructor'
								className='h-[450px] w-full rounded-2xl'
								allowFullScreen
							/>
						</TabsContent>

						<TabsContent value='2xona'>
							<iframe
								src='https://yandex.ru/map-widget/v1/?um=constructor%3Atoshkent-map&source=constructor'
								className='h-[450px] w-full rounded-2xl'
								allowFullScreen
							/>
						</TabsContent>

						<TabsContent value='3xona'>
							<iframe
								src='https://yandex.ru/map-widget/v1/?um=constructor%3Asamarqand-map&source=constructor'
								className='h-[450px] w-full rounded-2xl'
								allowFullScreen
							/>
						</TabsContent>
					</div>
				</div>
			</Tabs>
		</div>
	)
}

export default Location
