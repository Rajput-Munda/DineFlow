import React from "react";
import "../styles/HighestSellingItems.css";

const HighestSellingItems = ({ highestSellingItems }) => {
  return (
    <div className="highest-selling-items">
      <h2>Highest Selling Items in Each Category</h2>
      <table className="item-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Highest Selling Item</th>
          </tr>
        </thead>
        <tbody>
          {highestSellingItems.map((item) => (
            <tr key={item.menuCategoryId}>
              <td>{item.menuCategoryName}</td>
              <td>{item.menuItemName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighestSellingItems;
