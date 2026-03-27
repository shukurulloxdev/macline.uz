"use client";
import React from "react";
import { MapPin, Hash, Calendar, ReceiptText } from "lucide-react";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { IOrder } from "@/types";

interface Props {
  order: IOrder;
}

function OrderCard({ order }: Props) {
  console.log("Profile", order);
  return (
    <div className="group overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-neutral-100/50">
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
              #{order._id.slice(3, 7)}
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
              {formatDate(order.createdAt)}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 rounded-2xl border px-5 py-[6px] text-[11px] font-black uppercase tracking-tighter shadow-sm transition-all duration-300",
            order.status === "new" &&
              "border-pink-200 bg-pink-100 text-pink-800",
            order.status === "process" &&
              "border-blue-200 bg-blue-100 text-blue-700",
            order.status === "finished" &&
              "border-emerald-200 bg-emerald-100 text-emerald-800",
          )}
        >
          {/* Animatsiyali nuqta (Ping effekt) */}
          <span className="relative flex size-2">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                order.status === "new" && "bg-amber-500",
                order.status === "process" && "bg-blue-500",
                order.status === "finished" && "bg-emerald-500",
              )}
            ></span>
            <span
              className={cn(
                "relative inline-flex h-2 w-2 rounded-full",
                order.status === "new" && "bg-pink-600",
                order.status === "process" && "bg-blue-600",
                order.status === "finished" && "bg-emerald-600",
              )}
            ></span>
          </span>

          <span>
            {order.status === "new"
              ? "Yangi"
              : order.status === "process"
                ? "Jarayonda"
                : "Tugatildi"}
          </span>
        </div>
      </div>

      {/* MANZIL (Foydalanuvchi o'zi qayerga buyurtma berganini ko'rishi uchun) */}
      <div className="flex items-center gap-8 border-y border-neutral-50 px-6 py-4">
        <div className="flex items-center gap-2 text-neutral-500">
          <MapPin size={16} className="text-pink-500" />
          <span className="text-[11px] font-bold uppercase tracking-tight">
            {order.region}, {order.city}
          </span>
        </div>
      </div>

      {/* MAHSULOTLAR RO'YXATI */}
      <div className="flex flex-col divide-y divide-neutral-50 px-6">
        {order.products.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-5">
            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-2">
                <Image
                  src={item.productId.images[0]}
                  alt={item.productId.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-black text-neutral-900">
                  {item.productId.name}
                </h3>
                <p className="text-[11px] font-medium text-neutral-400">
                  {item.productId.brand}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-12 text-right">
              <div className="flex min-w-[80px] flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-neutral-400">
                  Soni
                </span>
                <span className="text-xs font-black text-pink-600">
                  ({item.count}) ta
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-neutral-400">
                  1 dona narxi
                </span>
                <span className="text-[14px] font-black uppercase text-pink-600">
                  {item.onePrice.toLocaleString()}{" "}
                  <span className="text-[9px]">so&apos;m</span>
                </span>
              </div>

              {item.count > 1 && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">
                    Jami
                  </span>
                  <span className="text-[14px] font-black uppercase text-pink-600">
                    {item.proTotalPrice.toLocaleString()}{" "}
                    <span className="text-[9px]">so&apos;m</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER: JAMI SUMMA */}
      <div
        className={cn(
          "flex items-center justify-between bg-pink-100 p-6",
          order.status === "new" && "bg-pink-100",
          order.status === "process" && "bg-blue-100",
          order.status === "finished" && "bg-emerald-100",
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
          <span className="text-2xl font-black tracking-normal text-pink-800">
            {order.totalPrice.toLocaleString()}{" "}
            <span className="text-xs not-italic text-pink-700">SO&apos;M</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
