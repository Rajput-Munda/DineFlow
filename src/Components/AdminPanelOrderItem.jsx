// AdminPanelOrderItem.jsx
import React from "react";
import "../Styles/AdminPanelOrderItem.css";

export default function AdminPanelOrderItem() {
  return (
    <div className="order-item-card">
      <h5>Order ID <span className="order-value">#0001</span></h5>
      <h6>Customer Name: <span className="order-value">John Doe</span></h6>
      <h6>Order Date: <span className="order-value">2024-03-05</span></h6>
      <h6>Order Time: <span className="order-value">10:00 AM</span></h6>
      <h5>Order Items:</h5>
      <div className="order-item-container">
        <div className="order-item">Item 1</div>
        <div className="order-item">Item 2</div>
        <div className="order-item">Item 3</div>
      </div>
    </div>
  );
}
