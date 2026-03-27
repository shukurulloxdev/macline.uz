"use client";
import OrderCard from "@/components/cards/order-card";
import NoOrder from "@/components/shared/no-order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IOrder } from "@/types";
import { Inbox, CheckCircle2, Clock } from "lucide-react";

interface Props {
  newOrders: IOrder[];
  processOrders: IOrder[];
  finishedOrders: IOrder[];
}

function AdminOrdersTabs({ newOrders, processOrders, finishedOrders }: Props) {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <Tabs defaultValue="yangilar" className="w-full">
        <div className="flex flex-col gap-6 border-b border-white/5 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="font-sora text-4xl font-black uppercase italic leading-tight tracking-tighter text-white">
              Barcha{" "}
              <span className="not-italic text-pink-600"> Buyurtmalar</span>
            </h1>

            <p className="max-w-md text-[13px] font-medium leading-relaxed text-slate-400">
              Tizimdagi barcha buyurtmalarni filtrlash va statusini boshqarish
              bo&apos;limi
            </p>
          </div>

          {/* O'NG TOMON: TabsList - silliq va tekis */}
          <div className="shrink-0">
            <TabsList className="h-[58px] items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
              {[
                { id: "yangilar", label: "Yangilar", icon: Inbox },
                { id: "jarayondagilar", label: "Jarayondagilar", icon: Clock },
                {
                  id: "tugatilganlar",
                  label: "Yakunlanganlar",
                  icon: CheckCircle2,
                },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="group flex h-full items-center gap-2 rounded-xl px-6 text-[11px] font-black uppercase tracking-widest text-neutral-400 transition-all data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-pink-600/30"
                >
                  <tab.icon size={15} strokeWidth={2.5} />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <TabsContent value="yangilar">
          <div className="flex flex-col gap-4">
            {newOrders.length > 0 ? (
              newOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))
            ) : (
              <NoOrder status="new" />
            )}
          </div>
        </TabsContent>
        <TabsContent value="jarayondagilar">
          <div className="flex flex-col gap-4">
            {processOrders.length > 0 ? (
              processOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))
            ) : (
              <NoOrder status="process" />
            )}
          </div>
        </TabsContent>
        <TabsContent value="tugatilganlar">
          <div className="flex flex-col gap-4">
            {finishedOrders.length > 0 ? (
              finishedOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))
            ) : (
              <NoOrder status="finished" />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminOrdersTabs;
