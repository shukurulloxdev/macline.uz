// import Logo from "@/components/shared/logo";
// import Link from "next/link";

// const footerLinks = {
//   mahsulotlar: [
//     { label: "iPhone", href: "/iphone" },
//     { label: "MacBook", href: "/macbook" },
//     { label: "iPad", href: "/ipad" },
//     { label: "iPad", href: "/ipad" },
//     { label: "iPad", href: "/ipad" },
//     { label: "Apple Watch", href: "/watch" },
//     { label: "AirPods", href: "/airpods" },
//     { label: "Aksessuarlar", href: "/accessories" },
//     { label: "AirPods", href: "/airpods" },
//   ],
//   xizmatlar: [
//     { label: "Kafolat & Ta&apos;mirlash", href: "/warranty" },
//     { label: "Trade-in", href: "/trade-in" },
//     { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
//     { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
//     { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
//     { label: "Konfiguratsiya", href: "/configure" },
//     { label: "Apple Care+", href: "/apple-care" },
//     { label: "Apple Care+", href: "/apple-care" },
//     { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
//   ],
//   kompaniya: [
//     { label: "Biz haqimizda", href: "/about" },
//     { label: "Ish o&apos;rinlari", href: "/careers" },
//     { label: "Yangiliklar", href: "/news" },
//     { label: "Hamkorlar", href: "/partners" },
//     { label: "Filiallar", href: "/stores" },
//     { label: "Yangiliklar", href: "/news" },
//     { label: "Yangiliklar", href: "/news" },
//     { label: "Yangiliklar", href: "/news" },
//     { label: "Hamkorlar", href: "/partners" },
//   ],
//   yordam: [
//     { label: "FAQ", href: "/faq" },
//     { label: "Yetkazib berish", href: "/delivery" },
//     { label: "Qaytarish siyosati", href: "/returns" },
//     { label: "Maxfiylik siyosati", href: "/privacy" },
//     { label: "Yetkazib berish", href: "/delivery" },
//     { label: "Qaytarish siyosati", href: "/returns" },
//     { label: "Maxfiylik siyosati", href: "/privacy" },
//     { label: "Qaytarish siyosati", href: "/returns" },
//     { label: "Maxfiylik siyosati", href: "/privacy" },
//   ],
// };

// const socialLinks = [
//   {
//     name: "Instagram",
//     href: "https://instagram.com",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         className="h-5 w-5"
//       >
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
//   {
//     name: "Telegram",
//     href: "https://t.me",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
//         <path
//           d="M21.8 3L1 11.4c-1.4.6-1.4 1.4 0 1.8l5.2 1.6 1.8 5.6c.4 1 .8 1.2 1.6.8l3.2-2.4 4 3c.8.6 1.6.2 1.8-0.8l3-14c.4-1.6-.6-2.4-2-1.6z"
//           fill="currentColor"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "YouTube",
//     href: "https://youtube.com",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//         <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.3.7 11.5v2.1C.7 15.8 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.1 12 22.1 12 22.1s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.5v-2.1C23.3 9.3 23 7 23 7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Facebook",
//     href: "https://facebook.com",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
//         <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
//       </svg>
//     ),
//   },
// ];

// const paymentIcons = [
//   { name: "Visa", label: "VISA" },
//   { name: "Mastercard", label: "MC" },
//   { name: "Uzcard", label: "UZCARD" },
//   { name: "Humo", label: "HUMO" },
//   { name: "Payme", label: "PAYME" },
//   { name: "Click", label: "CLICK" },
// ];

// export default function MaclineFooter() {
//   return (
//     <footer className="border-t border-gray-100 bg-[#fffcfd] font-[system-ui]">
//       <div className="mx-auto max-w-7xl px-4 py-14">
//         <div className="grid grid-cols-2 items-start gap-10 sm:grid-cols-3 lg:grid-cols-6">
//           <div className="col-span-2 flex flex-col gap-6 sm:col-span-3 lg:col-span-2">
//             <div className="space-y-1">
//               <Logo />

//               <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
//                 O&apos;zbekistondagi rasmiy Apple mahsulotlari distribyutori.
//                 Original texnika, kafolat va professional maslahat.
//               </p>
//             </div>

//             <div className="space-y-3">
//               <a
//                 href="tel:+998712001234"
//                 className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-[#0071e3]"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors group-hover:border-[#0071e3]/30">
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={1.8}
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//                   </svg>
//                 </span>
//                 +998 90 201-58-58
//               </a>
//               <a
//                 href="mailto:info@macline.uz"
//                 className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-[#0071e3]"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors group-hover:border-[#0071e3]/30">
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={1.8}
//                   >
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                     <polyline points="22,6 12,13 2,6" />
//                   </svg>
//                 </span>
//                 macline@gmail.com
//               </a>
//               <div className="flex items-center gap-3 text-sm text-gray-700">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50">
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={1.8}
//                   >
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                 </span>
//                 O&apos;zbekiston bo&apos;ylab 4 ta filial
//               </div>
//             </div>

//             {/* socials */}
//             <div className="flex items-center gap-2">
//               {socialLinks.map((s) => (
//                 <a
//                   key={s.name}
//                   href={s.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={s.name}
//                   className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-[#0071e3]/40 hover:bg-blue-50 hover:text-[#0071e3]"
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* LINKS COLS */}
//           {(
//             [
//               ["Mahsulotlar", footerLinks.mahsulotlar],
//               ["Xizmatlar", footerLinks.xizmatlar],
//               ["Kompaniya", footerLinks.kompaniya],
//               ["Yordam", footerLinks.yordam],
//             ] as [string, { label: string; href: string }[]][]
//           ).map(([title, links]) => (
//             <div key={title}>
//               <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">
//                 {title}
//               </h4>
//               <ul className="space-y-2.5">
//                 {links.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="inline-block text-sm text-gray-600 transition-colors hover:text-[#0071e3]"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── STORE BADGES + WORKING HOURS ────────────────────────────── */}
//       <div className="border-t border-gray-100">
//         <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="text-xs font-medium text-gray-400">
//                 To&apos;lov usullari:
//               </span>
//               {paymentIcons.map((p) => (
//                 <span
//                   key={p.name}
//                   className="cursor-default rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-bold tracking-wide text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
//                 >
//                   {p.label}
//                 </span>
//               ))}
//             </div>
//             {/* working hours */}
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
//                 <span>
//                   Du–Jum:{" "}
//                   <strong className="text-gray-800">09:00 – 20:00</strong>
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
//                 <span>
//                   Shan–Yak:{" "}
//                   <strong className="text-gray-800">10:00 – 18:00</strong>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ── BOTTOM BAR ──────────────────────────────────────────────── */}
//       <div className="border-t border-gray-100 bg-white">
//         <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
//             <p>
//               © {new Date().getFullYear()}{" "}
//               <span className="font-semibold text-gray-600">Macline</span> —
//               Barcha huquqlar himoyalangan. Apple, iPhone, MacBook, iPad,
//               AirPods — Apple Inc. savdo belgilari.
//             </p>
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/privacy"
//                 className="transition-colors hover:text-gray-600"
//               >
//                 Maxfiylik
//               </Link>
//               <Link
//                 href="/terms"
//                 className="transition-colors hover:text-gray-600"
//               >
//                 Foydalanish shartlari
//               </Link>
//               <Link
//                 href="/sitemap"
//                 className="transition-colors hover:text-gray-600"
//               >
//                 Sayt xaritasi
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import Logo from "@/components/shared/logo";
// import Link from "next/link";
// import {
//   Instagram,
//   Send,
//   Youtube,
//   Facebook,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
//   CreditCard,
//   ShieldCheck,
//   Truck,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// const footerData = {
//   sections: [
//     {
//       title: "Mahsulotlar",
//       links: [
//         { label: "iPhone", href: "/category/iphone" },
//         { label: "MacBook", href: "/category/macbook" },
//         { label: "iPad", href: "/category/ipad" },
//         { label: "Watch", href: "/category/watch" },
//         { label: "AirPods", href: "/category/airpods" },
//         { label: "Aksessuarlar", href: "/category/accessories" },
//       ],
//     },
//     {
//       title: "Xizmatlar",
//       links: [
//         { label: "Macline Service", href: "/service" },
//         { label: "Trade-in", href: "/trade-in" },
//         { label: "Bo'lib to'lash", href: "/installment" },
//         { label: "Apple Care+", href: "/apple-care" },
//         { label: "Yetkazib berish", href: "/delivery" },
//       ],
//     },
//     {
//       title: "Kompaniya",
//       links: [
//         { label: "Biz haqimizda", href: "/about" },
//         { label: "Filiallar", href: "/stores" },
//         { label: "Vakansiyalar", href: "/careers" },
//         { label: "Yangiliklar", href: "/news" },
//         { label: "Kontaktlar", href: "/contact" },
//       ],
//     },
//     {
//       title: "Yordam",
//       links: [
//         { label: "FAQ", href: "/faq" },
//         { label: "Qaytarish", href: "/returns" },
//         { label: "Kafolat shartlari", href: "/warranty" },
//         { label: "Maxfiylik siyosati", href: "/privacy" },
//       ],
//     },
//   ],
//   socials: [
//     { name: "Instagram", href: "#", icon: Instagram },
//     { name: "Telegram", href: "#", icon: Send },
//     { name: "YouTube", href: "#", icon: Youtube },
//     { name: "Facebook", href: "#", icon: Facebook },
//   ],
//   payments: ["Uzcard", "Humo", "Visa", "Mastercard", "Payme", "Click"],
// };

// export default function MaclineFooter() {
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const toggleSection = (title: string) => {
//     setOpenSection(openSection === title ? null : title);
//   };

//   return (
//     <footer className="w-full border-t border-neutral-100 bg-[#fbfbfb] pt-16">
//       <div className="mx-auto max-w-7xl px-4">
//         {/* 1. TOP: Newsletter & Benefits */}
//         <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
//           <div className="lg:col-span-2">
//             <h3 className="text-2xl font-bold tracking-tight text-black">
//               Chegirmalar va yangiliklardan boxabar bo'ling
//             </h3>
//             <p className="mt-2 text-neutral-500">
//               Macline oilasiga qo'shiling va faqat obunachilar uchun maxsus
//               takliflarni qo'lga kiriting.
//             </p>
//             <form className="mt-6 flex max-w-md gap-2">
//               <input
//                 type="email"
//                 placeholder="Email manzilingiz"
//                 className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm outline-none transition-all focus:border-pink-500"
//               />
//               <button className="rounded-2xl bg-black px-8 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800 active:scale-95">
//                 Obuna
//               </button>
//             </form>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
//                 <Truck size={20} />
//               </div>
//               <h4 className="text-sm font-bold">Tezkor Yetkazib berish</h4>
//               <p className="text-xs text-neutral-400">
//                 O'zbekiston bo'ylab 24 soat ichida.
//               </p>
//             </div>
//             <div className="space-y-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//                 <ShieldCheck size={20} />
//               </div>
//               <h4 className="text-sm font-bold">Rasmiy Kafolat</h4>
//               <p className="text-xs text-neutral-400">
//                 Faqat original Apple mahsulotlari.
//               </p>
//             </div>
//           </div>
//         </div>

//         <hr className="mb-16 border-neutral-100" />

//         {/* 2. MIDDLE: Links Grid */}
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
//           {/* Brand Info */}
//           <div className="lg:col-span-4">
//             <Logo />
//             <p className="mt-6 text-sm leading-relaxed text-neutral-500 lg:max-w-sm">
//               Macline — O'zbekistondagi eng zamonaviy Apple ekotizimi do'koni.
//               Biz nafaqat texnika sotamiz, balki yuqori darajadagi servisni
//               ta'minlaymiz.
//             </p>

//             <div className="mt-8 space-y-4">
//               <a
//                 href="tel:+998902015858"
//                 className="flex items-center gap-3 text-sm font-bold text-black transition-colors hover:text-pink-600"
//               >
//                 <Phone size={18} className="text-neutral-400" /> +998 90
//                 201-58-58
//               </a>
//               <a
//                 href="mailto:macline@gmail.com"
//                 className="flex items-center gap-3 text-sm font-medium text-neutral-600 transition-colors hover:text-pink-600"
//               >
//                 <Mail size={18} className="text-neutral-400" />{" "}
//                 macline@gmail.com
//               </a>
//               <div className="flex items-center gap-3 text-sm text-neutral-600">
//                 <MapPin size={18} className="text-neutral-400" /> Toshkent,
//                 Samarqand, Farg'ona, Andijon
//               </div>
//             </div>

//             <div className="mt-8 flex gap-3">
//               {footerData.socials.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:bg-black hover:text-white"
//                 >
//                   <social.icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Links (Mobile Accordion / Desktop Grid) */}
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
//             {footerData.sections.map((section) => (
//               <div key={section.title} className="flex flex-col">
//                 <button
//                   onClick={() => toggleSection(section.title)}
//                   className="flex items-center justify-between border-b border-neutral-100 py-4 lg:cursor-default lg:border-none lg:py-0"
//                 >
//                   <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
//                     {section.title}
//                   </span>
//                   <ChevronDown
//                     className={cn(
//                       "size-4 transition-transform lg:hidden",
//                       openSection === section.title && "rotate-180",
//                     )}
//                   />
//                 </button>

//                 <ul
//                   className={cn(
//                     "mt-4 space-y-3 overflow-hidden transition-all lg:block",
//                     openSection === section.title
//                       ? "max-h-96"
//                       : "max-h-0 lg:max-h-none",
//                   )}
//                 >
//                   {section.links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         className="text-sm font-medium text-neutral-600 transition-colors hover:text-pink-600"
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 3. BOTTOM: Payments & Copyright */}
//         <div className="mt-16 border-t border-neutral-100 py-10">
//           <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//             <div className="flex flex-wrap justify-center gap-3">
//               {footerData.payments.map((p) => (
//                 <div
//                   key={p}
//                   className="flex h-8 items-center justify-center rounded-lg border border-neutral-100 bg-white px-3 text-[10px] font-black tracking-widest text-neutral-400"
//                 >
//                   {p.toUpperCase()}
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center gap-6">
//               <div className="flex flex-col text-right">
//                 <span className="text-[10px] font-bold text-neutral-400">
//                   ISH VAQTI
//                 </span>
//                 <span className="text-xs font-bold text-black">
//                   Harcuni: 09:00 - 20:00
//                 </span>
//               </div>
//               <div className="h-8 w-[1px] bg-neutral-100" />
//               <CreditCard className="text-neutral-300" />
//             </div>
//           </div>

//           <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-50 pt-8 text-[11px] font-medium text-neutral-400 md:flex-row">
//             <p>
//               © {new Date().getFullYear()} Macline Store. Barcha huquqlar
//               himoyalangan.
//             </p>
//             <div className="flex gap-6">
//               <Link href="/terms" className="hover:text-black">
//                 Ommaviy oferta
//               </Link>
//               <Link href="/policy" className="hover:text-black">
//                 Maxfiylik
//               </Link>
//               <Link href="/sitemap" className="hover:text-black">
//                 Sayt xaritasi
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";
import React, { useState } from "react";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import {
  Instagram,
  Send,
  Youtube,
  Facebook,
  ChevronDown,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const footerData = {
  sections: [
    {
      title: "Xaridorlar",
      links: [
        { label: "iPhone", href: "/iphone" },
        { label: "MacBook", href: "/macbook" },
        { label: "Trade-in", href: "/trade-in" },
        { label: "Bo'lib to'lash", href: "/installment" },
      ],
    },
    {
      title: "Yordam",
      links: [
        { label: "Kafolat", href: "/warranty" },
        { label: "Yetkazib berish", href: "/delivery" },
        { label: "Servis markazi", href: "/service" },
        { label: "Savollar", href: "/faq" },
      ],
    },
    {
      title: "Macline",
      links: [
        { label: "Biz haqimizda", href: "/about" },
        { label: "Filiallar", href: "/stores" },
        { label: "Vakansiyalar", href: "/careers" },
        { label: "Kontaktlar", href: "/contact" },
      ],
    },
  ],
  socials: [
    { icon: Instagram, href: "#" },
    { icon: Send, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Facebook, href: "#" },
  ],
};

export default function MaclineFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="w-full border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-14">
        {/* TOP: Newsletter (Mobil uchun ixcham) */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-sm">
            <h3 className="text-lg font-bold tracking-tight text-black">
              Macline yangiliklari
            </h3>
            <p className="text-xs text-neutral-500">
              Chegirmalar va yangi modellar haqida birinchi bo'lib biling.
            </p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-full rounded-xl border border-neutral-100 bg-neutral-50 px-4 text-xs outline-none focus:border-pink-500/50"
            />
            <button className="h-10 rounded-xl bg-black px-6 text-xs font-bold text-white transition-all active:scale-95">
              OK
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-0 border-y border-neutral-50 md:grid-cols-4 md:gap-8 md:border-none">
          {/* Brand Col */}
          <div className="py-6 md:py-0">
            <Logo />
            <div className="mt-4 space-y-1">
              <p className="text-[13px] font-bold text-black">
                +998 90 201-58-58
              </p>
              <p className="text-[12px] text-neutral-400">
                Har kuni 09:00 dan 20:00 gacha
              </p>
            </div>
          </div>

          {/* Accordion Links */}
          {footerData.sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-neutral-50 md:border-none"
            >
              <button
                onClick={() =>
                  setOpenSection(
                    openSection === section.title ? null : section.title,
                  )
                }
                className="flex w-full items-center justify-between py-4 md:mb-4 md:cursor-default md:py-0"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-neutral-400">
                  {section.title}
                </span>
                <ChevronDown
                  className={cn(
                    "size-4 text-neutral-300 transition-transform md:hidden",
                    openSection === section.title && "rotate-180",
                  )}
                />
              </button>

              <ul
                className={cn(
                  "space-y-3 overflow-hidden transition-all duration-300 md:max-h-none",
                  openSection === section.title
                    ? "max-h-60 pb-5"
                    : "max-h-0 md:block",
                )}
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-neutral-600 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM: Socials & Payments */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-4">
            {footerData.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-neutral-400 transition-colors hover:text-black"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["Visa", "Mastercard", "Humo", "Uzcard", "Payme"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-neutral-100 px-2 py-1 text-[9px] font-bold text-neutral-400"
              >
                {p.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-neutral-50 pt-6 text-[10px] font-medium text-neutral-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Macline Store. Toshkent, O'zbekiston.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Maxfiylik
            </Link>
            <Link href="#" className="hover:underline">
              Oferta
            </Link>
            <div className="flex items-center gap-1 text-black">
              <Globe size={12} />
              <span>O'zbekcha</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
