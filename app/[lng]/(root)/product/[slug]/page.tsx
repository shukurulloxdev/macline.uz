import { getProductById } from "@/actions/user-actions";
import ProductActions from "./_componets/product-actions";
import ProductGallery from "./_componets/product-gallery";
import PathLink from "@/components/shared/path-link";
import ProductCard from "@/components/cards/product-card";
import Link from "next/link";
import { MoveRight } from "lucide-react";
export const dynamic = "force-dynamic";

async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getProductById({ id: params.slug });

  if (!data?.product) {
    console.log(data?.failure);
    return <div className="py-20 text-center">Mahsulot topilmadi</div>;
  }

  return (
    <div className="relative mx-auto max-w-7xl space-y-4 py-4">
      <PathLink productName={data.product.name} />

      <div className="flex items-start gap-4">
        <div className="flex-1">
          <ProductGallery product={data.product} />
        </div>

        <div className="sticky top-36 w-[380px] space-y-8">
          <ProductActions product={data.product} />
        </div>
      </div>
      {data.products && (
        <div className="mt-6 space-y-2 border-t border-gray-100 py-6">
          <div className="relative z-10 mb-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-sora text-4xl font-bold tracking-tight text-neutral-900">
              Siz uchun <span className="text-pink-600">maxsus</span>
            </h2>

            <Link
              href={`/category/${data?.product.category}`}
              className="group/btn flex items-center gap-3 rounded-2xl bg-pink-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-pink-500 hover:shadow-xl active:scale-95"
            >
              <span>Barchasini ko'rish</span>

              <MoveRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {data.products &&
              data.products.map((product) => (
                <ProductCard product={product} key={product._id} view="grid" />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
