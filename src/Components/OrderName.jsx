import React from "react";
import "../Styles/OrderName.css";
import { useSelector } from "react-redux";

const OrderName = () => {
  const customerDetails = useSelector(
    (state) => state.order.orderDetails.customerName
  );
  const orderDate = useSelector((state) => state.order.orderDetails.orderDate);
  const orderId = useSelector((state) => state.order.orderDetails.orderId);

  return (
    <>
      <div className="order-detail">
        <h4>
          <strong>Order Details</strong>
        </h4>
        {customerDetails != null ? (
          <div>
            <strong>{customerDetails}</strong>
          </div>
        ) : (
          <div className="dateAndOrderId">Please Select Tabl</div>
        )}
        {orderDate != null ? (
          <div className="dateAndOrderId">
            <p>{orderDate}</p>
          </div>
        ) : (
          <></>
        )}
        {orderId != null ? (
          <div className="dateAndOrderId">
            <p>#ORDERID{orderId}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default OrderName;
