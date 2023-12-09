import '../Styles/Choose.css';
import Choose_Order from './Choose_Order';

const Choose = () => {
  return (

    <>
      
      <h2 className="main-title"> Choose Order </h2>

<div className="detail-wrapper">

   <Choose_Order imageSrc="../Images/soup1.jpg" names="Soup" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="650" />

   <Choose_Order imageSrc="../Images/pizza1.jpg" names="Pizza" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="850" />

   <Choose_Order imageSrc="../Images/shakes.jpg" names="Drinks" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="250" />

   <Choose_Order imageSrc="../Images/burger.jpg" names="Burger" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="220" />

   <Choose_Order imageSrc="../Images/coffee.jpg" names="Coffee" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="250" />

   <Choose_Order imageSrc="../Images/Salad1.jpg" names="Salad" text="Lorem ipsum dolor sit amet consectetur adipisicing.
   " prices="450" />
</div>

    </>
  )
}

export default Choose;
