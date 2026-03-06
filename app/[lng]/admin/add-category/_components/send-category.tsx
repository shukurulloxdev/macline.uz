"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addCategorySchema } from "@/lib/validation";
import { Save, Rocket, ImagePlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { createCategory } from "@/actions/admin-actions";
import { generateSlug } from "@/lib/utils";

function SendCategory() {
  const [image, setImage] = useState<string>();
  const form = useForm<z.infer<typeof addCategorySchema>>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      title: "",
      seoTitle: "",
      seoDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addCategorySchema>) {
    if (!image) {
      return toast.error("Iltimos rasim kiriting 🖼️");
    }
    const slug = generateSlug(values.title);

    const newData = {
      ...values,
      slug,
      image,
    };

    const res = createCategory(newData);

    const data = await res;
    console.log(data);

    toast.promise(res, {
      success: "Muvaffaqiyatli qo'shildi ✅",
      error: "Hato yuz berdi ❌, Boshidan yuboring",
      loading: "Iltimos kuting, Yuklanmoqda... 👀",
    });

    form.reset();
    setImage("");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="font-sora text-4xl font-black uppercase italic tracking-tighter text-white">
              Yangi <span className="not-italic text-blue-400">Kategoriya</span>{" "}
              Qoshish
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Tizimga yangi kategoriya kiriting. Bu orqali mahsulotlarni
              Tizimlashtirasiz!
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
              <div className="col-span-2 rounded-2xl bg-white/5 p-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        Kategoriya nomi
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Kir yuvish mashinalar"
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
                  name="seoTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        SEO uchun nom
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-white/20"
                          {...field}
                          placeholder="Kir yuvish mashinalari – Eng yangi modellari"
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
                  name="seoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-lg font-bold text-white">
                        SEO uchun batafsil tavsif
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-pink-500"
                          {...field}
                          placeholder="Kir yuvish mashinalari bo‘limida LG, Samsung, Artel va boshqa mashhur brendlarning eng yangi modellari. Eng yaxshi narxlar Texnotech’da."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
            {!image && (
              <UploadDropzone
                className="h-[210px] w-full cursor-pointer"
                config={{ appendOnPaste: true, mode: "auto" }}
                appearance={{
                  container: {
                    border: "2px dotted white",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    padding: "1rem",
                  },
                  button: {
                    backgroundColor: "blue",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "0.5rem",
                    fontWeight: "bold",
                    position: "relative",
                    overflow: "hidden", // nuqtani yashirish uchun
                  },
                  uploadIcon: {
                    color: "white",
                    fontSize: "50px",
                    width: "50px",
                    height: "50px",
                  },
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0] && res[0].ufsUrl) {
                    setImage(res[0].ufsUrl);
                  } else {
                    toast.error("Hato yuz berdi ❌");
                  }
                }}
                onUploadError={(error) => {
                  console.error("Upload error:", error);
                  alert("❌ Rasim yuklanmadi");
                }}
              />
            )}

            {image && (
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={image}
                  fill
                  className="rounded-xl object-cover"
                />
                <span
                  className="absolute right-1 top-1 cursor-pointer rounded-sm bg-red-600/80 p-1 text-white hover:scale-105 hover:bg-red-600 hover:shadow-sm active:scale-95"
                  onClick={() => setImage("")}
                >
                  <X size={16} />
                </span>
              </div>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SendCategory;
