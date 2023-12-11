import "../Styles/MenuContainer.css";
import MenuCategoryContainer from "./MenuCategoryContainer";
import MenuItemContainer from "./MenuItemContainer";
import { useState, useEffect } from "react";

const MenuContainer = () => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");

  //getting selectedCategory from child component...i have passed this as prop to menuCategoryContainer...and then to menuCategory
  //state up-lifting
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  //api call to get the menuCategories.
  const getMenuCategory = async () => {
    await fetch("http://127.0.0.1:8080/menu-categories/getAllMenuCategories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const categoryData = response;
        const extractedCategories = categoryData.map((item) => item);
        setMenuCategories(extractedCategories);
      })
      .catch((error) => console.log(error));
  };

  //api call to get the menuItems
  const getMenuItems = async () => {
    await fetch("http://127.0.0.1:8080/menu-items/getAllMenuItems", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const itemData = response;
        const extractedItems = itemData.map((item) => item);
        setMenuItems(extractedItems);
        console.log("First Time --->", { filteredMenuItems });
      })
      .catch((error) => console.log(error));
  };

  //function to filter out the menuItems based on menuCategory
  const filterMenuItems = () => {
    console.log("Filtering Data");
    if (selectedCategory === "" || selectedCategory === "All Items") {
      setFilteredMenuItems(menuItems.map((item) => item));
    } else {
      setFilteredMenuItems(
        menuItems.filter(
          (item) => item.menuCategoryId.menuCategoryName == selectedCategory
        )
      );
    }
  };

  //when the page loads, call these 2 apis to populate the menuItems and menuCategories.
  useEffect(() => {
    getMenuCategory();
    getMenuItems();
  }, []);

  //whenever selectedCategory changes or maybe the page loads for the first time and menuItems are populated filter
  //out the menuItems accordingly.
  useEffect(() => {
    console.log(selectedCategory);
    filterMenuItems();
  }, [selectedCategory, menuItems]);

  return (
    <>
      <div className="main-filter">
        <MenuCategoryContainer
          menuCategories={menuCategories}
          onSelectCategory={handleCategorySelection}
        />
      </div>
      <hr className="divider" />
      <div className="main-detail">
        <MenuItemContainer menuItems={filteredMenuItems} />
      </div>
    </>
  );
};

export default MenuContainer;
