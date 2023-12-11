import '../Styles/RestaurantTableContainer.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import RestaurantTable from './RestaurantTable';
import OrdersContainer from './OrdersContainer';
import { useState } from 'react';


const RestaurantTablesContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* <!-- title section and arrow --> */}
      <div className="main-header">
        <h2 className="main-title">Tables</h2>
        <div className="main-arrow">
          <FaChevronCircleLeft className="back"/>
          <FaChevronCircleRight className="next"/>
        </div>
      </div>

      <div className="highlight-wrapper">
        <RestaurantTable name="Table 1" status="Reserved" imageSrcs="../Images/Salad1.jpg"  onClick={sidebarOpen ? closeSidebar : openSidebar} />
        <RestaurantTable name="Table 2" status="Vacant" imageSrcs="../Images/coffee.jpg"  onClick={sidebarOpen ? closeSidebar : openSidebar} />
        <RestaurantTable name="Table 3" status="Reserved" imageSrcs="../Images/pizza1.jpg"  onClick={sidebarOpen ? closeSidebar : openSidebar} />
        <RestaurantTable name="Table 4" status="Reserved" imageSrcs="../Images/burger.jpg"  onClick={sidebarOpen ? closeSidebar : openSidebar} />              
      </div>
      <div className={sidebarOpen ? 'offcanvas offcanvas-start w-25 show' : 'offcanvas offcanvas-start w-25'} tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
        <OrdersContainer onClose={closeSidebar}/>
      </div>
    </>
  );
};

export default RestaurantTablesContainer;
