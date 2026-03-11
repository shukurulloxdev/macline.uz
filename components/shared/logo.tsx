// import Link from "next/link";
// import React from "react";

// function Logo() {
//   return (
//     <Link href={"/"} className="select-none">
// <svg
//   width="215"
//   height="60"
//   viewBox="0 0 200 60"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <rect
//     width="40"
//     height="40"
//     rx="8"
//     fill="#DB2777"
//     transform="rotate(6 30 30)"
//   />
//   <rect x="10" y="10" width="40" height="40" rx="8" fill="#171717" />
//   <path
//     d="M22 24h16M22 30h16M27 18v24M33 18v24"
//     stroke="white"
//     stroke-width="2.5"
//     stroke-linecap="round"
//   />
//   <text
//     x="60"
//     y="35"
//     font-family="Arial, sans-serif"
//     font-weight="900"
//     font-size="24"
//     fill="#171717"
//   >
//     TEXNO<tspan fill="#DB2777">TECH</tspan>
//   </text>
//   <text
//     x="62"
//     y="48"
//     font-family="Arial, sans-serif"
//     font-weight="700"
//     font-size="8"
//     fill="#A3A3A3"
//     letter-spacing="2"
//   >
//     DIGITAL MARKET
//   </text>
// </svg>
//     </Link>
//   );
// }

// export default Logo;
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  admin?: boolean;
}
const Logo = ({ admin }: Props) => {
  return (
    <Link
      href={"/"}
      className="group flex cursor-pointer select-none items-center gap-3"
    >
      <rect
        width="40"
        height="40"
        rx="8"
        fill="#DB2777"
        transform="rotate(6 30 30)"
      />

      {/* 2. Matn qismi: OpenShop ierarxiyasida */}
      <div className="flex flex-col leading-none">
        <h1
          className={cn(
            "text-[30px] font-black uppercase tracking-tighter text-neutral-900",
            admin && "text-white",
          )}
        >
          Texno
          <span className="text-pink-600 transition-colors group-hover:text-pink-500">
            tech
          </span>
        </h1>
        <div className="mt-0.5 flex items-center gap-1.5">
          <div className="h-[1px] w-3 bg-neutral-300 transition-all group-hover:w-5"></div>
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400">
            Digital Market
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
