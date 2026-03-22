// "use client";
// import React from "react";
// import {
//   Package,
//   Calendar,
//   ChevronRight,
//   CreditCard,
//   Clock,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface OrderCardProps {
//   order: {
//     id: string;
//     date: string;
//     totalAmount: string;
//     itemsCount: number;
//     status: "new" | "processing" | "completed" | "cancelled";
//   };
// }

// const statusStyles = {
//   new: "bg-blue-50 text-blue-600 ring-blue-100",
//   processing: "bg-orange-50 text-orange-600 ring-orange-100",
//   completed: "bg-emerald-50 text-emerald-600 ring-emerald-100",
//   cancelled: "bg-red-50 text-red-600 ring-red-100",
// };

// const statusLabels = {
//   new: "Yangi",
//   processing: "Jarayonda",
//   completed: "Yetkazildi",
//   cancelled: "Bekor qilindi",
// };

// function OrderCard({ order }: OrderCardProps) {
//   return (
//     <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-100 bg-white p-5 transition-all duration-300 hover:border-pink-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
//       {/* 1. HEADER (Status va ID) */}
//       <div className="flex items-center justify-between border-b border-neutral-50 pb-4">
//         <div className="flex items-center gap-3">
//           <div className="flex size-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 transition-colors group-hover:bg-pink-50 group-hover:text-pink-600">
//             <Package size={20} />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
//               Buyurtma ID
//             </span>
//             <span className="text-sm font-black text-neutral-900">
//               #{order.id}
//             </span>
//           </div>
//         </div>

//         <div
//           className={cn(
//             "rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ring-1",
//             statusStyles[order.status],
//           )}
//         >
//           {statusLabels[order.status]}
//         </div>
//       </div>

//       {/* 2. BODY (Ma'lumotlar) */}
//       <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
//         <div className="flex flex-col gap-1">
//           <div className="flex items-center gap-1.5 text-neutral-400">
//             <Calendar size={14} />
//             <span className="text-[10px] font-bold uppercase">Sana</span>
//           </div>
//           <span className="text-xs font-black text-neutral-700">
//             {order.date}
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <div className="flex items-center gap-1.5 text-neutral-400">
//             <CreditCard size={14} />
//             <span className="text-[10px] font-bold uppercase">Summa</span>
//           </div>
//           <span className="text-xs font-black text-pink-600">
//             {order.totalAmount} so'm
//           </span>
//         </div>

//         <div className="flex hidden flex-col gap-1 md:flex">
//           <div className="flex items-center gap-1.5 text-neutral-400">
//             <Clock size={14} />
//             <span className="text-[10px] font-bold uppercase">Mahsulotlar</span>
//           </div>
//           <span className="text-xs font-black text-neutral-700">
//             {order.itemsCount} ta
//           </span>
//         </div>
//       </div>

//       {/* 3. FOOTER (Action) */}
//       <button className="mt-5 flex w-full items-center justify-between rounded-xl bg-neutral-50 px-4 py-3 transition-all hover:bg-neutral-900 hover:text-white">
//         <span className="text-[10px] font-black uppercase tracking-widest">
//           Batafsil ko'rish
//         </span>
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   );
// }

// export default OrderCard;
"use client";
import React from "react";
import {
  MapPin,
  Hash,
  Calendar,
  ChevronRight,
  PackageCheck,
  ReceiptText,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OrderItem {
  name: string;
  model: string;
  price: string;
  oldPrice?: string;
  count: number;
  image: string;
}

interface OrderProps {
  order: {
    id: string;
    date: string;
    region: string;
    district: string;
    status: "new" | "completed" | "processing";
    items: OrderItem[];
    totalAmount: string;
  };
}

function OrderCard({ order }: OrderProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-neutral-100/50">
      {/* HEADER: ID, SANA VA STATUS */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-neutral-50/50 p-6">
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-neutral-400">
              <Hash size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Buyurtma indexi
              </span>
            </div>
            <span className="text-sm font-black text-neutral-900">
              #{order.id}
            </span>
          </div>

          <div className="flex flex-col gap-1 border-l border-neutral-200 pl-6">
            <div className="flex items-center gap-1.5 text-neutral-400">
              <Calendar size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Sana
              </span>
            </div>
            <span className="text-xs font-bold text-neutral-600">
              {order.date}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "rounded-2xl px-5 py-2 text-[11px] font-black uppercase tracking-tighter shadow-sm",
            order.status === "completed"
              ? "bg-emerald-100 text-emerald-800"
              : "bg-pink-100 text-pink-800",
          )}
        >
          {order.status === "completed" ? "Yetkazildi" : "Jarayonda"}
        </div>
      </div>

      {/* MANZIL (Foydalanuvchi o'zi qayerga buyurtma berganini ko'rishi uchun) */}
      <div className="flex items-center gap-8 border-y border-neutral-50 px-6 py-4">
        <div className="flex items-center gap-2 text-neutral-500">
          <MapPin size={16} className="text-pink-500" />
          <span className="text-[11px] font-bold uppercase tracking-tight">
            {order.region}, {order.district}
          </span>
        </div>
      </div>

      {/* MAHSULOTLAR RO'YXATI */}
      <div className="flex flex-col divide-y divide-neutral-50 px-6">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-5">
            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-black text-neutral-900">
                  {item.name}
                </h3>
                <p className="text-[11px] font-medium text-neutral-400">
                  {item.model}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-12 text-right">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-neutral-400">
                  Narxi
                </span>
                <div className="flex items-center gap-2">
                  {item.oldPrice && (
                    <span className="text-[10px] text-neutral-300 line-through">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="text-xs font-black text-neutral-900">
                    {item.price} so'm
                  </span>
                </div>
              </div>
              <div className="flex min-w-[80px] flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-neutral-400">
                  Soni
                </span>
                <span className="text-xs font-black text-pink-600">
                  ({item.count}) ta
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER: JAMI SUMMA */}
      <div
        className={cn(
          "flex items-center justify-between bg-pink-100 p-6",
          order.status === "completed" ? "bg-emerald-100" : "bg-pink-100",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white">
            <ReceiptText size={20} className="text-pink-500" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest">
            Umumiy hisob:
          </span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black tracking-tighter text-pink-800">
            {order.totalAmount}{" "}
            <span className="text-xs not-italic text-pink-700">SO'M</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
