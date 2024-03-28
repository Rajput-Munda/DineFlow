import React, { useEffect, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "../Styles/AdminPanelMenuCategories.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditMenuItemModal from "./EditMenuItemModal";

export default function AdminPanelMenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showEditMenuItemModal, setShowMenuItemModal] = useState(false);

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
  };

  const handleShowConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(true);
  };

  const handleDeleteItem = (item) => {
    setSelectedItem(item);
    handleShowConfirmDeleteModal();
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    handleShowEditMenuItemModal()
  }

  const handleShowEditMenuItemModal = () => {
    setShowMenuItemModal(true);
  }

  const handleCloseEditMenuItemModal = () => {
    setShowMenuItemModal(false);
    fetchMenuItems()
  }

  const handleSaveEditedItem = (editedItem) => {
    console.log(editedItem)
    updateMenuItem(editedItem)
  }

  

  const deleteMenuItem = async (item) => {
    try {
      await fetch(
        `http://127.0.0.1:8080/menu-items/deleteMenuItem?menu_item_id=${item.menuItemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      // After successful deletion, fetch the updated list of menu items
      await fetchMenuItems();
      // Hide the modal after deletion
      handleCloseConfirmDeleteModal();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/menu-items/getAllMenuItems", {
        method: "GET",
      });
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMenuItem = async (editedItem) => {
    console.log(selectedItem.menuItemId)
    await fetch(`http://127.0.0.1:8080/menu-items/updateMenuItem?menu_item_id=${selectedItem.menuItemId}`, {
      method: "POST",
      body: JSON.stringify(editedItem)
      ,
      headers: {
        "Content-type" : "application/json"
      }
    })
    .then((response) => response.json())
    .then(await fetchMenuItems())
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="adminPanelMenuCategories">
      <table className="adminPanelMenuTable">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>MenuItemId</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={item.menuItemId}>
              <td>{index + 1}</td>
              <td>{item.menuItemId}</td>
              <td>{item.menuCategoryId.menuCategoryName}</td>
              <td>{item.menuItemName}</td>
              <td>₹{item.menuItemPrice}</td>
              <td>{item.menuItemDescription}</td>
              <td>{item.available ? "Yes" : "No"}</td>
              <td>
                <span onClick={() => handleDeleteItem(item)}>
                  <MdDelete />
                </span>{" "}
                <span onClick={() => handleEditItem(item)}>
                  <FaRegEdit />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmDeleteModal
        showConfirmDeleteModal={showConfirmDeleteModal}
        handleCloseConfirmDeleteModal={handleCloseConfirmDeleteModal}
        item={selectedItem}
        category={null}
        deleteMenuItem={deleteMenuItem}
      />
      <EditMenuItemModal 
      showEditMenuItemModal={showEditMenuItemModal}
      handleCloseEditMenuItemModal = {handleCloseEditMenuItemModal}
      item = {selectedItem}
      onSaveChanges={handleSaveEditedItem}
      />
    </div>
  );
}
