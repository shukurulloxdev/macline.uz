import { getAdminOrders } from "@/actions/order-actions";
import AdminOrdersTabs from "./_components/admin-orders-tabs";
export const dynamic = "force-dynamic";

async function Page() {
  const res = await getAdminOrders();

  console.log("RES:", res);
  console.log("RES.DATA:", res.data);

  const orders = res.data?.orders || [];

  const groupedOrders = {
    new: orders.filter((item) => item.status === "new"),
    process: orders.filter((item) => item.status === "process"),
    finished: orders.filter((item) => item.status === "finished"),
  };

  return (
    <AdminOrdersTabs
      newOrders={groupedOrders.new}
      processOrders={groupedOrders.process}
      finishedOrders={groupedOrders.finished}
    />
  );
}

export default Page;
