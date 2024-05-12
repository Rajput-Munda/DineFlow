import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/AddMenuCategoryModal.css"; // Import CSS file for custom styling

function AddMenuCategoryModal({ show, handleClose, onSave }) {
  const [menuCategoryName, setMenuCategoryName] = useState("");

  const handleSave = () => {
    onSave(menuCategoryName);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Menu Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-container">
          <label>Category Name:</label>
          <input
            type="text"
            className="custom-input"
            value={menuCategoryName}
            onChange={(e) => setMenuCategoryName(e.target.value)}
          />
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

export default AddMenuCategoryModal;
