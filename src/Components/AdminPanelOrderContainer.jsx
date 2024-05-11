import React, { useEffect, useState } from "react";
import moment from "moment";
import AdminPanelOrderItem from "./AdminPanelOrderItem";

export default function AdminPanelOrderContainer() {
  const [date, setDate] = useState(moment()); // Initial date set to today
  const [orders, setOrders] = useState([]);

  const handleDurationChange = (duration) => {
    let newDate;
    switch (duration) {
      case "today":
        newDate = moment().format("YYYY-MM-DD");
        break;
      case "yesterday":
        newDate = moment().subtract(1, "days").format("YYYY-MM-DD");
        break;
      case "3days":
        newDate = moment().subtract(3, "days").format("YYYY-MM-DD");
        break;
      case "6months":
        newDate = moment().subtract(6, "months").format("YYYY-MM-DD");
        break;
      case "year":
        newDate = moment().subtract(1, "year").format("YYYY-MM-DD");
        break;
      case "3years":
        newDate = moment().subtract(3, "years").format("YYYY-MM-DD");
        break;
      default:
        newDate = moment().format("YYYY-MM-DD");
    }
    setDate(newDate);
  };

  const getItemsForKitchenScheduling = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/orders/getOrderAfterDate?date=${date}`, {
        method: "GET",
      });
      const data = await response.json();
      setOrders(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() =>{
    getItemsForKitchenScheduling()
  },[date])

  return (
    <>
      <div>
        <label>Select Duration: </label>
        <select onChange={(e) => handleDurationChange(e.target.value)}>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="3days">Last 3 days</option>
          <option value="6months">Last 6 months</option>
          <option value="year">Last year</option>
          <option value="3years">Last 3 years</option>
        </select>
      </div>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <AdminPanelOrderItem 
            key={index}
            order={order.order}
            orderItems={order.orderItems}
          />
        ))
      ) : (
        <p>No orders found for the selected duration.</p>
      )}
    </>
  );
}
