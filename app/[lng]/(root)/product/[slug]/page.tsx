import { getProductById } from "@/actions/user-actions";
import ProductActions from "./_componets/product-actions";
import ProductAbout from "./_componets/product-about";
import ProductGallery from "./_componets/product-gallery";
import Link from "next/link";
import { Home } from "lucide-react";
import PathLink from "@/components/shared/path-link";

async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getProductById({ id: params.slug });

  if (!data?.product)
    return <div className="py-20 text-center">Mahsulot topilmadi</div>;

  return (
    <div className="mx-auto max-w-7xl py-8">
      <PathLink productName={data.product.name} />
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-5">
          <ProductGallery product={data.product} />
        </div>

        <div className="col-span-3">
          <div className="top-26 sticky space-y-8">
            <ProductActions product={data.product} />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-100 pt-8">
        <ProductAbout product={data.product} />
      </div>
    </div>
  );
}

export default Page;
