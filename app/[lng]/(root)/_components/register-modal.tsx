"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { User, Phone, UserCircle, ArrowRight, LogIn } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import z from "zod";
import { otpSchema, registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputMask from "react-input-mask";
import { register, sendOtp, verifyOtpAc } from "@/actions/auth-actions";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { Iuser } from "@/types";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/reducers/userState";

function RegisterModal() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function registerSuccesActions() {
    toast.success("Siz ro'yxatdan o'tdingiz ✅");
    form.reset();
    otpForm.reset();
    setIsOpen(false);
    setIsVerifying(false);
  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values.phone);

    const cleanPhone = values.phone.replace(/\D/g, ""); // faqat raqamlar

    const formattedPhone = `+${cleanPhone}`; // +998902015858

    const res = await sendOtp({ phone: formattedPhone });

    if (res.serverError || res.validationErrors || !res.data) {
      console.log(res);
      return toast.error("Something went wrong");
    }
    if (res.data.status === 200) {
      toast.success("OTP send successfuly");
      setIsVerifying(true);
    }
  }
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function verifyOtp(values: z.infer<typeof otpSchema>) {
    const cleanPhone = form.getValues("phone").replace(/\D/g, ""); // faqat raqamlar

    const formattedPhone = `+${cleanPhone}`;

    const res = await verifyOtpAc({
      otp: values.otp,
      phone: formattedPhone,
    });

    if (res.serverError || res.validationErrors || !res.data) {
      console.log(res);
      return toast.error("Something went wrong");
    }
    if (res.data.failure) {
      return toast.error(res.data.failure);
    }
    if (res.data.status === 301) {
      return toast.error(
        "OTP kodni kutish muddati tugadi, qayta urinib koʻring.",
      );
    }
    if (res.data.status === 200) {
      const res = await register(form.getValues());

      if (res.serverError || res.validationErrors || !res.data) {
        console.log(res);
        return toast.error("Something went wrong");
      }
      if (res.data.user._id) {
        dispatch(setUser(res.data.user));
        registerSuccesActions();
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="ml-2 flex items-center border-l border-neutral-100 pl-4">
          <button className="flex h-[54px] w-[48px] items-center justify-center rounded-2xl bg-neutral-50 text-pink-600 transition-all hover:bg-pink-50 hover:text-pink-600 active:scale-95">
            <LogIn size={22} strokeWidth={2.3} />
          </button>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[850px] overflow-hidden rounded-[2rem] border-none p-0">
        <div className="flex min-h-[500px] flex-row">
          <div className="flex flex-1 flex-col justify-center space-y-8 bg-white p-10">
            {!isVerifying ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neutral-900">
                        <span className="text-pink-600">
                          Royxatdan o&apos;tish
                        </span>
                      </h2>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                        Xush kelibsiz! Malumotlaringizni kiriting.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-pink-600">
                                  <UserCircle size={20} />
                                </div>
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="Ismingizni kiriting"
                                  className="h-14 w-full rounded-2xl bg-neutral-100 pl-12 pr-4 text-sm font-bold outline-none ring-2 ring-transparent transition-all placeholder:font-medium focus:bg-white focus:ring-pink-100"
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-pink-600">
                                  <Phone size={20} />
                                </div>

                                <InputMask
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
                                </InputMask>
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      disabled={isVerifying}
                      className="group h-12 w-full justify-between rounded-xl bg-pink-600 px-6 font-black uppercase tracking-widest text-white shadow-none transition-all hover:bg-pink-700 active:scale-[0.98]"
                      type="submit"
                    >
                      <span className="text-[11px]">Davom etish</span>

                      <ArrowRight
                        size={18}
                        strokeWidth={3}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <Form {...otpForm}>
                {/* onSubmit mantiqini saqlaymiz */}
                <form
                  onSubmit={otpForm.handleSubmit(verifyOtp)}
                  className="flex flex-col justify-center" // Y o'qi bo'yicha markazga olish
                >
                  <div className="space-y-10">
                    <div className="space-y-2 text-center">
                      {" "}
                      {/* Matnlarni ham markazga oldim */}
                      <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neutral-900">
                        <span className="text-pink-600">Kodni kiriting</span>
                      </h2>
                      <p className="mx-auto max-w-[250px] text-[11px] font-bold uppercase leading-relaxed tracking-widest text-pink-400">
                        <span className="text-black">
                          {" "}
                          {form.watch("phone")}
                        </span>{" "}
                        raqamiga <br /> 5 xonali kod yuborildi
                      </p>
                    </div>
                    {/* INPUT OTP SECTION */}
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex justify-center">
                              <InputOTP
                                maxLength={5}
                                value={field.value}
                                onChange={field.onChange}
                              >
                                <InputOTP
                                  maxLength={5}
                                  value={field.value}
                                  onChange={field.onChange}
                                  autoFocus // Sahifa yuklanishi bilan fokus tushishi uchun
                                  render={({ slots }) => (
                                    <InputOTPGroup className="gap-3">
                                      {slots.map((slot, index) => (
                                        <InputOTPSlot
                                          key={index}
                                          index={index}
                                          {...slot} // Bu barcha state'larni (isActive, char, va h.k.) o'zi boshqaradi
                                          className={cn(
                                            // 1. ASOSIY HOLAT
                                            "h-16 w-12 rounded-[1rem] border-none text-xl font-black outline-none transition-all duration-300",

                                            // 2. BO'SH HOLAT
                                            "bg-[#edecec] text-neutral-300",

                                            // 3. ACTIVE / SELECTED HOLAT (Mana shu qismi 1-katakni default yoritadi)
                                            slot.isActive && [
                                              "border-separate bg-[#edecec] text-neutral-300",
                                            ],

                                            // 4. TO'LGAN HOLAT
                                            slot.char && [
                                              "bg-pink-100 text-neutral-900 shadow-sm ring-pink-600",
                                              "scale-105",
                                            ],
                                          )}
                                        />
                                      ))}
                                    </InputOTPGroup>
                                  )}
                                />
                              </InputOTP>
                            </div>
                          </FormControl>
                          <FormMessage className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-red-500" />
                        </FormItem>
                      )}
                    />
                    {/* BUTTON SECTION */}
                    <div className="pt-2">
                      <Button
                        className="group h-12 w-full justify-between rounded-xl bg-pink-600 px-6 font-black uppercase tracking-[0.2em] text-white shadow-none transition-all hover:bg-pink-600 active:scale-[0.98]"
                        type="submit"
                      >
                        <span className="text-[11px]">Tasdiqlash</span>

                        {/* O'NG TOMONDAGI IXCHAM IKONKA BLOKI */}
                        <div className="flex items-center gap-3">
                          {/* Nafis vertikal chiziqcha */}
                          <div className="h-4 w-[1px] bg-white/20" />

                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-pink-600">
                            <ArrowRight size={16} strokeWidth={3} />
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            )}

            <p className="mt-auto pt-6 text-center text-[10px] font-bold uppercase leading-relaxed tracking-tight text-neutral-400 underline decoration-neutral-200 underline-offset-4">
              Tizimga kirish orqali <br /> siz saytning barcha funksiyalaridan
              <br /> cheklovlarsiz foydalanishingiz mumkin!
            </p>
          </div>
          <div className="relative hidden w-[380px] flex-col items-center justify-center overflow-hidden bg-pink-600 p-12 text-white md:flex">
            {/* DEKORATIV ORQA FON NURLARI */}
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-pink-500 opacity-50 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-pink-400 opacity-50 blur-3xl" />

            <div className="relative z-10 space-y-6 text-center">
              {/* MODEL QIZ RASMI - PREMIUM GLASS CARD STYLE */}
              <div className="group relative mx-auto size-52 cursor-pointer overflow-hidden rounded-[2.5rem] border-4 border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
                <Image
                  src="/logo/women-login.png" // Public papkangizdagi rasm
                  alt="Texnotech Model"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-black uppercase italic leading-tight tracking-tighter">
                  Eng yaxshi <br /> takliflar sizni <br /> kutmoqda!
                </h3>
              </div>
            </div>

            <div className="absolute bottom-10 mt-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-30">
              Texnotech Kompaniyasi
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterModal;
