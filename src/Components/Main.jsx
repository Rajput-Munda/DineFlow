import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Main.css';
import Navbar from './Navbar';
import RestaurantTablesContainer from './RestaurantTablesContainer';
import MenuContainer from './MenuContainer';


const Main = () => {
  return (
    <>
      <Navbar />
      < div className="main-highlight"><RestaurantTablesContainer /></div>
      <div className="main-menus"><MenuContainer /></div>

    </>
  )
}

export default Main;
