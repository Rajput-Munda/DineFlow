import '../Styles/Menu.css';
import { FaChevronCircleLeft, FaChevronCircleRight, FaUtensils, FaHamburger, FaPizzaSlice, FaWineGlass, FaIceCream, FaCoffee, FaFish, FaAppleAlt } from 'react-icons/fa';
import Menu_Items from './Menu_Items';


const Menu = () => {
  return (
    <>
      
      <h2 className="main-title">Menu <br /> Category</h2>
        <div className="main-arrow">
          <FaChevronCircleLeft className="back-menus" />
          <FaChevronCircleRight className="next-menus" />
        </div>

        <div class="filter-wrapper">

        <Menu_Items icon1 = { <FaUtensils /> } names = "All Menu" />
        <Menu_Items icon1 = { <FaHamburger /> } names = "Burger" />
        <Menu_Items icon1 = { <FaPizzaSlice /> } names = "Pizza" />
        <Menu_Items icon1 = { <FaWineGlass /> } names = "Wine" />
        <Menu_Items icon1 = { <FaIceCream /> } names = "Ice Cream" />
        <Menu_Items icon1 = { <FaCoffee /> } names = "Coffee" />
        <Menu_Items icon1 = { <FaFish /> } names = "Sea Food" />
        <Menu_Items icon1 = { <FaAppleAlt /> } names = "Nutrition" />
       
        </div>

    </>
  )
}

export default Menu;
