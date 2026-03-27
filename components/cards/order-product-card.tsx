import { IOrderProduct } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  product: IOrderProduct;
}

function OrderProductCard({ product }: Props) {
  console.log("Productasassssssas", product);
  return (
    <div className="grid grid-cols-[1.5fr_1fr_auto] items-center rounded-lg border border-white/10 bg-white/5 p-4 text-white">
      <div className="flex items-center gap-2">
        <div className="relative flex size-20 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          {/* Rasmning o'zi alohida div ichida qirqilishi mumkin */}
          <div className="relative size-full overflow-hidden rounded-xl">
            <Image
              src={product.productId.images[0]}
              alt={product.productId.name}
              fill
              className="object-contain"
            />
          </div>

          {/* BADGE: z-index va joylashuvi to'g'irlandi */}
          <div className="absolute -right-2.5 -top-2.5 z-20 flex size-6 items-center justify-center rounded-full bg-pink-600 text-[11px] font-black text-white shadow-lg shadow-pink-900/20 ring-1 ring-white">
            {product.count}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="font-sora text-xl font-semibold text-white">
              {product.productId.brand}:
            </h1>
            <h1 className="font-sora text-xl font-semibold text-white">
              {product.productId.category}
            </h1>
          </div>
          <h1 className="line-clamp-1 text-gray-300">
            {product.productId.name}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">Narxi</h1>
        <div className="flex items-center gap-2">
          <p className="font-inter text-sm text-red-500 line-through">
            {product.productId.price.toLocaleString()} s&apos;om
          </p>
          <p className="font-inter text-sm font-semibold text-gray-100">
            {product.onePrice.toLocaleString()} s&apos;om
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">
          <span className="text-green-500">{product.count}</span> ta buyurtma
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-inter text-xl font-semibold text-gray-200">
            Jami:
          </p>
          (
          <p className="font-inter text-lg font-semibold text-green-500">
            {product.proTotalPrice.toLocaleString()} s&apos;om
          </p>
          )
        </div>
      </div>
    </div>
  );
}

export default OrderProductCard;
// import { IOrderProduct } from "@/types";
// import Image from "next/image";
// import React from "react";

// interface Props {
//   product: IOrderProduct;
// }

// function OrderProductCard({ product }: Props) {
//   // Real loyihada bularni product'dan olasiz
//   const quantity = 3;
//   const unitPrice = 90000;
//   const oldPrice = 100000;
//   const totalPrice = unitPrice * quantity;

//   return (
//     <div className="group flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/[0.08] md:flex-row">
//       {/* 1. RASM VA ASOSIY INFO */}
//       <div className="flex w-full flex-1 items-center gap-4">
//         <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
//           <Image
//             src={product.productId.images[0]}
//             alt={product.productId.name}
//             fill
//             className="object-contain p-2"
//           />
//           <div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-pink-600 text-[10px] font-black shadow-lg ring-2 ring-[#0a0a0a]">
//             {quantity}
//           </div>
//         </div>

//         <div className="min-w-0 flex-1">
//           <div className="mb-1 flex items-center gap-2">
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500">
//               {product.productId.brand}
//             </span>
//             <span className="text-[10px] font-bold uppercase tracking-wider text-white/30">
//               {product.productId.category}
//             </span>
//           </div>
//           <h3 className="truncate text-sm font-bold text-white/90 md:text-base">
//             {product.productId.name +
//               "loremjenejncjcjnrjncjnejnjnfjcnjcnjcnjrnjcnjrncn4njjefenjnjferjnjfnnrfnf"}
//           </h3>
//         </div>
//       </div>

//       {/* 2. DONA NARXI (O'rtada, skromniy) */}
//       <div className="flex shrink-0 flex-col items-start md:items-end">
//         <span className="text-[9px] font-black uppercase tracking-widest text-white/20">
//           Dona narxi
//         </span>
//         <div className="flex items-baseline gap-2">
//           <span className="text-sm font-bold text-white">
//             {unitPrice.toLocaleString()}{" "}
//             <small className="text-[9px] italic opacity-40">so&apos;m</small>
//           </span>
//           <span className="text-[11px] text-white/20 line-through decoration-pink-500/50">
//             {oldPrice.toLocaleString()}
//           </span>
//         </div>
//       </div>

//       {/* 3. JAMI SUMMA (O'ngda, asosiy urg'u) */}
//       <div className="flex w-full shrink-0 flex-col border-t border-white/5 pt-4 md:w-auto md:items-end md:border-none md:pt-0">
//         <span className="text-[9px] font-black uppercase tracking-widest text-pink-500/60">
//           Jami miqdor
//         </span>
//         <div className="flex items-baseline gap-1">
//           <span className="font-sora text-2xl font-black tracking-tighter text-white">
//             {totalPrice.toLocaleString()}
//           </span>
//           <span className="text-[10px] font-bold uppercase italic text-white/30">
//             so&apos;m
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderProductCard;
