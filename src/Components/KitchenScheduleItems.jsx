import React from "react";
import "../Styles/KitchenScheduleItem.css";

export default function KitchenScheduleItem(props) {
  const getMenuCategory = async () => {
    try {
      await fetch(
        `http://127.0.0.1:8080/order/startPreparingOrder?orderId=${props.orderId}`,
        {
          method: "POST",
        }
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="order-item-card">
      <h5>
        Order ID#<span className="order-value">{props.orderId}</span>
      </h5>
      <h6>
        Order Date: <span className="order-value">{props.orderDate}</span>
      </h6>
      <h6>
        Order Time: <span className="order-value">{props.orderTime}</span>
      </h6>
      <h5>Order Items:</h5>
      {props.orderItems.map((orderItem, index) => (
        <div key={index} className="order-item-container">
          <div className="order-item">
            {index + 1}) {orderItem.menuItemName} x {orderItem.quantity}
          </div>
        </div>
      ))}
      <div className="pay-now-container">
        <button
          className="pay-now-btn"
          onClick={() => {
            getMenuCategory();
          }}
        >
          Start Preparing
        </button>
      </div>
    </div>
  );
}
