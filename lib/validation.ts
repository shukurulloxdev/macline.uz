'use client'

import { z } from 'zod'
export const addProductSchema = z
	.object({
		name: z.string().min(5, 'Kamida 5 ta harf'),

		category: z.string().min(1, 'Kategoriya majburiy'),

		description: z.string().min(10, 'Kamida 10 ta harf'),

		brand: z.string().min(1, 'Brend majburiy'),

		price: z.string().min(1, 'Narx majburiy'),

		top: z.boolean().optional(),
		discount: z.boolean().optional(),
		percent: z.string().optional(),
	})
	.superRefine((data, ctx) => {
		if (
			data.discount === true &&
			(!data.percent || data.percent.trim() === '')
		) {
			ctx.addIssue({
				code: 'custom',
				path: ['percent'],
				message: 'Discount tanlansa, percent majburiy',
			})
		}
	})
