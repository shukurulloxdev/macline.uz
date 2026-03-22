"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, User, UserStar } from "lucide-react";

import { logoutAction } from "@/actions/auth-actions";
import { Iuser } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/redux/reducers/userState";

export function UserMenu({ user }: { user: Iuser }) {
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogout() {
    await logoutAction();
    router.push("/"); // Navbar qayta render bo'ladi
    dispatch(deleteUser());
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="ml-2 flex items-center border-l border-neutral-100 pl-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="size-12 bg-slate-50">
              <AvatarImage
                src={user.avatar}
                alt={user.fullName}
                className="object-cover"
              />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <div className="rounded-full bg-slate-100 p-[2px]">
              <User className="text-pink-600" />
            </div>
            Shaxsiy paneli
          </DropdownMenuItem>
          {user.role === "admin" && (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/admin")}
            >
              <div className="rounded-full bg-slate-100 p-[2px]">
                <UserStar className="text-blue-600" />
              </div>
              Boshqaruv paneli
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer bg-pink-500 text-white hover:!bg-pink-600 hover:!text-white"
        >
          <LogOutIcon />
          Chiqish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
