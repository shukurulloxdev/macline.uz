"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IProduct } from "@/types";
import {
  Save,
  X,
  Tag,
  Package,
  DollarSign,
  ChevronLeft,
  Edit2,
  Trash,
  Repeat,
  Images,
  ArrowRight,
  Repeat2,
  ImageUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { formatCurrentPrice } from "@/lib/utils";
import { adminProductUpdate } from "@/actions/admin-actions";
import { toast } from "sonner";
import { UploadDropzone } from "@/lib/uploadthing";

interface Props {
  product: IProduct;
  categories: { title: string; slug: string }[];
}

export default function ProductEditForm({ product, categories }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [images, setImages] = useState<string[]>(product.images);
  // New image
  const [newImage, setNewImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //

  const [form, setForm] = useState({
    name: product.name,
    description: product.description,
    brand: product.brand,
    price: String(product.price),
    percent: String(product.percent),
    category: product.category,
    top: product.top,
    discount: product.discount,
    active: product.active,
  });

  const isChanged =
    form.name !== product.name ||
    form.description !== product.description ||
    form.brand !== product.brand ||
    form.price !== String(product.price) ||
    form.percent !== String(product.percent) ||
    form.category !== product.category ||
    form.top !== product.top ||
    form.discount !== product.discount ||
    form.active !== product.active;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function replacementImage() {
    const updatedImages = images.map((image) =>
      image === oldImage ? newImage : image,
    );

    // State ni yangilang
    setImages(updatedImages);

    // Yangi images ni yuboring
    const res = await adminProductUpdate({
      id: product._id,
      images: updatedImages, // ← yangi images
    });

    if (res.serverError) return console.log(res.serverError);

    if (res.data?.status === 200) {
      setIsOpen(false);
      setNewImage("");
      setOldImage("");
      toast.success("Rasim yangilandi ✅");
    }
  }

  async function editInformations() {
    try {
      if ((form.discount && form.percent === "0") || form.percent === "") {
        return confirm(
          "Chegirma berilgandan so'ng, Foyiz(%) ham berilishi shart❗️",
        );
      }
      const res = await adminProductUpdate({
        id: product._id,
        ...form,
        price: Number(form.price),
        percent: Number(form.percent),
      });

      if (res.serverError) {
        console.log(res.serverError);
      }
      if (res.data?.status === 200) {
        toast.success("Mahsulot yangilandi ✅");
        setIsEdit(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteImage(deletedImage: string) {
    try {
      if (images.length === 1) {
        return toast.error("Hamma rasimni o'chirib bo'lmaydi 🙅‍♂️");
      }

      const isDeleted = confirm("Haqiqatan ham rasimni o'chirmoqchimisiz 🚮");
      if (!isDeleted) return;

      const newImage = images.filter((image) => image !== deletedImage);

      setImages(newImage);

      const res = await adminProductUpdate({
        id: product._id,
        images: newImage,
      });

      if (res.serverError) {
        console.log(res.serverError);
      }
      if (res.data?.status === 200) {
        toast.success("Rasim o'chirildi 🗑️");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const inputClass = `${isEdit ? "text-white" : "text-neutral-300"} w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium  outline-none placeholder:text-white/20 transition-all focus:border-pink-500/50 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/10`;
  const labelClass =
    "mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-white/80";

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="space-y-3">
            <Link
              href="/admin/products"
              className="group flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/20 transition-colors hover:text-white"
            >
              <ChevronLeft
                size={12}
                className="transition-transform group-hover:-translate-x-1"
              />
              Mahsulotlar
            </Link>
            <h1 className="font-sora text-4xl font-black uppercase italic tracking-tight text-white">
              Mahsulotni <span className="text-pink-500">tahrirlash</span>
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              className="group h-[52px] rounded-2xl border border-white/30 bg-white/5 px-6 text-[13px] font-bold text-white hover:bg-white/10 hover:text-red-500"
            >
              <Trash className="mr-1 size-4 transition-transform group-hover:rotate-12" />
              O&apos;chirish
            </Button>
            {isEdit ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setForm({
                      name: product.name,
                      description: product.description,
                      brand: product.brand,
                      price: String(product.price),
                      percent: String(product.percent),
                      category: product.category,
                      top: product.top,
                      discount: product.discount,
                      active: product.active,
                    });
                    setImages(product.images);
                  }}
                  className="group flex h-[52px] items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 text-[12px] font-black uppercase tracking-widest text-white/60 transition-all hover:bg-white/10 active:scale-95"
                >
                  <X size={15} className="group-hover:rotate-180" />
                  Bekor
                </button>
                {isChanged && (
                  <button
                    onClick={editInformations}
                    className="group flex h-[52px] items-center gap-2.5 rounded-2xl bg-blue-600 px-7 text-[12px] font-black uppercase tracking-[0.15em] text-white shadow-xl transition-all active:scale-95"
                  >
                    {" "}
                    <Save
                      size={15}
                      className="mr-1 size-4 transition-transform group-hover:rotate-12"
                    />
                    Saqlash
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="group flex h-[52px] items-center gap-2.5 rounded-2xl bg-white px-7 text-[12px] font-black uppercase tracking-[0.15em] text-black shadow-xl transition-all hover:bg-neutral-200 active:scale-95"
              >
                <Edit2
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:rotate-12"
                />
                <span>Tahrirlash</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-pink-500/10">
                  <Package size={15} className="text-pink-400" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-white">
                  Umumiy ma&apos;lumotlar
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Mahsulot nomi</label>
                  <input
                    disabled={!isEdit}
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Mahsulot nomi"
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Mahsulot Brendi</label>
                    <input
                      disabled={!isEdit}
                      value={form.brand}
                      onChange={(e) => handleChange("brand", e.target.value)}
                      placeholder="Samsung, Apple..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Kategoriya </label>
                    <select
                      disabled={!isEdit}
                      value={form.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className={`${inputClass} cursor-pointer`}
                    >
                      {categories.map((cat) => (
                        <option
                          key={cat.slug}
                          value={cat.slug}
                          className="bg-neutral-900 text-white"
                        >
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Tavsif</label>
                  <textarea
                    disabled={!isEdit}
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Mahsulot haqida batafsil..."
                    rows={5}
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-amber-500/10">
                  <Tag size={15} className="text-amber-400" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-white">
                  Texnik Sozlamalar
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: "active", label: "Faol", desc: "Saytda ko'rinadi" },
                  { key: "top", label: "Top", desc: "Bosh sahifada chiqadi" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                      form[item.key as keyof typeof form]
                        ? "border-emerald-500/40 bg-emerald-500/20"
                        : "border-pink-500/30 bg-pink-500/10"
                    }`}
                  >
                    <Label htmlFor={item.key} className="cursor-pointer">
                      <p className="text-sm font-bold text-white">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-white/30">{item.desc}</p>
                    </Label>

                    <Switch
                      disabled={!isEdit}
                      id={item.key}
                      checked={form[item.key as keyof typeof form] as boolean}
                      onCheckedChange={(val) => handleChange(item.key, val)}
                      className="data-[state=checked]:bg-pink-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── O'NG — Narx, Kategoriya, Sozlamalar ── */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Images size={15} className="text-emerald-400" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-white">
                  Rasmlar
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((image) => (
                  <div
                    className="group relative aspect-square w-full"
                    key={image}
                  >
                    {" "}
                    <Image
                      src={image}
                      alt={image}
                      className="rounded-sm object-cover group-hover:brightness-50"
                      fill
                    />{" "}
                    <div
                      onClick={() => {
                        setOldImage(image);
                        setIsOpen(true);
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {" "}
                      <div className="cursor-pointer rounded-full bg-white p-2 opacity-0 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 group-hover:opacity-100">
                        {" "}
                        <Repeat className="size-5" />{" "}
                      </div>{" "}
                    </div>{" "}
                    <button
                      onClick={() => deleteImage(image)}
                      className="absolute right-[2px] top-[2px] cursor-pointer rounded-[5px] bg-red-600 p-[3px] opacity-0 transition-all duration-200 hover:scale-110 hover:rounded-[7px] active:scale-95 group-hover:opacity-100"
                    >
                      {" "}
                      <X className="size-4 p-[2px] text-white" />{" "}
                    </button>{" "}
                  </div>
                ))}
                {images.length < 3 && (
                  <div className="relative aspect-square overflow-hidden rounded-sm border-[1.5px] border-dashed border-pink-300">
                    {/* USER KO'RADIGAN CUSTOM DIZAYN */}
                    <div className="flex size-full flex-col items-center justify-center border-[#bfd3ff] bg-white/10 p-1 text-center">
                      <div className="flex size-10 items-center justify-center">
                        <ImageUp
                          className="size-6 text-white"
                          strokeWidth={1.8}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-pink-50 underline underline-offset-2">
                        Bosib yuklang
                      </span>{" "}
                    </div>

                    {/* ASL UPLOADTHING - KO'RINMAYDI */}
                    <div className="absolute inset-0 opacity-0">
                      <UploadDropzone
                        className="size-full cursor-pointer border-0 bg-transparent"
                        config={{ appendOnPaste: true, mode: "auto" }}
                        appearance={{
                          container: {
                            height: "100%",
                            width: "100%",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "0",
                          },
                          uploadIcon: {
                            display: "none",
                          },
                          label: {
                            display: "none",
                          },
                          allowedContent: {
                            display: "none",
                          },
                          button: {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "transparent",
                            color: "transparent",
                            borderRadius: "16px",
                            padding: "0",
                            boxShadow: "none",
                          },
                        }}
                        endpoint="imageUploader"
                        onClientUploadComplete={async (res) => {
                          if (res && res[0] && res[0].ufsUrl) {
                            const newUrl = res[0].ufsUrl;

                            // 1. UI ni darrov yangilash
                            const updatedImages = [...images, newUrl];
                            setImages(updatedImages);

                            // 2. DB ga darrov yuborish
                            const response = await adminProductUpdate({
                              id: product._id,
                              images: updatedImages,
                            });

                            if (response.serverError) {
                              console.log(response.serverError);
                              toast.error("Serverda xatolik ❌");
                              return;
                            }

                            if (response.data?.status === 200) {
                              toast.success("Rasm qo‘shildi ✅");
                            }
                          } else {
                            toast.error("Hato yuz berdi ❌");
                          }
                        }}
                        onUploadError={(error) => {
                          console.error("Upload error:", error);
                          toast.error("❌ Rasm yuklanmadi");
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-500/10">
                  <DollarSign size={15} className="text-emerald-400" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-white">
                  Narx
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className={labelClass}>Asosiy narx (so&apos;m)</label>
                  <input
                    disabled={!isEdit}
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      handleChange("price", String(e.target.value))
                    }
                    placeholder="12000000"
                    className={inputClass}
                  />
                </div>

                {/* Final narx preview */}

                <div>
                  <label className={labelClass}>Chegirma</label>

                  <div
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[15px] transition-all ${
                      form.discount
                        ? "border-emerald-500/40 bg-emerald-500/20"
                        : "border-pink-500/30 bg-pink-500/10"
                    }`}
                  >
                    <Label className="cursor-pointer">
                      <p className="text-[10px] text-white">
                        {form.discount
                          ? "Chegirma berildi"
                          : "Chegirma berish"}{" "}
                      </p>
                    </Label>

                    <Switch
                      disabled={!isEdit}
                      checked={form.discount}
                      onCheckedChange={(val) => {
                        handleChange("discount", val);
                        if (!val) {
                          setForm((prev) => ({ ...prev, percent: "0" }));
                        }
                      }}
                      className="data-[state=checked]:bg-pink-600"
                    />
                  </div>
                </div>
                {form.discount && (
                  <div>
                    <label className={labelClass}>Chegirma foyizi(%)</label>
                    <input
                      disabled={!isEdit}
                      type="number"
                      value={form.percent}
                      onChange={(e) =>
                        handleChange("percent", String(e.target.value))
                      }
                      placeholder="10"
                      max={100}
                      className={inputClass}
                    />
                  </div>
                )}
                <div>
                  <label className={labelClass}>Jami narxi</label>
                  <div className="flex items-end gap-1 rounded-xl border border-pink-400/70 bg-pink-600/50 px-4 py-3 text-white">
                    <span className="text-2xl font-black leading-none">
                      {formatCurrentPrice(
                        Number(form.price),
                        Number(form.percent),
                      )}
                    </span>

                    <span className="text-[14px] font-semibold">so&apos;m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2 className="text-2xl font-black uppercase italic tracking-tight text-neutral-900">
                Rasmni{" "}
                <span className="not-italic text-pink-600 underline decoration-pink-200 decoration-4 underline-offset-2">
                  yangilash
                </span>
              </h2>
            </DialogTitle>
            <DialogDescription>
              <div className="space-y-6 p-1">
                {!newImage ? (
                  <UploadDropzone
                    className="h-[210px] w-full cursor-pointer"
                    config={{ appendOnPaste: true, mode: "auto" }}
                    appearance={{
                      container: {
                        border: "2px dashed #fecdd3",
                        borderRadius: "16px",
                        backgroundColor: "#fff1f2",
                        padding: "1rem",
                      },
                      button: {
                        backgroundColor: "#db2777",
                        color: "white",
                        padding: "10px 24px",
                        borderRadius: "12px",
                        fontWeight: "900",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      },
                      uploadIcon: {
                        color: "#db2777",
                        width: "48px",
                        height: "48px",
                      },
                      label: {
                        color: "#9f1239",
                        fontWeight: "700",
                        fontSize: "13px",
                      },
                      allowedContent: {
                        color: "#fda4af",
                        fontSize: "10px",
                        fontWeight: "700",
                      },
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res[0] && res[0].ufsUrl) {
                        setNewImage(res[0].ufsUrl);
                      } else {
                        toast.error("Hato yuz berdi ❌");
                      }
                    }}
                    onUploadError={(error) => {
                      console.error("Upload error:", error);
                      alert("❌ Rasim yuklanmadi");
                    }}
                  />
                ) : (
                  <div className="space-y-5">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                      <div className="space-y-2">
                        <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
                          Hozirgi
                        </p>
                        <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-pink-100 bg-neutral-50">
                          <Image
                            src={oldImage}
                            alt="current"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex size-10 items-center justify-center rounded-full bg-pink-600 shadow-lg shadow-pink-200">
                        <ArrowRight
                          size={16}
                          className="text-white"
                          strokeWidth={2.5}
                        />
                      </div>

                      <div className="space-y-2">
                        <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-pink-500">
                          Yangi
                        </p>
                        <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-pink-500 bg-pink-50">
                          <Image
                            src={newImage}
                            alt="new"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={() => setNewImage("")}
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-100 text-[10px] font-black uppercase tracking-widest text-neutral-500 transition-all hover:scale-[1.01] hover:border-pink-300 hover:bg-pink-100 hover:text-black"
                      >
                        <Repeat2 size={13} />
                        Boshqa rasm tanlash
                      </button>
                      <Button
                        onClick={replacementImage}
                        className="h-11 w-full bg-blue-600 hover:scale-[1.01] hover:bg-blue-700"
                      >
                        Almashtirish <ImageUp />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
