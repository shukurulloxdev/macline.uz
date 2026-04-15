"use client";
import React from "react";
import {
  BookOpen,
  Clapperboard,
  CodeXml,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const scenarios = [
  {
    id: "student",
    title: "O'qish uchun yechim",
    subtitle: "Talabalar va o'quvchilar",
    icon: BookOpen,
    image: "/sohalar/student.jpg", // MacBook Air rasi tavsiya etiladi
    description:
      "Yengil, batareyasi uzoqqa yetadigan va hamyonbop Apple qurilmalari to'plami.",
    accent: "#007AFF", // Apple Blue
    buttonText: "O'qish to'plamini ko'rish",
  },
  {
    id: "pro",
    title: "Professional Montaj",
    subtitle: "Kino va Video Sanoati",
    icon: Clapperboard,
    image: "/sohalar/montaj.jpg", // Mac Studio rasi tavsiya etiladi
    description:
      "Kuchli grafika va yuqori aniqlikdagi displey talab qiladigan ijodkorlar uchun.",
    accent: "#AF52DE", // Apple Purple
    buttonText: "Pro to'plamni ko'rish",
  },
  {
    id: "dev",
    title: "Dasturlash muhiti",
    subtitle: "Koderlar va Muhandislar",
    icon: CodeXml,
    image: "/sohalar/dasturlash.webp", // MacBook Pro rasi tavsiya etiladi
    description:
      "Ko'p vazifalilik va tezkor komilyatsiya uchun optimallashgan yechimlar.",
    accent: "#34C759", // Apple Green
    buttonText: "Dev to'plamni ko'rish",
  },
  {
    id: "business",
    title: "Biznes samaradorligi",
    subtitle: "Tadbirkorlar va Rahbarlar",
    icon: TrendingUp,
    image: "/sohalar/bisnessman.png", // iPhone/Watch/MacBook to'plami tavsiya etiladi
    description:
      "Mobillik, xavfsizlik va yuqori statusni afzal ko'radigan professional uchun.",
    accent: "#1D1D1F", // Apple Black
    buttonText: "Biznes to'plamini ko'rish",
  },
];

export default function ProfessionShowcase() {
  return (
    <section className="bg-white py-14 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-pink-600">
            Sohangizni tanlang
          </span>
          <h2 className="mt-5 text-5xl font-bold tracking-tighter text-neutral-900">
            Sohangiz uchun
            <span className="italic text-pink-600"> uchun</span> to&apos;plamlar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-lg leading-8 text-neutral-500">
            Biz faqat mahsulot sotmaymiz. Biz sizga original qurilma, rasmiy
            kafolat, professional maslahat va premium darajadagi xizmatni bir
            joyning o&apos;zida taqdim etamiz.
          </p>
        </div>

        {/* Bento Grid (Static 4 blocks) */}
        <div className="grid gap-8 md:grid-cols-2">
          {scenarios.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] ring-1 ring-zinc-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] md:p-12"
            >
              {/* Background Accent Blur (Apple style effect) */}
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.03] blur-[100px]"
                style={{ backgroundColor: item.accent }}
              />

              <div className="flex h-full flex-col justify-between gap-10 lg:flex-row">
                {/* Text Content */}
                <div className="z-10 flex flex-col justify-between space-y-5 lg:w-1/2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 shadow-inner">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium text-zinc-500">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-[#1D1D1F]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-600 opacity-80">
                      {item.description}
                    </p>
                  </div>

                  <button
                    className="group/btn shadow-opacity-10 inline-flex max-w-fit items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.buttonText}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>

                {/* Image Section */}
                <div className="relative z-10 flex flex-1 items-center justify-center lg:w-1/2">
                  {/* Circle back effect */}
                  <div className="absolute h-full w-full rounded-full border border-dashed border-zinc-100" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-auto w-full max-w-[300px] rounded-xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
