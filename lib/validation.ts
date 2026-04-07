import { z } from "zod";

export const addProductSchema = z
  .object({
    name: z.string().min(5, "Kamida 5 ta harf"),

    category: z.string().min(1, "Kategoriya majburiy"),

    description: z.string().min(10, "Kamida 10 ta harf"),

    brand: z.string().min(1, "Brend majburiy"),

    price: z.string().min(1, "Narx majburiy"),

    top: z.boolean().optional(),
    discount: z.boolean().optional(),
    percent: z.string().optional(),
    images: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.discount === true &&
      (!data.percent || data.percent.trim() === "")
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["percent"],
        message: "Chegirma bosilganda, foiz majburiy",
      });
    }
  });

export const idSchema = z.object({
  id: z.string(),
});
export const idsSchema = z.object({
  ids: z.array(z.string()),
});

export const updateProductSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  brand: z.string().optional(),
  price: z.number().optional(),
  percent: z.number().optional(),
  category: z.string().optional(),
  top: z.boolean().optional(),
  discount: z.boolean().optional(),
  active: z.boolean().optional(),
  // Rasmlar — optional
  images: z.array(z.string()).optional(),
});
export const searchParamsSchema = z.object({
  searchQuery: z.string().optional(),
  filter: z.string().optional(),
  category: z.string().optional(),
  page: z.string().default("1"),
  pageSize: z.string().default("10"),
});

export const addCategorySchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, "Kategoriya nomi kamida 4 ta harf bo‘lishi kerak"),
  slug: z.string().optional(),

  seoTitle: z
    .string()
    .trim()
    .min(10, "SEO title kamida 10 ta belgi bo‘lishi kerak")
    .max(70, "SEO title 70 ta harfdan oshmasligi kerak"),

  seoDescription: z
    .string()
    .trim()
    .min(20, "SEO description kamida 30 ta belgi bo‘lishi kerak")
    .max(160, "SEO description 160 ta harfdan oshmasligi kerak"),

  active: z.boolean().default(true).optional(),
  image: z.string().optional(),
});

export const registerSchema = z.object({
  fullName: z.string().min(2, "Iltimos ismingizni kiriting!"),
  phone: z.string().refine(
    (val) => {
      // Maska ichidagi barcha "_" belgilarini olib tashlaymiz
      const cleanValue = val.replace(/_/g, "");
      // To'liq formatlangan raqam: +998 (90) 123-45-67 (jami 19 ta belgi bo'lishi kerak)
      return cleanValue.length === 19;
    },
    {
      message: "Iltimos, telefon raqamingizni to'liq kiriting!",
    },
  ),
});

export const phoneSchema = z.object({
  phone: z.string(),
});

export const otpSchema = z.object({
  otp: z.string().length(5, { message: "OTP kod 5 ta bo'lishi kerak" }),
});
export const verifyOtpSchema = z.object({
  phone: z.string(),
  otp: z.string(),
});

export const orderSchema = z.object({
  fullName: z.string().min(3, "Ism familiya kiritish shart"),
  phone: z.string().min(9, "Telefon raqam kiritish shart"),
  region: z.string().min(5, "Viloyat kiritish shart"),
  city: z.string().min(5, "Hudud kiritish shart"),
  comment: z.string().optional(),
  totalDiscount: z.number().optional(),
  totalPrice: z.number().optional(),

  products: z
    .array(
      z.object({
        productId: z.string(),
        count: z.number(),
        proTotalPrice: z.number(),
        onePrice: z.number().optional(),
      }),
    )
    .optional(),
});

export const orderStatusSchema = z.object({
  orderId: z.string(),
  status: z.string(),
});
export const getCategorySchema = z.object({
  slug: z.string(),
});
export const categoryUpdateSchema = z.object({
  id: z.string(),
  image: z.string().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
