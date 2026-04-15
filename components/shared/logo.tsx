import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  admin?: boolean;
}
function Logo({ admin = false }: Props) {
  return (
    <Link
      href={"/"}
      className="relative inline-block h-12 w-48 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95"
    >
      <Image
        src={admin ? "/logo/maclinewhite.png" : "/logo/macline.png"}
        alt="Macline.uz"
        fill
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
