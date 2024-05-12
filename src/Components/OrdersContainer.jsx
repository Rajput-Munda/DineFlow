import React from "react";
import OrderItemsContainer from "./OrderItemsContainer";
import OrderTotal from "./OrderTotal";
import OrderName from "./OrderName";
import "../Styles/OrderContainer.css";
import { placeOrder, sendPaymentLink, updateOrder } from "../State/OrderSlice";
import { useDispatch, useSelector } from "react-redux";

const OrderContainer = ({ onCloseSidebar }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const orderDetails = order.orderDetails;
  const orderItems = order.orderItems;
  const subtotal = orderDetails.orderSubTotal;
  const customerDetails = orderDetails.customerName;
  const email = orderDetails.email;
  const phoneNo = orderDetails.phoneNo;
  const orderDate = orderDetails.orderDate;
  const orderId = orderDetails.orderId;
  const tableId = orderDetails.tableId;
  const reserved = useSelector((state) => state.order.reservedTable);

  const renderActionButton = () => {
    if (reserved) {
      return (
        <>
          <div className="pay-now-container">
            <button
              className="pay-now-btn"
              onClick={() => {
                dispatch(updateOrder({ orderDetails, orderItems }));
              }}
            >
              Update Order
            </button>
          </div>
          <div className="pay-now-container">
            <button
              className="pay-now-btn"
              onClick={() => {
                dispatch(sendPaymentLink({ orderDetails }));
              }}
            >
              Pay Now
            </button>
          </div>
        </>
      );
    } else if (orderItems.length > 0) {
      return (
        <div className="pay-now-container">
          <button
            className="pay-now-btn"
            onClick={() => {
              dispatch(placeOrder({ orderDetails, orderItems }));
            }}
          >
            Place Order
          </button>
        </div>
      );
    }
  };

  return (
    <nav className="side-navbar">
      <OrderName
        customerDetails={customerDetails}
        orderDate={orderDate}
        orderId={orderId}
        tableId={tableId}
        email={email}
        phoneNo={phoneNo}
      />
      <br />
      <OrderItemsContainer orderItems={orderItems} subtotal={subtotal} />
      <OrderTotal />
      {renderActionButton()}
    </nav>
  );
};

export default OrderContainer;
