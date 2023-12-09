import React from "react";
import { FaTimes } from "react-icons/fa";
import  OrderDetail from "./OrderDetail";
import  OrderItem  from "./OrderItem";
import  OrderTotal  from "./OrderTotal";
import  OrderName  from "./OrderName";

const OrderContainer = ({onCloseSidebar}) => {
  return (
    <nav className="side-navbar">
      <div className="close-btn" onClick={onCloseSidebar}>
        <FaTimes />
      </div>
      <OrderName />
      <OrderDetail />
      <OrderItem />
      <OrderTotal />

    </nav>
  );
};

export default OrderContainer;
