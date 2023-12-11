import React from 'react';
import '../Styles/OrderTotal.css'; // Import your CSS file

const OrderTotal = () => {
  return (
    <div className="order-total">
      <div className="total-item">
        <span>Subtotal:</span>
        <span>2000.00</span> {/* Replace with your actual subtotal value */}
      </div>
      <div className="total-item">
        <span>GST:</span>
        <span>20.00</span> {/* Replace with your actual GST value */}
      </div>
      <div className="total-item">
        <span>Discount:</span>
        <span>50.00</span> {/* Replace with your actual discount value */}
      </div>
      <hr />
      <div className="total-item total-row">
        <span>Total:</span>
        <span>370.00</span> {/* Replace with your actual total value */}
      </div>
    </div>
  );
};

export default OrderTotal;
