"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Camera, Edit3, Save, X, Crown, Check } from "lucide-react";
import { Iuser } from "@/types";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/actions/auth-actions";
import { deleteUser } from "@/redux/reducers/userState";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface Props {
  user: Iuser;
}

function SettingsContent({ user }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const dispatch = useDispatch();
  const router = useRouter();

  const joinDate = new Date(user.createdAt).toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  async function handleLogout() {
    await logoutAction();
    dispatch(deleteUser());
    router.push("/"); // Navbar qayta render bo&apos;ladi
  }
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm">
      {/* ── HEADER ── */}
      <div className="flex items-center justify-between border-b border-neutral-100 px-8 py-5">
        <div>
          <h1 className="text-sm font-black uppercase tracking-[0.15em] text-neutral-900">
            Shaxsiy ma&apos;lumotlar
          </h1>
          <p className="mt-0.5 text-xs text-neutral-400">
            Profilingizni boshqaring
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-[11px] font-bold text-neutral-500 transition-all hover:bg-neutral-100 active:scale-95"
            >
              <X size={13} />
              Bekor
            </button>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-all active:scale-95",
              isEditing
                ? "bg-neutral-900 text-white hover:bg-neutral-700"
                : "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400",
            )}
          >
            {isEditing ? (
              <>
                <Save size={12} /> Saqlash
              </>
            ) : (
              <>
                <Edit3 size={12} /> Tahrirlash
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── AVATAR ROW ── */}
      <div className="flex items-center gap-5 border-b border-neutral-100 px-8 py-6">
        <div className="relative shrink-0">
          <div className="size-16 overflow-hidden rounded-2xl bg-neutral-100">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.fullName}
                width={64}
                height={64}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-neutral-900">
                <span className="text-xl font-black text-white">
                  {user.fullName?.[0]?.toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <button className="absolute -bottom-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all hover:border-neutral-400">
            <Camera size={11} className="text-neutral-500" />
          </button>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <p className="font-black text-neutral-900">{user.fullName}</p>
            {user.role === "admin" && (
              <span className="flex items-center gap-1 rounded-md bg-neutral-900 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
                <Crown size={8} /> Admin
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-neutral-400">{user.phone}</p>
        </div>
      </div>

      {/* ── FIELDS ── */}
      <div className="divide-y divide-neutral-50">
        {/* To&apos;liq ism */}
        <div className="grid grid-cols-[180px_1fr] items-center px-8 py-5">
          <p className="text-xs font-bold text-neutral-400">To&apos;liq ism</p>
          {isEditing ? (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-900 outline-none transition-all focus:border-neutral-400 focus:bg-white"
            />
          ) : (
            <p className="text-sm font-semibold text-neutral-800">
              {user.fullName}
            </p>
          )}
        </div>

        {/* Telefon */}
        <div className="grid grid-cols-[180px_1fr] items-center px-8 py-5">
          <p className="text-xs font-bold text-neutral-400">Telefon raqam</p>
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-neutral-800">
              {user.phone}
            </p>
            <span className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-600">
              <Check size={10} strokeWidth={3} />
              Tasdiqlangan
            </span>
          </div>
        </div>

        {/* A&apos;zo sana */}
        <div className="grid grid-cols-[180px_1fr] items-center px-8 py-5">
          <p className="text-xs font-bold text-neutral-400">
            A&apos;zo bo&apos;lgan sana
          </p>
          <p className="text-sm font-semibold text-neutral-800">{joinDate}</p>
        </div>

        {/* Rol */}
        <div className="grid grid-cols-[180px_1fr] items-center px-8 py-5">
          <p className="text-xs font-bold text-neutral-400">Rol</p>
          <p className="text-sm font-semibold capitalize text-neutral-800">
            {user.role}
          </p>
        </div>

        {/* ID */}
        <div className="grid grid-cols-[180px_1fr] items-center px-8 py-5">
          <p className="text-xs font-bold text-neutral-400">Foydalanuvchi ID</p>
          <p className="font-mono text-xs text-neutral-400">{user._id}</p>
        </div>
      </div>

      {/* ── DANGER ZONE ── */}
      <div
        onClick={handleLogout}
        className="flex items-center justify-between border-t border-red-50 bg-red-50/30 px-8 py-5"
      >
        <div>
          <p className="text-sm font-bold text-neutral-700">
            Hisobni o&apos;chirish
          </p>
          <p className="text-xs text-neutral-400">
            Barcha ma&apos;lumotlar butunlay o&apos;chiriladi
          </p>
        </div>
        <button className="rounded-xl border border-red-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wider text-red-500 transition-all hover:bg-red-500 hover:text-white active:scale-95">
          O&apos;chirish
        </button>
      </div>
    </div>
  );
}

export default SettingsContent;
