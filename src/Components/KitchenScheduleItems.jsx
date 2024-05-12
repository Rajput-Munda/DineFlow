import React from "react";
import "../Styles/KitchenScheduleItem.css";
import { useDispatch } from "react-redux";
import { startPreparingOrder } from "../State/OrderSlice";

export default function KitchenScheduleItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="order-item-card">
      <h5>
        Order ID#<span className="order-value">{props.orderId}</span>
      </h5>
      <h6>
        Table: <span className="order-value">{props.tableId.tableId}</span>
      </h6>
      <h6>
        Order Date: <span className="order-value">{props.orderDate}</span>
      </h6>
      <h6>
        Order Time: <span className="order-value">{props.orderTime}</span>
      </h6>
      <h5>Order Items:</h5>
      {props.orderItems.map((orderItem, index) => (
        <div key={index} className="order-item-container">
          <div className="order-item">
            {index + 1}) {orderItem.menuItemName} x {orderItem.quantity}
          </div>
        </div>
      ))}
      <div className="pay-now-container">
        <button
          className="pay-now-btn"
          onClick={() => {
            dispatch(startPreparingOrder({orderId: props.orderId}))
          }}
        >
          Start Preparing
        </button>
      </div>
    </div>
  );
}
