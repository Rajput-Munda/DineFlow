import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrdersPage from "./Components/OrdersPage";
import AdminPanel from "./Components/AdminPanel";
import AdminPanelUsers from "./Components/AdminPanelUsers";
import AdminPanelMenuItems from "./Components/AdminPanelMenuItems";
import AdminPanelMenuCategories from "./Components/AdminPanelMenuCategories";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OrdersPage />} />
          <Route path="/adminpanel/" element={<><AdminPanel /></>} ></Route>
          <Route path="/adminpanel/Users" element={<><AdminPanel /> <AdminPanelUsers /></>} ></Route>
          <Route path="/adminpanel/MenuCategories" element={<><AdminPanel /> <AdminPanelMenuCategories /> </>} ></Route>
          <Route path="/adminpanel/MenuItems" element={<><AdminPanel /><AdminPanelMenuItems /></>} ></Route>
          <Route path="/adminpanel/Orders" element={<><AdminPanel /></>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
