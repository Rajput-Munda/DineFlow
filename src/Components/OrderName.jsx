import React from "react";
import "../Styles/OrderName.css";
import { useSelector } from "react-redux";

const OrderName = (props) => {
  const customerDetails = props.customerDetails
  const orderDate = props.orderDate
  const orderId = props.orderId
  const tableId = props.tableId

  return (
    <>
      <div className="order-detail">
        <h4>
          <strong>Order Details: </strong>
          {
            tableId != null ? (
              <strong>Table {tableId.tableId}</strong>
            ): (<>
            </>)
          }
        </h4>
        {customerDetails != null ? (
          <div>
            <strong>{customerDetails}</strong>
          </div>
        ) : (
          <div className="dateAndOrderId">Please Select Table</div>
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
