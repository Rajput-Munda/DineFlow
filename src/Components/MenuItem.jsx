import '../Styles/MenuItem.css';
import { useDispatch } from "react-redux";
import { addMenuItemToCart } from "../State/OrderSlice";

const MenuItem = (props) => {
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(addMenuItemToCart({
      menuItemId: {
        menuItemId: props.names
      },
      quantity: 1,
      subtotal: props.prices

    }))
  }

  return (

    
    <>
      
    <div className="detail-card">
      <img className="detail-img" src={props.imageSrc} alt="" />
        <div className="detail-desc">
         <div className="detail-name">
           <h4>{props.names}</h4>
           <p className="detail-sub">{props.text}</p>
           <p className="price">Rs.{props.prices}</p>
         </div>
         <button onClick={addItem}>Add to Basket</button>

      
      </div>
    </div>


    </>

  )
}

export default MenuItem;
