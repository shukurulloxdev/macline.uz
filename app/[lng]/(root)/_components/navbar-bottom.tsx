// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Heart,
//   Home,
//   Search,
//   ShoppingBag,
//   UserCircle2,
//   Zap,
// } from "lucide-react"; // Power o'rniga Home ishlatish mantiqiyroq
// import { cn } from "@/lib/utils";

// function NavbarBottom() {
//   const pathname = usePathname();
//   const basketCount = 15;

//   const navItems = [
//     { label: "Asosiy", icon: <Home size={22} />, href: "/" },
//     { label: "Katalog", icon: <Search size={22} />, href: "/catalog" },
// {
//   label: "Saralar",
//   icon: <Heart size={22} className="text-pink-600" />,
//   href: "/fast-food",
// },
//     {
//       label: "Savat",
//       icon: <ShoppingBag size={22} />,
//       href: "/cart",
//       badge: basketCount,
//     },
//     { label: "Profil", icon: <UserCircle2 size={22} />, href: "/profile" },
//   ];

//   return (
//     // Transform-gpu va backface-visibility flickeringni yo'qotadi
//     <div className="translate-z-0 fixed bottom-0 left-0 z-[150px] w-full transform-gpu border-t border-neutral-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 lg:hidden">
//       {/* Safe area padding-bottom (iPhone uchun muhim) */}
//       <div className="pb-safe mx-auto flex h-[65px] max-w-md items-center justify-around px-2">
//         {navItems.map((item) => {
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="group relative flex flex-1 flex-col items-center justify-center gap-1 py-1"
//             >
//               <div className="relative flex items-center justify-center">
//                 <div
//                   className={cn(
//                     "transition-all duration-300 ease-in-out",
//                     isActive
//                       ? "scale-110 text-pink-600"
//                       : "text-neutral-400 group-active:scale-90",
//                   )}
//                 >
//                   {item.icon}
//                 </div>
//               </div>

//               {/* Label */}
//               <span
//                 className={cn(
//                   "text-[10px] font-bold uppercase tracking-tighter transition-colors",
//                   isActive ? "text-pink-600" : "text-neutral-400",
//                 )}
//               >
//                 {item.label}
//               </span>

//               {/* Active Indicator (nuqta) */}
//               {isActive && (
//                 <div className="absolute -bottom-1 size-1 rounded-full bg-pink-600 animate-in fade-in zoom-in" />
//               )}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default NavbarBottom;

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Power, Search, ShoppingBag, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function NavbarBottom() {
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );
  const basketProducts = useSelector(
    (state: RootState) => state.baskets.basketIds,
  );
  const pathname = usePathname();

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
      href: "/shopping/cart",
      badge: basketProducts.length,
    },
    {
      label: "Saralar",
      icon: <Heart size={24} />,
      href: "/favorites",
      badge: favoriteIds.length,
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
          // const isActive = pathname.slice(3) === item.href;
          const isActive =
            item.href === "/"
              ? pathname === "/ru" || pathname === "/uz" || pathname === "/"
              : pathname.endsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex min-w-[64px] flex-col items-center justify-center gap-1"
            >
              <div className="relative flex h-8 items-center justify-center">
                <div
                  className={cn(
                    "transition-colors duration-200",
                    isActive
                      ? "text-pink-500"
                      : "text-neutral-400 group-hover:text-neutral-600",
                  )}
                >
                  {item.icon}
                </div>

                {item.badge !== undefined && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-pink-600 px-1 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-[11px] font-medium transition-colors",
                  isActive ? "text-pink-500" : "text-neutral-500",
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
