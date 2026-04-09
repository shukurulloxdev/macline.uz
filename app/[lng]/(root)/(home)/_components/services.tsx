// import React from "react";
// import Image from "next/image";
// import { ShieldCheck, Zap, Microscope, Wrench, Truck } from "lucide-react";

// const services = [
//   { title: "Ekran almashtirish", icon: <Zap size={20} /> },
//   { title: "Diagnostika xizmati", icon: <Microscope size={20} /> },
//   { title: "Professional ta'mir", icon: <Wrench size={20} /> },
//   { title: "Bepul yetkazib berish", icon: <Truck size={20} /> },
// ];

// export default function MaclineHero() {
//   return (
//     <section className="mx-auto mt-2 max-w-7xl pb-12 font-sans">
//       {/* Asosiy Container: Bento Grid Style */}
//       <div className="group/main relative h-[80vh] w-full overflow-hidden rounded-3xl bg-neutral-950">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/menejer/service.jpg"
//             alt="Apple Repair Service"
//             fill
//             priority
//             className="object-cover object-center transition-transform duration-1000 group-hover/main:scale-105"
//           />

//           {/* <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" /> */}
//           {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" /> */}
//         </div>

//         <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-16">
//           <div className="max-w-5xl">
//             <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-pink-400 shadow-inner backdrop-blur-md">
//               <ShieldCheck size={18} />
//               <span>Rasmiy Kafolatlangan Servis</span>
//             </div>

//             <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white">
//               Qurilmalaringizni <br />
//               <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
//                 qayta tug'ilishiga
//               </span>{" "}
//               <br />
//               imkon bering
//             </h1>

//             <p className="mt-8 max-w-xl border-l-2 border-white/10 pl-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
//               <strong className="text-white">BroService</strong> — Apple
//               texnologiyalari uchun zargarlik aniqligidagi xizmat. Har bir
//               detalda mukammallik, har bir mijoz uchun rasmiy kafolat.
//             </p>
//           </div>

//           {/* 3. Bento Services Grid (Bottom Content) */}
//           <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {services.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/50"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-600 text-white shadow-xl shadow-pink-600/20 transition-transform duration-300 group-hover:scale-110">
//                   {item.icon}
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-pink-400">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1 text-sm leading-relaxed text-neutral-400 opacity-90">
//                     Sertifikatlangan masterlar.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

// const benefits = [
//   {
//     icon: <Truck className="h-8 w-8 text-[#e91e63]" />,
//     title: "Bepul yetkazib berish",
//     description: "O'zbekiston bo'ylab barcha buyurtmalar uchun bepul xizmat",
//   },
//   {
//     icon: <ShieldCheck className="h-8 w-8 text-[#e91e63]" />,
//     title: "Rasmiy Kafolat",
//     description: "Barcha Apple mahsulotlariga 1 yil muddatli rasmiy kafolat",
//   },
//   {
//     icon: <CreditCard className="h-8 w-8 text-[#e91e63]" />,
//     title: "Muddatli to'lov",
//     description: "Boshlang'ich to'lovsiz 24 oygacha bo'lgan muddatli to'lov",
//   },
//   {
//     icon: <Headphones className="h-8 w-8 text-[#e91e63]" />,
//     title: "Professional yordam",
//     description: "Mutaxassislarimizdan istalgan vaqtda bepul maslahat oling",
//   },
// ];

// export default function MaclineServices() {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {benefits.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
//             >
//               <div className="mb-4 rounded-full bg-pink-50 p-3">
//                 {item.icon}
//               </div>
//               <h3 className="mb-2 text-lg font-bold text-gray-900">
//                 {item.title}
//               </h3>
//               <p className="text-sm leading-relaxed text-gray-500">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Animatsiya juda muhim premium his uchun
// import { Zap, BookOpen, Clapperboard, CodeXml, ArrowRight } from "lucide-react";

// const scenarios = [
//   {
//     id: "student",
//     name: "O'qish va Ofis",
//     icon: <BookOpen className="h-5 w-5" />,
//     description: "Yengil, batareyasi uzoqqa yetadigan va hamyonbop yechim.",
//     products: [
//       {
//         type: "Mac",
//         name: 'MacBook Air 13" M2',
//         price: "1 200 $ dan",
//         image:
//           "https://www.apple.com/v/macbook-air-13-and-15-m2/e/images/overview/hero/hero_starlight__epm50z5y5w6u_large.jpg",
//       },
//       {
//         type: "Accessory",
//         name: "AirPods (3-avlod)",
//         price: "190 $",
//         image:
//           "https://www.apple.com/v/airpods-3rd-generation/f/images/overview/hero/hero__8b1b51e9b1b1_large.jpg",
//       },
//     ],
//   },
//   {
//     id: "pro",
//     name: "Professional Montaj",
//     icon: <Clapperboard className="h-5 w-5" />,
//     description:
//       "Kuchli grafika va yuqori aniqlikdagi displey talab qiladiganlar uchun.",
//     products: [
//       {
//         type: "Mac",
//         name: 'MacBook Pro 16" M3 Max',
//         price: "3 500 $ dan",
//         image:
//           "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khc13636ie_large.jpg",
//       },
//       {
//         type: "Accessory",
//         name: "Studio Display",
//         price: "1 600 $",
//         image:
//           "https://www.apple.com/v/studio-display/b/images/overview/hero/hero__b1b1b1b1b1b1_large.jpg",
//       },
//     ],
//   },
//   {
//     id: "dev",
//     name: "Dasturlash",
//     icon: <CodeXml className="h-5 w-5" />,
//     description:
//       "Ko'p vazifalilik va tezkor komilyatsiya uchun optimallashgan.",
//     products: [
//       {
//         type: "Mac",
//         name: "Mac mini M2 Pro",
//         price: "1 300 $ dan",
//         image:
//           "https://www.apple.com/v/mac-mini/p/images/overview/hero/hero__b1b1b1b1b1b1_large.jpg",
//       },
//       {
//         type: "Accessory",
//         name: "Magic Keyboard with Touch ID",
//         price: "150 $",
//         image:
//           "https://www.apple.com/v/magic-keyboard/b/images/overview/hero/hero__b1b1b1b1b1b1_large.jpg",
//       },
//     ],
//   },
// ];

// export default function MaclineServices() {
//   const [selectedScenario, setSelectedScenario] = useState(scenarios);

//   return (
//     <section className="my-20 bg-white py-24">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* Sarlavha qismi */}
//         <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
//           <span className="text-sm font-semibold uppercase tracking-wider text-[#e91e63]">
//             Sizga mosini toping
//           </span>
//           <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 md:text-5xl">
//             Mukammal Ekotizimni Yig'ing
//           </h2>
//           <p className="text-lg text-gray-600">
//             O'z ehtiyojingizni tanlang, biz esa sizga eng mos keladigan Apple
//             qurilmalari kombinatsiyasini taklif qilamiz.
//           </p>
//         </div>

//         {/* Tanlov tugmalari */}
//         <div className="mb-16 flex flex-wrap justify-center gap-4">
//           {scenarios.map((scenario) => (
//             <button
//               key={scenario.id}
//               onClick={() => setSelectedScenario(scenario)}
//               className={`flex items-center gap-3 rounded-full border-2 px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
//                 selectedScenario.id === scenario.id
//                   ? "border-gray-950 bg-gray-950 text-white shadow-lg"
//                   : "border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-200 hover:bg-white"
//               }`}
//             >
//               {scenario.icon}
//               {scenario.name}
//             </button>
//           ))}
//         </div>

//         {/* Mahsulotlar namoyishi (Dinamik qism) */}
//         <div className="grid min-h-[400px] grid-cols-1 items-center gap-12 md:grid-cols-2">
//           {/* Chap taraf: Tavsif */}
//           <div className="space-y-6">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedScenario.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.4 }}
//                 className="space-y-4"
//               >
//                 <h3 className="text-3xl font-bold text-gray-950">
//                   {selectedScenario.name} uchun yechim
//                 </h3>
//                 <p className="text-lg leading-relaxed text-gray-600">
//                   {selectedScenario.description} Ushbu kombinatsiya sizga
//                   maksimal samaradorlik va qulaylikni ta'minlaydi.
//                 </p>
//                 <div className="flex gap-3 pt-4">
//                   <button className="group flex items-center gap-2 rounded-full bg-[#e91e63] px-6 py-3 text-sm font-medium text-white">
//                     Kombinatsiyani ko'rish
//                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </button>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* O'ng taraf: Vizual kartochkalar */}
//           <div className="relative grid grid-cols-2 gap-6">
//             {/* Orqa fondagi "birlashtiruvchi" chiziq/effekt */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="h-0.5 w-full bg-gray-100" />
//               <div className="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-100 bg-white shadow-inner">
//                 <Zap className="h-5 w-5 text-[#e91e63]" />
//               </div>
//             </div>

//             <AnimatePresence mode="wait">
//               {selectedScenario.map((product, index) => (
//                 <motion.div
//                   key={`${selectedScenario.id}-${index}`}
//                   initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -30, scale: 0.95 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative z-10 flex flex-col items-center rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center"
//                 >
//                   <span className="absolute left-4 top-4 font-mono text-xs uppercase tracking-widest text-gray-400">
//                     {product.type}
//                   </span>
//                   <div className="mb-6 mt-4 flex h-40 w-full items-center justify-center">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <h4 className="mb-1 line-clamp-1 text-sm font-semibold text-gray-900">
//                     {product.name}
//                   </h4>
//                   <p className="text-sm font-bold text-[#e91e63]">
//                     {product.price}
//                   </p>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// MaclineServices
import { Award, ShieldCheck, Zap, Headphones, ArrowRight } from "lucide-react";
import Image from "next/image";

// 1. Ma'lumotlar - Apple Store-ga mos, real konvertatsiya beruvchi matnlar
const benefits = [
  {
    icon: <Award className="h-8 w-8 text-[#e91e63]" />, // Pushti icon
    title: "Rasmiy Diler",
    description:
      "Macline — O'zbekistondagi rasmiy Apple dileri. Barcha mahsulotlar 100% original va yangi.",
    pos: "top-left", // Matn chapda
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#e91e63]" />,
    title: "Rasmiy Kafolat",
    description:
      "Xarid qilingan har bir qurilmaga 1 yil muddatli rasmiy xalqaro kafolat beriladi.",
    pos: "top-right", // Matn o'ngda
  },
  {
    icon: <Zap className="h-8 w-8 text-[#e91e63]" />,
    title: "Tezkor Yetkazib Berish",
    description:
      "Toshkent shahri bo'ylab 2 soat ichida, viloyatlarga 24 soat ichida yetkazamiz.",
    pos: "bottom-left", // Matn chapda
  },
  {
    icon: <Headphones className="h-8 w-8 text-[#e91e63]" />,
    title: "Professional Servis",
    description:
      "Mutaxassislarimiz qurilmangizni bepul sozlab, ma'lumotlarni ko'chirib berishadi.",
    pos: "bottom-right", // Matn o'ngda
  },
];

export default function MaclineServices() {
  return (
    <section className="mx-auto my-12 max-w-7xl px-4">
      {/* Sarlavha - 1ga1 andozadagidek */}
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Why choose{" "}
          <span className="font-medium italic text-gray-600">us?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          From routine maintenance to major repairs, we've got your car covered
          with reliable and friendly service.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
        {/* Chap tarafdagi ustun */}
        <div className="flex w-full flex-col gap-20 text-right lg:w-1/3">
          <div className="space-y-3">
            <div className="flex justify-end">
              <Award className="h-8 w-8 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Expert Technicians
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Our certified experts provide top-quality service. Trust us for
              accurate diagnostics and repairs.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-end">
              <Zap className="h-8 w-8 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Fast Turnaround</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Get back on the road quickly with our efficient service. Most
              repairs are completed within the same day.
            </p>
          </div>
        </div>

        {/* Markaziy Rasm - Orqa fon shadowi bilan (2-rasmdagidek) */}
        <div className="relative flex w-full justify-center lg:w-1/3">
          <div className="relative z-10 h-[380px] w-[380px] overflow-hidden">
            {/* Rasmdagi pushti "L" shaklidagi orqa fon */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full translate-x-2 translate-y-2 bg-pink-200"></div>
            <Image
              src="/menejer/store4.png"
              alt="Center Product"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* O'ng tarafdagi ustun */}
        <div className="flex w-full flex-col gap-20 text-left lg:w-1/3">
          <div className="space-y-3">
            <div className="flex justify-start">
              <ShieldCheck className="h-8 w-8 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Affordable Pricing
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              High-quality repairs at prices you can afford. No hidden fees,
              just honest and transparent pricing.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-start">
              <Headphones className="h-8 w-8 text-[#e91e63]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              All-Inclusive Services
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              From routine maintenance to complex repairs, we handle it all.
              Your one-stop shop for all your car care needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
