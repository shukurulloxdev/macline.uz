import React from "react";
import { Heart, Trash2, ShoppingBag, Sparkles, HandCoins } from "lucide-react";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addManyToBasket } from "@/redux/reducers/basketState";
import { removeAllFavorites } from "@/redux/reducers/favoriteState";
import Link from "next/link";

interface Props {
  products: IProduct[];
}

function FavoriteSidebar({ products }: Props) {
  const totalItems = products?.length || 0;

  const finalPrice = products.reduce(
    (acc, pro) => acc + pro.price - (pro.price * pro.percent) / 100,
    0,
  );

  // const totalPrice = products?.reduce((acc, p) => acc + (p.price ), 0) || 0;

  // const totalDiscount = products.reduce(
  //   (acc, p) => acc + p.price * (p.percent / 100),
  //   0,
  // );

  // const finalPrice = totalPrice - totalDiscount;

  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds,
  );
  const dispatch = useDispatch();

  function addBasket() {
    dispatch(addManyToBasket(favoriteIds));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      <div className="p-6">
        {/* HEADER: Kichik va o'ta tartibli */}
        <div className="mb-8 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-pink-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-500/60">
                Yoqtirganlaringiz
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
              Xulosa
            </h2>
          </div>
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-2xl bg-neutral-50 text-pink-600 ring-1 ring-neutral-100">
            <Heart size={24} fill="currentColor" />
          </div>
        </div>

        {/* INFO BLOKLARI */}
        <div className="space-y-6">
          {/* Mahsulot soni badge bilan */}
          <div className="group flex items-center justify-between rounded-2xl border border-neutral-50 bg-neutral-50 p-4 transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Tanlovlar:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-neutral-900">
                {totalItems}
              </span>
              <span className="text-[10px] font-bold uppercase text-neutral-400">
                ta
              </span>
            </div>
          </div>

          {/* Narx qismi ulkan va aniq */}
          <div className="px-1">
            <div className="mb-2 flex items-center gap-2">
              <HandCoins size={14} className="text-neutral-300" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Umumiy Qiymat:
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tighter text-neutral-900">
                {finalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-bold uppercase text-neutral-400">
                so&apos;m
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={() => dispatch(removeAllFavorites())}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 transition-all hover:border-red-100 hover:bg-red-50 hover:text-red-500 active:scale-95"
          >
            <Trash2 size={14} />
            Hammasini tozalsh
          </button>

          <Link href={"/shopping/cart"}>
            <button
              className="group relative h-12 w-full overflow-hidden rounded-2xl bg-pink-600 transition-all active:scale-95"
              onClick={addBasket}
            >
              {/* Hoverda chiqadigan gradient fon */}
              <div className="absolute inset-0 translate-y-full bg-pink-700/40 transition-transform duration-300 group-hover:translate-y-0" />

              <div className="relative z-10 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                <ShoppingBag size={18} />
                <span>Hammasini Savatga</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavoriteSidebar;
