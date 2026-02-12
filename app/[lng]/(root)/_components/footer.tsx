import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
	return (
		<footer
			className='relative mt-7 border-t border-white/10 
bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white'
		>
			<div className='mx-auto max-w-7xl px-6 py-16'>
				<div className='grid gap-12 md:grid-cols-2 lg:grid-cols-5'>
					{/* Brand */}
					<div className='space-y-4'>
						<h2 className='text-2xl font-bold tracking-tight'>PremiumDo‘kon</h2>

						<p className='text-sm leading-relaxed text-gray-300'>
							Sifatli mahsulotlar, tezkor yetkazib berish va ishonchli xizmat.
							Sizning ishonchingiz – bizning qadriyatimiz.
						</p>

						<div className='flex gap-4 pt-2'>
							<Facebook className='size-5 cursor-pointer text-gray-400 transition hover:text-white' />
							<Instagram className='size-5 cursor-pointer text-gray-400 transition hover:text-pink-500' />
						</div>
					</div>

					{/* Section Titles */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
							Mahsulotlar
						</h3>
						<ul className='space-y-3 text-sm text-gray-300'>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Barcha mahsulotlar
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Yangi kelganlar
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Eng ko‘p sotilgan
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Aksiyalar
								</Link>
							</li>
						</ul>
					</div>

					{/* Xizmatlar */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
							Xizmatlar
						</h3>
						<ul className='space-y-3 text-sm text-gray-300'>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Yetkazib berish
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									To‘lov usullari
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Qaytarish siyosati
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Savol-javob
								</Link>
							</li>
						</ul>
					</div>

					{/* Yordam */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
							Yordam
						</h3>
						<ul className='space-y-3 text-sm text-gray-300'>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Maxfiylik siyosati
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Foydalanish shartlari
								</Link>
							</li>
							<li>
								<Link href='#' className='transition hover:text-white'>
									Sayt xaritasi
								</Link>
							</li>
						</ul>
					</div>

					{/* Kontakt */}
					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
							Bog‘lanish
						</h3>

						<ul className='space-y-4 text-sm text-gray-300'>
							<li className='flex items-start gap-3'>
								<MapPin className='mt-1 size-4 text-gray-400' />
								<span>Toshkent shahri, Chilonzor tumani</span>
							</li>
							<li className='flex items-center gap-3'>
								<Phone className='size-4 text-gray-400' />
								<span>+998 90 123 45 67</span>
							</li>
							<li className='flex items-center gap-3'>
								<Mail className='size-4 text-gray-400' />
								<span>info@premium.uz</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className='mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row'>
					<div className='flex items-center gap-4 text-sm text-gray-400'>
						<span>To‘lov usullari:</span>
						<div className='flex gap-3'>
							<div className='rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs'>
								UzCard
							</div>
							<div className='rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs'>
								Humo
							</div>
							<div className='rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs'>
								Visa
							</div>
							<div className='rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs'>
								MasterCard
							</div>
						</div>
					</div>

					<p className='text-xs text-gray-400'>
						© {new Date().getFullYear()} PremiumDo‘kon. Barcha huquqlar
						himoyalangan.
					</p>
				</div>
			</div>
		</footer>
	)
}
