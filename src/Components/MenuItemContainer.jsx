import { useState, useEffect } from "react";
import "../Styles/MenuItemContainer.css";
import MenuItem from "./MenuItem";

const MenuItemContainer = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    setMenuItems(props.menuItems); // Update menuItems state when props.menuItems change
  }, [props.menuItems]);
  return (
    <>
      <h2 className="main-title"> Choose Order </h2>
      <div className="detail-wrapper">
        {menuItems.map((menuItem) => (
          <MenuItem
            key = {menuItem.menuItemId}
            imageSrc={`../Images/MenuItemImages/${menuItem.menuItemName}.png`}
            names={menuItem.menuItemName}
            text="Lorem ipsum dolor sit amet consectetur adipisicing."
            prices={menuItem.menuItemPrice}
            onClick = {() => addItem(menuItem)}
          />
        ))}
      </div>
    </>
  );
};

export default MenuItemContainer;
