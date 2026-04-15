"use client";

import { addProductSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { removeAllImages } from "@/redux/reducers/imageState";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Ban, ImagePlus, Rocket } from "lucide-react";
import UploadImg from "./upload-img";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner";
import { createProduct } from "@/actions/admin-actions";
import { ICategory } from "@/types";

interface Props {
  activeCategories: ICategory[];
}

function InputInformation({ activeCategories }: Props) {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.pictures.images);

  const defaultValues: z.infer<typeof addProductSchema> = {
    name: "",
    category: "",
    description: "",
    brand: "",
    price: "",
    top: false,
    discount: false,
    percent: "",
    kafolat: "",
    count: "",
  };
  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues,
  });

  const isDiscount = form.watch("discount");

  async function onSubmit(values: z.infer<typeof addProductSchema>) {
    if (images.length === 0) {
      return toast.error("Iltimos mahsulot rasmini yuklang!");
    }

    const res = createProduct({ ...values, images });
    const newData = await res;
    console.log(newData.data);
    toast.promise(res, {
      success: "Muvaffaqiyatli qo'shildi ✅",
      error: "Hato yuz berdi ❌, Boshidan yuboring",
      loading: "Iltimos kuting, Yuklanmoqda... 👀",
    });

    form.reset(defaultValues);
    dispatch(removeAllImages());
  }
  const price = Number(form.watch("price") || 0);
  const percent = Number(form.watch("percent") || 0);

  const chegirmadagiSumma = price - (price * percent) / 100;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="font-sora text-4xl font-black uppercase italic tracking-tighter text-white">
              Yangi <span className="not-italic text-pink-600"> Mahsulot</span>{" "}
              Qoshish
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Tizimga yangi mahsulot malumotlarini kiriting.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => form.reset(defaultValues)}
              type="button"
              variant="ghost"
              className="h-14 rounded-2xl border border-white/5 bg-white/[0.04] px-6 font-bold text-white hover:bg-white/10 hover:text-pink-400"
            >
              <Ban className="mr-1 size-4" /> Bekor qilish
            </Button>
            <Button
              type="submit"
              className="group h-14 rounded-2xl bg-blue-600 px-10 font-black uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95"
            >
              <Rocket className="mr-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Saytga yuklash
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 items-start gap-4 max-md:grid-cols-1">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Mahsulot nomi
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Mahsuloting toliq nomi"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Mahsulot kategoriyasi
                      </FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-white/20 bg-white/10 font-manrope font-semibold text-pink-300 focus:border-indigo-500 data-[placeholder]:font-inter data-[placeholder]:font-normal data-[placeholder]:text-slate-400">
                            <SelectValue placeholder="Kategoriyalardan birini tanlang" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent className="border border-white/50 bg-black/20 text-white backdrop-blur-3xl">
                          {activeCategories.map((category) => (
                            <SelectItem
                              key={category._id}
                              value={category.slug}
                              className="cursor-pointer focus:bg-blue-600/30 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                            >
                              {category.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Mahsulot tavsifi
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-white/20"
                          {...field}
                          placeholder="Mahsulotning barcha malumoti"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="items-start rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Mahsulot brendi
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Masalan: Iphone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="kafolat"
                  render={({ field }) => {
                    const rawNumber = (field.value || "").replace(/\D/g, "");

                    const setKafolatUnit = (unit: "Oy" | "Yil") => {
                      if (!rawNumber) return;
                      form.setValue("kafolat", `${rawNumber} ${unit}`, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    };

                    return (
                      <FormItem>
                        <FormLabel className="font-inter text-lg font-bold text-white">
                          Kafolat muddati
                        </FormLabel>

                        <FormControl>
                          <Input
                            className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                            value={field.value}
                            onChange={(e) => {
                              const value = e.target.value;

                              // Faqat raqam qismini yozishga ruxsat beramiz
                              const numberOnly = value.replace(/\D/g, "");
                              field.onChange(numberOnly);
                            }}
                            placeholder="Masalan: 10"
                          />
                        </FormControl>

                        {rawNumber && (
                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              onClick={() => setKafolatUnit("Oy")}
                              className="rounded-xl border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300 transition-all hover:bg-pink-500/20 active:scale-95"
                            >
                              Oy
                            </button>

                            <button
                              type="button"
                              onClick={() => setKafolatUnit("Yil")}
                              className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/20 active:scale-95"
                            >
                              Yil
                            </button>
                          </div>
                        )}

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="count"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Ushbu mahsulot soni
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Masalan: 20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        {!form.watch("price")
                          ? "Mahsulot narxi"
                          : `Narxi: ${formatPrice(
                              Number(form.watch("price")),
                            )}`}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Masalan: 3000000"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-4 rounded-2xl bg-white/[0.04] p-4">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="top"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="size-6 !rounded-sm border-2 border-blue-500 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                            />
                          </FormControl>
                          <FormLabel className="font-inter text-lg font-bold text-white">
                            Top ga kiritilsinmi ?
                          </FormLabel>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                              }}
                              className="size-6 !rounded-sm border-2 border-blue-500 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                            />
                          </FormControl>
                          <FormLabel className="font-inter text-lg font-bold text-white">
                            Chegirma berilsinmi ?
                          </FormLabel>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {isDiscount === true && (
                  <div className="">
                    <FormField
                      control={form.control}
                      name="percent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-lg font-bold text-white">
                            {form.watch("percent")
                              ? `	Chegirma bilan: ${formatPrice(
                                  chegirmadagiSumma,
                                )}`
                              : "	Chegirma foizi"}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                              {...field}
                              placeholder="Chegirma foizini kiriting %"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/20 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-2 font-inter text-lg font-bold text-white">
                <span>Rasim yuklash</span>
                <ImagePlus size={20} />
              </h1>
            </div>
            <UploadImg />
          </div>
        </div>
      </form>
    </Form>
  );
}

export default InputInformation;
