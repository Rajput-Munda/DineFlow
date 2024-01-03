import React from 'react';
import '../Styles/RestaurantTable.css';

const RestaurantTable = (props) => {
  const handleTableClick = () => {
    if (props.onClick) {
      props.onClick(); // Call the onClick function received from the parent component
    }
  };

  return (
    <button className="highlight-card" onClick={handleTableClick}>
      <img className="highlight-img" src={props.imageSrcs} alt="" />
      <div className="highlight-desc">
        <h4>{props.name}</h4>
        <strong><p>{props.status}</p></strong>
      </div>
    </button>
  );
};

export default RestaurantTable;
