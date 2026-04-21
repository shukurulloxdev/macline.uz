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
  Menu,
  ChevronRight,
  RefreshCcw,
  ShieldCheck,
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white shadow-md backdrop-blur-2xl max-md:px-3">
      <div className="border-b border-neutral-100 py-1 max-md:hidden md:py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href={"/category/discounts"}
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-3 py-[2px] transition-all hover:bg-pink-100 md:py-1"
            >
              <Flame size={12} className="animate-pulse text-pink-600" />
              <span className="text-[6px] font-black uppercase tracking-[0.12em] text-pink-600 md:text-[10px]">
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
            <div className="h-3 w-px bg-neutral-200 max-md:hidden" />
            <div className="group flex cursor-pointer items-center gap-1.5 transition-all max-md:hidden">
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
        <div className="flex items-center gap-2 max-md:flex-col md:justify-between md:gap-8">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="max-md:hidden">
              <KatalogMenu categories={katalog} />
            </div>
          </div>
          <div className="w-full max-md:hidden">
            <InputSearch categories={katalog} />
          </div>
          <div className="flex w-full items-center justify-between gap-2 md:hidden">
            <div className="flex-1">
              <InputSearch categories={katalog} />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button className="flex h-11 w-12 shrink-0 items-center justify-center rounded-sm bg-pink-500 text-white active:scale-95">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-[280px] flex-col border-r-0 bg-white p-0 sm:w-[320px]"
              >
                {/* 1. BRANDING - Juda sodda va toza */}
                <div className="px-6 pb-6 pt-6">
                  <Logo />
                  <div className="mt-[2px] flex items-center gap-2">
                    <div className="h-[2px] w-3 rounded-full bg-pink-600" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400">
                      Premium Edition
                    </span>
                  </div>
                </div>

                {/* 2. CATEGORIES - Zich va Swipe-ga qulay */}
                <div className="no-scrollbar flex-1 overflow-y-auto px-3">
                  <nav className="space-y-0.5">
                    {categories.map((cat) => {
                      const isDiscount = cat.slug === "discounts";
                      return (
                        <SheetClose asChild key={cat._id}>
                          <Link
                            href={`/category/${cat.slug}`}
                            className={cn(
                              "group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 active:scale-[0.97]",
                              "text-neutral-900 hover:bg-neutral-50",
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {/* Ikonka bloki - zichroq va minimalist */}
                              <div
                                className={cn(
                                  "flex size-8 items-center justify-center rounded-xl border transition-all duration-300",
                                  isDiscount
                                    ? "border-pink-200 bg-white shadow-sm"
                                    : "border-neutral-100 bg-white group-hover:border-pink-100 group-hover:shadow-sm",
                                )}
                              >
                                {isDiscount ? (
                                  <Flame size={14} className="fill-pink-600" />
                                ) : (
                                  <div className="size-1 rounded-full bg-neutral-300 group-hover:bg-pink-500" />
                                )}
                              </div>
                              <span
                                className={cn(
                                  "text-[13px] font-bold tracking-tight",
                                  isDiscount ? "font-black" : "font-semibold",
                                )}
                              >
                                {cat.title}
                              </span>
                            </div>
                            <ChevronRight
                              size={14}
                              className="text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-pink-600"
                            />
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* 3. SEPARATOR & SERVICES */}
                  <div className="mt-8 px-4">
                    <div className="mb-6 h-px w-full bg-neutral-50" />
                    <div className="space-y-4">
                      {[
                        {
                          label: "Trade-in",
                          icon: <RefreshCcw size={14} />,
                          color: "text-emerald-500",
                        },
                        {
                          label: "Servis Markazi",
                          icon: <ShieldCheck size={14} />,
                          color: "text-blue-500",
                        },
                      ].map((item, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="flex items-center gap-3 text-[12px] font-bold text-neutral-500 transition-colors hover:text-black"
                        >
                          <span className={item.color}>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. FOOTER - Minimalist Action */}
                <div className="border-t border-neutral-50 bg-[#FAFAFA] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <LngMenu />
                    <div className="flex items-center gap-1.5 rounded-full border border-neutral-100 bg-white px-2.5 py-1 shadow-sm">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-tighter text-neutral-500">
                        Live Chat
                      </span>
                    </div>
                  </div>

                  <a
                    href="tel:+998902015858"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-pink-600 text-[13px] font-bold text-white shadow-lg shadow-black/5 transition-all active:scale-95"
                  >
                    <Phone size={14} />
                    Bog'lanish
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className={cn("z-10 flex items-center gap-4 max-md:hidden")}>
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
            ? "max-h-32 translate-y-0 py-1 opacity-100 md:py-3"
            : "max-h-0 -translate-y-2 py-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl">
          <nav className="hidden w-full items-center justify-between gap-1 md:flex md:gap-2">
            {categories.map((cat, index, array) => (
              <React.Fragment key={cat._id}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.15em] text-neutral-500 transition-all hover:text-pink-600 md:gap-3 md:text-[11px]"
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
          <div className="w-full md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full py-1"
            >
              <CarouselContent className="-ml-4">
                {categories.map((cat) => (
                  <CarouselItem
                    key={cat._id}
                    className="flex-none basis-auto pl-4"
                  >
                    <Link
                      href={`/category/${cat.slug}`}
                      className={cn(
                        "group flex items-center gap-1 transition-all active:scale-95",
                        cat.slug === "discounts"
                          ? "text-pink-600"
                          : "text-neutral-500",
                      )}
                    >
                      {/* Minimalist nuqta */}
                      <div className="relative flex size-1.5 items-center justify-center">
                        <div
                          className={cn(
                            "size-1 rounded-full transition-all duration-300",
                            cat.slug === "discounts"
                              ? "scale-125 bg-pink-600 shadow-[0_0_8px_rgba(219,39,119,0.5)]"
                              : "bg-neutral-200 group-hover:bg-pink-500",
                          )}
                        />
                      </div>

                      {/* Kategoriya matni */}
                      <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-widest transition-transform group-hover:translate-x-0.5">
                        {cat.title}
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
