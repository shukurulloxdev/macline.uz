import StatisticsCard from "@/app/[lng]/admin/(dashboard)/_components/cards/statistics-card";
import { bestSeller } from "@/components/constants";
import React from "react";
import BestSellerCard from "./_components/cards/bestseller-card";
import StatisticsRadio from "./_components/statistics-radio";
import { getStatistics } from "@/actions/admin-actions";
import {
  MessageCircle,
  ShoppingCart,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

async function Page() {
  const data = await getStatistics();
  console.log(data);
  const statisticsdb = data.data;

  const statistics = [
    {
      title: "Jami mahsulot",
      value: `${statisticsdb?.totalProduct}`,
      suffix: "ta",
      icon: TrendingUp,
    },
    {
      title: "Jami sotuv",
      value: `${statisticsdb?.totalOrder}`,
      suffix: "ta",
      icon: ShoppingCart,
    },
    {
      title: "Jami user",
      value: `${statisticsdb?.totalUser}`,
      suffix: "ta",
      icon: User,
    },
    {
      title: "Jami summa",
      price: statisticsdb?.totalOrderPrice,
      suffix: "so'm",
      icon: Wallet,
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="font-sora text-4xl font-black uppercase italic tracking-tighter text-white">
            Tizim&nbsp;
            <span className="not-italic text-pink-600"> statistikasi</span>
          </h1>
          <p className="text-sm font-medium text-slate-400">
            Tizimning real-vaqt nazorati paneli
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {statistics.map((card, i) => (
            <StatisticsCard key={i} card={card} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-6">
            {bestSeller.map((item) => (
              <BestSellerCard key={item.image} product={item} />
            ))}
          </div>
          {/**/}
          <div className="rounded-3xl border border-white/20 bg-white/10">
            <StatisticsRadio totalOrder={statisticsdb?.totalOrder || 0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
