import '../Styles/MenuContainer.css';
import MenuCategoryContainer from './MenuCategoryContainer';
import MenuItemContainer from './MenuItemContainer';

const MenuContainer = () => {

  return (
    <>
      
    <div className="main-filter"> <MenuCategoryContainer /> </div>

    <hr className = "divider" />

    <div className ="main-detail"> <MenuItemContainer/></div>


    </>
  )
}

export default MenuContainer;
