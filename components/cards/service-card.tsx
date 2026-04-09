import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

// Ikonkalar uchun "Premium Soft" ramka va nozik "Glow" effekti
export const ServiceCard = ({ icon, title, className }: ServiceCardProps) => (
  <div
    className={cn(
      "group flex flex-col gap-4 rounded-[1.5rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-100/30 transition-all hover:bg-neutral-50 hover:shadow-lg",
      className,
    )}
  >
    {/* Ikonka ramkasi - pushti soft fon */}
    <div className="flex size-14 items-center justify-center rounded-[1rem] bg-pink-50 ring-1 ring-pink-100 transition-transform group-hover:scale-105">
      {icon}
    </div>

    {/* Sarlavha (Pushti urg'u bilan) */}
    <p className="text-xl font-bold leading-tight text-neutral-900 transition-colors group-hover:text-pink-600">
      {title}
    </p>
  </div>
);
