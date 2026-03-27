"use client";

import { Package, Home, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import OrderCard from "./order-card";
import { IOrder } from "@/types";

interface Props {
  newOrders: IOrder[];
  finishedOrders: IOrder[];
}

function OrdersActionsFun({ newOrders, finishedOrders }: Props) {
  console.log("NEWWWWW", newOrders);
  console.log("FINISHED", finishedOrders);
  return (
    <div className="flex flex-col gap-8 pb-4">
      <Tabs defaultValue="yangilar" className="w-full">
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
          <div className="mt-3 flex flex-col gap-4">
            {newOrders.length > 0 ? (
              newOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
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
                  Hozircha buyurtmalar yo&apos;q
                </h3>
                <p className="mt-2 max-w-[250px] text-[11px] font-medium leading-relaxed text-neutral-300">
                  Siz hali hech narsa xarid qilmadingiz. Savatga o&apos;tib
                  mahsulot tanlashingiz mumkin.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="tugatilganlar">
          <div className="flex flex-col gap-8">
            {finishedOrders.length > 0 ? (
              finishedOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
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
                  Hozircha buyurtmalar yo&apos;q
                </h3>
                <p className="mt-2 max-w-[250px] text-[11px] font-medium leading-relaxed text-neutral-300">
                  Siz hali hech narsa xarid qilmadingiz. Savatga o&apos;tib
                  mahsulot tanlashingiz mumkin.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OrdersActionsFun;
