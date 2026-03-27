import { finishedOrders, newOrders } from "@/actions/user-actions";
import OrdersActionsFun from "./_components/order-actions-fun";

async function OrdersPage() {
  const newOrder = await newOrders();
  const finishedOrde = await finishedOrders();

  return (
    <div>
      <OrdersActionsFun
        newOrders={newOrder.data?.orders || []}
        finishedOrders={finishedOrde.data?.orders || []}
      />
    </div>
  );
}

export default OrdersPage;
