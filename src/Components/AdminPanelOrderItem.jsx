// AdminPanelOrderItem.jsx
import React from "react";
import "../Styles/AdminPanelOrderItem.css";

export default function AdminPanelOrderItem({ order, orderItems }) {
  return (
    <div className="order-item-card">
      <h5>Order ID <span className="order-value">{order.orderId}</span></h5>
      <h6>Customer Name: <span className="order-value">{order.customerName}</span></h6>
      <h6>Order Date: <span className="order-value">{order.orderDate}</span></h6>
      <h6>Order Time: <span className="order-value">{order.orderTime}</span></h6>
      <h5>Order Items:</h5>
      <div className="order-item-container">
        {orderItems.map((orderItem, index) => (
          <div key={index} className="order-item">{orderItem.menuItemId.menuItemName} x {orderItem.quantity}</div>
        ))}
      </div>
    </div>
  );
}
