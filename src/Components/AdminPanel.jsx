import React from "react";
import "../Styles/AdminPanel.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="adminPanel">
      <div className="adminPanelMain">
        <Navbar></Navbar>
        <ul className="adminPanelList">
          <li className="adminPanelListOption">
            <Link to="/adminpanel/Users">Users</Link>
          </li>
          <li className="adminPanelListOption">
            <Link to="/adminpanel/MenuCategories">Menu Cateogries</Link>
          </li>
          <li className="adminPanelListOption">
            <Link to="/adminpanel/MenuItems">Menu Items</Link>
          </li>
          <li className="adminPanelListOption">
            <Link to="/adminpanel/Orders">Orders</Link>
          </li>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
}
