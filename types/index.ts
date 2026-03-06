import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}
export interface StatisticsTip {
  title: string;
  value: string;
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
}

export interface ReturnActionType {
  status: number;
  failure: string;
  isNext: boolean;
  product: IProduct;
  products: IProduct[];
  totalProduct: number;
  categories: ICategory[];
}
