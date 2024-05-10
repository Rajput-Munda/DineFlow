import "../Styles/RestaurantTableContainer.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import RestaurantTable from "./RestaurantTable";
import { useEffect, useRef, useState } from "react";
import CustomerDetailsModal from "./CustomerDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantTables } from "../State/RestaurantSlice";
import { fetchOrderDetails } from "../State/OrderSlice";

const RestaurantTablesContainer = () => {
  const [customerDetailsModalVisible, setCustomerDetailsModalVisible] =
    useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const restaurantTable = useSelector(
    (state) => state.restaurant.restaurantTable
  );
  const dispatch = useDispatch();
  const containerRef = useRef(null)

  const tableClicked = (table) => {
    setSelectedTable(table.tableId);
    if (table.tableStatus == 0) {
      openCustomerDetailsModal();
    } else {
      dispatch(fetchOrderDetails(table.tableId));
    }
  };
  const openCustomerDetailsModal = () => {
    setCustomerDetailsModalVisible(true);
  };
  const closeCustomerDetailsModal = () => {
    setCustomerDetailsModalVisible(false);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  useEffect(() => {
    dispatch(fetchRestaurantTables());
  }, [dispatch]);

  return (
    <>
      <div className="main-header">
        <h2 className="main-title">Tables</h2>
        <div className="main-arrow">
          <FaChevronCircleLeft className="back" onClick={scrollLeft} />
          <FaChevronCircleRight className="next" onClick={scrollRight} />
        </div>
      </div>
      {/* reserved for tablestatus 1(true)  */}
      <div className="highlight-wrapper" ref={containerRef}>
        {restaurantTable.map((table) => (
          <RestaurantTable
            key={table.tableId}
            name={`Table ${table.tableId}`}
            status={table.tableStatus ? "Reserved" : "Vaccant"}
            imageSrcs={`../Images/TableImages/Table${table.tableId}.png`}
            onClick={() => tableClicked(table)}
          />
        ))}
        <CustomerDetailsModal
          customerDetailModal={customerDetailsModalVisible}
          open={openCustomerDetailsModal}
          handleClose={closeCustomerDetailsModal}
          tableId={selectedTable}
        ></CustomerDetailsModal>
      </div>
    </>
  );
};

export default RestaurantTablesContainer;
