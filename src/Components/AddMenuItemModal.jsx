// AddMenuItemModal.jsx
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/EditMenuItemModal.css"; // Import CSS file for custom styling

function AddMenuItemModal({ show, handleClose, onSave }) {
  const [menuItem, setMenuItem] = useState({
    menuCategoryId: "",
    menuItemName: "",
    menuItemPrice: "",
    menuItemDescription: "",
    available: "",
  });
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchMenuCategories = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/menu-categories/getAllMenuCategories",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setMenuCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSave = () => {
    onSave(menuItem);
    handleClose();
  };

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Menu Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-container">
          <label>Category:</label>
          <select
            className="custom-input"
            name="menuCategoryId"
            value={menuItem.menuCategoryId}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {menuCategories.map((category) => (
              <option
                key={category.menuCategoryId}
                value={category.menuCategoryId}
              >
                {category.menuCategoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Item Name:</label>
          <input
            type="text"
            className="custom-input"
            name="menuItemName"
            value={menuItem.menuItemName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Price:</label>
          <input
            type="text"
            className="custom-input"
            name="menuItemPrice"
            value={menuItem.menuItemPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Description:</label>
          <input
            type="text"
            className="custom-input"
            name="menuItemDescription"
            value={menuItem.menuItemDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Available:</label>
          <select
            className="custom-input"
            name="available"
            value={menuItem.available}
            onChange={handleInputChange}
          >
            <option value="">Select Availability</option>
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMenuItemModal;
