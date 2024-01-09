import React from 'react';
import '../Styles/OrderTotal.css';
import { useSelector } from 'react-redux';

const OrderTotal = () => {
  const subtotal = useSelector((state) => state.order.orderDetails.orderSubTotal)
  const tax = useSelector((state) => state.order.orderDetails.tax)
  const orderTotal = useSelector((state) => state.order.orderDetails.orderTotal)
  return (
    <div className="order-total">
      <div className="total-item">
        <span>Subtotal:</span>
        <span>₹{subtotal}</span> 
      </div>
      <div className="total-item">
        <span>GST:</span>
        <span>₹{tax}</span> 
      </div>
      <hr />
      <div className="total-item total-row">
        <span>Total:</span>
        <span>₹{orderTotal}</span> 
      </div>
    </div>
  );
};

export default OrderTotal;
