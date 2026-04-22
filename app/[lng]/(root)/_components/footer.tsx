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

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   Instagram,
//   Send,
//   Youtube,
//   Facebook,
//   Globe,
//   ChevronDown,
//   ArrowRight,
//   CheckCircle2,
//   CreditCard,
//   Truck,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// // ─── Data ────────────────────────────────────────────────────────────────────

// const PROMO_ITEMS = [
//   { icon: Truck, text: "Bepul yetkazib berish", sub: "500 000 so'm dan" },
//   { icon: CheckCircle2, text: "1 yil kafolat", sub: "barcha mahsulotlar" },
//   { icon: CreditCard, text: "Bo'lib to'lash", sub: "0% foiz" },
// ];

// const NAV = [
//   {
//     title: "Xaridorlar",
//     links: [
//       { label: "iPhone", href: "/catalog/iphone", badge: "Yangi" },
//       { label: "MacBook", href: "/catalog/macbook" },
//       { label: "iPad", href: "/catalog/ipad" },
//       { label: "AirPods", href: "/catalog/airpods" },
//       { label: "Aksessuarlar", href: "/catalog/accessories" },
//       { label: "Trade-in", href: "/trade-in" },
//     ],
//   },
//   {
//     title: "Yordam",
//     links: [
//       { label: "Kafolat", href: "/warranty" },
//       { label: "Yetkazib berish", href: "/delivery" },
//       { label: "Servis markazi", href: "/service" },
//       { label: "Bo'lib to'lash", href: "/installment" },
//       { label: "Qaytarish", href: "/returns" },
//       { label: "FAQ", href: "/faq" },
//     ],
//   },
//   {
//     title: "Kompaniya",
//     links: [
//       { label: "Biz haqimizda", href: "/about" },
//       { label: "Filiallar", href: "/stores" },
//       { label: "Vakansiyalar", href: "/careers", badge: "2 ta" },
//       { label: "Kontaktlar", href: "/contact" },
//       { label: "Press", href: "/press" },
//     ],
//   },
// ];

// const SOCIALS = [
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Send, href: "#", label: "Telegram" },
//   { icon: Youtube, href: "#", label: "YouTube" },
//   { icon: Facebook, href: "#", label: "Facebook" },
// ];

// const PAYMENTS = ["VISA", "MC", "HUMO", "UZCARD", "PAYME", "CLICK"];

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function Badge({ text }: { text: string }) {
//   return (
//     <span className="rounded-[4px] bg-[#fdf0e8] px-[7px] py-[2px] text-[9px] font-semibold uppercase tracking-wider text-[#b05e1e]">
//       {text}
//     </span>
//   );
// }

// function SocialBtn({
//   icon: Icon,
//   href,
//   label,
// }: {
//   icon: React.ElementType;
//   href: string;
//   label: string;
// }) {
//   return (
//     <a
//       href={href}
//       aria-label={label}
//       className={cn(
//         "flex h-[34px] w-[34px] items-center justify-center rounded-full",
//         "border border-[#e4ddd5] bg-white",
//         "text-[#7a7065] transition-all duration-200",
//         "hover:border-[#c9722a] hover:bg-[#fdf5ee] hover:text-[#c9722a]",
//       )}
//     >
//       <Icon size={14} strokeWidth={1.6} />
//     </a>
//   );
// }

// function NavColumn({
//   title,
//   links,
// }: {
//   title: string;
//   links: { label: string; href: string; badge?: string }[];
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border-b border-[#ede8e1] md:border-none">
//       <button
//         onClick={() => setOpen((p) => !p)}
//         className="flex w-full items-center justify-between py-4 md:hidden"
//       >
//         <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#bbb4ab]">
//           {title}
//         </span>
//         <ChevronDown
//           size={14}
//           strokeWidth={1.6}
//           className={cn(
//             "duration-250 text-[#bbb4ab] transition-transform",
//             open && "rotate-180",
//           )}
//         />
//       </button>

//       <p className="mb-[22px] hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#bbb4ab] md:block">
//         {title}
//       </p>

//       <ul
//         className={cn(
//           "space-y-3 overflow-hidden transition-all duration-300 md:block md:max-h-none",
//           open ? "max-h-72 pb-4" : "max-h-0 md:max-h-none",
//         )}
//       >
//         {links.map((link) => (
//           <li key={link.label}>
//             <Link
//               href={link.href}
//               className="inline-flex items-center gap-[7px] text-[13.5px] tracking-[0.01em] text-[#5a5048] transition-colors duration-200 hover:text-[#c9722a]"
//             >
//               {link.label}
//               {link.badge && <Badge text={link.badge} />}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────

// export default function MaclineFooter() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   function handleSub() {
//     if (!email) return;
//     setSubscribed(true);
//     setEmail("");
//   }

//   return (
//     <footer
//       className="bg-white pb-[80px] lg:pb-0"
//       style={{ fontFamily: "'Outfit', sans-serif" }}
//     >
//       <div className="flex flex-col items-start justify-between gap-4 border-b border-[#ede8e1] px-5 py-8 md:flex-row md:items-center md:px-12">
//         <div>
//           <h3
//             className="text-[22px] font-medium text-[#1a1510]"
//             style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//           >
//             Yangiliklar va aksiyalar
//           </h3>
//           <p className="mt-1 text-[12.5px] text-[#9a9088]">
//             Chegirmalar va yangi modellar haqida birinchi bo'lib biling
//           </p>
//         </div>

//         {subscribed ? (
//           <p className="flex items-center gap-2 text-[13px] font-medium text-[#c9722a]">
//             <CheckCircle2 size={15} /> Obuna bo'ldingiz!
//           </p>
//         ) : (
//           <div className="flex w-full overflow-hidden rounded-[8px] border border-[#ddd8d0] bg-white md:w-auto">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSub()}
//               placeholder="Email manzilingiz"
//               className="h-[42px] flex-1 bg-transparent px-4 text-[13px] text-[#1a1510] outline-none placeholder:text-[#bbb4ab] md:w-[220px] md:flex-none"
//             />
//             <button
//               onClick={handleSub}
//               className="flex h-[42px] items-center gap-1 bg-[#1a1510] px-[22px] text-[11.5px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#2f2820] active:scale-[0.98]"
//             >
//               Obuna <ArrowRight size={12} />
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 gap-0 px-5 pb-10 pt-12 md:grid-cols-[1.7fr_1fr_1fr_1fr] md:gap-12 md:px-12">
//         <div className="border-b border-[#ede8e1] pb-8 md:border-none md:pb-0">
//           <Link href="/">
//             <span
//               className="text-[28px] font-semibold tracking-tight text-[#1a1510]"
//               style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//             >
//               Mac<span className="text-[#c9722a]">line</span>
//             </span>
//           </Link>

//           <p className="mt-3 max-w-[210px] text-[12px] leading-[1.85] text-[#9a9088]">
//             O'zbekistondagi eng yirik Apple mahsulotlari do'koni. Asl
//             sertifikatlar, kafolat va professional servis.
//           </p>

//           <div className="mt-5 inline-flex items-center gap-[6px] rounded-[6px] border border-[#ede8e1] bg-[#f9f6f2] px-3 py-[7px]">
//             <span className="inline-block size-[6px] rounded-full bg-[#c9722a]" />
//             <span className="text-[10.5px] font-medium uppercase tracking-[0.04em] text-[#6a5f55]">
//               Apple Premium Reseller
//             </span>
//           </div>

//           <div className="mt-6">
//             <p className="mb-[6px] text-[10px] font-semibold uppercase tracking-widest text-[#bbb4ab]">
//               Ish vaqti
//             </p>
//             <p className="text-[13px] font-medium text-[#2a2520]">
//               Dushanba — Shanba
//             </p>
//             <p className="mt-[2px] text-[12.5px] text-[#7a7065]">
//               09:00 — 21:00
//             </p>
//           </div>
//         </div>

//         {NAV.map((section) => (
//           <NavColumn
//             key={section.title}
//             title={section.title}
//             links={section.links}
//           />
//         ))}
//       </div>

//       {/* App + Payments */}
//       <div className="mx-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#ede8e1] py-7 md:mx-12">
//         <div className="flex flex-wrap gap-[10px]">
//           {[
//             { label: "App Store", sub: "iOS" },
//             { label: "Google Play", sub: "Android" },
//           ].map(({ label, sub }) => (
//             <a
//               key={label}
//               href="#"
//               className={cn(
//                 "flex items-center gap-[8px] rounded-[8px]",
//                 "border border-[#ede8e1] bg-[#faf9f7] px-[14px] py-[9px]",
//                 "transition-all duration-200 hover:border-[#c9722a] hover:bg-[#fdf5ee]",
//               )}
//             >
//               <div className="flex size-7 shrink-0 items-center justify-center rounded-[6px] bg-[#1a1510]">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
//                   {sub === "iOS" ? (
//                     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                   ) : (
//                     <path d="M3.18 23.76c.33.18.72.19 1.08.01l11.7-6.87-2.37-2.38-10.41 9.24zm16.31-9.66L17.04 12.5l2.48-2.48a1.33 1.33 0 000-1.88l-1.16-1.16a1.33 1.33 0 00-1.88 0L13.96 9.5 1.96.74A1.33 1.33 0 000 1.8v20.4a1.33 1.33 0 001.96 1.06l12-8.76 2.53 2.53 3 1.74c.37.22.84.19 1.17-.07.62-.47.69-1.38.14-1.94l-.29-.66z" />
//                   )}
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.06em] text-[#9a9088]">
//                   Yuklab olish
//                 </p>
//                 <p className="mt-px text-[12px] font-medium text-[#1a1510]">
//                   {label}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         <div className="flex flex-wrap items-center gap-2">
//           <span className="mr-1 text-[10.5px] uppercase tracking-[0.08em] text-[#bbb4ab]">
//             To'lov
//           </span>
//           {PAYMENTS.map((p) => (
//             <span
//               key={p}
//               className="rounded-[5px] border border-[#e8e2da] bg-white px-[11px] py-[5px] text-[10px] font-semibold tracking-wider text-[#8a8078] transition-all hover:border-[#c0b9b0]"
//             >
//               {p}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ede8e1] p-5 md:px-12">
//         <div className="flex gap-[6px]">
//           {SOCIALS.map((s) => (
//             <SocialBtn
//               key={s.label}
//               icon={s.icon}
//               href={s.href}
//               label={s.label}
//             />
//           ))}
//         </div>

//         <div className="flex flex-wrap items-center gap-4 text-[11.5px] text-[#aaa098]">
//           <span>© {new Date().getFullYear()} Macline Store · Toshkent</span>
//           <span className="h-3 w-px bg-[#ddd8d0]" />
//           {["Maxfiylik", "Oferta", "Cookie"].map((l) => (
//             <Link
//               key={l}
//               href="#"
//               className="transition-colors hover:text-[#5a5048]"
//             >
//               {l}
//             </Link>
//           ))}
//           <span className="h-3 w-px bg-[#ddd8d0]" />
//           <button className="flex items-center gap-1 transition-colors hover:text-[#5a5048]">
//             <Globe size={12} strokeWidth={1.5} /> O'zbekcha
//             <ChevronDown size={10} strokeWidth={1.5} />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Send,
  Youtube,
  Facebook,
  Globe,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Truck,
  Shield,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/logo"; // ← sizning Logo komponentingiz

// ─── Data ────────────────────────────────────────────────────────────────────

const PROMO_ITEMS = [
  {
    icon: Truck,
    text: "Bepul yetkazib berish",
    sub: "500 000 so'm dan yuqori",
  },
  {
    icon: ShieldCheck,
    text: "Rasmiy kafolat",
    sub: "Barcha mahsulotlar",
  },
  {
    icon: CreditCard,
    text: "Bo'lib to'lash",
    sub: "0% foiz bilan",
  },
];

const NAV = [
  {
    title: "Katalog",
    links: [
      { label: "iPhone", href: "/catalog/iphone", badge: "Yangi" },
      { label: "MacBook", href: "/catalog/macbook" },
      { label: "iPad", href: "/catalog/ipad" },
      { label: "AirPods", href: "/catalog/airpods" },
      { label: "Apple Watch", href: "/catalog/watch" },
      { label: "Aksessuarlar", href: "/catalog/accessories" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { label: "Kafolat", href: "/warranty" },
      { label: "Yetkazib berish", href: "/delivery" },
      { label: "Servis markazi", href: "/service" },
      { label: "Bo'lib to'lash", href: "/installment" },
      { label: "Qaytarish", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Kompaniya",
    links: [
      { label: "Biz haqimizda", href: "/about" },
      { label: "Filiallar", href: "/stores" },
      { label: "Vakansiyalar", href: "/careers", badge: "2 ta" },
      { label: "Kontaktlar", href: "/contact" },
      { label: "Press", href: "/press" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Send, href: "#", label: "Telegram", color: "#229ED9" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
];

const PAYMENTS = [
  { label: "VISA" },
  { label: "MC" },
  { label: "HUMO" },
  { label: "UZCARD" },
  { label: "PAYME" },
  { label: "CLICK" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-[4px] bg-pink-50 px-[7px] py-[2px] text-[9px] font-bold uppercase tracking-wider text-pink-600 ring-1 ring-pink-200">
      {text}
    </span>
  );
}

function SocialBtn({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
    >
      <Icon size={15} strokeWidth={1.7} />
    </a>
  );
}

function NavColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; badge?: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 md:border-none">
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between py-4 md:hidden"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={cn(
            "text-neutral-400 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {/* Desktop label */}
      <p className="mb-5 hidden text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 md:block">
        {title}
      </p>

      <ul
        className={cn(
          "space-y-3 overflow-hidden transition-all duration-300 md:block md:max-h-none",
          open ? "max-h-80 pb-4" : "max-h-0",
        )}
      >
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-600 transition-colors duration-150 hover:text-pink-600"
            >
              {link.label}
              {link.badge && <Badge text={link.badge} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSub() {
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-neutral-100 bg-white pb-20 font-sans">
      <div className="mx-auto max-w-7xl max-md:px-4">
        {/* ── PROMO STRIP ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 divide-y divide-neutral-100 border-b border-neutral-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:hidden">
          {PROMO_ITEMS.map(({ icon: Icon, text, sub }) => (
            <div
              key={text}
              className="flex items-center gap-3.5 py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-pink-50">
                <Icon size={18} strokeWidth={1.8} className="text-pink-600" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-neutral-900">{text}</p>
                <p className="text-[11px] text-neutral-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── NEWSLETTER ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-start justify-between gap-5 border-b border-neutral-100 py-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-[18px] font-bold tracking-tight text-neutral-950">
              Yangiliklar va aksiyalar
            </h3>
            <p className="mt-1 text-[12px] text-neutral-400">
              Chegirmalar va yangi modellar haqida birinchi bo'lib biling
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-3">
              <CheckCircle2 size={16} className="text-pink-600" />
              <span className="text-[13px] font-semibold text-pink-700">
                Muvaffaqiyatli obuna bo'ldingiz!
              </span>
            </div>
          ) : (
            <div className="flex w-full overflow-hidden rounded-xl border border-neutral-200 bg-white ring-0 transition-all focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-100 md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSub()}
                placeholder="Email manzilingiz"
                className="h-11 flex-1 bg-transparent px-4 text-[13px] text-neutral-950 outline-none placeholder:text-neutral-400 md:w-[230px] md:flex-none"
              />
              <button
                onClick={handleSub}
                className="flex h-11 items-center gap-1.5 bg-pink-600 px-5 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-pink-700 active:scale-[.98]"
              >
                Obuna <ArrowRight size={12} />
              </button>
            </div>
          )}
        </div>

        {/* ── MAIN GRID ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-0 py-10 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand column */}
          <div className="border-b border-neutral-100 pb-8 md:border-none md:pb-0 md:pr-8">
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            <p className="mt-4 max-w-[220px] text-[12.5px] leading-[1.8] text-neutral-500">
              O'zbekistondagi eng yirik Apple mahsulotlari do'koni. Asl
              sertifikatlar, kafolat va professional servis.
            </p>

            {/* Premium badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-pink-100 bg-pink-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-pink-600" />
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-pink-700">
                Apple Premium Reseller
              </span>
            </div>

            {/* Contact info */}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-700 transition-colors hover:text-pink-600"
              >
                <Phone size={14} strokeWidth={2} className="text-pink-500" />
                +998 90 123 45 67
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-neutral-500">
                <MapPin
                  size={14}
                  strokeWidth={2}
                  className="flex-shrink-0 text-pink-500"
                />
                Toshkent, Chilonzor
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-neutral-500">
                <Clock size={14} strokeWidth={2} className="text-pink-500" />
                Du—Sha: 09:00 – 21:00
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map((section) => (
            <NavColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* ── APP + PAYMENTS ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-neutral-100 py-6">
          {/* App Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "App Store", sub: "iOS uchun" },
              { label: "Google Play", sub: "Android uchun" },
            ].map(({ label, sub }) => (
              <a
                key={label}
                href="/"
                className="flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 transition-all hover:border-pink-300 hover:bg-pink-50"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900">
                  <span className="text-md font-black text-white">
                    {label === "App Store" ? "" : "▶"}
                  </span>
                </div>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-wider text-neutral-400">
                    {sub}
                  </p>
                  <p className="text-[12px] font-bold text-neutral-900">
                    {label}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              To'lov
            </span>
            {PAYMENTS.map(({ label }) => (
              <span
                key={label}
                className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-bold tracking-wider text-neutral-600 transition-colors hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 py-5">
          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <SocialBtn
                key={s.label}
                icon={s.icon}
                href={s.href}
                label={s.label}
              />
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-400">
            <span>© {new Date().getFullYear()} Macline · Toshkent</span>
            <span className="h-3 w-px bg-neutral-200" />
            {["Maxfiylik", "Oferta", "Cookie"].map((l) => (
              <Link
                key={l}
                href="#"
                className="transition-colors hover:text-pink-600"
              >
                {l}
              </Link>
            ))}
            <span className="h-3 w-px bg-neutral-200" />
            <button className="flex items-center gap-1 transition-colors hover:text-neutral-700">
              <Globe size={11} strokeWidth={1.5} />
              O'zbekcha
              <ChevronDown size={10} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
