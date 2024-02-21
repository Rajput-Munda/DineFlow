import React from "react";
import OrderItem from "./OrderItem";
import "../Styles/OrderItemsContainer.css"; 

const OrderItemsContainer = (props) => {
 const orderItems = props.orderItems
 const subtotal = props.subtotal
  
  return (
    <div className="order-container">
      <h4><strong>Order Items</strong></h4>
      <div className="order-items">
        <div className="order-item headings">
          <div className="heading">Name</div>
          <div className="heading">Quantity</div>
          <div className="heading">Subtotal</div>
        </div>
        {orderItems.length > 0 && orderItems != undefined ? (
          orderItems.map((orderItem, index) => (
            <OrderItem
              key={index}
              index={index}
              name={orderItem.menuItemId.menuItemName}
              quantity={orderItem.quantity}
              subtotal={orderItem.subtotal}
            />
          ))
        ) : (
          <p>No order items available</p>
        )}
        <div className="order-item total-subtotal">
          <div></div>
          <div></div>
          <div className="subtotal">Total Subtotal: ₹{subtotal}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsContainer;
