import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}
export interface StatisticsTip {
  price?: number;
  title: string;
  value?: string;
  suffix: string;
  icon: LucideIcon;
}
export interface bestSellerTip {
  brend: string;
  category: string;
  price: number;
  soldout: string;
  title: string;
  image: string;
}

export interface AdminProductCardTip {
  brend: string;
  category: string;
  price: number;
  oldPrice: number;
  title: string;
  status: string;
  image: string;
}
export interface searchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface IProduct {
  _id: string;
  name: string;
  active: boolean;
  category: string;
  description: string;
  brand: string;
  count: string;
  kafolat: string;
  price: number;
  discount: boolean;
  percent: number;
  top: boolean;
  images: string[];
}
export interface ICategory {
  _id: string;
  title: string;
  slug: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Iuser {
  _id: string;
  fullName: string;
  avatar: string;
  phone: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderProduct {
  productId: IProduct;
  count: number;
  proTotalPrice: number;
  onePrice: number;
}

export interface IOrder {
  _id: string;
  userId: string;
  fullName: string;
  phone: string;
  region: string;
  city: string;
  comment?: string;
  products: IOrderProduct[];
  status: "new" | "process" | "finished";
  totalDiscount: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ReturnActionType {
  user: Iuser;
  status: number;
  failure: string;
  isNext: boolean;
  product: IProduct;
  products: IProduct[];
  totalProduct: number;
  categories: ICategory[];
  category: ICategory;
  order: IOrder;
  orders: IOrder[];
  totalOrder: number;
  totalOrderPrice: number;
  totalUser: number;
}
