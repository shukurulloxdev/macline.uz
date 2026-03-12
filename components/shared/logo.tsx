import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  admin?: boolean;
}
const Logo = ({ admin }: Props) => {
  return (
    <Link
      href={"/"}
      className="group flex cursor-pointer select-none items-center gap-3"
    >
      <rect
        width="40"
        height="40"
        rx="8"
        fill="#DB2777"
        transform="rotate(6 30 30)"
      />

      {/* 2. Matn qismi: OpenShop ierarxiyasida */}
      <div className="flex flex-col leading-none">
        <h1
          className={cn(
            "text-[30px] font-black uppercase tracking-tighter text-neutral-900",
            admin && "text-white",
          )}
        >
          Texno
          <span className="text-pink-600 transition-colors group-hover:text-pink-500">
            tech
          </span>
        </h1>
        <div className="mt-0.5 flex items-center gap-1.5">
          <div className="h-[1px] w-3 bg-neutral-300 transition-all group-hover:w-5"></div>
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400">
            Digital Market
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
