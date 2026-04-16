// import type { Metadata } from "next";
// // import "./globals.css";
// import { languages } from "@/i18n/settings";
// import { ChildProps } from "@/types";
// import { Toaster } from "@/components/ui/sonner";
// import { Sora, Poppins, Inter, Manrope } from "next/font/google";
// import { CookieProvider } from "@/components/providers/cooke-provider";
// import NextTopLoader from "nextjs-toploader";

// const sora = Sora({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-sora",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-manrope",
// });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-inter",
// });
// // app/[lng]/layout.tsx (yoki metadata turgan fayl)
// export const metadata: Metadata = {
//   title: {
//     default: "Macline | Apple mahsulotlari va aksessuarlar do'koni",
//     template: "%s | Macline.uz",
//   },
//   description:
//     "O'zbekistondagi eng yirik Apple do'koni. iPhone, MacBook, iPad mahsulotlarini kafolat va bo'lib to'lash imkoniyati bilan sotib oling.",
//   icons: {
//     icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
//     apple: "/apple-touch-icon.png",
//   },
//   alternates: {
//     canonical: "https://macline.uz",
//   },
//   openGraph: {
//     type: "website",
//     locale: "uz_UZ",
//     url: "https://macline.uz",
//     siteName: "Macline",
//     images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
//   },
// };
// // Kategoriyalar ro'yxatini olib, JSON-LD formatida qaytaruvchi komponent
// function JsonLd({ categories }: { categories: any[] }) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "ElectronicsStore",
//     name: "Macline",
//     url: "https://macline.uz",
//     logo: "https://macline.uz/icon.png",
//     description: "Apple mahsulotlari do'koni",
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "Tashkent",
//       addressCountry: "UZ",
//     },
//     hasPart: categories.map((cat) => ({
//       "@type": "WebPage",
//       name: cat.seoTitle || cat.name,
//       url: `https://macline.uz/category/${cat.slug}`,
//       description: cat.seoDescription,
//     })),
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//     />
//   );
// }

// // Layout ichida ishlatilishi:
// // const categories = await getCategories();
// // ... body ichida: <JsonLd categories={categories} />
// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

// interface Props extends ChildProps {
//   params: {
//     lng: string;
//   };
// }

// function RootLayout({ children, params: { lng } }: Props) {
//   return (
//     <html lang={lng} suppressHydrationWarning>
//       <body
//         className={`${sora.variable} ${manrope.variable} ${poppins.variable} ${inter.variable} overflow-x-hidden antialiased`}
//       >
//         <NextTopLoader showSpinner={false} color="#ec4899" />
//         <CookieProvider>{children}</CookieProvider>
//         <Toaster position="top-center" />
//       </body>
//     </html>
//   );
// }
// export default RootLayout;

import type { Metadata } from "next";
// Agar ./globals.css xato bersa, @/app/globals.css yoki mutlaq yo'lni ishlating
import "./globals.css";
import { languages } from "@/i18n/settings";
import { ChildProps } from "@/types";
import { Toaster } from "@/components/ui/sonner";
import { Sora, Poppins, Inter, Manrope } from "next/font/google";
import { CookieProvider } from "@/components/providers/cooke-provider";
import NextTopLoader from "nextjs-toploader";
import { getCategories } from "@/actions/user-actions";

// Fontlar
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

// 1. GLOBAL METADATA
export const metadata: Metadata = {
  title: {
    default: "Macline | Apple mahsulotlari do'koni va servis markazi",
    template: "%s | Macline.uz",
  },
  description:
    "Macline — O'zbekistondagi eng ishonchli Apple do'koni. iPhone, MacBook va iPad mahsulotlarini rasmiy kafolat bilan xarid qiling.",
  keywords: [
    "Apple store Uzbekistan",
    "Macline",
    "iPhone narxlari",
    "Apple Toshkent",
    "MacBook buyurtma",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo/logoseo.png", type: "image/png" }, // Asosiy ikonka
    ],
    apple: "/logo/logoseo.png",
  },
  alternates: {
    canonical: "https://macline.uz",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://macline.uz",
    siteName: "Macline",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

// 2. JSON-LD (Structured Data) - Logotip manzili yangilandi
function JsonLd({ categories }: { categories: any[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "Macline",
    url: "https://macline.uz",
    logo: "https://macline.uz/logo/logoseo.png", // Yangilangan logo manzili
    image: "https://macline.uz/og-image.jpg",
    description: "Apple mahsulotlari va aksessuarlarining eksklyuziv do'koni.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    hasPart: categories.map((cat) => ({
      "@type": "WebPage",
      name: cat.name,
      url: `https://macline.uz/category/${cat.slug}`,
      description: cat.seoDescription || cat.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Props extends ChildProps {
  params: {
    lng: string;
  };
}

// 3. MAIN ROOT LAYOUT
async function RootLayout({ children, params: { lng } }: Props) {
  const res = await getCategories();
  const categories = res.data?.categories || [];

  return (
    <html lang={lng} suppressHydrationWarning>
      <head>
        <JsonLd categories={categories} />
      </head>
      <body
        className={`${sora.variable} ${manrope.variable} ${poppins.variable} ${inter.variable} overflow-x-hidden antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#ec4899" />
        <CookieProvider>{children}</CookieProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

export default RootLayout;

// 1- Ui uchun shadcn ui + Tailwindcss

// 1) yuklaymiz ( npm i -D eslint-config-standard, npm i -D eslint-plugin-tailwindcss, npm i -D eslint-config-prettier )  2)  .eslintrc.json ga buni yozamiz ("standard",
//     "plugin:tailwindcss/recommended", "prettier")

// 2- Tillar uchun i18n til middlewaresi uchun next-intel i18n fayili ichida konfiglar va locales da jsonlar va middlewareda doyim qo'shimcha turishi uchun yani /uz /ru

// 3- Rasim yuklash uchun Uploadthing api/uploadthing ni ichida configlar lib/uploadthing.ts ni ichida configlarni Buttonlarga beryapmiz va lib/uploadthing.ts ni ichidan import qilib ishlatyapmiz

// 4- State menejment Redux toolkit orqali | npm install @reduxjs/toolkit react-redux

// git add .
// git commit -m "Updated"
// git push

// git add .
// GIT_AUTHOR_DATE="2026-03-6T12:00:00" \
// GIT_COMMITTER_DATE="2026-03-6T12:00:00" \
// git commit -m "Updated"
// git push
