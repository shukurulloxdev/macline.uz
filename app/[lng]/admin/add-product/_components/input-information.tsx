'use client'

import { addProductSchema } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

function InputInformation() {
	const [isDiscount, setIsDiscount] = useState<boolean>(false)

	const form = useForm<z.infer<typeof addProductSchema>>({
		resolver: zodResolver(addProductSchema),
		defaultValues: {
			name: '',
			category: '',
			description: '',
			brand: '',
			price: '',
			top: false,
			discount: false,
			percent: '',
		},
	})

	function onSubmit(values: z.infer<typeof addProductSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='text-4xl font-bold tracking-tight text-white'>
							Yangi Texnika kiritish
						</h1>
						<p className='mt-2 text-sm text-slate-400'>
							Quydagi bo&apos;sh joylarni to&apos;ldirib saytga yangi texnika
							qo&apos;shing
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<Button className='h-11' variant={'outline'}>
							Qoralama saqlash
						</Button>
						<Button
							type='submit'
							className='h-11 bg-blue-600 hover:bg-blue-700'
						>
							Saytga yuklash
						</Button>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<div className=' col-span-2 rounded-2xl border border-white/20 bg-white/5 p-6'>
						<div className='grid grid-cols-2 gap-4'>
							<div className='rounded-2xl bg-white/5 p-4'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-inter text-lg font-bold text-white '>
												Mahsulot nomi
											</FormLabel>
											<FormControl>
												<Input
													className='
    border-white/20
    bg-white/10
    transition-all
    duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-pink-500
  '
													{...field}
													placeholder='Mahsuloting toliq nomi'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='rounded-2xl bg-white/5 p-4'>
								<FormField
									control={form.control}
									name='category'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-inter text-lg font-bold text-white '>
												Mahsulot toifasi
											</FormLabel>
											<FormControl>
												<Input
													className='
    border-white/20
    bg-white/10
    text-white
    transition-all
    duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-pink-500
  '
													{...field}
													placeholder='Mahsulot toifasi'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='col-span-2 rounded-2xl bg-white/5 p-4'>
								<FormField
									control={form.control}
									name='description'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-inter text-lg font-bold text-white '>
												Mahsulot tavsifi
											</FormLabel>
											<FormControl>
												<Textarea
													className='border-white/20
    bg-white/10
    text-white
    transition-all
		duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-white/20'
													{...field}
													placeholder='Mahsulotning barcha malumoti'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='rounded-2xl bg-white/5 p-4'>
								<FormField
									control={form.control}
									name='brand'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-inter text-lg font-bold text-white '>
												Mahsulot brendi
											</FormLabel>
											<FormControl>
												<Input
													className='
    border-white/20
    bg-white/10
    text-white
    transition-all
    duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-pink-500
  '
													{...field}
													placeholder='Brend nomi'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='rounded-2xl bg-white/5 p-4'>
								<FormField
									control={form.control}
									name='price'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-inter text-lg font-bold text-white '>
												{!form.watch('price')
													? 'Mahsulot narxi'
													: `Narxi: ${formatPrice(
															Number(form.watch('price'))
													  )}`}
											</FormLabel>
											<FormControl>
												<Input
													type='number'
													className='
    border-white/20
    bg-white/10
    text-white
    transition-all
    duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-pink-500
  '
													{...field}
													placeholder='Mahsulot narxi'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='col-span-2 grid grid-cols-2 gap-4 rounded-2xl bg-white/5 p-4'>
								<div className='space-y-4'>
									<FormField
										control={form.control}
										name='top'
										render={({ field }) => (
											<FormItem>
												<div className='flex items-center gap-2'>
													<FormControl>
														<Checkbox
															onCheckedChange={field.onChange}
															className='
    size-6
    !rounded-sm
    border-2
    border-blue-500
    transition-all
    duration-200
    focus-visible:ring-2
		 focus-visible:ring-blue-500
    focus-visible:ring-offset-0
    data-[state=checked]:border-blue-600
    data-[state=checked]:bg-blue-600
    data-[state=checked]:text-white
  '
														/>
													</FormControl>
													<FormLabel className='font-inter text-lg font-bold text-white'>
														Top ga kiritilsinmi ?
													</FormLabel>
												</div>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='discount'
										render={({ field }) => (
											<FormItem>
												<div className='flex items-center gap-2'>
													<FormControl>
														<Checkbox
															checked={field.value}
															onCheckedChange={checked => {
																setIsDiscount(!!checked)
																field.onChange(checked)
															}}
															className='
    size-6
    !rounded-sm
    border-2
    border-blue-500
    transition-all
    duration-200
    focus-visible:ring-2
		 focus-visible:ring-blue-500
    focus-visible:ring-offset-0
    data-[state=checked]:border-blue-600
    data-[state=checked]:bg-blue-600
    data-[state=checked]:text-white
  '
														/>
													</FormControl>
													<FormLabel className='font-inter text-lg font-bold text-white'>
														Chegirma berilsinmi ?
													</FormLabel>
												</div>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{isDiscount === true && (
									<div className=''>
										<FormField
											control={form.control}
											name='percent'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='font-inter text-lg font-bold text-white'>
														{form.watch('percent')
															? `	Chegirma foizi: ${form.watch('percent')}`
															: '	Chegirma foizi'}
													</FormLabel>
													<FormControl>
														<Input
															type='number'
															className='
    border-white/20
    bg-white/10
    text-white
    transition-all
    duration-200
    placeholder:text-gray-200
    focus:border-indigo-500
    focus:ring-1
    focus:ring-pink-500
  '
															{...field}
															placeholder='Mahsulot narxi'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='rounded-2xl border border-white/30 bg-white/10 p-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						veniam explicabo tenetur. Distinctio doloribus id doloremque
						voluptates quidem, inventore quia eveniet cupiditate, totam animi
						pariatur sequi provident deleniti necessitatibus consequatur.
					</div>
				</div>
			</form>
		</Form>
	)
}

export default InputInformation
