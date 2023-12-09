import "../Styles/MenuItemContainer.css";
import MenuItem from "./MenuItem";
const MenuItemContainer = () => {
  return (
    <>
      <h2 className="main-title"> Choose Order </h2>

      <div className="detail-wrapper">
        <MenuItem
          imageSrc="../Images/soup1.jpg"
          names="Soup"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="650"
        />

        <MenuItem
          imageSrc="../Images/pizza1.jpg"
          names="Pizza"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="850"
        />

        <MenuItem
          imageSrc="../Images/shakes.jpg"
          names="Drinks"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="250"
        />

        <MenuItem
          imageSrc="../Images/burger.jpg"
          names="Burger"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="220"
        />

        <MenuItem
          imageSrc="../Images/coffee.jpg"
          names="Coffee"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="250"
        />

        <MenuItem
          imageSrc="../Images/Salad1.jpg"
          names="Salad"
          text="Lorem ipsum dolor sit amet consectetur adipisicing.
   "
          prices="450"
        />
      </div>
    </>
  );
};

export default MenuItemContainer;
