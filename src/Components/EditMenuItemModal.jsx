import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/EditMenuItemModal.css"; // Import CSS file for custom styling
function EditMenuItemModal({
  showEditMenuItemModal,
  handleCloseEditMenuItemModal,
  item,
  onSaveChanges,
}) {
  const [editedItem, setEditedItem] = useState(null); 
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchMenuCategories = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/menu-categories/getAllMenuCategories", {
        method: "GET",
      });
      const data = await response.json();
      setMenuCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if it's the menuCategoryId dropdown
    if (name === "menuCategoryId") {
      // Parse the value as an integer since menuCategoryId is expected to be a number
      const categoryId = parseInt(value);
      // Set the menuCategoryId as an object with the menuCategoryId property inside it
      setEditedItem({ ...editedItem, [name]: { menuCategoryId: categoryId } });
    } else {
      // Otherwise, set the value directly
      setEditedItem({ ...editedItem, [name]: value });
    }
  };
  

  const handleSaveChanges = () => {
    onSaveChanges(editedItem);
    handleCloseEditMenuItemModal();
  };

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  return (
    <>
      <Modal show={showEditMenuItemModal} onHide={handleCloseEditMenuItemModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-container">
            <label>Item Name:</label>
            <input
              type="text"
              className="custom-input"
              name="menuItemName"
              value={editedItem ? editedItem.menuItemName : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Category:</label>
            <select
              className="custom-input"
              name="menuCategoryId"
              value={editedItem ? editedItem.menuCategoryId.menuCategoryId : ""}
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
            <label>Price:</label>
            <label>₹</label>
            <input
              type="text"
              className="custom-input"
              name="menuItemPrice"
              value={editedItem ? editedItem.menuItemPrice : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Description:</label>
            <input
              type="text"
              className="custom-input"
              name="menuItemDescription"
              value={editedItem ? editedItem.menuItemDescription : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Available:</label>
            <select
              className="custom-input"
              name="available"
              value={editedItem ? editedItem.available : ""}
              onChange={handleInputChange}
            >
              <option value="">Select Availability</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditMenuItemModal}>
            Close
          </Button>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMenuItemModal;
