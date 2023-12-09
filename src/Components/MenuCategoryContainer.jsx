import '../Styles/MenuCategoryContainer.css';
import { FaChevronCircleLeft, FaChevronCircleRight, FaUtensils, FaHamburger, FaPizzaSlice, FaWineGlass, FaIceCream, FaCoffee, FaFish, FaAppleAlt } from 'react-icons/fa';
import MenuCategory from './MenuCategory';


const MenuCategoryContainer = () => {
  return (
    <>
      
      <h2 className="main-title">Menu <br /> Category</h2>
        <div className="main-arrow">
          <FaChevronCircleLeft className="back-menus" />
          <FaChevronCircleRight className="next-menus" />
        </div>

        <div class="filter-wrapper">

        <MenuCategory icon1 = { <FaUtensils /> } names = "All Menu" />
        <MenuCategory icon1 = { <FaHamburger /> } names = "Burger" />
        <MenuCategory icon1 = { <FaPizzaSlice /> } names = "Pizza" />
        <MenuCategory icon1 = { <FaWineGlass /> } names = "Wine" />
        <MenuCategory icon1 = { <FaIceCream /> } names = "Ice Cream" />
        <MenuCategory icon1 = { <FaCoffee /> } names = "Coffee" />
        <MenuCategory icon1 = { <FaFish /> } names = "Sea Food" />
        <MenuCategory icon1 = { <FaAppleAlt /> } names = "Nutrition" />
       
        </div>

    </>
  )
}

export default MenuCategoryContainer;
