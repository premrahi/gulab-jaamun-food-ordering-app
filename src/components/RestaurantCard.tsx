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
    <div className="w-55 m-4 p-4 bg-yellow-100 rounded-xl hover:bg-amber-200 overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="rounded-xl "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-medium mt-3 py-3 text-lg  ">{name}</h3>
      <p className="p-1">{cuisines.join(", ")}</p>
      <h5  className="p-1">{avgRating}⭐ stars</h5>
      {/* <p>{deliveryTime}minutes</p> */}
      <p className="p-1">{areaName}</p>
      <h4 className="p-1">{costForTwo}</h4>
      <p className="p-1">{resData.info.sla.slaString}</p>
    </div>
  );
};


// higher order component
// takes a component as input and enhances it

export const OpenOrNot = (ResCard : any )=>{
  return (props : ResCardProps)=>{
    return(
      <div>
        <label className="absolute mx-2 p-3 bg-gray-800 text-white rounded-xl">Open</label>
        <ResCard {...props} />
        
      </div>
    )
  }
}

export default ResCard;
