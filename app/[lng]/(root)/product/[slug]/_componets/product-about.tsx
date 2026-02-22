// export default function ProductAbout({ product }: { product: any }) {
//   const specs = [
//     { label: "Material", value: "Aeronautical Grade Aluminum" },
//     { label: "Weight", value: "240g Lightweight" },
//     { label: "Warranty", value: "24 Months International" },
//     { label: "Finish", value: "Matte Texture" },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//       {/* Chap: Sarlavha va Tavsif */}
//       <div className="space-y-6 lg:col-span-2">
//         <h3 className="text-2xl font-bold uppercase tracking-tighter text-black">
//           Mahsulot haqida
//         </h3>
//         <p className="max-w-2xl text-[17px] font-normal leading-[1.6] text-neutral-500">
//           {product.description ||
//             "Ushbu mahsulot professional foydalanuvchilar uchun maxsus ishlab chiqilgan bo'lib, har bir detal premium sifatni o'zida aks ettiradi."}
//         </p>
//       </div>

//       {/* Ong: Ixcham Tech Specs */}
//       <div className="rounded-[2rem] bg-neutral-50 p-8">
//         <h4 className="mb-6 text-sm font-bold uppercase text-neutral-400">
//           Specifications
//         </h4>
//         <div className="space-y-4">
//           {specs.map((spec) => (
//             <div
//               key={spec.label}
//               className="flex items-center justify-between border-b border-neutral-200/50 pb-2"
//             >
//               <span className="text-[13px] font-medium text-neutral-400">
//                 {spec.label}
//               </span>
//               <span className="text-[13px] font-bold text-neutral-800">
//                 {spec.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Info, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAbout({ product }: { product: any }) {
  // Matnni nuqtalar bo'yicha bo'lish va bo'sh joylarni tozalash
  const descriptionPoints = product.description
    ? product.description.split(".").filter((p: string) => p.trim().length > 0)
    : [];

  return (
    <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-12">
      {/* Chap tomonda: Dinamik Description Block */}
      <div className="flex flex-col gap-10 lg:col-span-8">
        <div className="space-y-4">
          <h3 className="inline-block bg-neutral-900 px-4 py-1 text-[11px] font-black uppercase tracking-[0.3em] text-white">
            Details & Experience
          </h3>
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-neutral-900">
            Mahsulotning o&apos;ziga xosligi
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {descriptionPoints.map((point: string, index: number) => (
            <div
              key={index}
              className={cn(
                "group relative border-l-2 border-neutral-100 pl-6 transition-all hover:border-black",
                index === 0 && "border-l-black md:col-span-2", // Birinchi gapni katta qilib ko'rsatamiz
              )}
            >
              <p
                className={cn(
                  "leading-relaxed text-neutral-500 transition-colors group-hover:text-black",
                  index === 0
                    ? "text-xl font-medium text-neutral-800"
                    : "text-[16px]",
                )}
              >
                {point.trim()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
