import { cn } from "@/lib/utils";
import { IProduct } from "@/types";

export default function ProductAbout({ product }: { product: IProduct }) {
  // Matnni nuqtalar bo'yicha bo'lish va bo'sh joylarni tozalash
  const descriptionPoints = product.description
    ? product.description.split(".").filter((p: string) => p.trim().length > 0)
    : [];

  return (
    <div className="flex flex-col gap-10 lg:col-span-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold uppercase tracking-tight text-pink-600">
          Mahsulot haqida
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {descriptionPoints.map((point: string, index: number) => (
          <div
            key={index}
            className={cn(
              "group relative cursor-pointer border-l-2 border-neutral-100 pl-6 transition-all hover:border-black",
              index === 0 && "border-l-black md:col-span-2", // Birinchi gapni katta qilib ko'rsatamiz
            )}
          >
            <p
              className={cn(
                "leading-relaxed text-neutral-500 transition-colors group-hover:text-black",
                index === 0
                  ? "text-xl font-medium text-neutral-800"
                  : "text-[16px]",
              )}
            >
              {point.trim()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
