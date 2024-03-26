import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDeleteModal({
  showConfirmDeleteModal,
  handleCloseConfirmDeleteModal,
  category,
  item,
  deleteMenuCategory,
  deleteMenuItem,
}) {
  const handleDeletion = (category, item) => {
    if (category == null) deleteMenuItem(item);
    else deleteMenuCategory(category);
  };

  return (
    <>
      <Modal
        show={showConfirmDeleteModal}
        onHide={handleCloseConfirmDeleteModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {category
            ? `Are you sure you want to delete ${category.menuCategoryName}`
            : item
            ? `Are you sure you want to delete ${item.menuItemName} `
            : `Null`}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmDeleteModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleDeletion(category, item);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDeleteModal;
