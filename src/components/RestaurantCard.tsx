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

  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    resData?.info;

  return (
    <div className="w-86 h-80 m-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-300 shadow-md">
      <div>
        <img
          className="rounded-xl w-full h-40 object-cover shadow-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="w-full ">
        <h3 className="font-medium pt-2 text-lg  ">{name}</h3>
        <p className="px-1 text-sm">{cuisines.join(", ")}</p>

        <div className="flex justify-between text-xs flex-wrap mt-4">
        <h5 className="p-2 ">{avgRating}⭐ stars</h5>
        <h4 className="p-2">{costForTwo}</h4>
        <p className="p-2">{resData.info.sla.slaString}</p>
        </div>
      </div>
    </div>
  );
};

// higher order component
// takes a component as input and enhances it

export const OpenOrNot = (ResCard: any) => {
  return (props: ResCardProps) => {
    return (
      <div className="overflow-hidden hover:scale-105 transition-transform duration-300">
        <label className=" absolute mx-2 p-3 bg-gray-800 text-white rounded-xl ">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
