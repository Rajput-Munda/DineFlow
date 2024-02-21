import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "../Styles/OrderItem.css"; // Import your CSS file
import { useDispatch, useSelector } from "react-redux";
import { removeMenuItemFromCart } from "../State/OrderSlice";

const OrderItem = (props) => {
  const dispatch = useDispatch();
  const reservedTable = useSelector((state) => state.order.reservedTable)
  const removeItem = () => {
    console.log(props.index)
    dispatch(removeMenuItemFromCart(props.index))
  }
  return (
    <div className="order-item">
      <div className="name">{props.name}</div>
      <div className="quantity">{props.quantity}</div>
      <div className="price">₹{props.subtotal}</div>
      {reservedTable == false ? 
      (<div className="removeItem" onClick={removeItem}>
        <MdRemoveCircleOutline />
      </div>) : (<> </>)}
    </div>
  );
};

export default OrderItem;
