"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Clock, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  {
    id: "toshkent",
    name: "Toshkent",
    address: "Mirobod tumani, Alfraganus savdo markazi",
    workTime: "09:00 - 22:00",
    phone: "+998 90 201-58-58",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Acffde96a3984f1d00fe8f10c32f1fcc613662afdd3df8a76effaef53b2d11ca2&source=constructor",
    openMapUrl:
      "https://yandex.uz/maps/?text=Toshkent%20shahar%2C%20Mirobod%20tumani%2C%20Alfraganus%20savdo%20markazi",
    image: "/menejer/store.png",
  },
  {
    id: "samarqand",
    name: "Samarqand",
    address: "Shohrukh Mirzo ko'chasi, Makon Mall SM",
    workTime: "09:00 - 21:00",
    phone: "+998 91 813-41-41",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A7eca741ac99e97af468f08f3ed63230e85ca16e153571fca1dfb1ab9ea329464&source=constructor",
    openMapUrl: "https://yandex.uz/maps/?text=Makon%20Mall%20Samarkand",
    image: "/menejer/store3.png",
  },
  {
    id: "fargona",
    name: "Farg'ona",
    address: "Mustaqillik shoh ko'chasi 13, Korzinka yaqini",
    workTime: "09:00 - 22:00",
    phone: "+998 90 533-43-69",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A861ec5ea6757329e7beca5d56695bd470b00a061b116012ef9c760bb2abba6a6&source=constructor",
    openMapUrl:
      "https://yandex.uz/maps/?text=Fargona%20Mustaqillik%20shoh%20kochasi%2013",
    image: "/menejer/store2.png",
  },
  {
    id: "andijon",
    name: "Andijon",
    address: "Cho'lpon shoh ko'chasi, Uzbegim savdo majmuasi",
    workTime: "09:00 - 22:00",
    phone: "+998 90 201-58-58",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Aa9ab98344cf8695c1665e92fde9ce91c645a31febdd6c79d8c446a40e4d1fe25&source=constructor",
    openMapUrl:
      "https://yandex.uz/maps/?text=Uzbegim%20savdo%20majmuasi%20Andijon",
    image: "/menejer/store4.png",
  },
];

export default function LocationMobile() {
  const [active, setActive] = useState("toshkent");

  const branch = branches.find((b) => b.id === active)!;

  return (
    <section className="px-4 pb-10 pt-8 md:hidden">
      {/* Header */}
      <div className="mb-5">
        <div className="mb-1 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-pink-600">
          <Sparkles size={11} fill="currentColor" />
          Do'konlar tarmog'i
        </div>
        <h2 className="text-center text-[26px] font-black leading-tight tracking-tight text-neutral-950">
          Bizning <span className="text-pink-600">Showroomlar</span>
        </h2>
      </div>

      {/* City tabs — horizontal scroll */}
      <div className="scrollbar-hide mb-4 flex gap-2 overflow-x-auto pb-1">
        {branches.map((b) => (
          <button
            key={b.id}
            onClick={() => setActive(b.id)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-[12px] font-bold transition-all ${
              active === b.id
                ? "bg-pink-600 text-white shadow-sm"
                : "border border-neutral-200 bg-white text-neutral-600"
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
        >
          {/* Store image + map stacked */}
          <div className="relative h-44 w-full">
            <Image
              src={branch.image}
              alt={branch.name}
              fill
              className="object-cover"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* City label */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <MapPin size={11} className="text-pink-600" />
              <span className="text-[11px] font-black text-neutral-900">
                {branch.name} filiali
              </span>
            </div>

            {/* Working indicator */}
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[10px] font-bold text-white">Ochiq</span>
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            {/* Address */}
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-pink-50">
                <MapPin size={18} className="text-pink-600" />
              </div>
              <p className="text-[14px] font-semibold leading-snug text-neutral-700">
                {branch.address}
              </p>
            </div>

            {/* Time + Phone */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2.5 rounded-2xl border border-neutral-100 bg-neutral-50 px-3 py-3">
                <Clock size={15} className="flex-shrink-0 text-pink-500" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                    Ish vaqti
                  </p>
                  <p className="text-[12px] font-bold text-neutral-900">
                    {branch.workTime}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${branch.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 rounded-2xl border border-neutral-100 bg-neutral-50 px-3 py-3 active:scale-[.98]"
              >
                <Phone size={15} className="flex-shrink-0 text-pink-500" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                    Telefon
                  </p>
                  <p className="text-[12px] font-bold text-neutral-900">
                    {branch.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Map iframe */}
            <div className="mb-4 h-40 w-full overflow-hidden rounded-2xl border border-neutral-100">
              <iframe
                src={branch.mapUrl}
                className="h-full w-full opacity-90"
                style={{
                  border: 0,
                  filter: "hue-rotate(300deg) saturate(1.2)",
                }}
                allowFullScreen
              />
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                window.open(branch.openMapUrl, "_blank", "noopener,noreferrer")
              }
              className="group flex w-full items-center justify-between rounded-2xl bg-pink-600 px-5 py-2 transition-all active:scale-[.98]"
            >
              <span className="text-[12px] font-black uppercase tracking-widest text-white">
                Marshrutni boshlash
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-active:rotate-45">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
