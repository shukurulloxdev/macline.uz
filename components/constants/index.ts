import { TrendingUp, ShoppingCart, MessageCircle, Wallet } from "lucide-react";
export const navLinks = [
  { route: "", name: "navLink1" },
  { route: "projects", name: "navLink2" },
  { route: "aboutus", name: "navLink3" },
  { route: "contactus", name: "navLink4" },
  { route: "reviews", name: "navLink5" },
];

export const lngs = [
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
];
export const categories = [
  {
    route: "kiryuvishmashinasi",
    title: "Kir yuvish mashinasi",
    url: "/categories/kirmashina.png",
  },
  {
    route: "televizor",
    title: "Televizorlar",
    url: "/categories/televizor.jpg",
  },
  {
    route: "gazplita",
    title: "Gaz plitalar",
    url: "/categories/gaz.jpg",
  },
  {
    route: "telefon",
    title: "Telefonlar",
    url: "/categories/telefon.jpg",
  },
  {
    route: "notebook",
    title: "Notebooklar",
    url: "/categories/komp.jpg",
  },

  {
    route: "pech",
    title: "Pechlar",
    url: "/categories/pech.png",
  },
  {
    route: "muzlatgich",
    title: "Muzlatgichlar",
    url: "/categories/muzlatgich.jpg",
  },
  {
    route: "dudburon",
    title: "Dudburonlar",
    url: "/categories/vitoch.jpg",
  },
  {
    route: "konditsoner",
    title: "Konditsonerlar",
    url: "/categories/konditsoner.png",
  },

  {
    route: "kuler",
    title: "Kulerlar",
    url: "/categories/kuller.png",
  },
  {
    route: "changyutgich",
    title: "Changyutgichlar",
    url: "/categories/changyutgich.jpg",
  },
  {
    route: "pishirishpaneli",
    title: "Pishirish panellari",
    url: "/categories/pishirishpaneli.webp",
  },
  {
    route: "mikropesh",
    title: "Mikroto`lqinli pech",
    url: "/categories/mikropech.webp",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Bu kompaniyaga qanday ishonsa bo‘ladi?",
    answer:
      "Arkan Development 7 yildan ortiq tajribaga ega bo‘lgan professional qurilish kompaniyasi hisoblanadi. Har bir loyiha xalqaro standartlarga asoslanib amalga oshiriladi va barcha jarayonlar shaffof tarzda olib boriladi.",
  },
  {
    id: 2,
    question: "Loyihalar qachon va qanday topshiriladi?",
    answer:
      "Har bir loyiha aniq belgilangan muddat asosida rejalashtiriladi. Qurilish bosqichlari qat’iy nazorat qilinadi va obyektlar belgilangan vaqt oralig‘ida sifatli holatda topshiriladi.",
  },
  {
    id: 3,
    question: "Qurilish jarayonida qo‘shimcha xarajatlar bo‘ladimi?",
    answer:
      "Yo‘q. Barcha xarajatlar shartnoma tuzishdan oldin aniq hisoblab chiqiladi. Mijozlarga yashirin yoki kutilmagan to‘lovlar qo‘llanilmaydi.",
  },
  {
    id: 4,
    question: "Qurilish jarayonini qanday kuzatib borish mumkin?",
    answer:
      "Mijozlar qurilish jarayonining har bir bosqichi haqida muntazam ravishda ma’lumot olib boradilar. Foto va video hisobotlar, shuningdek, shaxsiy aloqa orqali nazorat imkoniyati mavjud.",
  },
  {
    id: 5,
    question: "Maslahat va loyiha baholash bepulmi?",
    answer:
      "Ha, kompaniyamiz barcha mijozlar uchun bepul maslahat va loyiha bo‘yicha dastlabki baholash xizmatlarini taqdim etadi.",
  },
];

export const statistics = [
  {
    title: "Jami texnika",
    value: "100",
    suffix: "ta",
    icon: TrendingUp,
  },
  {
    title: "Jami sotuv",
    value: "19",
    suffix: "ta",
    icon: ShoppingCart,
  },
  {
    title: "Jami izoh",
    value: "10",
    suffix: "ta",
    icon: MessageCircle,
    glow: "from-indigo-500 to-purple-500",
  },
  {
    title: "Jami summa",
    value: "27,731,000",
    suffix: "so'm",
    icon: Wallet,
  },
];
export const bestSeller = [
  {
    brend: "Samsung",
    category: "Chang yutgich",
    price: 899000,
    soldout: "16",
    title: "Samsung SC 5251 RED",
    image: "/categories/changyutgich.jpg",
  },
  {
    brend: "Ferre",
    category: "Pech",
    price: 999000,
    soldout: "14",
    title: "Mini pech Ferre MO 3700 B",
    image: "/categories/mikropech.webp",
  },
  {
    brend: "Artel",
    category: "Kir yuvish mashinasi",
    price: 2999000,
    soldout: "12",
    title: "Avtomat kir yuvish mashinasi Artel 9kg ",
    image: "/categories/kirmashina.png",
  },
];
export const allAdminProducts = [
  {
    brend: "Samsung",
    title: "Samsung SC 5251 RED",
    category: "Chang yutgich",
    price: 899000,
    oldPrice: 1000000,
    status: "Faol",
    image: "/categories/changyutgich.jpg",
  },
  {
    brend: "Ferre",
    category: "Pech",
    price: 999000,
    oldPrice: 1100000,
    status: "Faol",
    title: "Mini pech Ferre MO 3700 B",
    image: "/categories/mikropech.webp",
  },
  {
    brend: "Artel",
    category: "Kir yuvish mashinasi",
    price: 2999000,
    oldPrice: 3100000,
    status: "Faol",
    title: "Avtomat kir yuvish mashinasi Artel 9kg ",
    image: "/categories/kirmashina.png",
  },
  {
    brend: "Shivaki",
    category: "Televizor",
    price: 1999000,
    oldPrice: 2100000,
    status: "Faol",
    title: "Televizor Smart TV Li 32ASM01",
    image: "/categories/televizor.jpg",
  },
  {
    brend: "Ferre",
    category: "Gaz plita",
    price: 1299000,
    oldPrice: 1800000,
    status: "Faol",
    title: "Gaz plita Ferre LP 60G-40DB-ECO (F) 21",
    image: "/categories/gaz.jpg",
  },
];
export const categoryStatistics = [
  {
    category: "Gainer",
    sold: 83,
    color: "#3B82F6",
  },
  {
    category: "BCAA",
    sold: 54,
    color: "#EF4444",
  },
  {
    category: "Protaine",
    sold: 22,
    color: "#10B981",
  },
  {
    category: "Creatine",
    sold: 87,
    color: "#F59E0B",
  },
];

export const selectCategories = [
  { label: "all", name: "All" },
  { label: "discount", name: "Discounts" },
  { label: "protaine", name: "Proteins" },
  { label: "gainer", name: "Gainers" },
  { label: "creatine", name: "Creatines" },
  { label: "bcaa", name: "Bcaas" },
  { label: "vitamin", name: "Vitamins" },
  { label: "omega-3", name: "Omega 3" },
  { label: "for-babys", name: "For Babys" },
  { label: "for-womens", name: "For Womens" },
];
