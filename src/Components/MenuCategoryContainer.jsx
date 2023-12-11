import "../Styles/MenuCategoryContainer.css";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaUtensils,
  FaHamburger,
  FaPizzaSlice,
  FaWineGlass,
  FaIceCream,
  FaCoffee,
  FaFish,
  FaAppleAlt,
} from "react-icons/fa";
import MenuCategory from "./MenuCategory";
const MenuCategoryContainer = ({ menuCategories, onSelectCategory }) => {
  //so this function is passed from the parent component MenuContainer in order to get the selectedCategory
  //pass this function to MenuCategory component so that when one clicks any specific menuCategory it passes this category name
  //to the parent component
  const handleCategorySelection = (categoryName) => {
    onSelectCategory(categoryName); // Lift the selected category to the parent component
  };
  return (
    <>
      <h2 className="main-title">
        Menu <br /> Category
      </h2>
      <div className="main-arrow">
        <FaChevronCircleLeft className="back-menus" />
        <FaChevronCircleRight className="next-menus" />
      </div>

      <div class="filter-wrapper">
        {menuCategories.map((category) => (
          <MenuCategory
            icon={<FaUtensils />}
            names={category.menuCategoryName}
            onClick={handleCategorySelection}
          />
        ))}
      </div>
    </>
  );
};

export default MenuCategoryContainer;
