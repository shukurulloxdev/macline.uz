"use client";
import React from "react";
import { ShoppingBag, UserCircle, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Iuser } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logoutAction } from "@/actions/auth-actions";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/redux/reducers/userState";

const menuItems = [
  {
    title: "Buyurtmalarim",
    icon: ShoppingBag,
    href: "/profile",
    count: 2,
  },
  {
    title: "Ma'lumotlarim",
    icon: UserCircle,
    href: "/profile/settings",
  },
];

interface Props {
  user: Iuser | null;
}

function UserSidebar({ user }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogout() {
    await logoutAction();
    dispatch(deleteUser());
    router.push("/"); // Navbar qayta render bo'ladi
  }
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      <div className="relative mb-4 overflow-hidden rounded-t-2xl bg-gradient-to-br from-pink-600 to-pink-500 p-5 shadow-lg shadow-pink-200/50">
        <div className="absolute -right-4 -top-4 size-20 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -bottom-6 -left-6 size-16 rounded-full bg-black/5 blur-lg" />

        <div className="relative z-10 flex items-center gap-3.5">
          <div className="relative">
            <Avatar className="size-14 rounded-full border-2 border-white/30 bg-white shadow-inner">
              <AvatarImage
                src={user?.avatar}
                alt={user?.fullName}
                className="object-cover"
              />
              <AvatarFallback className="bg-white/20 text-sm font-black text-white">
                {user?.fullName?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-[1px] right-[2px] size-3 rounded-full border border-white bg-emerald-400 shadow-sm" />
          </div>

          <div className="flex flex-col gap-0.5 overflow-hidden">
            <h2 className="truncate text-[14px] font-black leading-tight tracking-tight text-white">
              {user?.fullName ?? "Foydalanuvchi"}
            </h2>
            <p className="text-[10px] font-bold tracking-widest text-pink-100/70">
              {user?.phone ?? "Raqam kiritilmagan"}
            </p>
          </div>
        </div>
      </div>

      {/* 2. MENYULAR (Jipslashgan) */}
      <div className="px-3 py-4">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname.slice(3) === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex h-12 items-center gap-3 rounded-[1.25rem] px-4 transition-all duration-300 active:scale-[0.98]",
                  isActive
                    ? "bg-pink-100 shadow-md shadow-neutral-200"
                    : "text-neutral-600 hover:bg-slate-50 hover:text-neutral-900",
                )}
              >
                {/* ICON */}
                <item.icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={cn(
                    "transition-colors",
                    isActive ? "text-pink-800" : "group-hover:text-pink-600",
                  )}
                />

                {/* TEXT */}
                <span className="flex-1 text-[11px] font-black uppercase tracking-tight">
                  {item.title}
                </span>

                <ChevronRight
                  size={14}
                  className={cn(
                    "transition-all duration-300",
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. CHIQISH TUGMASI (Minimalist) */}
      <div className="border-t border-neutral-50 p-3">
        <button
          onClick={handleLogout}
          className="group flex h-11 w-full items-center gap-3 rounded-[1rem] bg-red-50 px-4 text-red-500 transition-all hover:scale-[1.02] hover:bg-red-100 hover:text-red-500"
        >
          <LogOut size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Chiqish
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserSidebar;
