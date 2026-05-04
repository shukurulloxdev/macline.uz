// // // // "use client";
// // // // import React, { useEffect } from "react";
// // // // import Image from "next/image";
// // // // import {
// // // //   ArrowRight,
// // // //   Check,
// // // //   ChevronLeft,
// // // //   ShieldCheck,
// // // //   Truck,
// // // // } from "lucide-react";
// // // // import InputMask from "react-input-mask";
// // // // import { useForm } from "react-hook-form";
// // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { useRouter } from "next/navigation";
// // // // import Link from "next/link";
// // // // import { toast } from "sonner";
// // // // import z from "zod";
// // // // import { createOrder } from "@/actions/order-actions";
// // // // import {
// // // //   Form,
// // // //   FormControl,
// // // //   FormField,
// // // //   FormItem,
// // // //   FormLabel,
// // // //   FormMessage,
// // // // } from "@/components/ui/form";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { orderSchema } from "@/lib/validation";
// // // // import { removeBasketIds } from "@/redux/reducers/basketState";
// // // // import { RootState } from "@/redux/store";
// // // // import { IProduct } from "@/types";

// // // // interface Props {
// // // //   products: IProduct[];
// // // // }

// // // // // ── Shared styles ──────────────────────────────────────────────────────────────
// // // // const labelStyles =
// // // //   "text-[11px] font-semibold uppercase tracking-[0.4px] text-neutral-400 mb-0";

// // // // const inputStyles =
// // // //   "h-auto rounded-none border-0 border-b border-neutral-200 bg-transparent px-0 pb-1.5 pt-0 text-[15px] font-normal text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 focus-visible:border-neutral-900 focus-visible:ring-0 focus-visible:shadow-none transition-colors";

// // // // // ── Section wrapper ────────────────────────────────────────────────────────────
// // // // function SectionLabel({ children }: { children: React.ReactNode }) {
// // // //   return (
// // // //     <p className="px-5 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.4px] text-neutral-400">
// // // //       {children}
// // // //     </p>
// // // //   );
// // // // }
// // // // function Card({ children }: { children: React.ReactNode }) {
// // // //   return (
// // // //     <div className="mx-3 divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // }
// // // // function FieldWrap({ children }: { children: React.ReactNode }) {
// // // //   return <div className="px-4 py-3">{children}</div>;
// // // // }

// // // // export default function CheckoutMobile({ products }: Props) {
// // // //   const user = useSelector((s: RootState) => s.user.user);
// // // //   const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
// // // //   const dispatch = useDispatch();
// // // //   const router = useRouter();

// // // //   const enriched = products.map((product) => {
// // // //     const item = basketIds.find((b) => b.id === product._id);
// // // //     return { ...product, count: item?.count || 1 };
// // // //   });

// // // //   const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
// // // //   const totalDiscount = enriched.reduce(
// // // //     (acc, p) => acc + p.price * (p.percent / 100) * p.count,
// // // //     0,
// // // //   );
// // // //   const finalPrice = subtotal - totalDiscount;
// // // //   const freeShip = subtotal > 1_000_000;

// // // //   const form = useForm<z.infer<typeof orderSchema>>({
// // // //     resolver: zodResolver(orderSchema),
// // // //     defaultValues: {
// // // //       fullName: "",
// // // //       phone: "",
// // // //       region: "",
// // // //       city: "",
// // // //       comment: "",
// // // //       products: [],
// // // //     },
// // // //   });

// // // //   useEffect(() => {
// // // //     if (user) {
// // // //       form.reset({
// // // //         fullName: user.fullName,
// // // //         phone: user.phone,
// // // //         region: "",
// // // //         city: "",
// // // //         comment: "",
// // // //         products: [],
// // // //       });
// // // //     }
// // // //   }, [user]);

// // // //   async function onSubmit(values: z.infer<typeof orderSchema>) {
// // // //     try {
// // // //       const orderProducts = enriched.map((product) => ({
// // // //         productId: product._id,
// // // //         count: product.count,
// // // //         proTotalPrice:
// // // //           (product.price - (product.price * product.percent) / 100) *
// // // //           product.count,
// // // //         onePrice: product.price - (product.price * product.percent) / 100,
// // // //       }));

// // // //       const res = await createOrder({
// // // //         ...values,
// // // //         products: orderProducts,
// // // //         totalDiscount,
// // // //         totalPrice: finalPrice,
// // // //       });

// // // //       console.log("CREATE ORDER RES:", res);

// // // //       if (res?.validationErrors) {
// // // //         console.log("VALIDATION ERRORS:", res.validationErrors);
// // // //         return toast.error("Validation xatolik bor");
// // // //       }
// // // //       if (res?.serverError) {
// // // //         console.log("SERVER ERROR:", res.serverError);
// // // //         return toast.error("Server xatolik berdi");
// // // //       }
// // // //       if (!res?.data) return toast.error("Data kelmadi");
// // // //       if (res.data === null) return toast.error("User yo'q");
// // // //       if (res.data.failure) return toast.error(res.data.failure);

// // // //       if (res.data.order?._id) {
// // // //         dispatch(removeBasketIds());
// // // //         toast.success("Buyurtma qabul qilindi ✅");
// // // //         router.push("/shopping/success");
// // // //       }
// // // //     } catch (error) {
// // // //       console.log("ON SUBMIT ERROR:", error);
// // // //       toast.error("Kutilmagan xatolik");
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-[#f2f2f7] pb-10 md:hidden">
// // // //       {/* NAV */}
// // // //       <div className="sticky top-0 z-20 flex items-center justify-between bg-[#f2f2f7]/90 px-5 pb-2 pt-3 backdrop-blur-md">
// // // //         <Link
// // // //           href="/shopping"
// // // //           className="flex items-center gap-1 text-[13px] text-blue-500"
// // // //         >
// // // //           <ChevronLeft size={16} strokeWidth={2} />
// // // //           Orqaga
// // // //         </Link>
// // // //         <span className="text-[13px] font-semibold text-neutral-900">
// // // //           Buyurtma
// // // //         </span>
// // // //         <div className="w-14" />
// // // //       </div>

// // // //       {/* STEPS */}
// // // //       <div className="flex items-center px-5 pb-4 pt-1">
// // // //         <div className="flex items-center gap-1.5">
// // // //           <div className="flex size-[18px] items-center justify-center rounded-full bg-green-500">
// // // //             <Check size={9} className="text-white" strokeWidth={3} />
// // // //           </div>
// // // //           <span className="text-[10px] font-semibold text-green-500">
// // // //             Savat
// // // //           </span>
// // // //         </div>
// // // //         <div className="mx-2 h-px flex-1 bg-green-400" />
// // // //         <div className="flex items-center gap-1.5">
// // // //           <div className="flex size-[18px] items-center justify-center rounded-full bg-neutral-900">
// // // //             <span className="text-[9px] font-bold text-white">2</span>
// // // //           </div>
// // // //           <span className="text-[10px] font-semibold text-neutral-900">
// // // //             Ma&apos;lumot
// // // //           </span>
// // // //         </div>
// // // //         <div className="mx-2 h-px flex-1 bg-neutral-200" />
// // // //         <div className="flex items-center gap-1.5">
// // // //           <div className="flex size-[18px] items-center justify-center rounded-full bg-neutral-200">
// // // //             <span className="text-[9px] font-bold text-neutral-400">3</span>
// // // //           </div>
// // // //           <span className="text-[10px] font-semibold text-neutral-400">
// // // //             Tasdiqlash
// // // //           </span>
// // // //         </div>
// // // //       </div>

// // // //       {/* PRODUCTS */}
// // // //       <div className="mx-3 mb-1 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
// // // //         <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
// // // //           <span className="text-[13px] font-semibold text-neutral-900">
// // // //             Buyurtmangiz · {enriched.reduce((a, p) => a + p.count, 0)} ta
// // // //           </span>
// // // //           <span className="text-[12px] text-blue-500">Ko&apos;rish</span>
// // // //         </div>
// // // //         <div className="divide-y divide-neutral-100">
// // // //           {enriched.map((p) => {
// // // //             const total = p.price * p.count;
// // // //             const discounted = total - total * (p.percent / 100);
// // // //             return (
// // // //               <div key={p._id} className="flex items-center gap-3 px-4 py-3">
// // // //                 <div className="relative size-[46px] shrink-0">
// // // //                   <div className="size-[46px] overflow-hidden rounded-[10px] bg-neutral-100">
// // // //                     <Image
// // // //                       src={p.images[0]}
// // // //                       alt={p.name}
// // // //                       fill
// // // //                       className="object-contain p-1"
// // // //                     />
// // // //                   </div>
// // // //                   <div className="absolute -right-1.5 -top-1.5 flex min-w-[15px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[8px] font-bold leading-[15px] text-white">
// // // //                     ×{p.count}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="min-w-0 flex-1">
// // // //                   <p className="truncate text-[13px] font-medium text-neutral-900">
// // // //                     {p.name}
// // // //                   </p>
// // // //                   <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-400">
// // // //                     {p.brand}
// // // //                     {p.percent > 0 && (
// // // //                       <span className="rounded bg-red-50 px-1 py-px text-[9px] font-bold text-red-500">
// // // //                         −{p.percent}%
// // // //                       </span>
// // // //                     )}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="shrink-0 text-right">
// // // //                   <p className="text-[14px] font-semibold text-neutral-900">
// // // //                     {discounted.toLocaleString()}
// // // //                   </p>
// // // //                   {p.percent > 0 && (
// // // //                     <p className="text-[11px] text-neutral-300 line-through">
// // // //                       {total.toLocaleString()}
// // // //                     </p>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>

// // // //       {/* FORM */}
// // // //       <Form {...form}>
// // // //         <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
// // // //           {/* ALOQA */}
// // // //           <SectionLabel>Aloqa</SectionLabel>
// // // //           <Card>
// // // //             <FieldWrap>
// // // //               <FormField
// // // //                 control={form.control}
// // // //                 name="fullName"
// // // //                 render={({ field }) => (
// // // //                   <FormItem className="space-y-1">
// // // //                     <FormLabel className={labelStyles}>
// // // //                       To&apos;liq ism
// // // //                     </FormLabel>
// // // //                     <FormControl>
// // // //                       <Input
// // // //                         placeholder="Alisher Alisherov"
// // // //                         className={inputStyles}
// // // //                         {...field}
// // // //                       />
// // // //                     </FormControl>
// // // //                     <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
// // // //                   </FormItem>
// // // //                 )}
// // // //               />
// // // //             </FieldWrap>

// // // //             <FieldWrap>
// // // //               <FormField
// // // //                 control={form.control}
// // // //                 name="phone"
// // // //                 render={({ field }) => (
// // // //                   <FormItem className="space-y-1">
// // // //                     <FormLabel className={labelStyles}>Telefon</FormLabel>
// // // //                     <FormControl>
// // // //                       <InputMask
// // // //                         mask="+\9\9\8 (99) 999-99-99"
// // // //                         value={field.value}
// // // //                         onChange={field.onChange}
// // // //                         onBlur={field.onBlur}
// // // //                       >
// // // //                         {(p) => (
// // // //                           <input
// // // //                             {...p}
// // // //                             name={field.name}
// // // //                             ref={field.ref}
// // // //                             type="tel"
// // // //                             placeholder="+998 (__) ___-__-__"
// // // //                             className="w-full border-0 border-b border-neutral-200 bg-transparent pb-1.5 pt-0 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-neutral-900"
// // // //                           />
// // // //                         )}
// // // //                       </InputMask>
// // // //                     </FormControl>
// // // //                     <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
// // // //                   </FormItem>
// // // //                 )}
// // // //               />
// // // //             </FieldWrap>
// // // //           </Card>

// // // //           {/* MANZIL */}
// // // //           <SectionLabel>Manzil</SectionLabel>
// // // //           <Card>
// // // //             <FieldWrap>
// // // //               <FormField
// // // //                 control={form.control}
// // // //                 name="region"
// // // //                 render={({ field }) => (
// // // //                   <FormItem className="space-y-1">
// // // //                     <FormLabel className={labelStyles}>Viloyat</FormLabel>
// // // //                     <FormControl>
// // // //                       <Input
// // // //                         placeholder="Toshkent shahri"
// // // //                         className={inputStyles}
// // // //                         {...field}
// // // //                       />
// // // //                     </FormControl>
// // // //                     <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
// // // //                   </FormItem>
// // // //                 )}
// // // //               />
// // // //             </FieldWrap>

// // // //             <FieldWrap>
// // // //               <FormField
// // // //                 control={form.control}
// // // //                 name="city"
// // // //                 render={({ field }) => (
// // // //                   <FormItem className="space-y-1">
// // // //                     <FormLabel className={labelStyles}>
// // // //                       Tuman / Mahalla
// // // //                     </FormLabel>
// // // //                     <FormControl>
// // // //                       <Input
// // // //                         placeholder="Yunusobod tumani"
// // // //                         className={inputStyles}
// // // //                         {...field}
// // // //                       />
// // // //                     </FormControl>
// // // //                     <FormMessage className="flex items-center gap-1 text-[11px] font-medium text-red-500" />
// // // //                   </FormItem>
// // // //                 )}
// // // //               />
// // // //             </FieldWrap>
// // // //           </Card>

// // // //           {/* IZOH */}
// // // //           <SectionLabel>Izoh</SectionLabel>
// // // //           <Card>
// // // //             <FieldWrap>
// // // //               <FormField
// // // //                 control={form.control}
// // // //                 name="comment"
// // // //                 render={({ field }) => (
// // // //                   <FormItem className="space-y-1">
// // // //                     <FormLabel className={labelStyles}>
// // // //                       Qo&apos;shimcha ma&apos;lumot (ixtiyoriy)
// // // //                     </FormLabel>
// // // //                     <FormControl>
// // // //                       <Textarea
// // // //                         placeholder="Dom kodi, qavat yoki boshqa ma'lumot..."
// // // //                         className="min-h-[56px] resize-none rounded-none border-0 border-b border-neutral-200 bg-transparent px-0 pb-1.5 pt-0 text-[15px] text-neutral-900 shadow-none ring-0 transition-colors placeholder:text-neutral-300 focus-visible:border-neutral-900 focus-visible:ring-0"
// // // //                         {...field}
// // // //                       />
// // // //                     </FormControl>
// // // //                     <FormMessage className="text-[11px] font-medium text-red-500" />
// // // //                   </FormItem>
// // // //                 )}
// // // //               />
// // // //             </FieldWrap>
// // // //           </Card>

// // // //           {/* HISOB */}
// // // //           <SectionLabel>Hisob-kitob</SectionLabel>
// // // //           <div className="mx-3 divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
// // // //             <div className="flex items-center justify-between px-4 py-3">
// // // //               <span className="text-[13px] text-neutral-400">Mahsulotlar</span>
// // // //               <span className="text-[13px] font-medium text-neutral-900">
// // // //                 {subtotal.toLocaleString()} so&apos;m
// // // //               </span>
// // // //             </div>
// // // //             {totalDiscount > 0 && (
// // // //               <div className="flex items-center justify-between px-4 py-3">
// // // //                 <span className="text-[13px] text-neutral-400">Chegirma</span>
// // // //                 <span className="text-[13px] font-semibold text-green-500">
// // // //                   − {totalDiscount.toLocaleString()} so&apos;m
// // // //                 </span>
// // // //               </div>
// // // //             )}
// // // //             <div className="flex items-center justify-between px-4 py-3">
// // // //               <span className="flex items-center gap-1.5 text-[13px] text-neutral-400">
// // // //                 <Truck size={12} /> Yetkazib berish
// // // //               </span>
// // // //               <span
// // // //                 className={`text-[13px] font-semibold ${freeShip ? "text-green-500" : "text-neutral-900"}`}
// // // //               >
// // // //                 {freeShip ? "Bepul" : "50 000 so'm"}
// // // //               </span>
// // // //             </div>
// // // //             <div className="flex items-center justify-between bg-neutral-50/80 px-4 py-3.5">
// // // //               <span className="text-[15px] font-semibold text-neutral-900">
// // // //                 Jami
// // // //               </span>
// // // //               <span className="text-[17px] font-bold text-neutral-900">
// // // //                 {finalPrice.toLocaleString()} so&apos;m
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           {/* CTA */}
// // // //           <div className="px-3 pt-5">
// // // //             <button
// // // //               type="submit"
// // // //               className="flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl border border-[#D4537E] bg-white text-[15px] font-semibold text-[#D4537E] transition-all active:scale-[0.98] active:bg-pink-50"
// // // //             >
// // // //               Buyurtmani tasdiqlash
// // // //               <ArrowRight size={16} className="opacity-70" />
// // // //             </button>

// // // //             <div className="mt-3 flex items-center justify-center gap-1.5">
// // // //               <ShieldCheck size={11} className="text-green-500" />
// // // //               <p className="text-[11px] text-neutral-400">
// // // //                 Operator tasdiqlangandan keyin aloqaga chiqadi
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </form>
// // // //       </Form>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import React, { useEffect } from "react";
// // // import Image from "next/image";
// // // import {
// // //   ArrowRight,
// // //   Check,
// // //   ChevronLeft,
// // //   ShieldCheck,
// // //   Truck,
// // //   MapPin,
// // //   User,
// // //   MessageCircle,
// // // } from "lucide-react";
// // // import InputMask from "react-input-mask";
// // // import { useForm } from "react-hook-form";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useRouter } from "next/navigation";
// // // import Link from "next/link";
// // // import { toast } from "sonner";
// // // import z from "zod";
// // // import { createOrder } from "@/actions/order-actions";
// // // import {
// // //   Form,
// // //   FormControl,
// // //   FormField,
// // //   FormItem,
// // //   FormLabel,
// // //   FormMessage,
// // // } from "@/components/ui/form";
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { orderSchema } from "@/lib/validation";
// // // import { removeBasketIds } from "@/redux/reducers/basketState";
// // // import { RootState } from "@/redux/store";
// // // import { IProduct } from "@/types";

// // // // ── Ixcham stillar ──────────────────────────────────────────────────────────
// // // const inputStyles =
// // //   "h-10 rounded-none border-0 bg-transparent px-0 text-[15px] font-medium text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 focus-visible:ring-0";
// // // const rowStyles = "flex items-center gap-3 px-4 py-1 first:pt-3 last:pb-3";
// // // const iconCircle =
// // //   "flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-400";

// // // export default function CheckoutMobile({ products }: Props) {
// // //   const user = useSelector((s: RootState) => s.user.user);
// // //   const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
// // //   const dispatch = useDispatch();
// // //   const router = useRouter();

// // //   const enriched = products.map((product) => {
// // //     const item = basketIds.find((b) => b.id === product._id);
// // //     return { ...product, count: item?.count || 1 };
// // //   });

// // //   const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
// // //   const totalDiscount = enriched.reduce(
// // //     (acc, p) => acc + p.price * (p.percent / 100) * p.count,
// // //     0,
// // //   );
// // //   const finalPrice = subtotal - totalDiscount;
// // //   const freeShip = subtotal > 1_000_000;

// // //   const form = useForm<z.infer<typeof orderSchema>>({
// // //     resolver: zodResolver(orderSchema),
// // //     defaultValues: {
// // //       fullName: "",
// // //       phone: "",
// // //       region: "",
// // //       city: "",
// // //       comment: "",
// // //       products: [],
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     if (user) {
// // //       form.reset({
// // //         fullName: user.fullName,
// // //         phone: user.phone,
// // //         region: "",
// // //         city: "",
// // //         comment: "",
// // //         products: [],
// // //       });
// // //     }
// // //   }, [user]);

// // //   async function onSubmit(values: z.infer<typeof orderSchema>) {
// // //     // Funksional qismi o'zgarishsiz qoldi...
// // //     try {
// // //       const orderProducts = enriched.map((product) => ({
// // //         productId: product._id,
// // //         count: product.count,
// // //         proTotalPrice:
// // //           (product.price - (product.price * product.percent) / 100) *
// // //           product.count,
// // //         onePrice: product.price - (product.price * product.percent) / 100,
// // //       }));
// // //       const res = await createOrder({
// // //         ...values,
// // //         products: orderProducts,
// // //         totalDiscount,
// // //         totalPrice: finalPrice,
// // //       });
// // //       if (res?.data?.order?._id) {
// // //         dispatch(removeBasketIds());
// // //         toast.success("Buyurtma qabul qilindi ✅");
// // //         router.push("/shopping/success");
// // //       }
// // //     } catch (error) {
// // //       toast.error("Xatolik yuz berdi");
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#F8F8F8] pb-24 font-sans md:hidden">
// // //       {/* STICKY HEADER */}
// // //       <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-neutral-100 bg-white/80 px-4 backdrop-blur-xl">
// // //         <Link
// // //           href="/shopping"
// // //           className="flex items-center gap-1 text-[15px] font-medium text-blue-500"
// // //         >
// // //           <ChevronLeft size={20} />
// // //           Savat
// // //         </Link>
// // //         <h1 className="text-[16px] font-bold text-neutral-900">
// // //           Rasmiylashtirish
// // //         </h1>
// // //         <div className="w-10" />
// // //       </div>

// // //       <div className="space-y-5 p-4">
// // //         {/* PROGRESS MINI */}
// // //         <div className="flex items-center justify-center gap-4 py-2">
// // //           <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-green-500">
// // //             <Check size={14} /> Savat
// // //           </span>
// // //           <div className="h-px w-8 bg-neutral-200" />
// // //           <span className="text-[11px] font-bold uppercase text-neutral-900">
// // //             Ma'lumot
// // //           </span>
// // //           <div className="h-px w-8 bg-neutral-200" />
// // //           <span className="text-[11px] font-bold uppercase text-neutral-300">
// // //             Tasdiqlash
// // //           </span>
// // //         </div>

// // //         {/* PRODUCTS MINI LIST */}
// // //         <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
// // //           <div className="flex items-center justify-between bg-neutral-50/50 px-4 py-2.5">
// // //             <span className="text-[12px] font-bold text-neutral-900">
// // //               Buyurtma ({enriched.length})
// // //             </span>
// // //             <span className="text-[12px] font-bold text-pink-600">
// // //               {finalPrice.toLocaleString()} UZS
// // //             </span>
// // //           </div>
// // //           <div className="no-scrollbar flex gap-2 overflow-x-auto p-3">
// // //             {enriched.map((p) => (
// // //               <div
// // //                 key={p._id}
// // //                 className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50"
// // //               >
// // //                 <Image
// // //                   src={p.images[0]}
// // //                   alt={p.name}
// // //                   fill
// // //                   className="object-contain p-1"
// // //                 />
// // //                 <span className="absolute right-0 top-0 rounded-bl bg-neutral-900/80 px-1 text-[8px] font-black text-white">
// // //                   ×{p.count}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <Form {...form}>
// // //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
// // //             {/* ALOQA VA MANZIL GURUHLANGAN */}
// // //             <div className="divide-y divide-neutral-50 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
// // //               {/* ISM */}
// // //               <div className={rowStyles}>
// // //                 <div className={iconCircle}>
// // //                   <User size={16} />
// // //                 </div>
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="fullName"
// // //                   render={({ field }) => (
// // //                     <FormItem className="flex-1 space-y-0">
// // //                       <FormControl>
// // //                         <Input
// // //                           placeholder="To'liq ismingiz"
// // //                           className={inputStyles}
// // //                           {...field}
// // //                         />
// // //                       </FormControl>
// // //                       <FormMessage className="py-1 text-[10px]" />
// // //                     </FormItem>
// // //                   )}
// // //                 />
// // //               </div>

// // //               {/* TELEFON */}
// // //               <div className={rowStyles}>
// // //                 <div className={iconCircle}>
// // //                   <ShieldCheck size={16} />
// // //                 </div>
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="phone"
// // //                   render={({ field }) => (
// // //                     <FormItem className="flex-1 space-y-0">
// // //                       <FormControl>
// // //                         <InputMask
// // //                           mask="+998 (99) 999-99-99"
// // //                           value={field.value}
// // //                           onChange={field.onChange}
// // //                         >
// // //                           {(p) => (
// // //                             <input
// // //                               {...p}
// // //                               type="tel"
// // //                               placeholder="Telefon raqam"
// // //                               className="h-10 w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-neutral-300"
// // //                             />
// // //                           )}
// // //                         </InputMask>
// // //                       </FormControl>
// // //                     </FormItem>
// // //                   )}
// // //                 />
// // //               </div>

// // //               {/* VILOYAT */}
// // //               <div className={rowStyles}>
// // //                 <div className={iconCircle}>
// // //                   <MapPin size={16} />
// // //                 </div>
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="region"
// // //                   render={({ field }) => (
// // //                     <FormItem className="flex-1 space-y-0">
// // //                       <FormControl>
// // //                         <Input
// // //                           placeholder="Viloyat / Shahar"
// // //                           className={inputStyles}
// // //                           {...field}
// // //                         />
// // //                       </FormControl>
// // //                     </FormItem>
// // //                   )}
// // //                 />
// // //               </div>

// // //               {/* TUMAN */}
// // //               <div className={rowStyles}>
// // //                 <div className="size-7 shrink-0" />{" "}
// // //                 {/* Alignment icon bo'sh joy */}
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="city"
// // //                   render={({ field }) => (
// // //                     <FormItem className="flex-1 space-y-0">
// // //                       <FormControl>
// // //                         <Input
// // //                           placeholder="Tuman / Mahalla / Ko'cha"
// // //                           className={inputStyles}
// // //                           {...field}
// // //                         />
// // //                       </FormControl>
// // //                     </FormItem>
// // //                   )}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* IZOH - ALOHIDA IXCHAM BLOK */}
// // //             <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
// // //               <div className="flex items-center gap-3 px-4 pt-3">
// // //                 <div className={iconCircle}>
// // //                   <MessageCircle size={16} />
// // //                 </div>
// // //                 <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-400">
// // //                   Izoh
// // //                 </span>
// // //               </div>
// // //               <FormField
// // //                 control={form.control}
// // //                 name="comment"
// // //                 render={({ field }) => (
// // //                   <FormItem className="p-4 pt-2">
// // //                     <FormControl>
// // //                       <Textarea
// // //                         placeholder="Yetkazib berish uchun qo'shimcha ma'lumot..."
// // //                         className="min-h-[60px] rounded-xl border-none bg-neutral-50 p-3 text-[14px] focus-visible:ring-0"
// // //                         {...field}
// // //                       />
// // //                     </FormControl>
// // //                   </FormItem>
// // //                 )}
// // //               />
// // //             </div>

// // //             {/* HISOB-KITOB */}
// // //             <div className="rounded-2xl bg-neutral-900 p-5 text-white shadow-xl">
// // //               <div className="space-y-2.5">
// // //                 <div className="flex justify-between text-[13px] opacity-70">
// // //                   <span>Mahsulotlar</span>
// // //                   <span>{subtotal.toLocaleString()} UZS</span>
// // //                 </div>
// // //                 {totalDiscount > 0 && (
// // //                   <div className="flex justify-between text-[13px] text-pink-400">
// // //                     <span>Chegirma</span>
// // //                     <span>− {totalDiscount.toLocaleString()} UZS</span>
// // //                   </div>
// // //                 )}
// // //                 <div className="flex justify-between text-[13px] opacity-70">
// // //                   <span className="flex items-center gap-1.5">
// // //                     <Truck size={14} /> Yetkazib berish
// // //                   </span>
// // //                   <span>{freeShip ? "Bepul" : "50 000 UZS"}</span>
// // //                 </div>
// // //                 <div className="my-3 h-px bg-white/10" />
// // //                 <div className="flex items-center justify-between">
// // //                   <span className="text-[15px] font-medium text-neutral-400">
// // //                     Jami to'lov:
// // //                   </span>
// // //                   <span className="text-[22px] font-[900] tracking-tighter">
// // //                     {finalPrice.toLocaleString()}{" "}
// // //                     <small className="text-[12px] font-normal uppercase opacity-60">
// // //                       UZS
// // //                     </small>
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* FIXED BOTTOM CTA */}
// // //             <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-100 bg-white/90 p-4 backdrop-blur-lg">
// // //               <button
// // //                 type="submit"
// // //                 className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-pink-600 text-[16px] font-bold text-white shadow-lg shadow-pink-200 transition-transform active:scale-[0.97]"
// // //               >
// // //                 Buyurtmani tasdiqlash
// // //                 <ArrowRight size={18} />
// // //               </button>
// // //               <div className="mt-2 flex items-center justify-center gap-1.5">
// // //                 <ShieldCheck size={12} className="text-emerald-500" />
// // //                 <p className="text-[10px] font-medium uppercase tracking-tighter text-neutral-400">
// // //                   Xavfsiz to'lov va tezkor yetkazib berish
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </form>
// // //         </Form>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import React, { useEffect } from "react";
// // import Image from "next/image";
// // import {
// //   ArrowRight,
// //   Check,
// //   ChevronLeft,
// //   ShieldCheck,
// //   Truck,
// // } from "lucide-react";
// // import InputMask from "react-input-mask";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useRouter } from "next/navigation";
// // import Link from "next/link";
// // import { toast } from "sonner";
// // import z from "zod";
// // import { createOrder } from "@/actions/order-actions";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { orderSchema } from "@/lib/validation";
// // import { removeBasketIds } from "@/redux/reducers/basketState";
// // import { RootState } from "@/redux/store";
// // import { IProduct } from "@/types";

// // interface Props {
// //   products: IProduct[];
// // }

// // // ── Shared field styles (rasmga o'xshash) ─────────────────────────────────────
// // const labelCls = "mb-1.5 text-[13px] font-normal text-neutral-500";
// // const inputCls =
// //   "h-11 rounded-lg border-0 bg-white px-3.5 text-[15px] font-normal text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 focus-visible:ring-0 focus-visible:shadow-none";

// // export default function CheckoutMobile({ products }: Props) {
// //   const user = useSelector((s: RootState) => s.user.user);
// //   const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
// //   const dispatch = useDispatch();
// //   const router = useRouter();

// //   const enriched = products.map((product) => {
// //     const item = basketIds.find((b) => b.id === product._id);
// //     return { ...product, count: item?.count || 1 };
// //   });

// //   const totalItems = enriched.reduce((a, p) => a + p.count, 0);
// //   const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
// //   const totalDiscount = enriched.reduce(
// //     (acc, p) => acc + p.price * (p.percent / 100) * p.count,
// //     0,
// //   );
// //   const finalPrice = subtotal - totalDiscount;
// //   const freeShip = subtotal > 1_000_000;

// //   const form = useForm<z.infer<typeof orderSchema>>({
// //     resolver: zodResolver(orderSchema),
// //     defaultValues: {
// //       fullName: "",
// //       phone: "",
// //       region: "",
// //       city: "",
// //       comment: "",
// //       products: [],
// //     },
// //   });

// //   useEffect(() => {
// //     if (user) {
// //       form.reset({
// //         fullName: user.fullName,
// //         phone: user.phone,
// //         region: "",
// //         city: "",
// //         comment: "",
// //         products: [],
// //       });
// //     }
// //   }, [user]);

// //   async function onSubmit(values: z.infer<typeof orderSchema>) {
// //     try {
// //       const orderProducts = enriched.map((product) => ({
// //         productId: product._id,
// //         count: product.count,
// //         proTotalPrice:
// //           (product.price - (product.price * product.percent) / 100) *
// //           product.count,
// //         onePrice: product.price - (product.price * product.percent) / 100,
// //       }));

// //       const res = await createOrder({
// //         ...values,
// //         products: orderProducts,
// //         totalDiscount,
// //         totalPrice: finalPrice,
// //       });

// //       console.log("CREATE ORDER RES:", res);

// //       if (res?.validationErrors) {
// //         console.log("VALIDATION ERRORS:", res.validationErrors);
// //         return toast.error("Validation xatolik bor");
// //       }
// //       if (res?.serverError) {
// //         console.log("SERVER ERROR:", res.serverError);
// //         return toast.error("Server xatolik berdi");
// //       }
// //       if (!res?.data) return toast.error("Data kelmadi");
// //       if (res.data === null) return toast.error("User yo'q");
// //       if (res.data.failure) return toast.error(res.data.failure);

// //       if (res.data.order?._id) {
// //         dispatch(removeBasketIds());
// //         toast.success("Buyurtma qabul qilindi ✅");
// //         router.push("/shopping/success");
// //       }
// //     } catch (error) {
// //       console.log("ON SUBMIT ERROR:", error);
// //       toast.error("Kutilmagan xatolik");
// //     }
// //   }

// //   return (
// //     <div className="relative min-h-screen bg-white md:hidden">
// //       {/* scroll area — fixed bottom uchun joy */}
// //       <div className="pb-[116px]">
// //         {/* ── NAV ─────────────────────────────────────────────────────── */}
// //         <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-100 bg-white/90 px-5 py-3 backdrop-blur-md">
// //           <Link
// //             href="/shopping"
// //             className="flex items-center gap-1 text-[13px] text-blue-500"
// //           >
// //             <ChevronLeft size={15} strokeWidth={2} />
// //             Orqaga
// //           </Link>
// //           <span className="text-[15px] font-semibold text-neutral-900">
// //             Buyurtma
// //           </span>
// //           <div className="w-14" />
// //         </div>

// //         {/* ── STEPS ───────────────────────────────────────────────────── */}
// //         <div className="flex items-center px-5 py-4">
// //           <div className="flex items-center gap-1.5">
// //             <div className="flex size-5 items-center justify-center rounded-full bg-green-500">
// //               <Check size={9} className="text-white" strokeWidth={3} />
// //             </div>
// //             <span className="text-[11px] font-medium text-green-500">
// //               Savat
// //             </span>
// //           </div>
// //           <div className="mx-2 h-px flex-1 bg-green-400" />
// //           <div className="flex items-center gap-1.5">
// //             <div className="flex size-5 items-center justify-center rounded-full bg-neutral-900">
// //               <span className="text-[9px] font-bold text-white">2</span>
// //             </div>
// //             <span className="text-[11px] font-medium text-neutral-900">
// //               Ma&apos;lumot
// //             </span>
// //           </div>
// //           <div className="mx-2 h-px flex-1 bg-neutral-200" />
// //           <div className="flex items-center gap-1.5">
// //             <div className="flex size-5 items-center justify-center rounded-full bg-neutral-100">
// //               <span className="text-[9px] font-bold text-neutral-400">3</span>
// //             </div>
// //             <span className="text-[11px] font-medium text-neutral-300">
// //               Tasdiqlash
// //             </span>
// //           </div>
// //         </div>

// //         {/* ── PRODUCTS ────────────────────────────────────────────────── */}
// //         <div className="px-4">
// //           <h2 className="mb-3 text-[17px] font-bold tracking-tight text-neutral-900">
// //             Buyurtmangiz
// //           </h2>
// //           <div className="overflow-hidden rounded-xl bg-neutral-50">
// //             {enriched.map((p, i) => {
// //               const total = p.price * p.count;
// //               const discounted = total - total * (p.percent / 100);
// //               return (
// //                 <div
// //                   key={p._id}
// //                   className={`flex items-center gap-3 p-3 ${
// //                     i !== enriched.length - 1
// //                       ? "border-b border-neutral-100"
// //                       : ""
// //                   }`}
// //                 >
// //                   <div className="relative size-12 shrink-0">
// //                     <div className="size-12 overflow-hidden rounded-lg border border-neutral-100 bg-white">
// //                       <Image
// //                         src={p.images[0]}
// //                         alt={p.name}
// //                         fill
// //                         className="object-contain p-1"
// //                       />
// //                     </div>
// //                     <div className="absolute -right-1.5 -top-1.5 flex min-w-[16px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[8px] font-bold leading-[16px] text-white">
// //                       ×{p.count}
// //                     </div>
// //                   </div>
// //                   <div className="min-w-0 flex-1">
// //                     <p className="truncate text-[13px] font-medium text-neutral-900">
// //                       {p.name}
// //                     </p>
// //                     <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-400">
// //                       {p.brand}
// //                       {p.percent > 0 && (
// //                         <span className="rounded bg-red-50 px-1 py-px text-[9px] font-bold text-red-500">
// //                           −{p.percent}%
// //                         </span>
// //                       )}
// //                     </p>
// //                   </div>
// //                   <div className="shrink-0 text-right">
// //                     <p className="text-[13px] font-semibold text-neutral-900">
// //                       {discounted.toLocaleString()}
// //                     </p>
// //                     {p.percent > 0 && (
// //                       <p className="text-[11px] text-neutral-300 line-through">
// //                         {total.toLocaleString()}
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* ── PRICE SUMMARY ───────────────────────────────────────────── */}
// //         <div className="mt-2 overflow-hidden px-4">
// //           <div className="overflow-hidden rounded-xl bg-neutral-50">
// //             <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
// //               <span className="text-[13px] text-neutral-500">
// //                 Mahsulotlar ({totalItems} ta)
// //               </span>
// //               <span className="text-[13px] font-medium text-neutral-900">
// //                 {subtotal.toLocaleString()} so&apos;m
// //               </span>
// //             </div>
// //             {totalDiscount > 0 && (
// //               <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
// //                 <span className="text-[13px] text-neutral-500">Chegirma</span>
// //                 <span className="text-[13px] font-semibold text-green-500">
// //                   − {totalDiscount.toLocaleString()} so&apos;m
// //                 </span>
// //               </div>
// //             )}
// //             <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
// //               <span className="flex items-center gap-1.5 text-[13px] text-neutral-500">
// //                 <Truck size={12} /> Yetkazib berish
// //               </span>
// //               <span
// //                 className={`text-[13px] font-semibold ${freeShip ? "text-green-500" : "text-neutral-900"}`}
// //               >
// //                 {freeShip ? "Bepul" : "50 000 so'm"}
// //               </span>
// //             </div>
// //             <div className="flex items-center justify-between bg-neutral-100/60 px-4 py-3">
// //               <span className="text-[14px] font-semibold text-neutral-900">
// //                 Jami
// //               </span>
// //               <span className="text-[15px] font-bold text-neutral-900">
// //                 {finalPrice.toLocaleString()} so&apos;m
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── FORM ────────────────────────────────────────────────────── */}
// //         <Form {...form}>
// //           <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)}>
// //             <div className="px-4 pt-6">
// //               <h2 className="mb-3 text-[17px] font-bold tracking-tight text-neutral-900">
// //                 Ma&apos;lumotlar
// //               </h2>

// //               {/* BITTA KATTA CARD — rasmga o'xshash */}
// //               <div className="overflow-hidden rounded-xl bg-neutral-50">
// //                 <FormField
// //                   control={form.control}
// //                   name="fullName"
// //                   render={({ field }) => (
// //                     <FormItem className="border-b border-neutral-100 px-3.5 py-3">
// //                       <FormLabel className={labelCls}>
// //                         To&apos;liq ism <span className="text-red-500">*</span>
// //                       </FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           placeholder="Alisher Alisherov"
// //                           className={inputCls}
// //                           {...field}
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="phone"
// //                   render={({ field }) => (
// //                     <FormItem className="border-b border-neutral-100 px-3.5 py-3">
// //                       <FormLabel className={labelCls}>
// //                         Telefon <span className="text-red-500">*</span>
// //                       </FormLabel>
// //                       <FormControl>
// //                         <InputMask
// //                           mask="+\9\9\8 (99) 999-99-99"
// //                           value={field.value}
// //                           onChange={field.onChange}
// //                           onBlur={field.onBlur}
// //                         >
// //                           {(p) => (
// //                             <input
// //                               {...p}
// //                               name={field.name}
// //                               ref={field.ref}
// //                               type="tel"
// //                               placeholder="+998 (__) ___-__-__"
// //                               className="h-11 w-full rounded-lg bg-white px-3.5 text-[15px] text-neutral-900 outline-none placeholder:text-neutral-300"
// //                             />
// //                           )}
// //                         </InputMask>
// //                       </FormControl>
// //                       <FormMessage className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="region"
// //                   render={({ field }) => (
// //                     <FormItem className="border-b border-neutral-100 px-3.5 py-3">
// //                       <FormLabel className={labelCls}>
// //                         Viloyat <span className="text-red-500">*</span>
// //                       </FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           placeholder="Toshkent shahri"
// //                           className={inputCls}
// //                           {...field}
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="city"
// //                   render={({ field }) => (
// //                     <FormItem className="border-b border-neutral-100 px-3.5 py-3">
// //                       <FormLabel className={labelCls}>
// //                         Tuman / Mahalla <span className="text-red-500">*</span>
// //                       </FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           placeholder="Yunusobod tumani"
// //                           className={inputCls}
// //                           {...field}
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500" />
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="comment"
// //                   render={({ field }) => (
// //                     <FormItem className="px-3.5 py-3">
// //                       <FormLabel className={labelCls}>Izoh</FormLabel>
// //                       <FormControl>
// //                         <Textarea
// //                           placeholder="Dom kodi, qavat yoki boshqa ma'lumot..."
// //                           className="min-h-[60px] resize-none rounded-lg border-0 bg-white px-3.5 py-2.5 text-[15px] text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 focus-visible:ring-0"
// //                           {...field}
// //                         />
// //                       </FormControl>
// //                       <FormMessage className="mt-1 text-[11px] font-medium text-red-500" />
// //                     </FormItem>
// //                   )}
// //                 />
// //               </div>
// //             </div>
// //           </form>
// //         </Form>
// //       </div>

// //       {/* ── FIXED BOTTOM ────────────────────────────────────────────────── */}
// //       <div className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-100 bg-white/95 px-4 pb-8 pt-3 backdrop-blur-md">
// //         <button
// //           type="submit"
// //           form="checkout-form"
// //           className="flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-[15px] font-semibold text-white transition-all active:scale-[0.98]"
// //         >
// //           Buyurtmani tasdiqlash
// //           <ArrowRight size={15} className="opacity-60" />
// //         </button>
// //         <div className="mt-2.5 flex items-center justify-center gap-1.5">
// //           <ShieldCheck size={11} className="text-green-500" />
// //           <p className="text-[11px] text-neutral-400">
// //             Operator tasdiqlangandan keyin aloqaga chiqadi
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { Check, ShieldCheck, Trash2, Truck } from "lucide-react";
// import InputMask from "react-input-mask";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { toast } from "sonner";
// import z from "zod";
// import { createOrder } from "@/actions/order-actions";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { orderSchema } from "@/lib/validation";
// import {
//   basketDecre,
//   basketIncer,
//   removeBasketIds,
//   toggleBasket,
// } from "@/redux/reducers/basketState";
// import { RootState } from "@/redux/store";
// import { IProduct } from "@/types";
// import { formatCurrentPrice } from "@/lib/utils";

// interface Props {
//   products: IProduct[];
// }

// const labelCls =
//   "mb-1.5 block text-[12px] font-semibold tracking-wide text-neutral-500";
// const inputCls =
//   "h-12 rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 text-[15px] font-normal text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 transition-colors focus-visible:border-[#e91e8c] focus-visible:bg-white focus-visible:ring-0";

// export default function CheckoutMobile({ products }: Props) {
//   const user = useSelector((s: RootState) => s.user.user);
//   const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const enriched = products.map((product) => {
//     const item = basketIds.find((b) => b.id === product._id);
//     return { ...product, count: item?.count || 1 };
//   });

//   const totalItems = enriched.reduce((a, p) => a + p.count, 0);
//   const subtotal = enriched.reduce((acc, p) => acc + p.price * p.count, 0);
//   const totalDiscount = enriched.reduce(
//     (acc, p) => acc + p.price * (p.percent / 100) * p.count,
//     0,
//   );
//   const finalPrice = subtotal - totalDiscount;
//   const freeShip = subtotal > 1_000_000;

//   const form = useForm<z.infer<typeof orderSchema>>({
//     resolver: zodResolver(orderSchema),
//     defaultValues: {
//       fullName: "",
//       phone: "",
//       region: "",
//       city: "",
//       comment: "",
//       products: [],
//     },
//   });

//   useEffect(() => {
//     if (user) {
//       form.reset({
//         fullName: user.fullName,
//         phone: user.phone,
//         region: "",
//         city: "",
//         comment: "",
//         products: [],
//       });
//     }
//   }, [user]);

//   async function onSubmit(values: z.infer<typeof orderSchema>) {
//     try {
//       const orderProducts = enriched.map((product) => ({
//         productId: product._id,
//         count: product.count,
//         proTotalPrice:
//           (product.price - (product.price * product.percent) / 100) *
//           product.count,
//         onePrice: product.price - (product.price * product.percent) / 100,
//       }));

//       const res = await createOrder({
//         ...values,
//         products: orderProducts,
//         totalDiscount,
//         totalPrice: finalPrice,
//       });

//       console.log("CREATE ORDER RES:", res);

//       if (res?.validationErrors) {
//         console.log("VALIDATION ERRORS:", res.validationErrors);
//         return toast.error("Validation xatolik bor");
//       }
//       if (res?.serverError) {
//         console.log("SERVER ERROR:", res.serverError);
//         return toast.error("Server xatolik berdi");
//       }
//       if (!res?.data) return toast.error("Data kelmadi");
//       if (res.data === null) return toast.error("User yo'q");
//       if (res.data.failure) return toast.error(res.data.failure);

//       if (res.data.order?._id) {
//         dispatch(removeBasketIds());
//         toast.success("Buyurtma qabul qilindi ✅");
//         router.push("/shopping/success");
//       }
//     } catch (error) {
//       console.log("ON SUBMIT ERROR:", error);
//       toast.error("Kutilmagan xatolik");
//     }
//   }

//   return (
//     <div className="relative min-h-screen bg-[#f0f0f5] md:hidden">
//       <div className="pb-[130px]">
//         {/* ── BREADCRUMB + TITLE ─────────────────────────── */}
//         <div className="bg-white px-4 pb-4 pt-3">
//           <nav className="mb-3 flex items-center gap-1.5 text-[11px] text-neutral-400">
//             <Link
//               href="/"
//               className="flex items-center gap-1 hover:text-neutral-600"
//             >
//               <span>⌂</span> Bosh sahifa
//             </Link>
//             <span className="text-neutral-300">›</span>
//             <Link href="/shopping" className="hover:text-neutral-600">
//               Savat
//             </Link>
//             <span className="text-neutral-300">›</span>
//             <span className="font-semibold text-[#e91e8c]">Buyurtma</span>
//           </nav>

//           <div className="flex items-start justify-between">
//             <div>
//               <h1 className="text-[26px] font-black tracking-tight text-neutral-900">
//                 Buyurtma
//               </h1>
//               <p className="mt-0.5 text-[13px] text-neutral-400">
//                 Ma&apos;lumotlarni to&apos;ldiring
//               </p>
//             </div>
//             {/* Step badge — savat sahifasidagi bag icon uslubida */}
//             <div className="relative">
//               <div className="flex size-11 items-center justify-center rounded-full bg-pink-50">
//                 <span className="text-xl">📋</span>
//               </div>
//               <div className="absolute -right-0.5 -top-0.5 flex size-[18px] items-center justify-center rounded-full bg-[#e91e8c] text-[9px] font-black text-white ring-2 ring-white">
//                 2
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── STEPS ──────────────────────────────────────── */}
//         <div className="mb-2 flex items-center bg-white px-4 py-3">
//           <div className="flex items-center gap-1.5">
//             <div className="flex size-5 items-center justify-center rounded-full bg-[#e91e8c]">
//               <Check size={10} className="text-white" strokeWidth={3} />
//             </div>
//             <span className="text-[11px] font-semibold text-[#e91e8c]">
//               Savat
//             </span>
//           </div>
//           <div className="mx-2 h-[1.5px] flex-1 bg-[#e91e8c]" />
//           <div className="flex items-center gap-1.5">
//             <div className="flex size-5 items-center justify-center rounded-full bg-neutral-900 ring-2 ring-neutral-900 ring-offset-1">
//               <span className="text-[9px] font-bold text-white">2</span>
//             </div>
//             <span className="text-[11px] font-semibold text-neutral-900">
//               Ma&apos;lumot
//             </span>
//           </div>
//           <div className="mx-2 h-[1.5px] flex-1 bg-neutral-200" />
//           <div className="flex items-center gap-1.5">
//             <div className="flex size-5 items-center justify-center rounded-full bg-neutral-200">
//               <span className="text-[9px] font-bold text-neutral-400">3</span>
//             </div>
//             <span className="text-[11px] font-semibold text-neutral-300">
//               Tasdiqlash
//             </span>
//           </div>
//         </div>

//         {/* ── PRODUCT CARDS — savat sahifasiga o'xshash ─── */}
//         {enriched.map((product) => {
//           const basketProduct = basketIds.find((b) => b.id === product._id);
//           const total = product.price * product.count;
//           const discounted = total - total * (product.percent / 100);

//           return (
//             <div
//               key={product._id}
//               className="mx-2.5 mb-2 overflow-hidden rounded-2xl border border-neutral-100 bg-white p-4"
//             >
//               {/* Brand */}
//               <p className="mb-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#e91e8c]">
//                 {product.brand}
//               </p>

//               {/* Top row */}
//               <div className="flex items-start gap-3">
//                 {/* Image */}
//                 <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-neutral-50 p-1">
//                   <Image
//                     src={product.images[0]}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="min-w-0 flex-1">
//                   <p className="text-[15px] font-bold leading-tight tracking-tight text-neutral-900">
//                     {product.name}
//                   </p>
//                   <div className="mt-1.5 flex items-center gap-2">
//                     <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-500">
//                       <ShieldCheck size={11} /> BOR
//                     </span>
//                     <span className="text-[10px] font-semibold uppercase tracking-wider text-[#e91e8c]">
//                       KOD: 11712
//                     </span>
//                   </div>
//                 </div>

//                 {/* Delete */}
//                 <button
//                   onClick={() => dispatch(toggleBasket(product._id))}
//                   className="flex size-[34px] shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-400 transition hover:bg-red-50 hover:text-red-500"
//                 >
//                   <Trash2 size={15} />
//                 </button>
//               </div>

//               {/* Bottom row — qty + price */}
//               <div className="mt-3 flex items-center justify-between">
//                 {/* Qty */}
//                 <div className="flex items-center rounded-xl bg-neutral-100 p-1">
//                   <button
//                     disabled={basketProduct?.count === 1}
//                     onClick={() => dispatch(basketDecre(product._id))}
//                     className="flex size-[30px] items-center justify-center rounded-lg text-[18px] text-neutral-500 transition hover:bg-white disabled:opacity-30"
//                   >
//                     −
//                   </button>
//                   <span className="w-7 text-center text-[15px] font-bold text-neutral-900">
//                     {basketProduct?.count}
//                   </span>
//                   <button
//                     onClick={() => dispatch(basketIncer(product._id))}
//                     className="flex size-[30px] items-center justify-center rounded-lg text-[18px] text-neutral-500 transition hover:bg-white"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Price */}
//                 <div className="text-right">
//                   <p className="text-[20px] font-black leading-none tracking-tight text-[#e91e8c]">
//                     {formatCurrentPrice(
//                       product.price * (basketProduct?.count || 1),
//                       product.percent,
//                     )}
//                     <span className="ml-0.5 text-[11px] font-bold">
//                       {" "}
//                       so&apos;m
//                     </span>
//                   </p>
//                   {product.percent > 0 && (
//                     <p className="mt-0.5 text-[12px] text-neutral-300 line-through">
//                       {(
//                         product.price * (basketProduct?.count || 1)
//                       ).toLocaleString()}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* ── PRICE SUMMARY ──────────────────────────────── */}
//         <div className="mx-2.5 mb-2 overflow-hidden rounded-2xl border border-neutral-100 bg-white">
//           <div className="flex items-center justify-between border-b border-neutral-50 px-4 py-3">
//             <span className="text-[13px] text-neutral-500">
//               Mahsulotlar ({totalItems} ta)
//             </span>
//             <span className="text-[13px] font-semibold text-neutral-900">
//               {subtotal.toLocaleString()} so&apos;m
//             </span>
//           </div>
//           {totalDiscount > 0 && (
//             <div className="flex items-center justify-between border-b border-neutral-50 px-4 py-3">
//               <span className="text-[13px] text-neutral-500">Chegirma</span>
//               <span className="text-[13px] font-semibold text-green-500">
//                 − {totalDiscount.toLocaleString()} so&apos;m
//               </span>
//             </div>
//           )}
//           <div className="flex items-center justify-between border-b border-neutral-50 px-4 py-3">
//             <span className="flex items-center gap-1.5 text-[13px] text-neutral-500">
//               <Truck size={12} /> Yetkazib berish
//             </span>
//             <span
//               className={`text-[13px] font-semibold ${freeShip ? "text-green-500" : "text-neutral-900"}`}
//             >
//               {freeShip ? "Bepul" : "50 000 so'm"}
//             </span>
//           </div>
//           <div className="flex items-center justify-between bg-neutral-50 px-4 py-3.5">
//             <span className="text-[14px] font-bold text-neutral-900">Jami</span>
//             <span className="text-[16px] font-black text-neutral-900">
//               {finalPrice.toLocaleString()} so&apos;m
//             </span>
//           </div>
//         </div>

//         {/* ── FORM ───────────────────────────────────────── */}
//         <Form {...form}>
//           <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)}>
//             <div className="mx-2.5 mb-2 rounded-2xl border border-neutral-100 bg-white p-4">
//               <h2 className="mb-4 text-[17px] font-black tracking-tight text-neutral-900">
//                 Ma&apos;lumotlar
//               </h2>

//               {/* fullName */}
//               <FormField
//                 control={form.control}
//                 name="fullName"
//                 render={({ field }) => (
//                   <FormItem className="mb-3 space-y-0">
//                     <FormLabel className={labelCls}>
//                       To&apos;liq ism <span className="text-[#e91e8c]">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Alisher Alisherov"
//                         className={inputCls}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
//                   </FormItem>
//                 )}
//               />

//               {/* phone */}
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem className="mb-3 space-y-0">
//                     <FormLabel className={labelCls}>
//                       Telefon <span className="text-[#e91e8c]">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <InputMask
//                         mask="+\9\9\8 (99) 999-99-99"
//                         value={field.value}
//                         onChange={field.onChange}
//                         onBlur={field.onBlur}
//                       >
//                         {(p) => (
//                           <input
//                             {...p}
//                             name={field.name}
//                             ref={field.ref}
//                             type="tel"
//                             placeholder="+998 (__) ___-__-__"
//                             className="h-12 w-full rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-[#e91e8c] focus:bg-white"
//                           />
//                         )}
//                       </InputMask>
//                     </FormControl>
//                     <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
//                   </FormItem>
//                 )}
//               />

//               {/* region */}
//               <FormField
//                 control={form.control}
//                 name="region"
//                 render={({ field }) => (
//                   <FormItem className="mb-3 space-y-0">
//                     <FormLabel className={labelCls}>
//                       Viloyat <span className="text-[#e91e8c]">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Toshkent shahri"
//                         className={inputCls}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
//                   </FormItem>
//                 )}
//               />

//               {/* city */}
//               <FormField
//                 control={form.control}
//                 name="city"
//                 render={({ field }) => (
//                   <FormItem className="mb-3 space-y-0">
//                     <FormLabel className={labelCls}>
//                       Tuman / Mahalla <span className="text-[#e91e8c]">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Yunusobod tumani"
//                         className={inputCls}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
//                   </FormItem>
//                 )}
//               />

//               {/* comment */}
//               <FormField
//                 control={form.control}
//                 name="comment"
//                 render={({ field }) => (
//                   <FormItem className="space-y-0">
//                     <FormLabel className={labelCls}>Izoh</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Dom kodi, qavat yoki boshqa ma'lumot..."
//                         className="min-h-[60px] resize-none rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 py-3 text-[15px] text-neutral-900 shadow-none ring-0 transition-colors placeholder:text-neutral-300 focus-visible:border-[#e91e8c] focus-visible:bg-white focus-visible:ring-0"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </form>
//         </Form>
//       </div>

//       {/* ── FIXED BOTTOM — savat sahifasiga o'xshash ──────── */}
//       <div className="bg-white/96 fixed inset-x-0 bottom-0 z-30 border-t border-neutral-100 px-4 py-3 pb-8 backdrop-blur-md">
//         <div className="flex items-center justify-between gap-3">
//           {/* Price col */}
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-neutral-400">
//               Jami:
//             </p>
//             {totalDiscount > 0 && (
//               <p className="text-[11px] text-neutral-300 line-through">
//                 {subtotal.toLocaleString()} so&apos;m
//               </p>
//             )}
//             <p className="text-[20px] font-black leading-tight tracking-tight text-neutral-900">
//               {finalPrice.toLocaleString()}
//               <span className="ml-1 text-[11px] font-bold uppercase italic text-[#e91e8c]">
//                 so&apos;m
//               </span>
//             </p>
//           </div>

//           {/* Button — savat sahifasidagi BUYURTMA tugmasi uslubida */}
//           <button
//             type="submit"
//             form="checkout-form"
//             className="flex h-[50px] shrink-0 items-center gap-2 rounded-full bg-[#e91e8c] px-6 transition-all active:scale-[0.97]"
//           >
//             <span className="text-[13px] font-black uppercase tracking-widest text-white">
//               Buyurtma
//             </span>
//             <div className="flex size-[26px] items-center justify-center rounded-full bg-white/25">
//               <span className="text-[14px] text-white">→</span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Check, Truck } from "lucide-react";
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

const labelCls = "mb-1.5 block text-[12px] font-semibold text-neutral-500";
const inputCls =
  "h-11 rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 text-[14px] text-neutral-900 shadow-none ring-0 placeholder:text-neutral-300 transition-colors focus-visible:border-[#e91e8c] focus-visible:bg-white focus-visible:ring-0";

export default function CheckoutMobile({ products }: Props) {
  const user = useSelector((s: RootState) => s.user.user);
  const basketIds = useSelector((s: RootState) => s.baskets.basketIds);
  const dispatch = useDispatch();
  const router = useRouter();

  const enriched = products.map((p) => {
    const item = basketIds.find((b) => b.id === p._id);
    return { ...p, count: item?.count || 1 };
  });

  const totalItems = enriched.reduce((a, p) => a + p.count, 0);
  const subtotal = enriched.reduce((a, p) => a + p.price * p.count, 0);
  const totalDiscount = enriched.reduce(
    (a, p) => a + p.price * (p.percent / 100) * p.count,
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
      const orderProducts = enriched.map((p) => ({
        productId: p._id,
        count: p.count,
        proTotalPrice: (p.price - (p.price * p.percent) / 100) * p.count,
        onePrice: p.price - (p.price * p.percent) / 100,
      }));

      const res = await createOrder({
        ...values,
        products: orderProducts,
        totalDiscount,
        totalPrice: finalPrice,
      });

      console.log("CREATE ORDER RES:", res);
      if (res?.validationErrors) {
        console.log(res.validationErrors);
        return toast.error("Validation xatolik bor");
      }
      if (res?.serverError) {
        console.log(res.serverError);
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
    <div className="relative min-h-screen md:hidden">
      <div className="pb-40">
        {/* ═══ BITTA KATTA CARD ══════════════════════════════════════════════ */}
        <div className="mx-2.5 mt-2.5 overflow-hidden rounded-2xl border border-neutral-100 bg-white">
          {/* ── Breadcrumb ───────────────────────────────────────────────── */}
          <div className="px-4 pt-4">
            <nav className="mb-3 flex items-center gap-1.5 text-[10px] text-neutral-400">
              <Link href="/" className="hover:text-neutral-600">
                ⌂ Bosh sahifa
              </Link>
              <span className="text-neutral-300">›</span>
              <Link href="/shopping" className="hover:text-neutral-600">
                Savat
              </Link>
              <span className="text-neutral-300">›</span>
              <span className="font-semibold text-[#e91e8c]">Buyurtma</span>
            </nav>

            {/* ── Title ──────────────────────────────────────────────────── */}
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h1 className="text-[24px] font-black tracking-tight text-neutral-900">
                  Buyurtma
                </h1>
                <p className="mt-0.5 text-[12px] text-neutral-400">
                  Ma&apos;lumotlarni to&apos;ldiring
                </p>
              </div>
              <div className="relative">
                <div className="flex size-10 items-center justify-center rounded-full bg-pink-50 text-lg">
                  📋
                </div>
                <div className="absolute -right-0.5 -top-0.5 flex size-[17px] items-center justify-center rounded-full bg-[#e91e8c] text-[8px] font-black text-white ring-2 ring-white">
                  2
                </div>
              </div>
            </div>

            {/* ── Steps ──────────────────────────────────────────────────── */}
            <div className="mb-4 flex items-center border-b border-neutral-50 pb-4">
              <div className="flex items-center gap-1">
                <div className="flex size-[18px] items-center justify-center rounded-full bg-[#e91e8c]">
                  <Check size={9} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-[10px] font-semibold text-[#e91e8c]">
                  Savat
                </span>
              </div>
              <div className="mx-2 h-[1.5px] flex-1 bg-[#e91e8c]" />
              <div className="flex items-center gap-1">
                <div className="flex size-[18px] items-center justify-center rounded-full bg-teal-500 ring-1 ring-emerald-300 ring-offset-[1.5px]">
                  <span className="text-[8px] font-bold text-white">2</span>
                </div>
                <span className="text-[10px] font-semibold text-neutral-900">
                  Ma&apos;lumot
                </span>
              </div>
              <div className="mx-2 h-[1.5px] flex-1 bg-neutral-100" />
              <div className="flex items-center gap-1">
                <div className="flex size-[18px] items-center justify-center rounded-full bg-neutral-100">
                  <span className="text-[8px] font-bold text-neutral-400">
                    3
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-neutral-300">
                  Tastiqlandi
                </span>
              </div>
            </div>
          </div>

          {/* ── Products — ixcham list ────────────────────────────────────── */}
          <div className="flex items-center justify-between px-4 pb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-400">
              Buyurtmangiz
            </span>
            <span className="rounded-full bg-[#e91e8c] px-2 py-0.5 text-[9px] font-black text-white">
              {totalItems} ta
            </span>
          </div>

          <div className="divide-y divide-neutral-50 border-b border-neutral-100">
            {enriched.map((p) => {
              const total = p.price * p.count;
              const discounted = total - total * (p.percent / 100);
              return (
                <div
                  key={p._id}
                  className="flex items-center gap-2.5 px-4 py-2.5"
                >
                  {/* Image */}
                  <div className="relative size-10 shrink-0">
                    <div className="size-10 overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="absolute -right-1 -top-1 flex min-w-[14px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[7px] font-black leading-[14px] text-white">
                      ×{p.count}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-black uppercase tracking-wide text-[#e91e8c]">
                      {p.brand}
                      {p.percent > 0 && (
                        <span className="ml-1.5 rounded bg-red-50 px-1 py-px font-black text-red-500">
                          −{p.percent}%
                        </span>
                      )}
                    </p>
                    <p className="truncate text-[12px] font-semibold text-neutral-900">
                      {p.name}
                    </p>
                  </div>
                  {/* Price */}
                  <div className="shrink-0 text-right">
                    <p className="text-[13px] font-black text-[#e91e8c]">
                      {discounted.toLocaleString()}
                    </p>
                    {p.percent > 0 && (
                      <p className="text-[10px] text-neutral-300 line-through">
                        {total.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Price Summary ────────────────────────────────────────────── */}
          <div className="mx-4 my-3 overflow-hidden rounded-xl bg-neutral-50">
            <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
              <span className="text-[12px] text-neutral-500">
                Jami ({totalItems} ta mahsulot)
              </span>
              <span className="text-[12px] font-semibold text-neutral-900">
                {subtotal.toLocaleString()} so&apos;m
              </span>
            </div>
            {totalDiscount > 0 && (
              <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
                <span className="text-[12px] text-neutral-500">Chegirma</span>
                <span className="text-[12px] font-semibold text-green-500">
                  − {totalDiscount.toLocaleString()} so&apos;m
                </span>
              </div>
            )}
            <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
              <span className="flex items-center gap-1 text-[12px] text-neutral-500">
                <Truck size={11} /> Yetkazib berish
              </span>
              <span
                className={`text-[12px] font-semibold ${freeShip ? "text-green-500" : "text-neutral-900"}`}
              >
                {freeShip ? "Bepul" : "50 000 so'm"}
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-100/70 px-3 py-2.5">
              <span className="text-[13px] font-bold text-neutral-900">
                To&apos;lash kerak
              </span>
              <span className="text-[14px] font-black text-neutral-900">
                {finalPrice.toLocaleString()} so&apos;m
              </span>
            </div>
          </div>

          {/* ── Form ─────────────────────────────────────────────────────── */}
          <div className="border-t border-neutral-100 px-4 pt-3">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-400">
              Ma&apos;lumotlar
            </p>
          </div>

          <Form {...form}>
            <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-3 px-4 pb-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className={labelCls}>
                        To&apos;liq ism{" "}
                        <span className="text-[#e91e8c]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Alisher Alisherov"
                          className={inputCls}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className={labelCls}>
                        Telefon <span className="text-[#e91e8c]">*</span>
                      </FormLabel>
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
                              className="h-11 w-full rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 text-[14px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-[#e91e8c] focus:bg-white"
                            />
                          )}
                        </InputMask>
                      </FormControl>
                      <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className={labelCls}>
                        Viloyat <span className="text-[#e91e8c]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Toshkent shahri"
                          className={inputCls}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className={labelCls}>
                        Tuman / Mahalla{" "}
                        <span className="text-[#e91e8c]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Yunusobod tumani"
                          className={inputCls}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormLabel className={labelCls}>Izoh</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Dom kodi, qavat yoki boshqa ma'lumot..."
                          className="min-h-[56px] resize-none rounded-xl border-[1.5px] border-transparent bg-neutral-100 px-3.5 py-2.5 text-[14px] text-neutral-900 shadow-none ring-0 transition-colors placeholder:text-neutral-300 focus-visible:border-[#e91e8c] focus-visible:bg-white focus-visible:ring-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-[11px] font-semibold text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        {/* ═══ CARD TUGADI ═══════════════════════════════════════════════════ */}
      </div>

      {/* ── FIXED BOTTOM — savat sahifasiga o'xshash ──────────────────────── */}
      {/* <div className="bg-white/97 fixed inset-x-0 bottom-0 z-30 border-t border-neutral-100 px-4 py-3 pb-7 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-neutral-400">
              Jami:
            </p>
            {totalDiscount > 0 && (
              <p className="text-[10px] text-neutral-300 line-through">
                {subtotal.toLocaleString()} so&apos;m
              </p>
            )}
            <p className="text-[19px] font-black leading-tight tracking-tight text-neutral-900">
              {finalPrice.toLocaleString()}
              <span className="ml-1 text-[10px] font-bold uppercase italic text-[#e91e8c]">
                so&apos;m
              </span>
            </p>
          </div>

          <button
            type="submit"
            form="checkout-form"
            className="flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#e91e8c] px-5 transition-all active:scale-[0.97]"
          >
            <span className="text-[12px] font-black uppercase tracking-widest text-white">
              Buyurtma
            </span>
            <div className="flex size-[24px] items-center justify-center rounded-full bg-white/25 text-[13px] text-white">
              →
            </div>
          </button>
        </div>
      </div> */}
      <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
        {/* Orqa fon blur (Glassmorphism) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

        <div className="relative overflow-hidden rounded-[28px] border border-neutral-100 bg-white/95 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col pl-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">
                  Jami:
                </span>
                {totalDiscount > 0 && (
                  <span className="text-[8px] font-bold text-pink-500 line-through decoration-1">
                    {subtotal.toLocaleString()} so&apos;m
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-xl font-[1000] tracking-tighter text-neutral-950">
                  {finalPrice.toLocaleString()}
                </span>
                <span className="text-[10px] font-black uppercase italic text-pink-600">
                  so&apos;m
                </span>
              </div>
            </div>

            <button
              form="checkout-form"
              type="submit"
              className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-[20px] bg-emerald-600 px-4 text-white shadow-lg shadow-neutral-200 transition-all hover:bg-teal-600 active:scale-95"
            >
              {/* Animatsiyali fon */}

              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-widest">
                  Buyurtma berish
                </span>
                <div className="flex size-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* iPhone Home Indicator uchun bo'sh joy (Safe Area) */}
        <div className="h-2" />
      </div>
    </div>
  );
}
