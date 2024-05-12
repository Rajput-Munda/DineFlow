// AdminPanelMenuItems.jsx
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import EditMenuItemModal from "./EditMenuItemModal";
import "../Styles/AdminPanelMenuCategories.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddMenuItemModal from "./AddMenuItemModal"; // Import the AddMenuItemModal component

export default function AdminPanelMenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showEditMenuItemModal, setShowMenuItemModal] = useState(false);
  const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false); // State to control the visibility of the AddMenuItemModal

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
    handleShowEditMenuItemModal();
  };

  const handleShowEditMenuItemModal = () => {
    setShowMenuItemModal(true);
  };

  const handleCloseEditMenuItemModal = () => {
    setShowMenuItemModal(false);
    fetchMenuItems();
  };
  const handleCloseAddMenuItemModal = () => {
    setShowAddMenuItemModal(false);
    fetchMenuItems();
  };

  const handleSaveEditedItem = (editedItem) => {
    updateMenuItem(editedItem);
  };

  const addMenuItem = async (menuItem) => {
    try {
      // Adjust the menuCategoryId format to match the server's expectation
      const formattedMenuItem = {
        ...menuItem,
        menuCategoryId: {
          menuCategoryId: menuItem.menuCategoryId,
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8080/menu-items/addMenuItems",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify([formattedMenuItem]), // Wrap the formattedMenuItem in an array
        }
      );
      if (response.ok) {
        await fetchMenuItems();
        handleCloseAddMenuItemModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      await fetchMenuItems();
      handleCloseConfirmDeleteModal();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/menu-items/getAllMenuItems",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMenuItem = async (editedItem) => {
    try {
      await fetch(
        `http://127.0.0.1:8080/menu-items/updateMenuItem?menu_item_id=${selectedItem.menuItemId}`,
        {
          method: "POST",
          body: JSON.stringify(editedItem),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      await fetchMenuItems();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="adminPanelMenuCategories">
      <div className="add-item">
        <button
          className="add-item-btn"
          onClick={() => setShowAddMenuItemModal(true)} // Open the AddMenuItemModal when this button is clicked
        >
          Add new menu item
        </button>
      </div>
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
        handleCloseEditMenuItemModal={handleCloseEditMenuItemModal}
        item={selectedItem}
        onSaveChanges={handleSaveEditedItem}
      />
      <AddMenuItemModal
        show={showAddMenuItemModal}
        handleClose={() => setShowAddMenuItemModal(false)}
        onSave={addMenuItem}
      />
    </div>
  );
}
