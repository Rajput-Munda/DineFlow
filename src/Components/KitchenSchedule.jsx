import React, { useEffect, useState } from "react";
import KitchenScheduleItem from "./KitchenScheduleItems";
import { useDispatch, useSelector } from "react-redux";
import { getItemsForKitchenScheduling } from "../State/OrderSlice";

export const KitchenSchedule = () => {
  const dispatch = useDispatch()
  const ordersForKitchenScheduling = useSelector((state) => state.order.kitchenOrders)

  useEffect(() => {
    dispatch(getItemsForKitchenScheduling())
  },[dispatch])

  return (
    <>
      {ordersForKitchenScheduling.map((order) => (
        <KitchenScheduleItem 
          key={order.orderId} 
          orderId={order.orderId}
          orderDate={order.orderDate}
          orderTime={order.orderTime}
          orderItems={order.orderItems}
          tableId = {order.tableId}
        />
      ))}
    </>
  );
};
