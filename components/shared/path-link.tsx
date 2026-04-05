// import { ChevronRight, Home } from "lucide-react";
// import Link from "next/link";

// export default function PathLink({ productName }: { productName: string }) {
//   return (
//     <nav className="mb-8 flex items-center space-x-2 text-[13px] font-medium tracking-tight">
//       <Link
//         href="/"
//         className="flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-black"
//       >
//         <Home size={14} strokeWidth={2.5} />
//         <span>Bosh sahifa</span>
//       </Link>

//       <ChevronRight size={14} className="text-neutral-300" strokeWidth={3} />

//       {/* Category - Statik yoki loyihangizga qarab dinamik qilishingiz mumkin */}
//       <Link
//         href="/products"
//         className="text-neutral-400 transition-colors hover:text-black"
//       >
//         Mahsulotlar
//       </Link>

//       <ChevronRight size={14} className="text-neutral-300" strokeWidth={3} />

//       {/* Current Product - Oxirgisi doim aktiv va qora rangda bo'ladi */}
//       <span className="max-w-[200px] truncate font-semibold text-black">
//         {productName}
//       </span>
//     </nav>
//   );
// }
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function PathLink({ productName }: { productName: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3"
    >
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-[15px] font-medium text-[#8b8b95] transition-colors hover:text-[#1f1f23]"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-[#fff7fa] text-pink-500 ring-1 ring-[#f6dfe8] transition-colors group-hover:bg-pink-500 group-hover:text-white">
          <Home size={16} strokeWidth={2.2} />
        </span>
        <span>Bosh sahifa</span>
      </Link>

      <ChevronRight
        size={16}
        strokeWidth={2.5}
        className="shrink-0 text-[#cfc7cc]"
      />

      <Link
        href="/products"
        className="inline-flex items-center rounded-xl px-2 py-1.5 text-[15px] font-medium text-[#8b8b95] transition-colors hover:text-[#1f1f23]"
      >
        Mahsulotlar
      </Link>

      <ChevronRight
        size={16}
        strokeWidth={2.5}
        className="shrink-0 text-[#cfc7cc]"
      />

      <span className="inline-flex max-w-full items-center text-[15px] font-semibold text-pink-600 md:max-w-[360px]">
        <span className="truncate">{productName}</span>
      </span>
    </nav>
  );
}
