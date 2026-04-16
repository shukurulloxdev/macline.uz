"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Power, Search, ShoppingBag, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function NavbarBottom() {
  const pathname = usePathname();
  const basketCount = 15; // Redux'dan kelishi kerak aslida

  const navItems = [
    {
      label: "Bosh sahifa",
      icon: <Power size={24} />,
      href: "/",
    },
    {
      label: "Katalog",
      icon: <Search size={24} />,
      href: "/catalog",
    },
    {
      label: "Savat",
      icon: <ShoppingBag size={24} />,
      href: "/cart",
      badge: basketCount,
    },
    {
      label: "Tezkor",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", // Burger rasmchasi
      href: "/fast-food",
    },
    {
      label: "Kabinet",
      icon: <UserCircle2 size={24} />,
      href: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 h-[70px] w-full border-t border-neutral-200 bg-white px-2 lg:hidden">
      <div className="mx-auto flex h-full max-w-md items-center justify-between">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex min-w-[64px] flex-col items-center justify-center gap-1"
            >
              <div className="relative flex h-8 items-center justify-center">
                {/* Ikonka yoki Rasm */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="size-7 object-contain"
                  />
                ) : (
                  <div
                    className={cn(
                      "transition-colors duration-200",
                      isActive
                        ? "text-[#6366f1]"
                        : "text-neutral-400 group-hover:text-neutral-600",
                    )}
                  >
                    {item.icon}
                  </div>
                )}

                {/* Badge (Savat uchun) */}
                {item.badge !== undefined && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#1f2937] px-1 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-[11px] font-medium transition-colors",
                  isActive ? "text-[#6366f1]" : "text-neutral-500",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarBottom;
