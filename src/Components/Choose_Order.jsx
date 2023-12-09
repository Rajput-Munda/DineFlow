import '../Styles/Choose_Order.css';

const Choose_Order = (props) => {
  return (

    <>
      
    <div className="detail-card">
      <img className="detail-img" src={props.imageSrc} alt="" />
        <div className="detail-desc">
         <div className="detail-name">
           <h4>{props.names}</h4>
           <p className="detail-sub">{props.text}</p>
           <p className="price">Rs.{props.prices}</p>
         </div>
      
      </div>
    </div>


    </>

  )
}

export default Choose_Order;
