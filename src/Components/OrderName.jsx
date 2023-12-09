import React from "react";
import "../Styles/OrderName.css";

const OrderName = () => {
  return (
    <>
      <div className="order-detail">
        <h4><strong>Order Details</strong></h4>
        <div>
          <strong>Recipent Name: John Doe</strong>
        </div>
        <div className="dateAndOrderId"> <p>Monday 21st December, 2023</p></div>
        <div className="dateAndOrderId"><p>#ORDERID001</p></div>
      </div>
    </>
  );
};
export default OrderName;
