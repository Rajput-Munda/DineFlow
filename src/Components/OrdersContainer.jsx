import React from "react";
import OrderItemsContainer from "./OrderItemsContainer";
import OrderTotal from "./OrderTotal";
import OrderName from "./OrderName";
import "../Styles/OrderContainer.css";

const OrderContainer = ({ onCloseSidebar }) => {
  return (
    <nav className="side-navbar">
      <OrderName />
      <br></br>
      <OrderItemsContainer />
      <OrderTotal />
      <div className="pay-now-container">
        <button className="pay-now-btn">Pay Now</button>
      </div>
    </nav>
  );
};

export default OrderContainer;
