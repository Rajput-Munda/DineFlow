import React from "react";
import OrderItemsContainer from "./OrderItemsContainer";
import OrderTotal from "./OrderTotal";
import OrderName from "./OrderName";
import "../Styles/OrderContainer.css";
import { placeOrder } from "../State/OrderSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const OrderContainer = ({ onCloseSidebar }) => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order)
  const orderDetails = order.orderDetails
  const orderItems = order.orderItems;
  const subtotal = orderDetails.orderSubTotal
  const customerDetails = orderDetails.customerName
  const orderDate = orderDetails.orderDate;
  const orderId = orderDetails.orderId;
  const tableId = orderDetails.tableId;
  return (
    <nav className="side-navbar">
      <OrderName
        customerDetails={customerDetails}
        orderDate={orderDate}
        orderId={orderId}
        tableId={tableId}
      />
      <br></br>
      <OrderItemsContainer orderItems={orderItems} subtotal={subtotal} />
      <OrderTotal />
      <div className="pay-now-container">
        <button className="pay-now-btn" onClick={() => {dispatch(placeOrder({orderDetails, orderItems}))}}>Place Order</button>
      </div>
      <div className="pay-now-container">
        <button className="pay-now-btn">Pay Now</button>
      </div>
    </nav>
  );
};

export default OrderContainer;
