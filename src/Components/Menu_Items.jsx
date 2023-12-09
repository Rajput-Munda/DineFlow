import '../Styles/Menu_Items.css';

const Menu_Items = (props) => {
    const { icon1 } = props;
  return (

    <>
      
      <div className="filter-card">
          <div className="filter-icon">
            { icon1 }
          </div>
          <p>{props.names}</p>
        </div>

    </>
  )
}

export default Menu_Items;
