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
      className="relative h-14 w-52 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <Image
        src={admin ? "/logo/logooq.png" : "/logo/macline.png"}
        alt="Macline.uz"
        fill
        className="rounded-2xl object-cover"
      />
    </Link>
  );
}

export default Logo;
