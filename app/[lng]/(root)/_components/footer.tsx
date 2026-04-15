import Logo from "@/components/shared/logo";
import Link from "next/link";

const footerLinks = {
  mahsulotlar: [
    { label: "iPhone", href: "/iphone" },
    { label: "MacBook", href: "/macbook" },
    { label: "iPad", href: "/ipad" },
    { label: "iPad", href: "/ipad" },
    { label: "iPad", href: "/ipad" },
    { label: "Apple Watch", href: "/watch" },
    { label: "AirPods", href: "/airpods" },
    { label: "Aksessuarlar", href: "/accessories" },
    { label: "AirPods", href: "/airpods" },
  ],
  xizmatlar: [
    { label: "Kafolat & Ta&apos;mirlash", href: "/warranty" },
    { label: "Trade-in", href: "/trade-in" },
    { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
    { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
    { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
    { label: "Konfiguratsiya", href: "/configure" },
    { label: "Apple Care+", href: "/apple-care" },
    { label: "Apple Care+", href: "/apple-care" },
    { label: "Bo&apos;lib to&apos;lash", href: "/installment" },
  ],
  kompaniya: [
    { label: "Biz haqimizda", href: "/about" },
    { label: "Ish o&apos;rinlari", href: "/careers" },
    { label: "Yangiliklar", href: "/news" },
    { label: "Hamkorlar", href: "/partners" },
    { label: "Filiallar", href: "/stores" },
    { label: "Yangiliklar", href: "/news" },
    { label: "Yangiliklar", href: "/news" },
    { label: "Yangiliklar", href: "/news" },
    { label: "Hamkorlar", href: "/partners" },
  ],
  yordam: [
    { label: "FAQ", href: "/faq" },
    { label: "Yetkazib berish", href: "/delivery" },
    { label: "Qaytarish siyosati", href: "/returns" },
    { label: "Maxfiylik siyosati", href: "/privacy" },
    { label: "Yetkazib berish", href: "/delivery" },
    { label: "Qaytarish siyosati", href: "/returns" },
    { label: "Maxfiylik siyosati", href: "/privacy" },
    { label: "Qaytarish siyosati", href: "/returns" },
    { label: "Maxfiylik siyosati", href: "/privacy" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M21.8 3L1 11.4c-1.4.6-1.4 1.4 0 1.8l5.2 1.6 1.8 5.6c.4 1 .8 1.2 1.6.8l3.2-2.4 4 3c.8.6 1.6.2 1.8-0.8l3-14c.4-1.6-.6-2.4-2-1.6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.3.7 11.5v2.1C.7 15.8 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.1 12 22.1 12 22.1s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.5v-2.1C23.3 9.3 23 7 23 7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
      </svg>
    ),
  },
];

const paymentIcons = [
  { name: "Visa", label: "VISA" },
  { name: "Mastercard", label: "MC" },
  { name: "Uzcard", label: "UZCARD" },
  { name: "Humo", label: "HUMO" },
  { name: "Payme", label: "PAYME" },
  { name: "Click", label: "CLICK" },
];

export default function MaclineFooter() {
  return (
    <footer className="border-t border-gray-100 bg-[#fffcfd] font-[system-ui]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-2 items-start gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-6 sm:col-span-3 lg:col-span-2">
            <div className="space-y-1">
              <Logo />

              <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
                O&apos;zbekistondagi rasmiy Apple mahsulotlari distribyutori.
                Original texnika, kafolat va professional maslahat.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+998712001234"
                className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-[#0071e3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors group-hover:border-[#0071e3]/30">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +998 90 201-58-58
              </a>
              <a
                href="mailto:info@macline.uz"
                className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-[#0071e3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors group-hover:border-[#0071e3]/30">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                macline@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-gray-50">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                O&apos;zbekiston bo&apos;ylab 4 ta filial
              </div>
            </div>

            {/* socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-[#0071e3]/40 hover:bg-blue-50 hover:text-[#0071e3]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLS */}
          {(
            [
              ["Mahsulotlar", footerLinks.mahsulotlar],
              ["Xizmatlar", footerLinks.xizmatlar],
              ["Kompaniya", footerLinks.kompaniya],
              ["Yordam", footerLinks.yordam],
            ] as [string, { label: string; href: string }[]][]
          ).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-gray-600 transition-colors hover:text-[#0071e3]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── STORE BADGES + WORKING HOURS ────────────────────────────── */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-gray-400">
                To&apos;lov usullari:
              </span>
              {paymentIcons.map((p) => (
                <span
                  key={p.name}
                  className="cursor-default rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-bold tracking-wide text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
                >
                  {p.label}
                </span>
              ))}
            </div>
            {/* working hours */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>
                  Du–Jum:{" "}
                  <strong className="text-gray-800">09:00 – 20:00</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                <span>
                  Shan–Yak:{" "}
                  <strong className="text-gray-800">10:00 – 18:00</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── BOTTOM BAR ──────────────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-600">Macline</span> —
              Barcha huquqlar himoyalangan. Apple, iPhone, MacBook, iPad,
              AirPods — Apple Inc. savdo belgilari.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-gray-600"
              >
                Maxfiylik
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-gray-600"
              >
                Foydalanish shartlari
              </Link>
              <Link
                href="/sitemap"
                className="transition-colors hover:text-gray-600"
              >
                Sayt xaritasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
