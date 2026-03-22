// "use client";

// import React from "react";
// import Image from "next/image";
// import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const branches = [
//   {
//     id: "fargona",
//     name: "Farg‘ona filiali",
//     address: "Mustaqillik ko‘chasi, 42-uy",
//     workTime: "09:00 - 20:00",
//     phone: "+998 90 123 45 67",
//     mapUrl:
//       "https://yandex.ru/map-widget/v1/?um=constructor%3A0b843d3353a9d831a1493ca53d631d3777888b0b86dbdd57e92a1d4e44872049&source=constructor",
//     image: "/menejer/showroom.png",
//   },
// {
//   id: "toshkent",
//   name: "Toshkent filiali",
//   address: "Amir Temur shoh ko‘chasi, 108",
//   workTime: "10:00 - 22:00",
//   phone: "+998 71 200 00 00",
//   mapUrl:
//     "https://yandex.ru/map-widget/v1/?um=constructor%3Atoshkent-map&source=constructor",
//   image: "/menejer/showroom.png",
// },
// {
//   id: "samarqand",
//   name: "Samarqand filiali",
//   address: "Registon ko‘chasi, 15",
//   workTime: "09:00 - 19:00",
//   phone: "+998 66 500 00 00",
//   mapUrl:
//     "https://yandex.ru/map-widget/v1/?um=constructor%3Asamarqand-map&source=constructor",
//   image: "/menejer/showroom.png",
// },
// ];

// function Location() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24">
//       <Tabs defaultValue="fargona" className="w-full">
//         {/* 1. Header & Tabs Navigation */}
//         <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
//           <div className="max-w-2xl space-y-4">
//             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
//               <MapPin size={14} fill="currentColor" />
//               <span>Global Presence</span>
//             </div>
//             <h2 className="font-sora text-5xl font-bold tracking-tighter text-black">
//               Bizning showroomlar
//             </h2>
//             <p className="max-w-lg text-lg leading-relaxed text-neutral-500">
//               Mahsulotlarimizni jonli ko&apos;rish va mutaxassislarimizdan
//               maslahat olish uchun sizga yaqin bo&apos;lgan filialga tashrif
//               buyuring.
//             </p>
//           </div>

//           <TabsList className="flex h-auto gap-2 rounded-[2rem] bg-neutral-100 p-2">
//             {branches.map((branch) => (
//               <TabsTrigger
//                 key={branch.id}
//                 value={branch.id}
//                 className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-2xl"
//               >
//                 {branch.id}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//         </div>

//         {/* 2. Content: The Interactive Experience */}
//         {branches.map((branch) => (
//           <TabsContent
//             key={branch.id}
//             value={branch.id}
//             className="mt-0 outline-none"
//           >
//             <div className="grid grid-cols-1 overflow-hidden rounded-[3rem] bg-neutral-50 lg:grid-cols-12">
//               {/* Chap tomonda: Ma'lumotlar kartasi */}
//               <div className="flex flex-col justify-between p-12 lg:col-span-4">
//                 <div className="space-y-10">
//                   <div>
//                     <h3 className="text-3xl font-bold tracking-tight text-black">
//                       {branch.name}
//                     </h3>
//                     <p className="mt-2 text-neutral-500">{branch.address}</p>
//                   </div>

//                   <div className="grid gap-6">
//                     <div className="group flex items-center gap-4">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-black group-hover:text-white">
//                         <Clock size={20} />
//                       </div>
//                       <div>
//                         <p className="text-[10px] font-bold uppercase text-neutral-400">
//                           Ish vaqti
//                         </p>
//                         <p className="text-sm font-semibold">
//                           {branch.workTime}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="group flex items-center gap-4">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-black group-hover:text-white">
//                         <Phone size={20} />
//                       </div>
//                       <div>
//                         <p className="text-[10px] font-bold uppercase text-neutral-400">
//                           Aloqa
//                         </p>
//                         <p className="text-sm font-semibold">{branch.phone}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="group mt-12 flex w-full items-center justify-between rounded-2xl bg-black p-5 text-white transition-transform active:scale-95">
//                   <span className="text-xs font-bold uppercase tracking-widest">
//                     Marshrutni chizish
//                   </span>
//                   <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </button>
//               </div>

//               {/* Markazda: Estetik Rasm */}
//               <div className="relative h-[400px] w-full lg:col-span-3 lg:h-auto">
//                 <Image
//                   src={branch.image}
//                   alt={branch.name}
//                   fill
//                   className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
//                 />
//                 <div className="absolute inset-0 bg-black/10" />
//               </div>

//               {/* O'ng tomonda: Katta Xarita */}
//               <div className="relative h-[500px] lg:col-span-5 lg:h-auto">
//                 <iframe
//                   src={branch.mapUrl}
//                   className="h-full w-full contrast-125 grayscale transition-all duration-1000 hover:contrast-100 hover:grayscale-0"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                 />
//               </div>
//             </div>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </section>
//   );
// }

// export default Location;
"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const branches = [
  {
    id: "fargona",
    name: "Farg‘ona filiali",
    address: "Mustaqillik ko‘chasi, 42-uy",
    workTime: "09:00 - 20:00",
    phone: "+998 90 123 45 67",
    mapUrl:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A0b843d3353a9d831a1493ca53d631d3777888b0b86dbdd57e92a1d4e44872049&source=constructor",
    image: "/menejer/showroom.png",
  },
  {
    id: "toshkent",
    name: "Toshkent filiali",
    address: "Amir Temur shoh ko‘chasi, 108",
    workTime: "10:00 - 22:00",
    phone: "+998 71 200 00 00",
    mapUrl:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Atoshkent-map&source=constructor",
    image: "/menejer/showroom.png",
  },
  {
    id: "samarqand",
    name: "Samarqand filiali",
    address: "Registon ko‘chasi, 15",
    workTime: "09:00 - 19:00",
    phone: "+998 66 500 00 00",
    mapUrl:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Asamarqand-map&source=constructor",
    image: "/menejer/showroom.png",
  },
  // ... boshqa filiallar
];

function Location() {
  return (
    <section className="mx-auto max-w-7xl py-12">
      <Tabs defaultValue="fargona" className="w-full">
        {/* 1. Header & Navigation */}
        <div className="mb-8 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-pink-600">
              <Sparkles size={14} fill="currentColor" />
              <span>Do'konlar tarmog'i</span>
            </div>
            <h2 className="font-sora text-5xl font-bold tracking-tighter text-neutral-900">
              Bizning <span className="text-pink-600">Showroomlar</span>
            </h2>
          </div>

          <TabsList className="flex h-auto gap-2 rounded-full border border-pink-100 bg-pink-50/30 p-2 backdrop-blur-sm">
            {["fargona", "toshkent", "samarqand"].map((id) => (
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

        {/* 2. Main Content Card */}
        {branches.map((branch) => (
          <TabsContent
            key={branch.id}
            value={branch.id}
            className="mt-0 outline-none"
          >
            <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-pink-300 bg-pink-50 shadow-[0_40px_100px_rgba(219,39,119,0.03)] lg:grid-cols-12">
              {/* Left: Info Panel */}
              <div className="flex flex-col justify-between bg-gradient-to-b from-pink-50/50 to-transparent p-12 lg:col-span-4">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-4xl font-bold tracking-tight text-neutral-900">
                      {branch.name}
                    </h3>
                    <div className="mt-3 h-1 w-20 rounded-full bg-pink-600" />
                    <p className="mt-6 text-[16px] font-medium leading-relaxed text-neutral-500">
                      {branch.address}
                    </p>
                  </div>

                  <div className="space-y-8">
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

                <button className="group mt-16 flex w-full items-center justify-between overflow-hidden rounded-[2rem] bg-neutral-900 px-6 py-2 text-white transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] active:scale-95">
                  <span className="text-xs font-black uppercase tracking-[0.2em]">
                    Marshrutni ko&apos;rish
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </button>
              </div>

              {/* Middle: Atmospheric Image */}
              <div className="relative h-[400px] overflow-hidden lg:col-span-3 lg:h-auto">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pink-900/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50/20 to-transparent" />
              </div>

              {/* Right: Modern Map */}
              <div className="relative h-[500px] lg:col-span-5 lg:h-auto">
                <iframe
                  src={branch.mapUrl}
                  className="size-full opacity-80 contrast-125 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                  style={{
                    border: 0,
                    filter: "hue-rotate(300deg) saturate(1.2)",
                  }} // Xaritaga ham pushti ohang beradi
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
