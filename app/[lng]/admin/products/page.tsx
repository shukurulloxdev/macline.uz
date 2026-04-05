import React from "react";
import { Button } from "@/components/ui/button";
import { LayersPlus } from "lucide-react";
// import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectCategories } from "@/components/constants";
import { getAdminProducts } from "@/actions/admin-actions";
import AdminProductCard from "./_components/cards/admin-product-card";
import EmptyAdminProducts from "@/components/shared/empty-admin-products";

async function Page() {
  const { data } = await getAdminProducts();
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-sora text-4xl font-black uppercase italic leading-tight tracking-tighter text-white">
            Barcha <span className="not-italic text-pink-600">Mahsulotlar</span>
          </h1>

          <p className="max-w-md text-[13px] font-medium leading-relaxed text-slate-400">
            Tizimdagi kiritilgan barcha mahsulotlar
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select>
            <SelectTrigger className="h-12 w-[350px] border border-white/40 bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-white transition-all duration-200 hover:bg-white/5 focus:ring-1 data-[placeholder]:font-inter data-[placeholder]:text-xs data-[placeholder]:font-semibold data-[placeholder]:uppercase data-[placeholder]:tracking-[0.15em] data-[placeholder]:text-white">
              <SelectValue
                placeholder="Texnikalarni filtrlash
"
              />
            </SelectTrigger>

            <SelectContent className="border border-white/50 bg-white/5 text-white backdrop-blur-3xl">
              {selectCategories.map((category) => (
                <SelectItem
                  key={category.label}
                  value={category.label}
                  className="cursor-pointer focus:bg-blue-600/30 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="group relative h-12 overflow-hidden rounded-xl bg-blue-600 px-4 shadow-lg shadow-blue-600/20 transition-all duration-500 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95">
            {/* Tugma ichidagi "Liquid" effekt (Hoverda o'ngga siljiydi) */}
            <div className="absolute inset-0 -translate-x-full rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:rotate-180">
                <LayersPlus size={18} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
                Mahsulot kiritish
              </span>
            </div>

            {/* Tugma chetidagi nozik nur */}
            <div className="absolute inset-0 rounded-xl border border-white/10" />
          </Button>
        </div>
      </div>
      {data && data?.products.length > 0 ? (
        <div className="rounded-3xl bg-white/5 p-6">
          <div className="flex flex-col gap-4">
            {data?.products.map((product) => (
              <AdminProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyAdminProducts />
      )}
    </div>
  );
}

export default Page;
