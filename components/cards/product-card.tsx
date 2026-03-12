// "use client";
// import Image from "next/image";
// import { Heart, ShoppingBag, Star } from "lucide-react";
// import { IProduct } from "@/types";
// import { formatCurrentPrice, cn } from "@/lib/utils";
// import Link from "next/link";

// interface Props {
//   product: IProduct;
// }

// export default function ProductCard({ product }: Props) {
//   if (!product) return null;

//   return (
//     <div className="group flex w-full flex-col rounded-lg bg-white">
//       {/* Rasm qismi o'zgarishsiz qoladi */}
//       <div className="relative aspect-[6/7] w-full overflow-hidden rounded-3xl border border-transparent bg-white transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
//         <div className="absolute left-3 top-3 z-20 flex flex-col gap-1.5">
//           {product.top && (
//             <span className="rounded-lg bg-neutral-900 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
//               TOP
//             </span>
//           )}
//           {product.percent > 0 && (
//             <span className="rounded-lg bg-red-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
//               -{product.percent}%
//             </span>
//           )}
//         </div>

//         <button className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 bg-white/80 text-neutral-400 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:text-red-500 active:scale-90">
//           <Heart size={22} />
//         </button>

//         <Link href={`/product/${product._id}`} className="block h-full w-full">
//           <Image
//             src={product.images[0]}
//             alt={product.name}
//             fill
//             className="object-cover p-6 transition-transform duration-700 hover:scale-105"
//             priority
//           />
//         </Link>
//       </div>

//       <div className="flex flex-col space-y-2 p-4">
//         {/* Brend va Reyting */}
//         <div className="flex items-center justify-between">
//           <span className="text-[11px] font-black uppercase tracking-[0.1em] text-neutral-400">
//             {product.brand || "Original"}
//           </span>
//           <div className="flex items-center gap-1">
//             <Star size={12} fill="#FACC15" className="text-yellow-400" />
//             <span className="text-[12px] font-bold text-neutral-800">4.9</span>
//           </div>
//         </div>

//         {/* Nomi */}
//         <Link href={`/product/${product._id}`}>
//           <h3 className="line-clamp-2 min-h-[40px] text-[15px] font-semibold leading-snug text-neutral-900 transition-colors hover:text-pink-600">
//             {product.name}
//           </h3>
//         </Link>

//         {/* Narxi */}
//         <div className="flex items-baseline gap-2">
//           <span className="text-xl font-black text-neutral-900">
//             {formatCurrentPrice(product.price, product.percent)}
//           </span>
//           {product.percent > 0 && (
//             <span className="text-xs font-medium text-neutral-400 line-through">
//               {product.price.toLocaleString()}
//             </span>
//           )}
//         </div>

//         {/* ACTION BUTTONS */}
// <div className="flex items-center gap-2 pt-2">
//   {/* SOTIB OLISH TUGMASI (Faqat o'zi hover bo'lganda yonadi) */}
// <Link
//   href={`/product/${product._id}`}
//   className="btn-inner-group relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 p-[1.3px] transition-all duration-500 active:scale-95"
// >
//   {/* Faqat tugmaning o'ziga hover bo'lganda (hover:opacity-100) ishlaydi */}
//   <span
//     className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#DB2777_50%,#E2E8F0_100%)] opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover/btn:opacity-0"
//     style={{ opacity: "var(--tw-opacity)" }} // Bu yerda klasslarni boshqarish uchun qo'shimcha mantiq
//   />

//   {/* Bu yerda hover klassini tugmaning o'ziga beramiz */}
//   <span className="group/btn relative z-10 flex h-full w-full items-center justify-center rounded-[10px] bg-white transition-all duration-500 hover:bg-pink-600">
//     <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 group-hover/btn:text-white">
//       Sotib olish
//     </span>
//   </span>
// </Link>

//           {/* SAVAT TUGMASI (360° Neon Effekt bilan) */}
//           <button className="flex h-11 w-12 items-center justify-center rounded-lg bg-pink-600 text-white hover:bg-pink-700">
//             <ShoppingBag size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";
import { IProduct } from "@/types";
import { formatCurrentPrice, cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  product: IProduct;
  view: "grid" | "list";
}

export default function ProductCard({ product, view }: Props) {
  if (!product) return null;
  const isList = view === "list";

  return (
    <div
      className={cn(
        "group flex w-full bg-white transition-all duration-500",
        isList
          ? "flex-row gap-6 rounded-[2rem] border border-neutral-100 p-5 hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
          : "flex-col rounded-lg",
      )}
    >
      {/* --- IMAGE ZONE --- */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-white transition-all duration-500",
          isList
            ? "h-56 w-60 rounded-2xl"
            : "aspect-[8/6] w-full rounded-3xl border border-transparent",
        )}
      >
        {/* Badges */}
        <div
          className={cn(
            "absolute z-20 flex flex-col gap-1.5",
            isList ? "left-3 top-3" : "left-3 top-3",
          )}
        >
          {product.top && (
            <span className="rounded-lg bg-neutral-900 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
              TOP
            </span>
          )}
          {product.percent > 0 && (
            <span className="rounded-lg bg-red-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
              -{product.percent}%
            </span>
          )}
        </div>

        {/* Heart Button */}
        <button
          className={cn(
            "absolute z-20 flex items-center justify-center rounded-full border border-neutral-100 bg-white/80 text-neutral-400 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:text-red-500 active:scale-90",
            isList ? "right-3 top-3 h-10 w-10" : "right-2 top-2 h-10 w-10",
          )}
        >
          <Heart size={22} />
        </button>

        <Link href={`/product/${product._id}`} className="block h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={cn(
              "transition-transform duration-700 hover:scale-105",
              isList ? "object-contain p-2" : "object-contain",
            )}
            priority
          />
        </Link>
      </div>

      {/* --- CONTENT ZONE --- */}
      <div
        className={cn(
          "flex flex-1 flex-col",
          isList ? "justify-between" : "p-4",
        )}
      >
        <div className="space-y-2">
          {/* Brand & Stats */}
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "font-black uppercase tracking-[0.1em]",
                "text-[11px] text-pink-600",
              )}
            >
              {product.brand || "Original"}
            </span>
            {product.percent > 0 && (
              <span
                className={cn(
                  "font-medium text-neutral-400 line-through",
                  isList ? "text-sm" : "text-xs",
                )}
              >
                {product.price.toLocaleString()}{" "}
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/product/${product._id}`}>
            <h3
              className={cn(
                "mt-2 line-clamp-2 font-semibold leading-snug text-neutral-900 transition-colors hover:text-pink-900",
                isList ? "font-sora text-2xl" : "min-h-[3.2rem] text-[15px]",
              )}
            >
              {product.name}
            </h3>
          </Link>

          {isList && (
            <>
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
            </>
          )}
        </div>

        {/* --- PRICE & ACTIONS ZONE --- */}
        <div
          className={cn(
            "flex items-center justify-between gap-2",
            isList ? "mt-6 border-t border-neutral-50 pt-5" : "flex-wrap pt-1",
          )}
        >
          {/* Narx qismi - Har doim tugmalardan oldin (Gridda tepada bo'lishi uchun) */}
          <div className={cn("flex flex-col gap-1", !isList && "mb-1 w-full")}>
            {isList && product.percent > 0 && (
              <span
                className={cn(
                  "font-medium text-neutral-400 line-through",
                  isList ? "text-sm" : "text-xs",
                )}
              >
                {product.price.toLocaleString()}{" "}
                <span className="text-sm">so&apos;m</span>
              </span>
            )}
            <span
              className={cn(
                "font-black text-pink-600",
                isList ? "text-3xl" : "text-xl",
              )}
            >
              {formatCurrentPrice(product.price, product.percent)}{" "}
              <span className={cn(isList ? "text-xl" : "text-[14px]")}>
                so&apos;m
              </span>
            </span>
          </div>

          {/* Tugmalar qismi */}
          <div
            className={cn("flex items-center gap-2", !isList ? "w-full" : "")}
          >
            {isList ? (
              <>
                <Link
                  href={`/product/${product._id}`}
                  className="flex h-12 items-center justify-center rounded-xl border border-neutral-200 px-6 text-[11px] font-black uppercase tracking-widest text-neutral-900 transition-all hover:bg-neutral-50"
                >
                  Batafsil
                </Link>
                <button className="group relative flex h-12 items-center justify-center overflow-hidden rounded-xl bg-pink-600 px-6 transition-all hover:bg-pink-700 active:scale-95">
                  <div className="relative z-10 flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-white">
                    <ShoppingBag size={20} />
                    <span>Savatga qo'shish</span>
                  </div>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/product/${product._id}`}
                  className="btn-inner-group relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 p-[1.3px] transition-all duration-500 active:scale-95"
                >
                  {/* Faqat tugmaning o'ziga hover bo'lganda (hover:opacity-100) ishlaydi */}
                  <span
                    className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#DB2777_50%,#E2E8F0_100%)] opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover/btn:opacity-0"
                    style={{ opacity: "var(--tw-opacity)" }} // Bu yerda klasslarni boshqarish uchun qo'shimcha mantiq
                  />

                  {/* Bu yerda hover klassini tugmaning o'ziga beramiz */}
                  <span className="group/btn relative z-10 flex h-full w-full items-center justify-center rounded-[10px] bg-white transition-all duration-500 hover:bg-pink-600">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 group-hover/btn:text-white">
                      Sotib olish
                    </span>
                  </span>
                </Link>
                <button className="flex h-11 w-12 items-center justify-center rounded-lg bg-pink-600 text-white transition-all hover:bg-pink-700 active:scale-95">
                  <ShoppingBag size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
