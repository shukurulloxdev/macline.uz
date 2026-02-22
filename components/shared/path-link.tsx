import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function PathLink({ productName }: { productName: string }) {
  return (
    <nav className="mb-8 flex items-center space-x-2 text-[13px] font-medium tracking-tight">
      {/* Home Icon */}
      <Link
        href="/"
        className="flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-black"
      >
        <Home size={14} strokeWidth={2.5} />
        <span>Bosh sahifa</span>
      </Link>

      <ChevronRight size={14} className="text-neutral-300" strokeWidth={3} />

      {/* Category - Statik yoki loyihangizga qarab dinamik qilishingiz mumkin */}
      <Link
        href="/products"
        className="text-neutral-400 transition-colors hover:text-black"
      >
        Mahsulotlar
      </Link>

      <ChevronRight size={14} className="text-neutral-300" strokeWidth={3} />

      {/* Current Product - Oxirgisi doim aktiv va qora rangda bo'ladi */}
      <span className="max-w-[200px] truncate font-semibold text-black">
        {productName}
      </span>
    </nav>
  );
}
