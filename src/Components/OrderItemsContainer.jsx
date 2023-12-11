import React from "react";
import OrderItem from "./OrderItem";
import "../Styles/OrderItemsContainer.css"; 

const OrderItemsContainer = () => {
  return (
    <div className="order-container">
      <h4><strong>Order Items</strong></h4>
      <div className="order-items">
        <div className="order-item headings">
          <div className="heading">Name</div>
          <div className="heading">Quantity</div>
          <div className="heading">Subtotal</div>
        </div>
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <OrderItem name="PaneerTikka" quantity="2" subtotal="400.00" />
        <div className="order-item total-subtotal">
          <div></div>
          <div></div>
          <div className="subtotal">Total Subtotal: 2000</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsContainer;
