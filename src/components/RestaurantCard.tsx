import { CDN_URL } from "../utils/constants";

interface ResCardProps {
  resData: {
    info: {
      id: string;
      cloudinaryImageId: string;
      name: string;
      avgRating: number;
      cuisines: string[];
      areaName: string;
      costForTwo: string;
      sla: {
        slaString: string;
      };
    };
  };
}

const ResCard = (props: ResCardProps) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
  } = resData?.info;

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
