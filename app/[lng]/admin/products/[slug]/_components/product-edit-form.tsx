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
  Trash2,
  Repeat,
  Images,
} from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { formatCurrentPrice } from "@/lib/utils";

interface Props {
  product: IProduct;
  categories: { title: string; slug: string }[];
}

export default function ProductEditForm({ product, categories }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [images, setImages] = useState<string[]>(product.images);

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

  function handleChange(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function editInformations() {
    if ((form.discount && form.percent === "0") || form.percent === "") {
      return confirm(
        "Chegirma berilgandan so'ng, Foyiz(%) ham berilishi shart❗️",
      );
    }
  }

  const inputClass = `${isEdit ? "text-white" : "text-neutral-300"} w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium  outline-none placeholder:text-white/20 transition-all focus:border-pink-500/50 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/10`;
  const labelClass =
    "mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-white/80";

  return (
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
                Umumiy ma'lumotlar
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
                  onChange={(e) => handleChange("description", e.target.value)}
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
                    <p className="text-sm font-bold text-white">{item.label}</p>
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
            <div className="grid grid-cols-3 gap-2">
              {images.map((image) => (
                <div
                  className="group relative aspect-square w-full"
                  key={image}
                >
                  <Image
                    src={image}
                    alt={image}
                    className="rounded-sm object-cover group-hover:brightness-50"
                    fill
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="cursor-pointer rounded-full bg-white p-2 opacity-0 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 group-hover:opacity-100">
                      <Repeat className="size-5" />
                    </div>
                  </div>
                  <span className="absolute right-[2px] top-[2px] cursor-pointer rounded-[5px] bg-red-600 p-[3px] opacity-0 transition-all duration-200 hover:scale-[1.1] hover:rounded-[7px] active:scale-95 group-hover:opacity-100">
                    <X className="size-4 p-[2px] text-white" />
                  </span>
                </div>
              ))}
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
                <label className={labelClass}>Asosiy narx (so'm)</label>
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

                  <span className="text-[14px] font-semibold">so'm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
