// import { cn } from "@/lib/utils";
// import { IProduct } from "@/types";

// export default function ProductAbout({ product }: { product: IProduct }) {
//   // Matnni nuqtalar bo'yicha bo'lish va bo'sh joylarni tozalash
//   const descriptionPoints = product.description
//     ? product.description.split(".").filter((p: string) => p.trim().length > 0)
//     : [];

//   return (
//     <div className="flex flex-col gap-10 lg:col-span-8">
//       <div className="space-y-4">
//         <h2 className="text-3xl font-semibold uppercase tracking-tight text-pink-600">
//           Mahsulot haqida
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         {descriptionPoints.map((point: string, index: number) => (
//           <div
//             key={index}
//             className={cn(
//               "group relative cursor-pointer border-l-2 border-neutral-100 pl-6 transition-all hover:border-black",
//               index === 0 && "border-l-black md:col-span-2", // Birinchi gapni katta qilib ko'rsatamiz
//             )}
//           >
//             <p
//               className={cn(
//                 "leading-relaxed text-neutral-500 transition-colors group-hover:text-black",
//                 index === 0
//                   ? "text-xl font-medium text-neutral-800"
//                   : "text-[16px]",
//               )}
//             >
//               {point.trim()}.
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { Info, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProductAbout({ product }: { product: IProduct }) {
  // Matnni gaplarga ajratish
  const points = product.description
    ? product.description.split(".").filter((p) => p.trim().length > 10)
    : [];

  const subPoints = points.slice(1); // Qolgan tafsilotlar

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl border border-pink-100 bg-pink-50 text-pink-600">
          <Info size={20} strokeWidth={2.5} />
        </div>
        <h2 className="font-sora text-3xl font-black uppercase italic tracking-tighter text-neutral-900">
          Mahsulot haqida{" "}
          <span className="text-pink-600 underline decoration-pink-100 decoration-4 underline-offset-4">
            batafsil
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 px-2 md:grid-cols-2">
        {subPoints.map((point, index) => (
          <div
            key={index}
            className="group flex cursor-pointer items-start gap-4 transition-all"
          >
            {/* Minimalist marker */}
            <div className="mt-1.5 flex size-1.5 shrink-0 rounded-full bg-neutral-200 transition-all group-hover:scale-150 group-hover:bg-pink-500" />

            <div className="space-y-1">
              <p className="text-[15px] font-medium leading-relaxed text-neutral-500 transition-colors group-hover:text-neutral-900">
                {point.trim()}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
