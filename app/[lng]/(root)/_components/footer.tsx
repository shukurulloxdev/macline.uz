import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Send,
  Phone,
  Clock,
  Mail,
} from "lucide-react";
import Logo from "@/components/shared/logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pb-6 pt-12 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Asosiy qismlar */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 1-ustun: Logo va Socials */}
          <div className="space-y-6">
            <Logo />

            <p className="max-w-[240px] text-[13px] leading-relaxed text-gray-500">
              OPENSHOP.UZ keng turdagi elektronika va maishiy texnika
              do&apos;koni
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 p-2 text-white">
                <Instagram size={18} />
              </button>
              <button className="rounded-lg bg-blue-600 p-2 text-white">
                <Facebook size={18} />
              </button>
              <button className="rounded-lg bg-red-600 p-2 text-white">
                <Youtube size={18} />
              </button>
              <button className="rounded-lg bg-sky-500 p-2 text-white">
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* 2-ustun: Ma'lumotlar */}
          <div>
            <h4 className="mb-6 text-[15px] font-bold text-black">
              Ma&apos;lumotlar
            </h4>
            <ul className="space-y-3">
              {[
                "Sayt ofertasi",
                "Bizning manzillar",
                "Servis markazlari",
                "Chegirma vaucheri",
                "Yil g'olibi",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[14px] text-gray-500 transition-colors hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3-ustun: Foydali havolalar */}
          <div>
            <h4 className="mb-6 text-[15px] font-bold text-black">
              Foydali havolalar
            </h4>
            <ul className="space-y-3">
              {[
                "Buyurtma bo'yicha izlash",
                "Ishga kirish",
                "Openshop'da savdo",
                "Trade-In",
                "Topib berish xizmati",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[14px] text-gray-500 transition-colors hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4-ustun: Bog'lanish va Applar */}
          <div className="space-y-6">
            <h4 className="mb-6 text-[15px] font-bold text-black">
              Bog&apos;lanish
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-[14px] font-semibold text-gray-700">
                  +998 (71) 203 66 60
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gray-400" />
                <span className="text-[13px] text-gray-500">
                  Har kuni soat 9:00 dan 22:00 gacha
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-gray-400" />
                <span className="text-[13px]">info@openshop.uz</span>
              </div>
            </div>

            {/* App Stores */}
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <button className="flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white transition-all hover:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="text-left leading-tight">
                    <p className="text-[8px] uppercase">Загрузите в</p>
                    <p className="text-[12px] font-bold">App Store</p>
                  </div>
                </div>
              </button>
              <button className="flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white transition-all hover:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="text-left leading-tight">
                    <p className="text-[8px] uppercase">YUKLAB OLING</p>
                    <p className="text-[12px] font-bold">Google Play</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Pastki qism: Copyright va To'lov tizimlari */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-[12px] text-gray-400">
            © 2018 - 2026 MCHJ &apos;OPEN SHOP&apos; STIR 307095613.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 opacity-60 transition-opacity hover:opacity-100">
            {/* Real rasmlar bo'lmagani uchun placeholder tekstlar */}
            <span className="text-[11px] font-bold text-blue-600">click</span>
            <span className="text-[11px] font-bold text-teal-500">sello!</span>
            <span className="text-[11px] font-bold text-green-600">
              ipak yuli
            </span>
            <span className="text-[11px] font-bold text-cyan-500">Payme</span>
            <span className="text-[11px] font-bold uppercase text-blue-800">
              uzcard
            </span>
            <span className="text-[11px] font-bold uppercase text-orange-400">
              humo
            </span>
            <span className="text-[11px] font-bold text-blue-900">VISA</span>
            <span className="text-[11px] font-bold text-red-500">
              mastercard
            </span>
            <span className="text-[11px] font-bold text-orange-600">
              UnionPay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
