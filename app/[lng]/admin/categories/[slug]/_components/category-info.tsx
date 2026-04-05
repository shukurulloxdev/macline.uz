"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ICategory } from "@/types";
import {
  Fingerprint,
  Globe2,
  CalendarDays,
  Box,
  Globe,
  Repeat,
  ImageUp,
  ArrowRight,
  Repeat2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, Edit2, Trash, Save, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";
import {
  adminCategoryDelete,
  adminCategoryUpdate,
} from "@/actions/admin-actions";
import { useRouter } from "next/navigation";

interface CategoryInfoProps {
  category: ICategory;
}

export default function CategoryInfo({ category }: CategoryInfoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newImage, setNewImage] = useState("");
  const router = useRouter();
  console.log(newImage);

  const [form, setForm] = useState({
    title: category.title,
    slug: category.slug,
    seoTitle: category.seoTitle,
    seoDescription: category.seoDescription,
  });

  const isChanged =
    form.title !== category.title ||
    form.slug !== category.slug ||
    form.seoTitle !== category.seoTitle ||
    form.seoDescription !== category.seoDescription;

  function handleChange(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function updateData() {
    try {
      const res = await adminCategoryUpdate({
        id: category._id,
        ...form,
      });

      if (res.data?.failure) {
        toast.error(res.data?.failure);
      }
      if (res.data?.status === 200) {
        setIsEdit(false);
        toast.success("Malumotlar yangilandi ✅");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteCategory() {
    try {
      const isDelete = confirm("Haqiqatan ham o'chirmoqchimisiz");
      if (isDelete) {
        const res = await adminCategoryDelete({
          id: category._id,
        });

        if (res.data?.failure) {
          toast.error(res.data?.failure);
        }
        if (res.data?.status === 200) {
          router.push("/admin/categories");
          toast.success("Katigoriya o'chirildi ✅");
        }
      }
      return;
    } catch (err) {
      console.log(err);
    }
  }

  async function updateImage() {
    try {
      const res = await adminCategoryUpdate({
        id: category._id,
        image: newImage,
      });

      if (res.data?.failure) {
        toast.error(res.data?.failure);
      }
      if (res.data?.status === 200) {
        setIsOpen(false);
        setNewImage("");
        toast.success("Rasim yangilandi ✅");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="mb-4 flex flex-col gap-6 border-b border-white/5 px-1 pb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-3">
            <Link
              href="/admin/categories"
              className="group flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/20 transition-colors hover:text-white"
            >
              <ChevronLeft
                size={12}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span className="text-white/30 hover:text-white">
                Kategoriyalar
              </span>
            </Link>

            <div className="flex items-end gap-3.5">
              {isEdit ? (
                <input
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="border-b border-white/20 bg-transparent text-3xl font-extrabold tracking-tight text-white outline-none ring-0 focus:border-pink-500 md:text-4xl"
                />
              ) : (
                <h1 className="font-sora text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  {category.title}
                </h1>
              )}

              <div
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset",
                  category.active
                    ? "bg-emerald-50/5 text-emerald-400 ring-emerald-500/10"
                    : "bg-white/5 text-white/40 ring-white/5",
                )}
              >
                {category.active && (
                  <div className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                )}
                {category.active ? "Active" : "Inactive"}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              onClick={deleteCategory}
              type="button"
              variant="ghost"
              className="group h-[52px] rounded-2xl border border-white/30 bg-white/5 px-6 text-[13px] font-bold text-white hover:bg-white/10 hover:text-red-500"
            >
              <Trash className="mr-1 size-4 transition-transform group-hover:rotate-12" />
              O&apos;chirish
            </Button>

            {isEdit ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setForm({
                      title: category.title,
                      slug: category.slug,
                      seoTitle: category.seoTitle,
                      seoDescription: category.seoDescription,
                    });
                    setIsEdit(false);
                  }}
                  className="group flex h-[52px] items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 text-[12px] font-black uppercase tracking-widest text-white/60 transition-all hover:bg-white/10 active:scale-95"
                >
                  <X size={15} className="group-hover:rotate-180" />
                  Bekor
                </button>
                {isChanged && (
                  <button
                    onClick={updateData}
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

        <div className="flex flex-col gap-4">
          {/* MAIN CARD */}
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-1 backdrop-blur-3xl">
            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-pink-500/5 blur-[100px]" />

            <div className="relative flex flex-col gap-8 p-8 md:flex-row md:items-start">
              <div className="group relative size-52 cursor-pointer overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl transition-transform hover:scale-[1.01]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-50"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-white p-4 shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
                  >
                    <Repeat size={20} className="text-neutral-900" />
                  </div>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-full mb-2 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Box size={14} className="text-pink-500" />
                  </div>
                  <h2 className="font-sora text-xs font-black uppercase tracking-[0.2em] text-white/80">
                    Kategoriya identifikatsiyasi
                  </h2>
                </div>

                {/* ID — o'zgarmas */}
                <InfoCard
                  icon={<Fingerprint size={14} />}
                  label="ID Identifikator"
                  value={category._id}
                  isMono
                />

                {/* Slug — edit */}
                <EditableInfoCard
                  icon={<Globe2 size={14} />}
                  label="Slug Manzili"
                  value={form.slug}
                  isEdit={isEdit}
                  isPink
                  onChange={(v: any) => handleChange("slug", v)}
                />

                {/* Sana — o'zgarmas */}
                <InfoCard
                  icon={<Box size={14} />}
                  label="Katigoriya"
                  value={category.active ? "Faol" : " Faol emas"}
                />
                <InfoCard
                  icon={<CalendarDays size={14} />}
                  label="Ochilgan vaqt"
                  value={new Date(category.createdAt).toLocaleDateString(
                    "uz-UZ",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                />
              </div>
            </div>
          </div>

          {/* SEO CARD */}
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-3">
              <Globe size={18} className="text-blue-400" />
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">
                SEO Sozlamalari
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20">
                  Google Title
                </label>
                {isEdit ? (
                  <input
                    value={form.seoTitle}
                    onChange={(e) => handleChange("seoTitle", e.target.value)}
                    className="w-full rounded-2xl bg-white/5 p-4 text-xs font-bold text-white/80 outline-none ring-1 ring-white/10 focus:ring-pink-500/30"
                  />
                ) : (
                  <div className="rounded-2xl bg-white/5 p-4 text-xs font-bold text-white/80 ring-1 ring-white/10">
                    {category.seoTitle}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20">
                  Meta Description
                </label>
                {isEdit ? (
                  <textarea
                    value={form.seoDescription}
                    onChange={(e) =>
                      handleChange("seoDescription", e.target.value)
                    }
                    rows={3}
                    className="w-full resize-none rounded-2xl bg-white/5 p-4 text-xs font-medium leading-relaxed text-white/80 outline-none ring-1 ring-white/10 focus:ring-pink-500/30"
                  />
                ) : (
                  <div className="rounded-2xl bg-white/5 p-4 text-xs font-medium leading-relaxed text-white/80 ring-1 ring-white/10">
                    {category.seoDescription}
                  </div>
                )}
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
                            src={category.image}
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
                        onClick={updateImage}
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

function InfoCard({ icon, label, value, isMono = false, isPink = false }: any) {
  return (
    <div className="group flex cursor-pointer flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/10 hover:bg-white/[0.05]">
      <div className="flex items-center gap-2 text-white/80 transition-colors group-hover:text-pink-500">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest">
          {label}
        </span>
      </div>
      <p
        className={cn(
          "truncate text-[13px] font-bold tracking-tight transition-colors",
          isMono ? "font-mono text-[11px] text-white/30" : "text-white/80",
          isPink ? "italic text-pink-500" : "group-hover:text-white",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function EditableInfoCard({ icon, label, value, isEdit, onChange }: any) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl border p-4 transition-all",
        isEdit
          ? "border-pink-500/20 bg-white/5 ring-1 ring-pink-500/20"
          : "border-white/5 bg-white/5 hover:border-white/10",
      )}
    >
      <div className="flex items-center gap-2 text-white/80">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest">
          {label}
        </span>
      </div>
      {isEdit ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "truncate bg-transparent font-mono text-[15px] font-bold tracking-tight text-pink-400 outline-none",
          )}
        />
      ) : (
        <p
          className={cn(
            "truncate font-mono text-[13px] font-bold tracking-tight text-pink-400",
          )}
        >
          /{value}
        </p>
      )}
    </div>
  );
}
