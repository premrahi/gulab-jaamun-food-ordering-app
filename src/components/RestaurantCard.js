import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <p>{resData.info.cuisines.join(", ")}</p>
      <h5>{resData.info.avgRating}⭐ stars</h5>
      <p>{resData.info.deliveryTime}minutes</p>
      <p>{resData.info.areaName}</p>
      <p>{resData.info.sla.slaString}</p>
    </div>
  );
};
export default ResCard;
