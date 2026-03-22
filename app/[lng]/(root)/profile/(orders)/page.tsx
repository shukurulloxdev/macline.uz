"use client";
import React, { useState } from "react";
import { Package, Home, ChevronRight } from "lucide-react";
import OrderCard from "../_components/order-card";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// Rasmga moslashtirilgan kengaytirilgan Mock Data
const MOCK_ORDERS = [
  {
    id: "1132",
    date: "29 Sep 2025, 14:06",
    region: "Farg'ona",
    district: "Marg'ilon",
    status: "processing" as const,
    totalAmount: "1,900,000",
    items: [
      {
        name: "Samsung: Chang yutgich",
        model: "Samsung SC 5251 RED",
        price: "90,000",
        oldPrice: "100,000",
        count: 3,
        image: "/categories/changyutgich.jpg", // O'zingizni rasmingiz yo'li
      },
      {
        name: "Samsung: Chang yutgich",
        model: "Samsung SC 5251 RED",
        price: "90,000",
        oldPrice: "100,000",
        count: 3,
        image: "/categories/kuller.png",
      },
    ],
  },
  {
    id: "1140",
    date: "22 Mar 2026, 10:30",
    region: "Toshkent",
    district: "Chilonzor",
    status: "completed" as const,
    totalAmount: "3,450,000",
    items: [
      {
        name: "iPhone 15 Pro",
        model: "Natural Titanium 128GB",
        price: "13,500,000",
        count: 1,
        image: "/categories/gazplita.png",
      },
    ],
  },
];

function OrdersPage() {
  return (
    <div className="flex flex-col gap-8 pb-4">
      <Tabs defaultValue="yangilar" className="w-full">
        {/* <div className="mb-4 flex items-center justify-between">
          <h2 className="font-sora text-5xl font-bold tracking-tighter text-neutral-900">
            Buyurtmalaringzi
          </h2>

          <TabsList className="flex h-auto gap-2 rounded-full border border-pink-100 bg-pink-50/30 p-2 backdrop-blur-sm">
            {["yangilar", "tugatilganlar"].map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-[0_10px_30px_rgba(219,39,119,0.3)]"
              >
                {id}
              </TabsTrigger>
            ))}
          </TabsList>
        </div> */}
        <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col gap-2">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              <Link href={"/"} className="flex items-center gap-1">
                <Home size={15} />
                <span>Bosh sahifa</span>
              </Link>
              <ChevronRight size={10} />
              <span className="italic text-pink-600">Profile</span>
            </nav>
            <span className="text-[32px] font-black uppercase leading-none tracking-tighter text-pink-600">
              Buyurtmalarim
            </span>
          </div>
          <TabsList className="flex h-auto gap-2 rounded-full border border-pink-100 bg-pink-50/30 p-2 backdrop-blur-sm">
            {["yangilar", "tugatilganlar"].map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className="rounded-full px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-[0_10px_30px_rgba(219,39,119,0.3)]"
              >
                {id}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="yangilar">
          <div className="flex flex-col gap-8">
            {MOCK_ORDERS.length > 0 ? (
              MOCK_ORDERS.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-neutral-100 bg-neutral-50/50 p-10 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 animate-ping rounded-full bg-pink-100 opacity-20" />
                  <div className="relative flex size-20 items-center justify-center rounded-3xl bg-white shadow-xl">
                    <Package size={40} className="text-neutral-200" />
                  </div>
                </div>
                <h3 className="text-lg font-black uppercase tracking-widest text-neutral-400">
                  Hozircha buyurtmalar yo'q
                </h3>
                <p className="mt-2 max-w-[250px] text-[11px] font-medium leading-relaxed text-neutral-300">
                  Siz hali hech narsa xarid qilmadingiz. Savatga o'tib mahsulot
                  tanlashingiz mumkin.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="tugatilganlar">
          <div className="flex flex-col gap-8">
            {MOCK_ORDERS.length > 0 ? (
              MOCK_ORDERS.slice(1).map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-neutral-100 bg-neutral-50/50 p-10 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 animate-ping rounded-full bg-pink-100 opacity-20" />
                  <div className="relative flex size-20 items-center justify-center rounded-3xl bg-white shadow-xl">
                    <Package size={40} className="text-neutral-200" />
                  </div>
                </div>
                <h3 className="text-lg font-black uppercase tracking-widest text-neutral-400">
                  Hozircha buyurtmalar yo'q
                </h3>
                <p className="mt-2 max-w-[250px] text-[11px] font-medium leading-relaxed text-neutral-300">
                  Siz hali hech narsa xarid qilmadingiz. Savatga o'tib mahsulot
                  tanlashingiz mumkin.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OrdersPage;
