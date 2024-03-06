import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrderContainer from "./OrdersContainer";
import Navbar from "./Navbar";
import RestaurantTablesContainer from "./RestaurantTablesContainer";
import MenuContainer from "./MenuContainer";

function OrdersPage() {
  return (
    
    <div className="maincontent">
      <OrderContainer></OrderContainer>
      <div className="main">
        <Navbar />
        <div className="main-highlight">
          <RestaurantTablesContainer />
        </div>
        <div className="main-menus">
          <MenuContainer />
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
