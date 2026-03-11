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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ImagePlus, Rocket, Save, Sparkles } from "lucide-react";
import UploadImg from "./upload-img";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner";
import { createProduct } from "@/actions/admin-actions";

function InputInformation() {
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
          <div className="space-y-2">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles size={12} className="text-pink-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                Inventarizatsiya
              </span>
            </div>
            <h1 className="font-sora text-4xl font-black uppercase italic tracking-tighter text-white">
              Yangi <span className="not-italic text-pink-600">Texnika</span>{" "}
              Qoshish
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Tizimga yangi mahsulot malumotlarini kiriting.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              className="h-14 rounded-2xl border border-white/5 bg-white/5 px-6 font-bold text-white hover:bg-white/10 hover:text-pink-400"
            >
              <Save className="mr-2 size-4" /> Bekor qilish
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
              <div className="rounded-2xl bg-white/5 p-4">
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
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Mahsuloting toliq nomi"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Mahsulot toifasi
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Mahsulot toifasi"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 rounded-2xl bg-white/5 p-4">
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
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-white/20"
                          {...field}
                          placeholder="Mahsulotning barcha malumoti"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
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
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Brend nomi"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
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
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Mahsulot narxi"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-4 rounded-2xl bg-white/5 p-4">
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
                              className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
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
          <div className="space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6">
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
