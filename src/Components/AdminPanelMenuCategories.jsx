import React, { useEffect, useState } from "react";
import ConfirmDeleteModal from "../Components/ConfirmDeleteModal";
import "../Styles/AdminPanelMenuCategories.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AdminPanelMenuCategories() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [selectedCategoryForDeletion, setSelectedCategoryForDeletion] =
    useState();
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
  };
  const handleShowConfirmDeleteModal = () => setShowConfirmDeleteModal(true);

  const handleDeleteCategory = (category) => {
    setSelectedCategoryForDeletion(category);
    handleShowConfirmDeleteModal();
  };

  const deleteMenuCategory = async (category) => {
    const response = await fetch(
      `http://127.0.0.1:8080/menu-categories/deleteMenuCategory?MenuCategoryid=${category.menuCategoryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    .then(() => handleCloseConfirmDeleteModal())
    .then(() => fetchMenuCategories())
    .catch((e) => console.log(e));
  };

  const fetchMenuCategories = async () => {
    await fetch("http://127.0.0.1:8080/menu-categories/getAllMenuCategories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (response) => setMenuCategories(response));
  };

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  return (
    <div className="adminPanelMenuCategories">
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
                <span>
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
    </div>
  );
}
