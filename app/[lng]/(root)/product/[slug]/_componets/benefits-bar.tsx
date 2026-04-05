// "use client";

// import React from "react";
// import { ShieldCheck, Truck, Store, CreditCard } from "lucide-react"; // Ikonkalar yuklandi
// import { cn } from "@/lib/utils";

// // Foyda elementlari ma'lumotlari
// const BENEFITS = [
//   {
//     icon: ShieldCheck,
//     title: "Rasmiy kafolat",
//     desc: "Barcha mahsulotlar kafolat ",
//   },
//   {
//     icon: Truck,
//     title: "O'zbekiston bo'ylab",
//     desc: "Ertagacha tezkor yetkazib berish",
//   },
//   {
//     icon: CreditCard,
//     title: "Qulay muddatli to'lov",
//     desc: "0 so'm boshlang'ich to'lov bilan",
//   },
// ];

// export default function BenefitsBar() {
//   return (
//     <div className="mt-6 w-full">
//       <div
//         className={cn(
//           "flex flex-row items-center gap-3 rounded-2xl bg-pink-300 p-4 shadow-xl shadow-pink-600/10",
//         )}
//       >
//         {BENEFITS.map((benefit, index) => {
//           const Icon = benefit.icon;
//           return (
//             <div
//               key={index}
//               className={cn(
//                 "group flex flex-1 cursor-pointer items-center gap-4 transition-transform hover:scale-[1.03]",
//                 index !== BENEFITS.length - 1 &&
//                   "md:border-r md:border-white/10 md:pr-4 lg:pr-8",
//               )}
//             >
//               <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 shadow-inner ring-1 ring-white/10 transition-colors group-hover:bg-white/15">
//                 <Icon
//                   size={26} // Ikonka o'lchami (Uzumdek "skromniy")
//                   strokeWidth={1.2} // Yupqa, premium chiziqlar
//                   className="text-white opacity-90 transition-opacity group-hover:opacity-100"
//                 />
//               </div>

//               <div className="flex flex-col justify-center leading-tight">
//                 <h4 className="text-[12px] font-black uppercase tracking-widest text-white">
//                   {benefit.title}
//                 </h4>
//                 <p className="mt-1 text-[10px] font-medium text-white/70">
//                   {benefit.desc}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Rasmiy kafolat",
    desc: "Barcha mahsulotlar kafolat",
  },
  {
    icon: Truck,
    title: "O'zbekiston bo'ylab",
    desc: "Ertagacha tezkor yetkazib berish",
  },
  {
    icon: CreditCard,
    title: "Qulay muddatli to'lov",
    desc: "0 so'm boshlang'ich to'lov bilan",
  },
];

export default function BenefitsBar() {
  return (
    <div className="mt-6 w-full">
      <div className="flex items-center gap-3 rounded-2xl bg-pink-100 p-4">
        {BENEFITS.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={index}
              className={cn(
                "group flex flex-1 cursor-pointer items-center gap-4 rounded-xl bg-white/60 px-4 py-3 backdrop-blur-sm transition-all duration-200",
                "hover:bg-white/80",
                index !== BENEFITS.length - 1 &&
                  "md:border-r md:border-pink-200 md:pr-4 lg:pr-6",
              )}
            >
              {/* ICON */}
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-pink-200 transition-all group-hover:bg-pink-500">
                <Icon
                  size={22}
                  strokeWidth={1.4}
                  className="text-pink-500 transition-colors group-hover:text-white"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col leading-tight">
                <h4 className="text-[12px] font-semibold tracking-tight text-gray-800">
                  {benefit.title}
                </h4>
                <p className="mt-1 text-[11px] text-gray-600">{benefit.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// "use client";

// import React from "react";
// import { ShieldCheck, Truck, Store, CreditCard } from "lucide-react";
// import { cn } from "@/lib/utils";

// const BENEFITS = [
//   {
//     icon: ShieldCheck,
//     title: "Rasmiy kafolat",
//     desc: "Barcha mahsulotlar kafolat",
//   },
//   {
//     icon: Truck,
//     title: "O'zbekiston bo'ylab",
//     desc: "Ertagacha tezkor yetkazib berish",
//   },
//   {
//     icon: Store,
//     title: "Eng yaqin do'kondan",
//     desc: "Qulay vaqtda olib ketish",
//   },
//   {
//     icon: CreditCard,
//     title: "Muddatli to'lov",
//     desc: "0 so'mdan boshlang",
//   },
// ];

// export default function BenefitsBar() {
//   return (
//     <div className="my-6 w-full">
//       <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-sm md:grid-cols-4">
//         {BENEFITS.map((benefit, index) => {
//           const Icon = benefit.icon;

//           return (
//             <div
//               key={index}
//               className={cn(
//                 "group flex items-center gap-4 rounded-xl border border-pink-100 bg-pink-50/60 p-4 transition-all duration-300",
//                 "hover:-translate-y-[2px] hover:bg-pink-100/70 hover:shadow-md",
//               )}
//             >
//               {/* ICON */}
//               <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-pink-100 transition-all group-hover:bg-pink-600">
//                 <Icon
//                   size={22}
//                   strokeWidth={1.4}
//                   className="text-pink-600 transition-colors group-hover:text-white"
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="flex flex-col leading-tight">
//                 <h4 className="text-[12px] font-semibold tracking-tight text-gray-800">
//                   {benefit.title}
//                 </h4>
//                 <p className="mt-1 text-[11px] text-gray-500">{benefit.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
