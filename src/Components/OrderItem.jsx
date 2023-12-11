import React from 'react';
import '../Styles/OrderItem.css'; // Import your CSS file

const OrderItem = (props) => {
  return (
    <div className="order-item">
      <div className="name">{props.name}</div>
      <div className="quantity">{props.quantity}</div>
      <div className="price">{props.subtotal}</div>
    </div>
  );
};

export default OrderItem;
