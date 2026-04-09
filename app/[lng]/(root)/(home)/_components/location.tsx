"use client";

import React from "react";
import Image from "next/image";
import { Phone, Clock, Sparkles, AppleIcon, ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const branches = [
  {
    id: "toshkent",
    name: "Toshkent ",
    address: "Toshkent shahar, Mirobod tumani, Alfraganus savdo markazi",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 201-58-58",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Acffde96a3984f1d00fe8f10c32f1fcc613662afdd3df8a76effaef53b2d11ca2&amp;source=constructor",
    openMapUrl:
      "https://yandex.uz/maps/?text=Toshkent%20shahar%2C%20Mirobod%20tumani%2C%20Alfraganus%20savdo%20markazi",
    image: "/menejer/store.png",
  },
  {
    id: "samarqand",
    name: "Samarqand",
    address:
      "Samarkand shahar, Shohrukh Mirzo ko'cha, Makon Mall savdo markazi",
    workTime: "09:00 - 21:00",
    phone: "+998 91) 813-41-41",
    openMapUrl: "https://yandex.uz/maps/?text=Makon%20Mall%20Samarkand",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A7eca741ac99e97af468f08f3ed63230e85ca16e153571fca1dfb1ab9ea329464&amp;source=constructor",
    image: "/menejer/store3.png",
  },
  {
    id: "fargona",
    name: "Farg‘ona",
    address: "Farg'ona shahar, Mustaqillik shoh ko'chasi 13, Mo'jal: Korzinka",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 533-43-69",
    openMapUrl:
      "https://yandex.uz/maps/?text=Fargona%20Mustaqillik%20shoh%20kochasi%2013",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3A861ec5ea6757329e7beca5d56695bd470b00a061b116012ef9c760bb2abba6a6&amp;source=constructor",
    image: "/menejer/store2.png",
  },
  {
    id: "andijon",
    name: "Andijon",
    address:
      "Andijon shahar, Choʻlpon shoh koʻchasi, Uzbegim savdo majumosi,  ",
    workTime: "09:00 - 22:00",
    phone: "+998 90) 201-58-58",
    openMapUrl:
      "https://yandex.uz/maps/?text=Uzbegim%20savdo%20majmuasi%20Andijon",
    mapUrl:
      "https://yandex.com/map-widget/v1/?um=constructor%3Aa9ab98344cf8695c1665e92fde9ce91c645a31febdd6c79d8c446a40e4d1fe25&amp;source=constructor",
    image: "/menejer/store4.png",
  },
];

function Location() {
  function handleOpenMap(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto max-w-7xl py-12">
      <Tabs defaultValue="toshkent" className="w-full">
        <div className="mb-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-pink-600">
              <Sparkles size={14} fill="currentColor" />
              <span>Do'konlar tarmog'i</span>
            </div>
            <h2 className="font-sora text-5xl font-bold tracking-tighter text-neutral-900">
              Bizning <span className="text-pink-600">Showroomlar</span>
            </h2>
          </div>

          <TabsList className="flex h-auto gap-2 rounded-full border border-pink-200 bg-pink-50/50 p-2 backdrop-blur-sm">
            {["toshkent", "samarqand", "fargona", "andijon"].map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-[0_10px_30px_rgba(219,39,119,0.3)]"
              >
                {id}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {branches.map((branch) => (
          <TabsContent
            key={branch.id}
            value={branch.id}
            className="mt-0 outline-none"
          >
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-pink-300 bg-pink-50 shadow-[0_40px_100px_rgba(219,39,119,0.03)] lg:grid-cols-12">
              <div className="col-span-4 flex flex-col justify-between bg-gradient-to-b from-pink-50/50 to-transparent p-12">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-bold tracking-tight text-neutral-900">
                      <span className="text-pink-600"></span> {branch.name}{" "}
                      filiali
                    </h3>
                    <div className="mt-2 h-[2px] w-44 rounded-full bg-pink-600" />
                    <p className="mt-5 min-h-[52px] text-[16px] font-medium leading-relaxed text-neutral-500">
                      {branch.address}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="group flex items-center gap-5">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm ring-1 ring-pink-100 transition-all group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-pink-200">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                          Ish vaqti
                        </p>
                        <p className="text-md font-bold text-neutral-800">
                          {branch.workTime}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-5">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm ring-1 ring-pink-100 transition-all group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-pink-200">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                          Bog&apos;lanish
                        </p>
                        <p className="text-md font-bold text-neutral-800">
                          {branch.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <button
                    onClick={() => handleOpenMap(branch.openMapUrl)}
                    className="group flex w-full items-center justify-between overflow-hidden rounded-2xl bg-pink-600 px-6 py-2 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-pink-700 active:scale-95"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em]">
                      Marshrutni boshlash
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform group-hover:rotate-45">
                      {/* <AppleIcon size={20} /> */}
                      <ArrowUpRight size={20} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative col-span-3 h-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pink-600/5" />
              </div>

              {/* Right: Modern Map */}
              <div className="relative h-full lg:col-span-5">
                <iframe
                  src={branch.mapUrl}
                  className="size-full opacity-80 contrast-125 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  style={{
                    border: 0,
                    filter: "hue-rotate(300deg) saturate(1.2)",
                  }}
                  allowFullScreen
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default Location;
