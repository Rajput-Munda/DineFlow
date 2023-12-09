import '../Styles/White.css';
import Menu from "./Menu";
import Choose from './Choose';

const White = () => {

  return (
    <>
      
    <div className="main-filter"> <Menu /> </div>

    <hr className = "divider" />

    <div className ="main-detail"> <Choose /></div>


    </>
  )
}

export default White;
