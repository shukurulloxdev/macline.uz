// "use client";
// import Image from "next/image";
// import { Heart, ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";
// import { IProduct } from "@/types";
// import { formatCurrentPrice } from "@/lib/utils";
// import Link from "next/link";

// export default function ProductListCard({ product }: { product: IProduct }) {
//   return (
//     <div className="group relative flex w-full flex-col gap-8 rounded-[2.5rem] border border-neutral-100 bg-white p-6 transition-all duration-500 hover:border-pink-200 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] sm:flex-row">
//       {/* 1. IMAGE ZONE: Chap tomonda katta va tiniq */}
//       <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-[2rem] bg-neutral-50 transition-colors group-hover:bg-white sm:w-72">
//         {product.percent > 0 && (
//           <div className="absolute left-4 top-4 z-10 rounded-xl bg-red-600 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-red-600/20">
//             -{product.percent}% CHEGIRMA
//           </div>
//         )}
//         <Link
//           href={`/product/${product._id}`}
//           className="flex h-full w-full items-center justify-center p-10"
//         >
//           <Image
//             src={product.images[0]}
//             alt={product.name}
//             fill
//             className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
//           />
//         </Link>
//       </div>

//       {/* 2. INFO ZONE: O'ng tomonda tartibli ierarxiya */}
//       <div className="flex flex-1 flex-col justify-between py-2">
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <span className="text-[11px] font-black uppercase tracking-[0.2em] text-pink-600">
//                 {product.brand || "Original"}
//               </span>
//               <div className="flex items-center gap-1 text-neutral-800">
//                 <Star size={14} fill="#FACC15" className="text-yellow-400" />
//                 <span className="text-xs font-black">4.9</span>
//                 <span className="text-[10px] font-bold text-neutral-400">
//                   (128 ta sharh)
//                 </span>
//               </div>
//             </div>
//             <button className="text-neutral-300 transition-colors hover:text-red-500">
//               <Heart size={24} />
//             </button>
//           </div>

//           <Link href={`/product/${product._id}`}>
//             <h3 className="font-sora text-3xl font-bold leading-tight text-neutral-900 transition-colors hover:text-pink-600">
//               {product.name}
//             </h3>
//           </Link>

//           <p className="line-clamp-2 max-w-2xl text-sm font-medium leading-relaxed text-neutral-500">
//             {product.description}
//           </p>

//           <div className="flex flex-wrap gap-5 pt-2">
//             <div className="flex items-center gap-2 text-neutral-600">
//               <ShieldCheck size={18} className="text-green-500" />
//               <span className="text-[11px] font-black uppercase tracking-wider">
//                 1 yil kafolat
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-neutral-600">
//               <Truck size={18} className="text-blue-500" />
//               <span className="text-[11px] font-black uppercase tracking-wider">
//                 Bepul yetkazish
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 3. PRICE & BUTTONS ZONE */}
//         <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-neutral-50 pt-6 sm:flex-row">
//           <div className="flex flex-col">
//             <span className="text-3xl font-black tracking-tighter text-neutral-900">
//               {formatCurrentPrice(product.price, product.percent)}
//             </span>
//             {product.percent > 0 && (
//               <span className="text-sm font-bold text-neutral-400 line-through">
//                 {product.price.toLocaleString()} so'm
//               </span>
//             )}
//           </div>

//           <div className="flex w-full items-center gap-3 sm:w-auto">
//             <Link
//               href={`/product/${product._id}`}
//               className="flex h-14 flex-1 items-center justify-center rounded-2xl border-2 border-neutral-900 px-8 text-[11px] font-black uppercase tracking-widest text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white sm:flex-none"
//             >
//               Batafsil
//             </Link>
//             <button className="group relative flex h-14 flex-[2] items-center justify-center overflow-hidden rounded-2xl bg-pink-600 px-8 transition-all hover:bg-pink-700 active:scale-95 sm:flex-none">
//               <div className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white">
//                 <ShoppingBag size={20} />
//                 <span>Savatga qo'shish</span>
//               </div>
//               <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";
import { IProduct } from "@/types";
import { formatCurrentPrice } from "@/lib/utils";
import Link from "next/link";

export default function ProductListCard({ product }: { product: IProduct }) {
  return (
    <div className="group relative flex w-full flex-col gap-6 rounded-[2rem] border border-neutral-100 bg-white p-5 transition-all duration-500 hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:flex-row">
      {/* 1. IMAGE ZONE - Toza va xalqasiz */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-2xl bg-white sm:w-60">
        {product.percent > 0 && (
          <div className="absolute left-0 top-0 z-10 rounded-lg bg-red-600 px-2.5 py-1 text-[10px] font-black text-white shadow-lg shadow-red-600/20">
            -{product.percent}%
          </div>
        )}
        <Link
          href={`/product/${product._id}`}
          className="flex h-full w-full items-center justify-center"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* 2. CONTENT ZONE - Tartibli ierarxiya */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-pink-600">
                {product.brand || "Original"}
              </span>
              <div className="flex items-center gap-1 text-neutral-800">
                <Star size={12} fill="#FACC15" className="text-yellow-400" />
                <span className="text-xs font-bold">4.9</span>
              </div>
            </div>
            <button className="text-neutral-300 transition-colors hover:text-red-500">
              <Heart size={20} />
            </button>
          </div>

          <Link href={`/product/${product._id}`}>
            <h3 className="font-sora text-xl font-bold leading-tight text-neutral-900 transition-colors hover:text-pink-600 md:text-2xl">
              {product.name}
            </h3>
          </Link>

          <p className="line-clamp-2 max-w-xl text-xs font-medium leading-relaxed text-neutral-400">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-neutral-500">
              <ShieldCheck size={14} className="text-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Kafolat
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-500">
              <Truck size={14} className="text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Yetkazish
              </span>
            </div>
          </div>
        </div>

        {/* 3. FOOTER ZONE - Narx chapda, tugmalar o'ngda */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-neutral-50 pt-5 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-black tracking-tight text-neutral-900">
              {formatCurrentPrice(product.price, product.percent)}
            </span>
            {product.percent > 0 && (
              <span className="text-xs font-bold text-neutral-400 line-through">
                {product.price.toLocaleString()} so'm
              </span>
            )}
          </div>

          <div className="flex w-full items-center gap-2 sm:w-auto">
            <Link
              href={`/product/${product._id}`}
              className="flex h-12 flex-1 items-center justify-center rounded-xl border border-neutral-200 px-6 text-[10px] font-black uppercase tracking-widest text-neutral-900 transition-all hover:bg-neutral-50 sm:flex-none"
            >
              Batafsil
            </Link>
            <button className="group relative flex h-12 flex-[2] items-center justify-center overflow-hidden rounded-xl bg-pink-600 px-6 transition-all hover:bg-pink-700 active:scale-95 sm:flex-none">
              <div className="relative z-10 flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-white">
                <ShoppingBag size={16} />
                <span>Savatga</span>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
