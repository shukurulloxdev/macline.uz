"use client";
import { createOrder } from "@/actions/order-actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputMask from "react-input-mask";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { orderSchema } from "@/lib/validation";
import { removeBasketIds } from "@/redux/reducers/basketState";
import { RootState } from "@/redux/store";
import { IProduct } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Home, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import z from "zod";
import { useRouter } from "next/navigation";

interface Props {
  products: IProduct[];
}

export default function CheckoutForm({ products }: Props) {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const basketIds = useSelector((state: RootState) => state.baskets.basketIds);

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

      if (!res?.data) {
        return toast.error("Data kelmadi");
      }

      if (res.data === null) {
        return toast.error("User yo'q");
      }

      if (res.data.failure) {
        return toast.error(res.data.failure);
      }

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
  // Common input styles for reuse
  const inputStyles =
    "h-12 rounded-xl border-none bg-neutral-50 px-6 text-sm font-bold text-neutral-900 ring-1 ring-neutral-100 transition-all focus-visible:ring-2 focus-visible:ring-pink-500/30 focus-visible:bg-white placeholder:text-neutral-300";
  const labelStyles =
    "ml-1 text-[10px] font-black uppercase tracking-widest text-neutral-600";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      <div className="flex flex-col gap-3 border-b border-neutral-100 pb-4">
        <nav className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
          <Link
            href={"/"}
            className="flex items-center gap-1 transition-colors hover:text-neutral-900"
          >
            <Home size={13} />
            <span>Bosh sahifa</span>
          </Link>
          <ChevronRight size={10} />
          <span className="italic text-pink-500">Rasmiylashtirish</span>
        </nav>
        <h1 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
          Xarid uchun{"  "}
          <span className="not-italic text-pink-600 underline decoration-pink-100 decoration-8 underline-offset-[-2px]">
            ma&apos;lumotlarni kiriting
          </span>
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className={labelStyles}>
                      To&apos;liq ismingiz
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Alisher Alisherov"
                        className={inputStyles}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] font-bold text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className={labelStyles}>
                      Telefon raqamingiz
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300"
                        />
                        {/* <InputMask
                          mask="+\9\9\8 (99) 999-99-99"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        >
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              type="tel"
                              placeholder="+998 (__) ___ __ __"
                              className="h-14 w-full rounded-2xl bg-neutral-100 pl-12 pr-4 text-sm font-bold outline-none ring-2 ring-transparent transition-all placeholder:font-medium focus:bg-white focus:ring-pink-100"
                            />
                          )}
                        </InputMask> */}
                        <InputMask
                          mask="+\9\9\8 (99) 999-99-99"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        >
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              name={field.name}
                              ref={field.ref}
                              type="tel"
                              placeholder="+998 (__) ___ __ __"
                              className="h-14 w-full rounded-2xl bg-neutral-100 pl-12 pr-4 text-sm font-bold outline-none ring-2 ring-transparent transition-all placeholder:font-medium focus:bg-white focus:ring-pink-100"
                            />
                          )}
                        </InputMask>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[10px] font-bold text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className={labelStyles}>Viloyatingiz</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Toshkent shahri"
                      className={inputStyles}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className={labelStyles}>
                    Hududingiz (Tuman, mahalla)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Yunusobod tumani"
                      className={inputStyles}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] font-bold text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className={labelStyles}>
                  Buyurtma uchun eslatma majburiy emas
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Masalan: Dom kodi 123, pod’ezd orqasida..."
                    className="min-h-[60px] resize-none rounded-2xl border-none bg-neutral-50 p-6 text-sm font-bold text-neutral-900 ring-1 ring-neutral-100 transition-all placeholder:text-neutral-300 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-pink-500/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold text-red-500" />
              </FormItem>
            )}
          />

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <Button
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-2xl bg-pink-600 transition-all hover:bg-pink-700 active:scale-[0.98]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white">
                <span>Buyurtmani tasdiqlash</span>
                <Send
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </Button>
            <p className="mt-4 text-center text-[10px] font-bold text-neutral-400">
              Buyurtmangiz tasdiqlangandan so&apos;ng operatorimiz aloqaga
              chiqadi.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
