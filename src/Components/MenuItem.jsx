import '../Styles/MenuItem.css';
import { useDispatch } from "react-redux";
import { addMenuItemToCart } from "../State/OrderSlice";
import { useState } from 'react';

const MenuItem = (props) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const addItem = () => {
    dispatch(addMenuItemToCart({
      menuItemId: {
        menuItemId: props.id,
        menuItemName: props.names
      },
      quantity: quantity,
      subtotal: props.prices * quantity

    }))
    setQuantity(0)
  }


  return (

    
    <>
      
    <div className="detail-card">
      <img className="detail-img" src={props.imageSrc} alt="" />
        <div className="detail-desc">
         <div className="detail-name">
           <h4>{props.names}</h4>
           <p className="detail-sub">{props.text}</p>
           <p className="price">₹{props.prices}</p>
         </div>
      
      </div>
      <button class="counter-button">
        <span onClick={() => setQuantity(quantity + 1)}>+</span>
        <span>{quantity}</span>
        <span
          onClick={() => {
            if (quantity - 1 >= 0) setQuantity(quantity - 1);
          }}
        >
          -
        </span>
      </button>
      <button class="add-to-cart-button" onClick={addItem}>Add to Cart</button>
    </div>


    </>

  )
}

export default MenuItem;
