// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import {
//   ShoppingBag,
//   Settings,
//   LogOut,
//   Package,
//   MapPin,
//   Hash,
//   Calendar,
//   ReceiptText,
//   ChevronRight,
//   CheckCircle2,
//   Clock3,
//   Sparkles,
//   Phone,
// } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn, formatDate } from "@/lib/utils";
// import { logoutAction } from "@/actions/auth-actions";
// import { deleteUser } from "@/redux/reducers/userState";
// import { IOrder, Iuser } from "@/types";
// import { newOrders, finishedOrders } from "@/actions/user-actions";
// import { AnimatePresence, motion } from "framer-motion";

// // ── Types ─────────────────────────────────────────────────────────────────────
// interface Props {
//   user: Iuser | null;
// }

// // ── Status config ─────────────────────────────────────────────────────────────
// function statusConfig(status: string) {
//   if (status === "new")
//     return {
//       label: "Yangi",
//       dot: "bg-amber-500",
//       badge: "border-amber-200 bg-amber-50 text-amber-700",
//       footer: "bg-amber-50",
//     };
//   if (status === "process")
//     return {
//       label: "Jarayonda",
//       dot: "bg-blue-500",
//       badge: "border-blue-200 bg-blue-50 text-blue-700",
//       footer: "bg-blue-50",
//     };
//   return {
//     label: "Tugatildi",
//     dot: "bg-emerald-500",
//     badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
//     footer: "bg-emerald-50",
//   };
// }

// // ── OrderCard (mobile) ────────────────────────────────────────────────────────
// function MobileOrderCard({ order }: { order: IOrder }) {
//   const st = statusConfig(order.status);

//   return (
//     <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-neutral-50 px-4 py-3">
//         <div className="flex items-center gap-3">
//           <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50">
//             <Hash size={13} className="text-pink-600" />
//           </div>
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
//               Buyurtma
//             </p>
//             <p className="text-[13px] font-black text-neutral-900">
//               #{order._id.slice(3, 9)}
//             </p>
//           </div>
//         </div>

//         {/* Status badge */}
//         <span
//           className={cn(
//             "flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wide",
//             st.badge,
//           )}
//         >
//           <span className={cn("h-1.5 w-1.5 rounded-full", st.dot)} />
//           {st.label}
//         </span>
//       </div>

//       {/* Meta row */}
//       <div className="flex items-center gap-4 border-b border-neutral-50 px-4 py-2.5">
//         <div className="flex items-center gap-1.5 text-neutral-400">
//           <Calendar size={12} className="text-pink-400" />
//           <span className="text-[11px] font-semibold">
//             {formatDate(order.createdAt)}
//           </span>
//         </div>
//         <div className="flex items-center gap-1.5 text-neutral-400">
//           <MapPin size={12} className="text-pink-400" />
//           <span className="text-[11px] font-semibold">
//             {order.region}, {order.city}
//           </span>
//         </div>
//       </div>

//       {/* Products */}
//       <div className="divide-y divide-neutral-50 px-4">
//         {order.products.map((item, idx) => (
//           <div key={idx} className="flex items-center gap-3 py-3">
//             <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
//               <Image
//                 src={item.productId.images[0]}
//                 alt={item.productId.name}
//                 fill
//                 className="object-contain p-1"
//               />
//             </div>
//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[12px] font-bold text-neutral-900">
//                 {item.productId.name}
//               </p>
//               <p className="text-[10px] text-neutral-400">
//                 {item.productId.brand}
//               </p>
//             </div>
//             <div className="flex-shrink-0 text-right">
//               <p className="text-[12px] font-black text-pink-600">
//                 {item.onePrice.toLocaleString()}
//               </p>
//               <p className="text-[10px] text-neutral-400">× {item.count} ta</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer total */}
//       <div
//         className={cn("flex items-center justify-between px-4 py-3", st.footer)}
//       >
//         <div className="flex items-center gap-2">
//           <ReceiptText size={14} className="text-pink-500" />
//           <span className="text-[10px] font-black uppercase tracking-wider text-neutral-600">
//             Jami:
//           </span>
//         </div>
//         <span className="text-[16px] font-black text-pink-700">
//           {order.totalPrice.toLocaleString()}{" "}
//           <span className="text-[10px] font-bold">so'm</span>
//         </span>
//       </div>
//     </div>
//   );
// }

// // ── Empty state ───────────────────────────────────────────────────────────────
// function EmptyOrders() {
//   return (
//     <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-12 text-center">
//       <div className="relative mb-4">
//         <div className="absolute inset-0 animate-ping rounded-full bg-pink-100 opacity-30" />
//         <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
//           <Package size={28} className="text-neutral-300" />
//         </div>
//       </div>
//       <h3 className="text-[13px] font-black uppercase tracking-wider text-neutral-400">
//         Buyurtmalar yo'q
//       </h3>
//       <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-300">
//         Siz hali hech narsa xarid qilmadingiz
//       </p>
//       <Link
//         href="/"
//         className="mt-4 rounded-xl bg-pink-600 px-5 py-2.5 text-[12px] font-black text-white transition-all active:scale-95"
//       >
//         Xarid qilish
//       </Link>
//     </div>
//   );
// }

// // ── Main MobileProfile ────────────────────────────────────────────────────────
// function MobileProfile({ user }: Props) {
//   const [tab, setTab] = useState<"new" | "finished">("new");
//   const [newOrdersList, setNewOrdersList] = useState<IOrder[]>([]);
//   const [finishedOrdersList, setFinishedOrdersList] = useState<IOrder[]>([]);
//   const [loaded, setLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Load orders on mount
//   React.useEffect(() => {
//     async function load() {
//       setLoading(true);
//       const [n, f] = await Promise.all([newOrders(), finishedOrders()]);
//       setNewOrdersList(n.data?.orders || []);
//       setFinishedOrdersList(f.data?.orders || []);
//       setLoaded(true);
//       setLoading(false);
//     }
//     load();
//   }, []);

//   async function handleLogout() {
//     await logoutAction();
//     dispatch(deleteUser());
//     router.push("/");
//   }

//   const activeOrders = tab === "new" ? newOrdersList : finishedOrdersList;

//   return (
//     <div className="min-h-screen bg-neutral-50 pb-20">
//       {/* ── HERO / User card ─────────────────────────────────────────────── */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 px-5 pb-8 pt-14">
//         {/* decorative blobs */}
//         <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
//         <div className="absolute -bottom-4 left-4 h-20 w-20 rounded-full bg-black/10 blur-xl" />

//         <div className="relative z-10 flex items-center gap-4">
//           <div className="relative">
//             <Avatar className="h-16 w-16 border-2 border-white/40 shadow-lg">
//               <AvatarImage
//                 src={user?.avatar}
//                 alt={user?.fullName}
//                 className="object-cover"
//               />
//               <AvatarFallback className="bg-white/20 text-lg font-black text-white">
//                 {user?.fullName?.[0]?.toUpperCase() ?? "U"}
//               </AvatarFallback>
//             </Avatar>
//             <span className="absolute bottom-0 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
//           </div>

//           <div className="flex-1 overflow-hidden">
//             <h1 className="truncate text-[18px] font-black leading-tight text-white">
//               {user?.fullName ?? "Foydalanuvchi"}
//             </h1>
//             <div className="mt-0.5 flex items-center gap-1.5">
//               <Phone size={11} className="text-pink-200" />
//               <p className="text-[12px] font-semibold text-pink-100/80">
//                 {user?.phone ?? "—"}
//               </p>
//             </div>
//           </div>

//           {/* Settings */}
//           <Link
//             href="/profile/settings"
//             className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-all active:scale-95"
//           >
//             <Settings size={16} />
//           </Link>
//         </div>

//         {/* Stats strip */}
//         <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
//           {[
//             {
//               icon: Clock3,
//               label: "Yangi",
//               value: newOrdersList.length,
//               color: "text-amber-300",
//             },
//             {
//               icon: Sparkles,
//               label: "Jarayonda",
//               value: newOrdersList.filter((o) => o.status === "process").length,
//               color: "text-blue-300",
//             },
//             {
//               icon: CheckCircle2,
//               label: "Tugatildi",
//               value: finishedOrdersList.length,
//               color: "text-emerald-300",
//             },
//           ].map((s) => (
//             <div
//               key={s.label}
//               className="flex flex-col items-center gap-1 rounded-2xl bg-white/10 py-3 backdrop-blur-sm"
//             >
//               <s.icon size={16} className={s.color} />
//               <span className="text-[18px] font-black leading-none text-white">
//                 {s.value}
//               </span>
//               <span className="text-[9px] font-bold uppercase tracking-wider text-pink-100/70">
//                 {s.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── CONTENT ──────────────────────────────────────────────────────── */}
//       <div className="px-4 pt-5">
//         {/* Tab switcher */}
//         <div className="mb-4 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-sm">
//           {(
//             [
//               { key: "new", label: "Yangi buyurtmalar" },
//               { key: "finished", label: "Tugatilganlar" },
//             ] as const
//           ).map(({ key, label }) => (
//             <button
//               key={key}
//               onClick={() => setTab(key)}
//               className={cn(
//                 "flex-1 rounded-xl py-2.5 text-[11px] font-black uppercase tracking-wide transition-all",
//                 tab === key
//                   ? "bg-pink-600 text-white shadow-sm"
//                   : "text-neutral-500 hover:text-neutral-800",
//               )}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Orders list */}
//         {loading ? (
//           <div className="flex flex-col gap-3">
//             {[1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="h-48 animate-pulse rounded-2xl bg-neutral-100"
//               />
//             ))}
//           </div>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={tab}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -6 }}
//               transition={{ duration: 0.18 }}
//               className="flex flex-col gap-3"
//             >
//               {activeOrders.length > 0 ? (
//                 activeOrders.map((order) => (
//                   <MobileOrderCard key={order._id} order={order} />
//                 ))
//               ) : (
//                 <EmptyOrders />
//               )}
//             </motion.div>
//           </AnimatePresence>
//         )}

//         {/* Quick links */}
//         <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
//           <Link
//             href="/profile/settings"
//             className="h-13 flex items-center gap-3 border-b border-neutral-50 px-4 py-3.5 transition-all active:bg-neutral-50"
//           >
//             <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50">
//               <Settings size={15} className="text-pink-600" />
//             </div>
//             <span className="flex-1 text-[13px] font-bold text-neutral-800">
//               Ma'lumotlarim
//             </span>
//             <ChevronRight size={15} className="text-neutral-300" />
//           </Link>

//           <Link
//             href="/profile"
//             className="h-13 flex items-center gap-3 px-4 py-3.5 transition-all active:bg-neutral-50"
//           >
//             <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50">
//               <ShoppingBag size={15} className="text-pink-600" />
//             </div>
//             <span className="flex-1 text-[13px] font-bold text-neutral-800">
//               Buyurtmalarim
//             </span>
//             <ChevronRight size={15} className="text-neutral-300" />
//           </Link>
//         </div>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="mt-3 flex h-12 w-full items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 text-red-500 transition-all active:scale-[.98]"
//         >
//           <LogOut size={16} />
//           <span className="text-[12px] font-black uppercase tracking-widest">
//             Hisobdan chiqish
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MobileProfile;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  ShoppingBag,
  Settings,
  LogOut,
  Package,
  MapPin,
  Hash,
  Calendar,
  ReceiptText,
  ChevronRight,
  Phone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatDate } from "@/lib/utils";
import { logoutAction } from "@/actions/auth-actions";
import { deleteUser } from "@/redux/reducers/userState";
import { IOrder, Iuser } from "@/types";
import { newOrders, finishedOrders } from "@/actions/user-actions";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  user: Iuser | null;
}

// ── Status ────────────────────────────────────────────────────────────────────
function statusCfg(status: string) {
  if (status === "new")
    return {
      label: "Yangi",
      dot: "bg-amber-400",
      badge: "border-amber-200 bg-amber-50 text-amber-700",
      footer: "bg-amber-50",
    };
  if (status === "process")
    return {
      label: "Jarayonda",
      dot: "bg-blue-400",
      badge: "border-blue-200 bg-blue-50 text-blue-700",
      footer: "bg-blue-50",
    };
  return {
    label: "Tugatildi",
    dot: "bg-emerald-400",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    footer: "bg-emerald-50",
  };
}

// ── Order card ────────────────────────────────────────────────────────────────
function MobileOrderCard({ order }: { order: IOrder }) {
  const st = statusCfg(order.status);
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white">
      {/* top */}
      <div className="flex items-center justify-between border-b border-neutral-50 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-50">
            <Hash size={13} className="text-neutral-400" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
              Buyurtma
            </p>
            <p className="text-[13px] font-black text-neutral-900">
              #{order._id.slice(3, 9)}
            </p>
          </div>
        </div>
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold",
            st.badge,
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", st.dot)} />
          {st.label}
        </span>
      </div>

      {/* meta */}
      <div className="flex items-center gap-4 border-b border-neutral-50 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <Calendar size={11} className="text-neutral-400" />
          <span className="text-[11px] text-neutral-500">
            {formatDate(order.createdAt)}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={11} className="text-neutral-400" />
          <span className="text-[11px] text-neutral-500">
            {order.region}, {order.city}
          </span>
        </div>
      </div>

      {/* products */}
      <div className="divide-y divide-neutral-50 px-4">
        {order.products.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 py-3">
            <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
              <Image
                src={item.productId.images[0]}
                alt={item.productId.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-neutral-900">
                {item.productId.name}
              </p>
              <p className="text-[10px] text-neutral-400">
                {item.productId.brand}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-[12px] font-black text-neutral-900">
                {item.onePrice.toLocaleString()}
              </p>
              <p className="text-[10px] text-neutral-400">× {item.count} ta</p>
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div
        className={cn(
          "flex items-center justify-between px-4 py-2.5",
          st.footer,
        )}
      >
        <div className="flex items-center gap-1.5">
          <ReceiptText size={13} className="text-neutral-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            Jami
          </span>
        </div>
        <span className="text-[15px] font-black text-neutral-900">
          {order.totalPrice.toLocaleString()}{" "}
          <span className="text-[10px] font-semibold text-neutral-500">
            so'm
          </span>
        </span>
      </div>
    </div>
  );
}

// ── Empty ─────────────────────────────────────────────────────────────────────
function EmptyOrders() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-white py-12 text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50">
        <Package size={24} className="text-neutral-300" />
      </div>
      <p className="text-[12px] font-bold text-neutral-400">Buyurtmalar yo'q</p>
      <p className="mt-1 text-[11px] text-neutral-300">
        Hali hech narsa xarid qilmadingiz
      </p>
      <Link
        href="/"
        className="mt-4 rounded-xl bg-pink-600 px-5 py-2 text-[11px] font-black text-white active:scale-95"
      >
        Xarid qilish
      </Link>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function MobileProfile({ user }: Props) {
  const [tab, setTab] = useState<"new" | "finished">("new");
  const [newList, setNewList] = useState<IOrder[]>([]);
  const [finishedList, setFinishedList] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const [n, f] = await Promise.all([newOrders(), finishedOrders()]);
      setNewList(n.data?.orders || []);
      setFinishedList(f.data?.orders || []);
      setLoading(false);
    })();
  }, []);

  async function handleLogout() {
    await logoutAction();
    dispatch(deleteUser());
    router.push("/");
  }

  const inProcess = newList.filter((o) => o.status === "process").length;
  const activeOrders = tab === "new" ? newList : finishedList;

  return (
    <div className="min-h-screen bg-neutral-50 pb-10">
      {/* ── USER CARD ─────────────────────────────────────────────────── */}
      <div className="bg-white px-4 pb-4 pt-6 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        {/* Avatar + info + links */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex-shrink-0">
            <Avatar className="h-14 w-14 rounded-2xl border border-neutral-100">
              <AvatarImage
                src={user?.avatar}
                alt={user?.fullName}
                className="object-cover"
              />
              <AvatarFallback className="rounded-2xl bg-neutral-100 text-[18px] font-black text-neutral-700">
                {user?.fullName?.[0]?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
          </div>

          <div className="flex-1 overflow-hidden">
            <h1 className="truncate text-[16px] font-black text-neutral-950">
              {user?.fullName ?? "Foydalanuvchi"}
            </h1>
            <div className="mt-0.5 flex items-center gap-1">
              <Phone size={10} className="text-neutral-400" />
              <p className="text-[12px] text-neutral-500">
                {user?.phone ?? "—"}
              </p>
            </div>
          </div>

          {/* Quick action links — top right */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/profile/settings"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all active:scale-95"
            >
              <Settings size={14} />
            </Link>
            <button
              onClick={handleLogout}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-400 transition-all active:scale-95"
            >
              <LogOut size={14} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <Link
            href="/profile/settings"
            className="flex items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2.5 transition-all active:scale-[.98]"
          >
            <Settings size={14} className="text-pink-600" />
            <span className="text-[12px] font-bold text-neutral-700">
              Ma'lumotlarim
            </span>
            <ChevronRight size={12} className="ml-auto text-neutral-300" />
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2.5 transition-all active:scale-[.98]"
          >
            <ShoppingBag size={14} className="text-pink-600" />
            <span className="text-[12px] font-bold text-neutral-700">
              Buyurtmalarim
            </span>
            <ChevronRight size={12} className="ml-auto text-neutral-300" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-3 divide-x divide-neutral-100 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
          {[
            { label: "Yangi", value: newList.length, color: "text-amber-500" },
            { label: "Jarayonda", value: inProcess, color: "text-blue-500" },
            {
              label: "Tugatildi",
              value: finishedList.length,
              color: "text-emerald-500",
            },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-3">
              <span
                className={cn("text-[22px] font-black leading-none", s.color)}
              >
                {s.value}
              </span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ORDERS ────────────────────────────────────────────────────── */}
      <div className="mt-2 px-3">
        {/* Tab */}
        <div className="mb-3 flex items-center gap-1.5 rounded-2xl border border-neutral-100 bg-white p-1.5">
          {(
            [
              { key: "new", label: "Yangi" },
              { key: "finished", label: "Tugatilganlar" },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "flex-1 rounded-xl py-2 text-[11px] font-black uppercase tracking-wide transition-all",
                tab === key
                  ? "bg-pink-600 text-white shadow-sm"
                  : "text-neutral-400",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* List */}
        {loading ? (
          <div className="flex flex-col gap-2.5">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl bg-neutral-100"
              />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16 }}
              className="flex flex-col gap-2.5"
            >
              {activeOrders.length > 0 ? (
                activeOrders.map((o) => (
                  <MobileOrderCard key={o._id} order={o} />
                ))
              ) : (
                <EmptyOrders />
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
