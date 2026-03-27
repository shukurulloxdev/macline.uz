"use client";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  MapPin,
  Hash,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import OrderProductCard from "./order-product-card";
import { IOrder } from "@/types";
import { cn, formatDate } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { adminOrderUpdate } from "@/actions/order-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface Props {
  order: IOrder;
}

function OrderCard({ order }: Props) {
  const router = useRouter();
  async function updateStatus(newStatus: "process" | "finished") {
    try {
      const promise = adminOrderUpdate({
        status: newStatus,
        orderId: order._id,
      });

      toast.promise(promise, {
        loading: "Buyurtma holati yangilanmoqda...",
        success: "Buyurtma holati muvaffaqiyatli yangilandi!",
        error: "Buyurtma holatini yangilashda xatolik yuz berdi.",
      });

      const data = await promise;
      router.refresh();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-300">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {order.fullName}
          </h2>
          <p className="text-sm text-gray-400">{order.phone}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "group flex cursor-pointer items-center gap-2 rounded-xl border px-6 py-[7px] text-[11px] font-black uppercase tracking-tighter shadow-sm transition-all duration-300",
                order.status === "new" &&
                  "border-pink-200 bg-pink-100 text-pink-800",
                order.status === "process" &&
                  "border-blue-200 bg-blue-100 text-blue-700",
                order.status === "finished" &&
                  "border-emerald-200 bg-emerald-100 text-emerald-800",
              )}
            >
              <span className="relative flex size-2">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    order.status === "new" && "bg-amber-500",
                    order.status === "process" && "bg-blue-500",
                    order.status === "finished" && "bg-emerald-500",
                  )}
                ></span>
                <span
                  className={cn(
                    "relative inline-flex h-2 w-2 rounded-full",
                    order.status === "new" && "bg-pink-600",
                    order.status === "process" && "bg-blue-600",
                    order.status === "finished" && "bg-emerald-600",
                  )}
                ></span>
              </span>

              <span>
                {order.status === "new"
                  ? "Yangi"
                  : order.status === "process"
                    ? "Jarayonda"
                    : "Tugatildi"}
              </span>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform group-data-[state=open]:rotate-180",
                  order.status === "new" && "text-pink-600",
                  order.status === "process" && "text-blue-600",
                  order.status === "finished" && "text-emerald-600",
                )}
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-60 overflow-hidden rounded-3xl border border-neutral-100 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            {order.status === "new" && (
              <div className="space-y-1">
                <DropdownMenuItem
                  onClick={() => updateStatus("process")}
                  className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-neutral-700 outline-none transition-all hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
                >
                  <span>Jarayonga </span>
                  <div className="size-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => updateStatus("finished")}
                  className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-neutral-700 outline-none transition-all hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600"
                >
                  <span>Tugatish</span>
                  <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                </DropdownMenuItem>
              </div>
            )}
            {order.status === "process" && (
              <DropdownMenuItem
                onClick={() => updateStatus("finished")}
                className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-neutral-700 outline-none transition-all hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600"
              >
                <span>Tugatish</span>
                <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
              </DropdownMenuItem>
            )}
            {order.status === "finished" && (
              <DropdownMenuItem className="group flex cursor-pointer flex-col items-start gap-1 rounded-[1.2rem] p-4 outline-none transition-all">
                {/* ASOSIY MATN */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Kichik zamonaviy ikonka */}
                    <div className="flex size-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-pink-600 group-hover:text-white">
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </div>

                    <span className="font-sora text-[11px] font-black uppercase tracking-tight text-neutral-800">
                      Buyurtma{" "}
                      <span className="italic text-emerald-600 underline decoration-emerald-200 decoration-2 underline-offset-2">
                        tugatildi
                      </span>
                    </span>
                  </div>

                  {/* Nuqta indikatori */}
                  <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                </div>

                {/* SANA QISMI */}
                <div className="flex items-center gap-2 pl-8">
                  <div className="h-px w-3 bg-neutral-200 group-hover:bg-emerald-200" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-emerald-500">
                    {formatDate(order.updatedAt)}
                  </span>
                </div>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator className="my-5 bg-white/15" />

      {/* Info Grid */}
      <div className="grid grid-cols-4 gap-8">
        <InfoItem
          icon={<MapPin size={18} />}
          label="Viloyat"
          value={order.region}
        />

        <InfoItem
          icon={<MapPin size={18} />}
          label="Hudud"
          value={order.city}
        />

        <InfoItem
          icon={<Hash size={18} />}
          label="Buyurtma indeksi"
          value="1132"
        />

        <InfoItem
          icon={<CalendarDays size={18} />}
          label="Buyurtma sanasi"
          value={formatDate(order.createdAt)}
        />
      </div>

      <Separator className="my-5 bg-white/15" />
      <div className="flex flex-col gap-3">
        {order.products.map((product) => (
          <OrderProductCard product={product} key={product.productId._id} />
        ))}
      </div>

      <Separator className="my-5 bg-white/15" />
      <div className="flex items-center justify-between">
        <h1 className="font-inter text-xl font-semibold text-white">
          Jammi hisob:
        </h1>
        <h1 className="font-sora text-xl font-semibold text-green-500">
          {order.totalPrice.toLocaleString()} so&apos;m
        </h1>
      </div>

      <Separator className="my-2 bg-white/15" />
    </div>
  );
}

export default OrderCard;

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-gray-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <span className="text-base font-medium text-white">{value}</span>
      </div>
    </div>
  );
}

// @tag:nextEditSuggestions
