"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  Camera,
  Edit3,
  Save,
  X,
  Crown,
  Check,
  LogOut,
  User,
  Phone,
  Calendar,
  Shield,
  Hash,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/actions/auth-actions";
import { deleteUser } from "@/redux/reducers/userState";
import { Iuser } from "@/types";

interface Props {
  user: Iuser;
}

export default function MobilSetting({ user }: Props) {
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
    router.push("/");
  }

  const fields = [
    {
      icon: User,
      label: "To'liq ism",
      value: user.fullName,
      editable: true,
    },
    {
      icon: Phone,
      label: "Telefon raqam",
      value: user.phone,
      verified: true,
      editable: false,
    },
    {
      icon: Calendar,
      label: "A'zo bo'lgan sana",
      value: joinDate,
      editable: false,
    },
    {
      icon: Shield,
      label: "Rol",
      value: user.role,
      editable: false,
    },
    {
      icon: Hash,
      label: "Foydalanuvchi ID",
      value: user._id,
      mono: true,
      editable: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* ── TOP BAR ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between bg-white px-4 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-600 active:scale-95"
        >
          <ChevronLeft size={18} />
        </button>

        <h1 className="text-[14px] font-black uppercase tracking-widest text-neutral-950">
          Sozlamalar
        </h1>

        {isEditing ? (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setFullName(user.fullName);
                setIsEditing(false);
              }}
              className="flex h-9 items-center gap-1 rounded-xl px-3 text-[11px] font-bold text-neutral-500 active:scale-95"
            >
              <X size={13} />
              Bekor
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex h-9 items-center gap-1 rounded-xl bg-neutral-900 px-3 text-[11px] font-black text-white active:scale-95"
            >
              <Save size={12} />
              Saqlash
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex h-9 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 text-[11px] font-black text-neutral-700 active:scale-95"
          >
            <Edit3 size={13} className="text-pink-600" />
            Tahrirlash
          </button>
        )}
      </div>

      {/* ── AVATAR CARD ──────────────────────────────────────────────── */}
      <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative h-20 bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-3 left-6 h-14 w-14 rounded-full bg-black/10 blur-lg" />
        </div>

        <div className="relative px-5 pb-5">
          {/* Avatar — overlaps gradient */}
          <div className="relative -mt-8 mb-3 w-fit">
            <div className="h-16 w-16 overflow-hidden rounded-2xl border-4 border-white shadow-md">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.fullName}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                  <span className="text-xl font-black text-white">
                    {user.fullName?.[0]?.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <button className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-pink-600 shadow-sm active:scale-95">
              <Camera size={10} className="text-white" />
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[16px] font-black text-neutral-950">
                  {user.fullName}
                </h2>
                {user.role === "admin" && (
                  <span className="flex items-center gap-0.5 rounded-md bg-neutral-900 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                    <Crown size={8} />
                    Admin
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[12px] text-neutral-400">
                {user.phone}
              </p>
            </div>

            {/* Online indicator */}
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-600">
                Faol
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FIELDS ───────────────────────────────────────────────────── */}
      <div className="mx-4 mt-3 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-neutral-50 px-4 py-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Shaxsiy ma'lumotlar
          </p>
        </div>

        {fields.map((field, i) => (
          <div
            key={field.label}
            className={cn(
              "flex items-center gap-3 px-4 py-3.5",
              i < fields.length - 1 && "border-b border-neutral-50",
            )}
          >
            {/* Icon */}
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-pink-50">
              <field.icon size={14} className="text-pink-600" />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                {field.label}
              </p>

              {isEditing && field.editable ? (
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-0.5 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[13px] font-semibold text-neutral-900 outline-none focus:border-pink-400 focus:bg-white"
                />
              ) : (
                <p
                  className={cn(
                    "mt-0.5 text-[13px] font-semibold capitalize text-neutral-800",
                    field.mono && "font-mono text-[10px] text-neutral-400",
                  )}
                >
                  {field.label === "To'liq ism" ? fullName : field.value}
                </p>
              )}
            </div>

            {/* Verified badge */}
            {field.verified && (
              <span className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[9px] font-black text-emerald-600">
                <Check size={9} strokeWidth={3} />
                Tasdiqlangan
              </span>
            )}
          </div>
        ))}
      </div>

      {/* ── ACTIONS ──────────────────────────────────────────────────── */}
      <div className="mx-4 mt-3 flex flex-col gap-2">
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex h-12 w-full items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 text-red-500 transition-all active:scale-[.98]"
        >
          <LogOut size={16} />
          <span className="text-[12px] font-black uppercase tracking-widest">
            Hisobdan chiqish
          </span>
        </button>

        {/* Danger */}
        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white">
          <div className="flex items-center justify-between px-4 py-3.5">
            <div>
              <p className="text-[13px] font-bold text-neutral-800">
                Hisobni o'chirish
              </p>
              <p className="mt-0.5 text-[11px] text-neutral-400">
                Barcha ma'lumotlar butunlay o'chiriladi
              </p>
            </div>
            <button className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-black uppercase tracking-wide text-red-500 transition-all active:scale-95 active:bg-red-500 active:text-white">
              O'chirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
