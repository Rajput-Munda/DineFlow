import '../Styles/MenuCategory.css';

const MenuCategory = (props) => {
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

export default MenuCategory;
