import '../Styles/Recommendation.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Recommendation_Items from './Recommendation_Items';


const Recommendation = () => {
  return (
    <>
      
      {/* <!-- title section and arrow --> */}
      <div className="main-header">
            <h2 className="main-title">Recommendations</h2>
            <div className="main-arrow">
            <FaChevronCircleLeft className="back"/>
            <FaChevronCircleRight className="next"/>
            </div>
      </div>

      <div className="highlight-wrapper">
              <Recommendation_Items name="Fresh Salad" price="250" imageSrcs="../Images/Salad1.jpg" />
              <Recommendation_Items name="Cafe Latte" price="270" imageSrcs="../Images/coffee.jpg" />
              <Recommendation_Items name="Pizza" price="350" imageSrcs="../Images/pizza1.jpg" />
              <Recommendation_Items name="Burger" price="220" imageSrcs="../Images/burger.jpg" />
              
      </div>

    </>
  );
};

export default Recommendation;
