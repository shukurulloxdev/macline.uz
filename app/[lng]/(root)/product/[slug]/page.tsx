import { getProductById } from "@/actions/user-actions";
import ProductActions from "./_componets/product-actions";
import ProductGallery from "./_componets/product-gallery";
import PathLink from "@/components/shared/path-link";
import ProductCard from "@/components/cards/product-card";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ProductGalleryMd from "./_componets/product-gallery-md";
import ProductActionsMd from "./_componets/product-actions-md";
import { Separator } from "@/components/ui/separator";
export const dynamic = "force-dynamic";

async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getProductById({ id: params.slug });

  if (!data?.product) {
    console.log(data?.failure);
    return <div className="py-20 text-center">Mahsulot topilmadi</div>;
  }
  console.log(data.products);

  return (
    <div className="relative mx-auto max-w-7xl max-md:bg-white max-md:px-3 md:py-4">
      <PathLink productName={data.product.name} />

      <div className="mt-4 hidden items-start gap-4 md:flex">
        <div className="flex-1">
          <ProductGalleryMd product={data.product} />
        </div>

        <div className="sticky top-36 w-[380px] space-y-8">
          <ProductActionsMd product={data.product} />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        <ProductGallery product={data.product} />
        <Separator />

        <ProductActions product={data.product} />
      </div>
      {data.products.length > 0 && (
        <div className="mt-6 space-y-2 border-t border-gray-100 py-6">
          <div className="relative z-10 mb-4 hidden flex-col items-start justify-between gap-6">
            <h2 className="font-sora text-2xl font-bold tracking-tight text-neutral-900">
              Siz uchun <span className="text-pink-600">maxsus</span>
            </h2>

            <Link
              href={`/category/${data?.product.category}`}
              className="group/btn flex items-center gap-3 rounded-2xl bg-pink-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-pink-500 hover:shadow-xl active:scale-95"
            >
              <span>Barchasini ko&apos;rish</span>

              <MoveRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
          <div className="mb-3 flex items-center justify-between px-1 md:hidden">
            <div className="flex flex-col gap-0.5">
              <h2 className="font-sora text-xl font-semibold tracking-tight text-gray-800 md:text-3xl">
                Siz uchun <span className="text-pink-600">maxsus</span>
              </h2>
              <div className="h-1 w-8 rounded-full bg-pink-500 md:hidden" />
            </div>

            <Link
              href={`/category/${data?.product.category}`}
              className="group flex items-center gap-1.5 rounded-full bg-pink-50 py-1.5 pl-3 pr-2 transition-all active:scale-95 md:bg-transparent md:p-0"
            >
              <span className="text-xs uppercase tracking-wider text-pink-600 md:text-base md:normal-case md:tracking-normal">
                <span className="font-bold md:hidden">Hammasi</span>
                <span className="text-[18px] text-pink-600 transition-colors duration-300 max-md:hidden">
                  Hammasini ko&apos;rish
                </span>
              </span>

              <div className="flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 md:bg-transparent">
                <MoveRight
                  size={16}
                  strokeWidth={2.5}
                  className="text-pink-600 md:size-5"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
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
