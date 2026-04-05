import React from "react";
import { Separator } from "../../../../../../components/ui/separator";
import { StatisticsTip } from "@/types";

interface Props {
  card: StatisticsTip;
}

function StatisticsCard({ card }: Props) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium tracking-wide text-slate-300 group-hover:text-white">
            {card.title}
          </span>

          <div className="rounded-xl bg-white/20 p-2 text-white">
            <card.icon size={22} />
          </div>
        </div>

        <Separator className="opacity-10" />

        <h2 className="flex items-center gap-1">
          <span className="text-4xl font-bold tracking-tight text-white">
            {card.price ? (
              <span className="text-3xl">{card.price.toLocaleString()}</span>
            ) : (
              <span>{card.value}</span>
            )}
          </span>
          <span className="self-end text-lg font-medium text-slate-400">
            {card.suffix}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default StatisticsCard;
