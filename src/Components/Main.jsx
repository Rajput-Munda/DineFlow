import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Main.css';
import Navbar from './Navbar';
import Recommendation from './Recommendation';
import White from './White';


const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      < div className="main-highlight"><Recommendation /> </div>
      <div className="main-menus"> <White /> </div>

    </>
  )
}

export default Main;
