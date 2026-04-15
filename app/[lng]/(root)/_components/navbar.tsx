"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Bell,
  MapPin,
  Phone,
  Flame,
  LoaderCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/logo";
import LngMenu from "@/components/shared/lng-menu";
import KatalogMenu from "./katalog-menu";
import { ICategory } from "@/types";
import RegisterModal from "./register-modal";
import { UserMenu } from "@/components/shared/user-menu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import InputSearch from "./input-search";

interface Props {
  katalog: ICategory[];
}
function Navbar({ katalog }: Props) {
  // const { lng } = useParams();
  // const { t } = useTranslation(lng as string, "home");
  console.log("KATALOGG", katalog);

  const [isCategoryVisible, setIsCategoryVisible] = useState(true);

  const pathname = usePathname();

  const isFavoritesPage = pathname.endsWith("/favorites");
  const isCartPage = pathname.endsWith("/shopping/cart");

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

  const { user, isLoading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10 && isCategoryVisible) setIsCategoryVisible(false);
      if (scrollY < 5 && !isCategoryVisible) setIsCategoryVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCategoryVisible]);

  const categories = [
    {
      _id: "v73gd733hxuhj28j3",
      title: "Hafta chegirmalari",
      slug: "discounts",
    },
    {
      _id: "jncnenjencjnce8",
      title: "Top mahsulotlar",
      slug: "tops",
    },
    ...katalog,
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white shadow-md backdrop-blur-2xl">
      <div className="border-b border-neutral-100 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href={"/category/discounts"}
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
              <div className="h-3 w-px bg-neutral-200" />
              <span className="cursor-pointer text-[11px] font-bold text-neutral-400 transition-colors hover:text-black">
                Yordam markazi
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LngMenu />
            <div className="h-3 w-px bg-neutral-200" />
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
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <Logo />
            <KatalogMenu categories={katalog} />
          </div>

          <InputSearch categories={katalog} />

          <div className={cn("z-10 flex items-center gap-4")}>
            <div className="flex items-center gap-4">
              {/* BELL BUTTON */}
              <button className="relative flex h-[54px] w-14 items-center justify-center rounded-2xl bg-neutral-50 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600 active:scale-95">
                <Bell size={24} strokeWidth={2.3} />
                <span className="absolute right-4 top-4 size-2.5 rounded-full border-2 border-white bg-pink-600" />
              </button>

              {/* FAVORITES LINK */}
              <Link
                href={"/favorites"}
                className={cn(
                  "group relative flex h-[54px] w-14 items-center justify-center rounded-2xl transition-all active:scale-95",
                  isFavoritesPage
                    ? "bg-pink-50 text-pink-600"
                    : "bg-neutral-50 hover:bg-pink-50 hover:text-pink-600",
                )}
              >
                <Heart
                  size={24}
                  strokeWidth={2.3}
                  className={cn(
                    "transition-all",
                    isFavoritesPage
                      ? "fill-pink-600"
                      : "group-hover:fill-pink-600",
                  )}
                />
                <div className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-900 px-1.5 text-[10px] font-black text-white ring-4 ring-white">
                  {favorites.length || 0}
                </div>
              </Link>

              {/* SHOPPING CART LINK */}
              <Link
                href={"/shopping/cart"}
                className={cn(
                  "group flex h-[54px] items-center gap-3 rounded-2xl border p-1.5 pr-5 transition-all active:scale-95",
                  isCartPage
                    ? "border-pink-100 bg-pink-50"
                    : "border-transparent bg-neutral-50 hover:border-pink-100 hover:bg-pink-50",
                )}
              >
                <div
                  className={cn(
                    "flex h-[42px] w-11 shrink-0 items-center justify-center rounded-xl shadow-sm transition-all duration-300",
                    isCartPage
                      ? "bg-pink-600 text-white"
                      : "bg-white group-hover:bg-pink-600 group-hover:text-white",
                  )}
                >
                  <ShoppingBag size={22} />
                </div>

                <div className="flex flex-col items-start gap-px leading-tight">
                  <span className="text-[11px] font-black uppercase tracking-tighter text-pink-600">
                    Savatda
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-black tracking-tighter text-neutral-400">
                    {basketIds.length || 0} ta mahsulot
                  </span>
                </div>
              </Link>
            </div>
            {isLoading ? (
              <div className="ml-2 border-l border-neutral-100 pl-2">
                <div className="flex size-11 animate-pulse items-center justify-center rounded-full bg-neutral-100">
                  <LoaderCircle
                    className="animate-spin text-pink-600"
                    size={30}
                  />
                </div>
              </div>
            ) : user ? (
              <UserMenu user={user} />
            ) : (
              <RegisterModal />
            )}
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
              <React.Fragment key={cat._id}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 transition-all hover:text-pink-600"
                >
                  <div className="relative flex size-2 items-center justify-center">
                    <div className="size-1.5 rounded-full bg-pink-100 transition-all duration-300 group-hover:size-2 group-hover:bg-pink-600 group-hover:shadow-[0_0_10px_rgba(219,39,119,0.5)]" />
                  </div>

                  <span className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                    {cat.title}
                  </span>
                </Link>

                {index !== array.length - 1 && (
                  <div className="mx-1 h-4 w-px bg-neutral-100" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
