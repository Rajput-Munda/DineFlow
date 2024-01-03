import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrderContainer from "./Components/OrdersContainer";
import Navbar from "./Components/Navbar";
import RestaurantTablesContainer from "./Components/RestaurantTablesContainer";
import MenuContainer from "./Components/MenuContainer";

function App() {
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

export default App;
