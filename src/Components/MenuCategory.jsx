import '../Styles/MenuCategory.css';

const MenuCategory = (props) => {
  const handleCategoryClick = () => {
    props.onClick(props.names); // Pass the category name to the parent component
  };
  return (

    <>
      
      <div className="filter-card" onClick={handleCategoryClick}>
          <div className="filter-icon">
            { props.icon }
          </div>
          <p>{props.names}</p>
        </div>

    </>
  )
}

export default MenuCategory;
