"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ShieldCheck,
  Truck,
} from "lucide-react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import z from "zod";
import { createOrder } from "@/actions/order-actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { orderSchema } from "@/lib/validation";
import { removeBasketIds } from "@/redux/reducers/basketState";
import { RootState } from "@/redux/store";
import { IProduct } from "@/types";

interface Props {
  products: IProduct[];
}

// ── Shared styles ──────────────────────────────────────────────────────────────
const labelStyles =
  "text-[11px] font-semibold uppercase tracking-[0.4px] text-neutral-400 mb-0";

const inputStyles =
  "h-auto rounded-none border-0 border-b border-neutral-200 bg-transparent px-0 pb-1.5 pt-0 text-[15px] font-normal text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 focus-visible:border-neutral-900 focus-visible:ring-0 focus-visible:shadow-none transition-colors";

// ── Section wrapper ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-5 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.4px] text-neutral-400">
      {children}
    </p>
  );
}
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-3 divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
      {children}
    </div>
  );
}
function FieldWrap({ children }: { children: React.ReactNode }) {
  return <div className="px-4 py-3">{children}</div>;
}

export default function CheckoutMobile({ products }: Props) {
  const user = useSelector((s: RootState) => s.user.user);
  const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
  const dispatch = useDispatch();
  const router = useRouter();

  const enriched = products.map((product) => {
    const item = basketIds.find((b) => b.id === product._id);
    return { ...product, count: item?.count || 1 };
  });

  const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
  const totalDiscount = enriched.reduce(
    (acc, p) => acc + p.price * (p.percent / 100) * p.count,
    0,
  );
  const finalPrice = subtotal - totalDiscount;
  const freeShip = subtotal > 1_000_000;

  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      region: "",
      city: "",
      comment: "",
      products: [],
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        fullName: user.fullName,
        phone: user.phone,
        region: "",
        city: "",
        comment: "",
        products: [],
      });
    }
  }, [user]);

  async function onSubmit(values: z.infer<typeof orderSchema>) {
    try {
      const orderProducts = enriched.map((product) => ({
        productId: product._id,
        count: product.count,
        proTotalPrice:
          (product.price - (product.price * product.percent) / 100) *
          product.count,
        onePrice: product.price - (product.price * product.percent) / 100,
      }));

      const res = await createOrder({
        ...values,
        products: orderProducts,
        totalDiscount,
        totalPrice: finalPrice,
      });

      console.log("CREATE ORDER RES:", res);

      if (res?.validationErrors) {
        console.log("VALIDATION ERRORS:", res.validationErrors);
        return toast.error("Validation xatolik bor");
      }
      if (res?.serverError) {
        console.log("SERVER ERROR:", res.serverError);
        return toast.error("Server xatolik berdi");
      }
      if (!res?.data) return toast.error("Data kelmadi");
      if (res.data === null) return toast.error("User yo'q");
      if (res.data.failure) return toast.error(res.data.failure);

      if (res.data.order?._id) {
        dispatch(removeBasketIds());
        toast.success("Buyurtma qabul qilindi ✅");
        router.push("/shopping/success");
      }
    } catch (error) {
      console.log("ON SUBMIT ERROR:", error);
      toast.error("Kutilmagan xatolik");
    }
  }

  return (
    <div className="min-h-screen bg-[#f2f2f7] pb-10 md:hidden">
      {/* NAV */}
      <div className="sticky top-0 z-20 flex items-center justify-between bg-[#f2f2f7]/90 px-5 pb-2 pt-3 backdrop-blur-md">
        <Link
          href="/shopping"
          className="flex items-center gap-1 text-[13px] text-blue-500"
        >
          <ChevronLeft size={16} strokeWidth={2} />
          Orqaga
        </Link>
        <span className="text-[13px] font-semibold text-neutral-900">
          Buyurtma
        </span>
        <div className="w-14" />
      </div>

      {/* STEPS */}
      <div className="flex items-center px-5 pb-4 pt-1">
        <div className="flex items-center gap-1.5">
          <div className="flex size-[18px] items-center justify-center rounded-full bg-green-500">
            <Check size={9} className="text-white" strokeWidth={3} />
          </div>
          <span className="text-[10px] font-semibold text-green-500">
            Savat
          </span>
        </div>
        <div className="mx-2 h-px flex-1 bg-green-400" />
        <div className="flex items-center gap-1.5">
          <div className="flex size-[18px] items-center justify-center rounded-full bg-neutral-900">
            <span className="text-[9px] font-bold text-white">2</span>
          </div>
          <span className="text-[10px] font-semibold text-neutral-900">
            Ma&apos;lumot
          </span>
        </div>
        <div className="mx-2 h-px flex-1 bg-neutral-200" />
        <div className="flex items-center gap-1.5">
          <div className="flex size-[18px] items-center justify-center rounded-full bg-neutral-200">
            <span className="text-[9px] font-bold text-neutral-400">3</span>
          </div>
          <span className="text-[10px] font-semibold text-neutral-400">
            Tasdiqlash
          </span>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mx-3 mb-1 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <span className="text-[13px] font-semibold text-neutral-900">
            Buyurtmangiz · {enriched.reduce((a, p) => a + p.count, 0)} ta
          </span>
          <span className="text-[12px] text-blue-500">Ko&apos;rish</span>
        </div>
        <div className="divide-y divide-neutral-100">
          {enriched.map((p) => {
            const total = p.price * p.count;
            const discounted = total - total * (p.percent / 100);
            return (
              <div key={p._id} className="flex items-center gap-3 px-4 py-3">
                <div className="relative size-[46px] shrink-0">
                  <div className="size-[46px] overflow-hidden rounded-[10px] bg-neutral-100">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="absolute -right-1.5 -top-1.5 flex min-w-[15px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[8px] font-bold leading-[15px] text-white">
                    ×{p.count}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-neutral-900">
                    {p.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-400">
                    {p.brand}
                    {p.percent > 0 && (
                      <span className="rounded bg-red-50 px-1 py-px text-[9px] font-bold text-red-500">
                        −{p.percent}%
                      </span>
                    )}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[14px] font-semibold text-neutral-900">
                    {discounted.toLocaleString()}
                  </p>
                  {p.percent > 0 && (
                    <p className="text-[11px] text-neutral-300 line-through">
                      {total.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FORM */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          {/* ALOQA */}
          <SectionLabel>Aloqa</SectionLabel>
          <Card>
            <FieldWrap>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className={labelStyles}>
                      To&apos;liq ism
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Alisher Alisherov"
                        className={inputStyles}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </FieldWrap>

            <FieldWrap>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className={labelStyles}>Telefon</FormLabel>
                    <FormControl>
                      <InputMask
                        mask="+\9\9\8 (99) 999-99-99"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      >
                        {(p) => (
                          <input
                            {...p}
                            name={field.name}
                            ref={field.ref}
                            type="tel"
                            placeholder="+998 (__) ___-__-__"
                            className="w-full border-0 border-b border-neutral-200 bg-transparent pb-1.5 pt-0 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-neutral-900"
                          />
                        )}
                      </InputMask>
                    </FormControl>
                    <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </FieldWrap>
          </Card>

          {/* MANZIL */}
          <SectionLabel>Manzil</SectionLabel>
          <Card>
            <FieldWrap>
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className={labelStyles}>Viloyat</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Toshkent shahri"
                        className={inputStyles}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </FieldWrap>

            <FieldWrap>
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className={labelStyles}>
                      Tuman / Mahalla
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Yunusobod tumani"
                        className={inputStyles}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </FieldWrap>
          </Card>

          {/* IZOH */}
          <SectionLabel>Izoh</SectionLabel>
          <Card>
            <FieldWrap>
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className={labelStyles}>
                      Qo&apos;shimcha ma&apos;lumot (ixtiyoriy)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Dom kodi, qavat yoki boshqa ma'lumot..."
                        className="min-h-[56px] resize-none rounded-none border-0 border-b border-neutral-200 bg-transparent px-0 pb-1.5 pt-0 text-[15px] text-neutral-900 shadow-none ring-0 transition-colors placeholder:text-neutral-300 focus-visible:border-neutral-900 focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[11px] font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </FieldWrap>
          </Card>

          {/* HISOB */}
          <SectionLabel>Hisob-kitob</SectionLabel>
          <div className="mx-3 divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[13px] text-neutral-400">Mahsulotlar</span>
              <span className="text-[13px] font-medium text-neutral-900">
                {subtotal.toLocaleString()} so&apos;m
              </span>
            </div>
            {totalDiscount > 0 && (
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[13px] text-neutral-400">Chegirma</span>
                <span className="text-[13px] font-semibold text-green-500">
                  − {totalDiscount.toLocaleString()} so&apos;m
                </span>
              </div>
            )}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center gap-1.5 text-[13px] text-neutral-400">
                <Truck size={12} /> Yetkazib berish
              </span>
              <span
                className={`text-[13px] font-semibold ${freeShip ? "text-green-500" : "text-neutral-900"}`}
              >
                {freeShip ? "Bepul" : "50 000 so'm"}
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-50/80 px-4 py-3.5">
              <span className="text-[15px] font-semibold text-neutral-900">
                Jami
              </span>
              <span className="text-[17px] font-bold text-neutral-900">
                {finalPrice.toLocaleString()} so&apos;m
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="px-3 pt-5">
            <button
              type="submit"
              className="flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl border border-[#D4537E] bg-white text-[15px] font-semibold text-[#D4537E] transition-all active:scale-[0.98] active:bg-pink-50"
            >
              Buyurtmani tasdiqlash
              <ArrowRight size={16} className="opacity-70" />
            </button>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <ShieldCheck size={11} className="text-green-500" />
              <p className="text-[11px] text-neutral-400">
                Operator tasdiqlangandan keyin aloqaga chiqadi
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
