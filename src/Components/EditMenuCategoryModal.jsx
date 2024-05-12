import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/EditMenuCategoryModal.css";

function EditMenuCategoryModal({
  showEditMenuCategoryModal,
  handleCloseEditMenuCategoryModal,
  category,
  onUpdateCategory,
}) {
  const [editedCategoryName, setEditedCategoryName] = useState("");

  const handleInputChange = (e) => {
    setEditedCategoryName(e.target.value);
  };

  const handleSaveChanges = () => {
    if (category && editedCategoryName.trim() !== "") {
      onUpdateCategory(category.menuCategoryId, editedCategoryName);
      handleCloseEditMenuCategoryModal();
    }
  };

  useEffect(() => {
    if (category) {
      setEditedCategoryName(category.menuCategoryName);
    }
  }, [category]);

  return (
    <Modal
      show={showEditMenuCategoryModal}
      onHide={handleCloseEditMenuCategoryModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Menu Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-container">
          <label>Category Name:</label>
          <input
            type="text"
            className="custom-input"
            value={editedCategoryName}
            onChange={handleInputChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditMenuCategoryModal}>
          Close
        </Button>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditMenuCategoryModal;
