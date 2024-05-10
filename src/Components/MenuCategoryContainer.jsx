import "../Styles/MenuCategoryContainer.css";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaUtensils,
} from "react-icons/fa";
import MenuCategory from "./MenuCategory";
import { useRef } from "react";
const MenuCategoryContainer = ({ menuCategories, onSelectCategory }) => {
  //so this function is passed from the parent component MenuContainer in order to get the selectedCategory
  //pass this function to MenuCategory component so that when one clicks any specific menuCategory it passes this category name
  //to the parent component
  const handleCategorySelection = (categoryName) => {
    onSelectCategory(categoryName); // Lift the selected category to the parent component
  };
  const containerRef = useRef(null)

  const scrollLeft = () => {
    if(containerRef.current){
      containerRef.current.scrollLeft-=200;
    }
  }

  const scrollRight = () => {
    if(containerRef.current){
      containerRef.current.scrollLeft+=200;
    }
  }
  return (
    <>
      <h2 className="main-title">
        Menu <br /> Category
      </h2>
      <div className="main-arrow">
        <FaChevronCircleLeft className="back-menus" onClick={scrollLeft}/>
        <FaChevronCircleRight className="next-menus" onClick={scrollRight}/>
      </div>

      <div class="filter-wrapper" ref={containerRef}>
        {menuCategories.map((category) => (
          <MenuCategory
            key = {category.menuCategoryId}
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
