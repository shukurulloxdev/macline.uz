"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { lngs } from "@/components/constants";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LngMenu() {
  const { lng } = useParams();
  const pathname = usePathname();
  const currentLng = lng as string;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Trigger: Nafis, shaffof va hoverda pushti ohang beruvchi tugma */}
        <button className="group flex items-center gap-2.5 rounded-full bg-white/50 px-3 py-1.5 transition-all hover:bg-pink-50 hover:ring-1 hover:ring-pink-100 active:scale-95">
          <div className="relative size-5 overflow-hidden rounded-full shadow-sm ring-1 ring-neutral-200">
            <Image
              src={`/locales/${currentLng}.png`}
              alt={currentLng}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 transition-colors group-hover:text-pink-600">
            {currentLng}
          </span>
          <ChevronDown
            size={12}
            className="text-neutral-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-pink-600"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        sideOffset={10}
        // z-[110] qo'shildi, bu navbardagi z-[100] dan balandroq bo'lishini ta'minlaydi
        className="z-[110] min-w-[160px] overflow-hidden rounded-3xl border border-pink-300 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in zoom-in-95"
      >
        {lngs.map((item) => {
          const isActive = item.route === currentLng;

          return (
            <Link
              key={item.route}
              href={`/${item.route}/${pathname.split("/").slice(2).join("/")}`}
            >
              <DropdownMenuItem
                className={cn(
                  "my-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 outline-none transition-all",
                  isActive
                    ? "bg-pink-100 text-pink-600 hover:bg-pink-100"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-black",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="relative size-6 overflow-hidden rounded-full shadow-sm ring-1 ring-neutral-100">
                    <Image
                      src={`/locales/${item.route}.png`}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-tight">
                    {item.label}
                  </span>
                </div>

                {/* Aktiv til uchun indikator */}
                {isActive && (
                  <div className="size-1.5 animate-pulse rounded-full bg-pink-600" />
                )}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
