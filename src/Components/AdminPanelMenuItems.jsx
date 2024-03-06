import React, { useEffect, useState } from "react";
import "../Styles/AdminPanelMenuCategories.css";
export default function AdminPanelMenuItems() {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = async () => {
    await fetch("http://127.0.0.1:8080/menu-items/getAllMenuItems", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (response) => setMenuItems(response))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);
  return (
    <div className="adminPanelMenuCategories">
      <table className="adminPanelMenuTable">
        <tr>
          <th>Sr.No</th>
          <th>MenuItemId</th>
          <th>MenuCategoryId</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Available</th>
          <th>Action</th>
        </tr>
        {menuItems.map((item, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{item.menuItemId}</td>
            <td>{item.menuCategoryId.menuCategoryId}</td>
            <td>{item.menuItemName}</td>
            <td>₹{item.menuItemPrice}</td>
            <td>{item.menuItemDescription}</td>
            <td>{item.available ? "Yes" : "No"}</td>
            <td>Delete Edit</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
