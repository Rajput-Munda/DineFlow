import React, { useEffect, useState } from "react";
import KitchenScheduleItem from "./KitchenScheduleItems";

export const KitchenSchedule = () => {
  const [ordersForKitchenScheduling, setOrdersForKitchenScheduling] = useState([]);

  const getItemsForKitchenScheduling = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/orders/getItemsForKitchenScheduling", {
        method: "GET",
      });
      const data = await response.json();
      setOrdersForKitchenScheduling(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItemsForKitchenScheduling();
  }, []);

  return (
    <>
      {ordersForKitchenScheduling.map((order) => (
        <KitchenScheduleItem 
          key={order.orderId} 
          orderId={order.orderId}
          orderDate={order.orderDate}
          orderTime={order.orderTime}
          orderItems={order.orderItems}
        />
      ))}
    </>
  );
};
