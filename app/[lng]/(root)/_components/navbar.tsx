"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  LayoutGrid,
  Bell,
  ChevronDown,
  Sparkles,
  MapPin,
  Phone,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/logo";
import { useTranslation } from "@/i18n/client";
import LngMenu from "@/components/shared/lng-menu";

function Navbar() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "home");

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 20px dan oshsa yashirsin
      if (scrollY > 20 && isCategoryVisible) {
        setIsCategoryVisible(false);
      }

      // faqat teparoqqa deyarli qaytganda ko'rsatsin
      if (scrollY < 5 && !isCategoryVisible) {
        setIsCategoryVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCategoryVisible]);

  const categories = [
    "Yangi kelganlar",
    "Smartfonlar",
    "Noutbuklar",
    "Planshetlar",
    "Aksessuarlar",
    "Televizorlar",
    "Maishiy texnikalar",
  ];

  return (
    <div className="sticky top-0 z-[100] border-b border-neutral-100 bg-white shadow-xl backdrop-blur-2xl">
      <div className="border-b border-neutral-100 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href={"/products?category=discounts"}
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-1 transition-all hover:bg-pink-100"
            >
              <Flame size={12} className="animate-pulse text-pink-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.12em] text-pink-600">
                Hafta chegirmalari -30% gacha
              </span>
            </Link>

            <div className="hidden items-center gap-5 md:flex">
              <a
                href="tel:+998902015858"
                className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-400 transition-colors hover:text-black"
              >
                <Phone size={11} /> +998 (90) 201 58-58
              </a>
              <div className="h-3 w-[1px] bg-neutral-200" />
              <span className="cursor-pointer text-[11px] font-bold text-neutral-400 transition-colors hover:text-black">
                Yordam markazi
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LngMenu />
            <div className="h-3 w-[1px] bg-neutral-200" />
            <div className="group flex cursor-pointer items-center gap-1.5 transition-all">
              <MapPin
                size={12}
                className="text-pink-500 transition-transform group-hover:scale-110"
              />
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-pink-600">
                Toshkent
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-3">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <Logo />

            <button className="group hidden items-center gap-3 rounded-2xl bg-pink-600 px-6 py-3 text-white shadow-[0_10px_25px_-5px_rgba(219,39,119,0.4)] transition-all hover:bg-pink-700 active:scale-95 xl:flex">
              <LayoutGrid
                size={20}
                className="transition-transform duration-500 group-hover:rotate-90"
              />
              <span className="text-sm font-black uppercase tracking-wider">
                Katalog
              </span>
            </button>
          </div>

          <div
            className={cn(
              "relative max-w-2xl flex-1 transition-all duration-500",
              isSearchFocused ? "z-[120] scale-[1.02]" : "z-[50]",
            )}
          >
            <div className="group relative flex items-center">
              <input
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                type="text"
                placeholder="Smart qidiruv: iPhone 15 Pro..."
                className="h-12 w-full rounded-[1.25rem] border-2 border-transparent bg-neutral-100 pl-5 pr-16 text-sm font-bold outline-none transition-all placeholder:font-medium placeholder:text-neutral-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100/50"
              />

              <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-600 text-white shadow-md transition-all hover:scale-105 active:scale-95">
                  <Search size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {isSearchFocused && (
              <div className="absolute left-0 top-[110%] w-full rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  <Sparkles size={14} className="text-pink-500" />
                  Ommabop qidiruvlar
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "AirPods Pro",
                    "Samsung S24",
                    "Gaming Laptop",
                    "Nike Air",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded-full border border-neutral-100 bg-neutral-50 px-4 py-2 text-xs font-bold transition-all hover:bg-pink-50 hover:text-pink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
              <Bell size={24} strokeWidth={2.3} />
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-600" />
            </button>

            <button className="group relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
              <Heart
                size={24}
                strokeWidth={2.3}
                className="group-hover:fill-pink-600"
              />
              <div className="absolute -right-2 -top-2 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-black text-white ring-4 ring-white">
                12
              </div>
            </button>

            <button className="group flex items-center gap-4 rounded-2xl border border-transparent bg-neutral-50 p-1.5 pr-6 transition-all hover:border-pink-100 hover:bg-pink-50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
                <ShoppingBag size={22} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-black uppercase tracking-tighter text-neutral-400">
                  Savatda
                </span>
                <span className="text-sm font-black text-neutral-900">
                  12.500.000 UZS
                </span>
              </div>
            </button>

            <Link
              href={"/admin"}
              className="ml-2 border-l border-neutral-100 pl-6"
            >
              <button className="group flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-transparent transition-all group-hover:ring-pink-600">
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-100 text-pink-600">
                    <User size={24} />
                  </div>
                </div>

                <div className="hidden flex-col items-start xl:flex">
                  <span className="text-[11px] font-black uppercase text-pink-600">
                    Xush kelibsiz
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-black uppercase text-neutral-900">
                      Profilim
                    </span>
                    <ChevronDown
                      size={14}
                      className="text-neutral-400 transition-transform group-hover:rotate-180"
                    />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-neutral-100 bg-white/50 backdrop-blur-sm transition-all duration-300",
          isCategoryVisible
            ? "max-h-32 translate-y-0 py-3 opacity-100"
            : "max-h-0 -translate-y-2 py-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl">
          <nav className="flex w-full items-center justify-between gap-2">
            {categories.map((cat, index, array) => (
              <React.Fragment key={cat}>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 transition-all hover:text-pink-600"
                >
                  <div className="relative flex h-2 w-2 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-100 transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:bg-pink-600 group-hover:shadow-[0_0_10px_rgba(219,39,119,0.5)]" />
                  </div>

                  <span className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                    {cat}
                  </span>
                </Link>

                {index !== array.length - 1 && (
                  <div className="mx-1 h-4 w-[1px] bg-neutral-100" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
