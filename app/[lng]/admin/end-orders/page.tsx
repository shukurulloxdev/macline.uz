import OrderCard from "@/components/cards/order-card";
import { Button } from "@/components/ui/button";
import { Mails } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Barcha tugatilgan buyurtmalar
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Bu yerda siz tugatilgan buyurtmalarni kuzatishingiz mumkun
          </p>
        </div>
        <Link href={"/admin/orders"}>
          <Button
            type="submit"
            className="h-11 bg-green-500 text-black transition-all duration-300 hover:scale-105 hover:bg-green-600 active:scale-95"
          >
            <Mails />
            Yangi buyurtmalar
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default Page;
