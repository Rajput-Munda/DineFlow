import React, { useEffect, useState } from "react";
import ConfirmDeleteModal from "../Components/ConfirmDeleteModal";
import AddMenuCategoryModal from "../Components/AddMenuCategoryModal";
import EditMenuCategoryModal from "../Components/EditMenuCategoryModal"; // Import the EditMenuCategoryModal component
import "../Styles/AdminPanelMenuCategories.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AdminPanelMenuCategories() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [selectedCategoryForDeletion, setSelectedCategoryForDeletion] =
    useState();
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showAddMenuCategoryModal, setShowAddMenuCategoryModal] =
    useState(false);
  const [showEditMenuCategoryModal, setShowEditMenuCategoryModal] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
  };

  const handleShowConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(true);
  };

  const handleCloseAddMenuCategoryModal = () => {
    setShowAddMenuCategoryModal(false);
  };

  const handleShowAddMenuCategoryModal = () => {
    setShowAddMenuCategoryModal(true);
  };

  const handleCloseEditMenuCategoryModal = () => {
    setShowEditMenuCategoryModal(false);
  };

  const handleShowEditMenuCategoryModal = () => {
    setShowEditMenuCategoryModal(true);
  };

  const handleDeleteCategory = (category) => {
    setSelectedCategoryForDeletion(category);
    handleShowConfirmDeleteModal();
  };

  const addMenuCategoryAPICall = async (category) => {
    const arrayofcategories = [{
      "menuCategoryName": category
    }]
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/menu-categories/addMenuCategories",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(
            arrayofcategories
          ),
        }
      );
      if (response.ok) {
        handleCloseAddMenuCategoryModal();
        fetchMenuCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenuCategory = async (category) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/menu-categories/deleteMenuCategory?MenuCategoryid=${category.menuCategoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        await fetchMenuCategories();
        handleCloseConfirmDeleteModal();
      } else {
        console.error("Failed to delete menu category");
      }
    } catch (error) {
      console.error("Error deleting menu category:", error);
    }
  };

  const updateMenuCategory = async (categoryId, newName) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/menu-categories/updateMenuCategory?menu_category_id=${categoryId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ menuCategoryName : newName }),
        }
      );
      if (response.ok) {
        await fetchMenuCategories();
      } else {
        console.error("Failed to update menu category");
      }
    } catch (error) {
      console.error("Error updating menu category:", error);
    }
  };

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
      console.error("Error fetching menu categories:", error);
    }
  };

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  return (
    <div className="adminPanelMenuCategories">
      <div className="add-item">
        <button
          className="add-item-btn"
          onClick={handleShowAddMenuCategoryModal}
        >
          Add new menu category
        </button>
      </div>
      <table className="adminPanelMenuTable">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Category ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuCategories.map((category, index) => (
            <tr key={category.menuCategoryId}>
              <td>{index + 1}</td>
              <td>{category.menuCategoryId}</td>
              <td>{category.menuCategoryName}</td>
              <td>
                <span onClick={() => handleDeleteCategory(category)}>
                  <MdDelete />
                </span>{" "}
                <span
                  onClick={() => {
                    handleShowEditMenuCategoryModal(); // Show the edit modal
                    setSelectedCategory(category); // Set the selected category for editing
                  }}
                >
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
        category={selectedCategoryForDeletion}
        item={null}
        deleteMenuCategory={deleteMenuCategory}
      />
      <AddMenuCategoryModal
        show={showAddMenuCategoryModal}
        handleClose={handleCloseAddMenuCategoryModal}
        onSave={addMenuCategoryAPICall}
      />
      <EditMenuCategoryModal
        showEditMenuCategoryModal={showEditMenuCategoryModal}
        handleCloseEditMenuCategoryModal={handleCloseEditMenuCategoryModal}
        category={selectedCategory}
        onUpdateCategory={updateMenuCategory}
      />
    </div>
  );
}
