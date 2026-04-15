"use client";

import React from "react";
import Image from "next/image";
import { Phone, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const branches = [
  {
    id: "toshkent",
    name: "Toshkent ",
    address: "Toshkent shahar, Mirobod tumani, Alfraganus savdo markazi",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 201-58-58",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Acffde96a3984f1d00fe8f10c32f1fcc613662afdd3df8a76effaef53b2d11ca2&amp;source=constructor",
    openMapUrl:
      "https://yandex.uz/maps/?text=Toshkent%20shahar%2C%20Mirobod%20tumani%2C%20Alfraganus%20savdo%20markazi",
    image: "/menejer/store.png",
  },
  {
    id: "samarqand",
    name: "Samarqand",
    address:
      "Samarkand shahar, Shohrukh Mirzo ko&apos;cha, Makon Mall savdo markazi",
    workTime: "09:00 - 21:00",
    phone: "+998 91) 813-41-41",
    openMapUrl: "https://yandex.uz/maps/?text=Makon%20Mall%20Samarkand",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A7eca741ac99e97af468f08f3ed63230e85ca16e153571fca1dfb1ab9ea329464&amp;source=constructor",
    image: "/menejer/store3.png",
  },
  {
    id: "fargona",
    name: "Farg‘ona",
    address:
      "Farg&apos;ona shahar, Mustaqillik shoh ko&apos;chasi 13, Mo&apos;jal: Korzinka",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 533-43-69",
    openMapUrl:
      "https://yandex.uz/maps/?text=Fargona%20Mustaqillik%20shoh%20kochasi%2013",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A861ec5ea6757329e7beca5d56695bd470b00a061b116012ef9c760bb2abba6a6&amp;source=constructor",
    image: "/menejer/store2.png",
  },
  {
    id: "andijon",
    name: "Andijon",
    address:
      "Andijon shahar, Choʻlpon shoh koʻchasi, Uzbegim savdo majumosi,  ",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 201-58-58",
    openMapUrl:
      "https://yandex.uz/maps/?text=Uzbegim%20savdo%20majmuasi%20Andijon",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Aa9ab98344cf8695c1665e92fde9ce91c645a31febdd6c79d8c446a40e4d1fe25&amp;source=constructor",
    image: "/menejer/store4.png",
  },
];

function Location() {
  function handleOpenMap(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto max-w-7xl pb-8 pt-14">
      <Tabs defaultValue="toshkent" className="w-full">
        <div className="mb-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-pink-600">
              <Sparkles size={14} fill="currentColor" />
              <span>Do&apos;konlar tarmog&apos;i</span>
            </div>
            <h2 className="font-sora text-5xl font-bold tracking-tighter text-neutral-900">
              Bizning <span className="text-pink-600">Showroomlar</span>
            </h2>
          </div>

          <TabsList className="flex h-auto gap-2 rounded-full border border-pink-200 bg-pink-50/50 p-2 backdrop-blur-sm">
            {["toshkent", "samarqand", "fargona", "andijon"].map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-[0_10px_30px_rgba(219,39,119,0.3)]"
              >
                {id}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {branches.map((branch) => (
          <TabsContent
            key={branch.id}
            value={branch.id}
            className="mt-0 outline-none"
          >
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-pink-300 bg-pink-50 shadow-[0_40px_100px_rgba(219,39,119,0.03)] lg:grid-cols-12">
              <div className="col-span-4 flex flex-col justify-between bg-gradient-to-b from-pink-50/50 to-transparent p-12">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-bold tracking-tight text-neutral-900">
                      <span className="text-pink-600"></span> {branch.name}{" "}
                      filiali
                    </h3>
                    <div className="mt-2 h-[2px] w-44 rounded-full bg-pink-600" />
                    <p className="mt-5 min-h-[52px] text-[16px] font-medium leading-relaxed text-neutral-500">
                      {branch.address}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="group flex items-center gap-5">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm ring-1 ring-pink-100 transition-all group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-pink-200">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                          Ish vaqti
                        </p>
                        <p className="text-md font-bold text-neutral-800">
                          {branch.workTime}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-5">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm ring-1 ring-pink-100 transition-all group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-pink-200">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                          Bog&apos;lanish
                        </p>
                        <p className="text-md font-bold text-neutral-800">
                          {branch.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <button
                    onClick={() => handleOpenMap(branch.openMapUrl)}
                    className="group flex w-full items-center justify-between overflow-hidden rounded-2xl bg-pink-600 px-6 py-2 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-pink-700 active:scale-95"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em]">
                      Marshrutni boshlash
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform group-hover:rotate-45">
                      {/* <AppleIcon size={20} /> */}
                      <ArrowUpRight size={20} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative col-span-3 h-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pink-600/5" />
              </div>

              {/* Right: Modern Map */}
              <div className="relative h-full lg:col-span-5">
                <iframe
                  src={branch.mapUrl}
                  className="size-full opacity-80 contrast-125 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  style={{
                    border: 0,
                    filter: "hue-rotate(300deg) saturate(1.2)",
                  }}
                  allowFullScreen
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default Location;

// "use client";

// import React from "react";
// import Image from "next/image";
// import {
//   Phone,
//   Clock,
//   MapPin,
//   ArrowUpRight,
//   Globe,
//   Sparkles,
// } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const branches = [
//   {
//     id: "toshkent",
//     name: "Toshkent",
//     address: "Mirobod tumani, Alfraganus savdo markazi",
//     workTime: "09:00 - 22:00",
//     phone: "+998 90 201 58 58",
//     mapUrl:
//       "https://yandex.com/map-widget/v1/?um=constructor%3Acffde96a3984f1d00fe8f10c32f1fcc613662afdd3df8a76effaef53b2d11ca2",
//     openMapUrl: "https://yandex.uz/maps/?text=Alfraganus%20Toshkent",
//     image: "/menejer/store.png",
//   },
//   {
//     id: "samarqand",
//     name: "Samarqand",
//     address: "Shohrukh Mirzo ko&apos;chasi, Makon Mall SM",
//     workTime: "09:00 - 21:00",
//     phone: "+998 91 813 41 41",
//     mapUrl:
//       "https://yandex.com/map-widget/v1/?um=constructor%3A7eca741ac99e97af468f08f3ed63230e85ca16e153571fca1dfb1ab9ea329464",
//     openMapUrl: "https://yandex.uz/maps/?text=Makon%20Mall%20Samarkand",
//     image: "/menejer/store3.png",
//   },
//   {
//     id: "fargona",
//     name: "Farg‘ona",
//     address: "Mustaqillik shoh ko&apos;chasi 13, Korzinka",
//     workTime: "09:00 - 22:00",
//     phone: "+998 90 533 43 69",
//     mapUrl:
//       "https://yandex.com/map-widget/v1/?um=constructor%3A861ec5ea6757329e7beca5d56695bd470b00a061b116012ef9c760bb2abba6a6",
//     openMapUrl: "https://yandex.uz/maps/?text=Fargona%20Mustaqillik%2013",
//     image: "/menejer/store2.png",
//   },
//   {
//     id: "andijon",
//     name: "Andijon",
//     address: "Choʻlpon shoh koʻchasi, Uzbegim SM",
//     workTime: "09:00 - 22:00",
//     phone: "+998 90 201 58 58",
//     mapUrl:
//       "https://yandex.com/map-widget/v1/?um=constructor%3Aa9ab98344cf8695c1665e92fde9ce91c645a31febdd6c79d8c446a40e4d1fe25",
//     openMapUrl: "https://yandex.uz/maps/?text=Uzbegim%20Andijon",
//     image: "/menejer/store4.png",
//   },
// ];

// export default function LocationSection() {
//   return (
//     <section className="bg-neutral-50 py-12 font-sans selection:bg-pink-100">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Header */}
//         {/* <div className="mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-pink-600 ring-1 ring-pink-100">
//             <Sparkles size={14} className="fill-current" />
//             <span>Showroomlar tarmog&apos;i</span>
//           </div>
//           <h2 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
//             Bizning <span className="text-pink-600">Showroomlar.</span>
//           </h2>
//         </div> */}
//         <div className="pb-12 text-center">
//           <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-pink-600">
//             Nima uchun Macline
//           </span>
//           <h2 className="mt-5 text-5xl font-bold tracking-tighter text-neutral-900">
//             Apple xaridi uchun
//             <span className="italic text-pink-600"> to‘g‘ri manzil</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl font-inter text-lg leading-8 text-neutral-500">
//             Biz faqat mahsulot sotmaymiz. Biz sizga original qurilma, rasmiy
//             kafolat, professional maslahat va premium darajadagi xizmatni bir
//             joyning o‘zida taqdim etamiz.
//           </p>
//         </div>

//         {/* Shadcn Tabs with Sidebar Layout */}
//         <Tabs
//           defaultValue="toshkent"
//           className="grid items-start gap-8 lg:grid-cols-12"
//         >
//           {/* Left Side: TabsList (Sidebar) */}
//           <TabsList className="flex h-auto flex-col gap-3 bg-transparent p-0 lg:col-span-4">
//             {branches.map((branch) => (
//               <TabsTrigger
//                 key={branch.id}
//                 value={branch.id}
//                 className="relative flex w-full flex-col items-start gap-1 rounded-[2rem] border border-zinc-200/50 bg-[#FBFBFD] p-6 text-left transition-all duration-300 data-[state=active]:border-pink-200 data-[state=active]:bg-zinc-900 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-zinc-300"
//               >
//                 <div className="flex w-full items-center justify-between">
//                   <span className="text-xl font-bold tracking-tight">
//                     {branch.name}
//                   </span>
//                   <div className="hidden data-[state=active]:block">
//                     <div className="size-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
//                   </div>
//                 </div>
//                 <p className="line-clamp-1 text-sm font-medium opacity-60">
//                   {branch.address}
//                 </p>
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           <div className="lg:col-span-8">
//             {branches.map((branch) => (
//               <TabsContent
//                 key={branch.id}
//                 value={branch.id}
//                 className="mt-0 outline-none ring-0 focus-visible:ring-0"
//               >
//                 <div className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-[#FBFBFD] shadow-sm">
//                   {/* 1. Map Part - Balandligi ixchamlashtirildi */}
//                   <div className="relative h-[280px] w-full border-b border-zinc-100">
//                     <iframe
//                       src={branch.mapUrl}
//                       className="size-full opacity-80 grayscale-[0.5] transition-all duration-700 hover:opacity-100 hover:grayscale-0"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                     />
//                     <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-zinc-900 shadow-xl ring-1 ring-pink-50 backdrop-blur-md">
//                       Mcline {branch.name}
//                     </div>
//                   </div>

//                   {/* 2. Details Part - Zichlashtirilgan Layout */}
//                   <div className="p-8 md:p-10">
//                     <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
//                       {/* Main Info */}
//                       <div className="flex-1 space-y-6">
//                         <div className="space-y-2">
//                           <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
//                             {branch.name}{" "}
//                             <span className="text-pink-600">Showroom.</span>
//                           </h3>
//                           <div className="flex items-center gap-2 text-zinc-500">
//                             <MapPin
//                               size={16}
//                               className="shrink-0 text-pink-500"
//                             />
//                             <p className="text-sm font-medium leading-tight">
//                               {branch.address}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Stats Row - Border-t olib tashlandi, padding kamaytirildi */}
//                         <div className="flex items-center gap-8 pt-2">
//                           <div className="space-y-1">
//                             <div className="flex items-center gap-1.5 text-zinc-400">
//                               <Clock size={12} className="text-pink-400" />
//                               <span className="text-[9px] font-bold uppercase tracking-widest">
//                                 Vaqt
//                               </span>
//                             </div>
//                             <p className="text-md font-bold text-zinc-800">
//                               {branch.workTime}
//                             </p>
//                           </div>

//                           <div className="space-y-1 border-l border-zinc-200 pl-8">
//                             <div className="flex items-center gap-1.5 text-zinc-400">
//                               <Phone size={12} className="text-pink-400" />
//                               <span className="text-[9px] font-bold uppercase tracking-widest">
//                                 Aloqa
//                               </span>
//                             </div>
//                             <p className="text-md font-bold text-zinc-800">
//                               {branch.phone}
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Compact Action Side */}
//                       <div className="flex items-center gap-6 lg:flex-col lg:items-end">
//                         <div className="relative size-24 overflow-hidden rounded-2xl shadow-xl ring-2 ring-white transition-transform duration-500 hover:scale-[1.05] lg:size-28">
//                           <Image
//                             src={branch.image}
//                             alt={branch.name}
//                             fill
//                             className="object-cover"
//                             sizes="112px"
//                           />
//                         </div>
//                         <button
//                           onClick={() =>
//                             window.open(branch.openMapUrl, "_blank")
//                           }
//                           className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-pink-600 active:scale-95 lg:w-auto"
//                         >
//                           Marshrut
//                           <ArrowUpRight
//                             size={16}
//                             className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//             ))}
//           </div>
//         </Tabs>
//       </div>
//     </section>
//   );
// }
