import React from "react";
import { useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrdersPage from "./Components/OrdersPage";
import AdminPanel from "./Components/AdminPanel";
import AdminPanelMenuItems from "./Components/AdminPanelMenuItems";
import AdminPanelMenuCategories from "./Components/AdminPanelMenuCategories";
import AdminPanelOrderContainer from "./Components/AdminPanelOrderContainer";
import { useDispatch } from "react-redux";
import { fetchRestaurantTables } from "./State/RestaurantSlice";
import { KitchenSchedule } from "./Components/KitchenSchedule";
import Navbar from "./Components/Navbar";

function App() {
  useEffect(() => {
    connect();
  }, []);

  var stompClient = null;
  const dispatch = useDispatch();

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/websocket");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe("/topic/order-placed", (message) => {
      console.log("Received order placed message:", message.body);
      dispatch(fetchRestaurantTables());
    });
    stompClient.subscribe("/topic/payment-made", (message) => {
      console.log("Received successfull payment message :", message.body);
      dispatch(fetchRestaurantTables());
    });
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OrdersPage />} />
          <Route
            path="/kitchenSchedule"
            element={
              <>
                <Navbar /> <KitchenSchedule />{" "}
              </>
            }
          />

          <Route
            path="/adminpanel/"
            element={
              <>
                <AdminPanel />
              </>
            }
          ></Route>
          <Route
            path="/adminpanel/MenuCategories"
            element={
              <>
                <AdminPanel /> <AdminPanelMenuCategories />{" "}
              </>
            }
          ></Route>
          <Route
            path="/adminpanel/MenuItems"
            element={
              <>
                <AdminPanel />
                <AdminPanelMenuItems />
              </>
            }
          ></Route>
          <Route
            path="/adminpanel/Orders"
            element={
              <>
                <AdminPanel /> <AdminPanelOrderContainer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
