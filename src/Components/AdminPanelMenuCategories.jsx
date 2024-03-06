import React, { useEffect, useState } from "react";
import "../Styles/AdminPanelMenuCategories.css";
export default function AdminPanelMenuCategories() {
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchMenuCategories = async () => {
    await fetch(
      "http://127.0.0.1:8080/menu-categories/getAllMenuCategories",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then(async(response) => setMenuCategories(response));
  };

  useEffect(() =>{
    fetchMenuCategories()
  },[])
  return (
    <div className="adminPanelMenuCategories">
      <table className="adminPanelMenuTable">
        <tr>
          <th>Sr. No.</th>
          <th>Category ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
        {menuCategories.map((category,index) => (
          <tr>
            <td>{index+1}</td>
            <td>{category.menuCategoryId}</td>
            <td>{category.menuCategoryName}</td>
            <td>Edit Delete</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
