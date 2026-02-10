import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;


  const {
    cloudinaryImageId ,
    name ,
    avgRating,
    cuisines,
    deliveryTime,
    areaName,
    costForTwo,
    
  } = resData?.info ;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h5>{avgRating}⭐ stars</h5>
      {/* <p>{deliveryTime}minutes</p> */}
      <p>{areaName}</p>
      <h4>{costForTwo}</h4>
      <p>{resData.info.sla.slaString}</p>
    </div>
  );
};
export default ResCard;
