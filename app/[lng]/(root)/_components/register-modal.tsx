// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { User } from "lucide-react";
// function RegisterModal() {
//   return (
//     <div>
//       <Dialog>
// <DialogTrigger>
//   <div className="ml-2 border-l border-neutral-100 pl-4">
//     <div className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-transparent bg-pink-50 p-1.5 pr-4 shadow-sm transition-all hover:border-pink-100 active:scale-95">
//       <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-pink-600 text-white transition-colors">
//         <div className="flex h-full w-full items-center justify-center">
//           <User size={20} strokeWidth={2.5} />
//         </div>
//       </div>

//       <div className="flex flex-col items-start gap-1 leading-none">
//         <span className="text-[10px] font-black uppercase tracking-tight text-pink-600 transition-colors">
//           Kabinet
//         </span>
//         <span className="text-[12px] font-bold text-neutral-900">
//           Kirish
//         </span>
//       </div>
//     </div>
//   </div>
// </DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Registratsiya modali</DialogTitle>
//             <DialogDescription>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//               repellat impedit ex magni, sequi illum architecto non inventore,
//               in nostrum suscipit iste perferendis velit molestiae qui commodi,
//               minus laudantium quas!
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default RegisterModal;

"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { User, Phone, UserCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

function RegisterModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="ml-2 border-l border-neutral-100 pl-4">
          <div className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-transparent bg-pink-50 p-1.5 pr-4 shadow-sm transition-all hover:border-pink-100 active:scale-95">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-xl bg-pink-600 text-white transition-colors">
              <div className="flex size-full items-center justify-center">
                <User size={20} strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 leading-none">
              <span className="text-[10px] font-black uppercase tracking-tight text-pink-600 transition-colors">
                Kabinet
              </span>
              <span className="text-[12px] font-bold text-neutral-900">
                Kirish
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[850px] overflow-hidden rounded-[2rem] border-none p-0">
        <div className="flex min-h-[500px] flex-row">
          {/* CHAP TOMON: FORM QISMI */}
          <div className="flex-1 bg-white p-10 md:p-14">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neutral-900">
                  <span className="text-pink-600">Royxatdan otish</span>
                </h2>
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  Xush kelibsiz! Malumotlaringizni kiriting.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-pink-600">
                    <UserCircle size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    className="h-14 w-full rounded-2xl bg-neutral-100 pl-12 pr-4 text-sm font-bold outline-none ring-2 ring-transparent transition-all placeholder:font-medium focus:bg-white focus:ring-pink-100"
                  />
                </div>

                <div className="group relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-pink-600">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    placeholder="+998 (__) ___ __ __"
                    className="h-14 w-full rounded-2xl bg-neutral-100 pl-12 pr-4 text-sm font-bold outline-none ring-2 ring-transparent transition-all placeholder:font-medium focus:bg-white focus:ring-pink-100"
                  />
                </div>
              </div>

              <button className="group flex h-14 w-full items-center justify-between rounded-2xl bg-pink-600 p-1.5 pl-8 text-white shadow-xl shadow-pink-100 transition-all hover:bg-pink-700 active:scale-[0.98]">
                <span className="text-sm font-black uppercase tracking-widest">
                  Davom etish
                </span>
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/20 transition-all group-hover:bg-white group-hover:text-pink-600">
                  <ArrowRight size={20} strokeWidth={3} />
                </div>
              </button>

              <p className="text-center text-[10px] font-bold uppercase leading-relaxed tracking-tight text-neutral-400 underline">
                Tizimga kirish orqali <br /> siz saytning barcha funksiyalaridan
                <br /> cheklovlarsiz foydalanishingiz mumkin!
              </p>
            </div>
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
                {/* <p className="text-xs font-bold uppercase tracking-widest text-pink-100 opacity-80">
                  Hoziroq ro'yxatdan o'ting va <br /> saytdan to'liq foydalaing
                </p> */}
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
