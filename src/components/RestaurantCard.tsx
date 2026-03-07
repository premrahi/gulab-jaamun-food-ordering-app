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

  // console.log(resData) ;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="md:w-86 md:h-80 md:m-4 md:p-4 w-44 h-52 m-1 p-1 bg-gray-50 rounded-xl md:hover:bg-gray-300 shadow-md"
    >
      <div>
        <img
          className="rounded-xl w-full md:h-40 object-cover shadow-lg h-20"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="w-full ">
        <h3 className="md:font-bold font-medium text-[13px] md:pt-2  md:text-lg">{name}</h3>
        <p className="px-1 md:text-sm text-[10px]">{cuisines.join(", ")}</p>

        <div className="flex justify-between text-xs md:flex-wrap md:flex-row flex-col md:mt-4">
          <h5 className="md:p-2  ">{avgRating}⭐ stars</h5>
          <h4 className="md:p-2">{costForTwo}</h4>
          <p className="md:p-2">{resData.info.sla.slaString}</p>
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
        <label className=" absolute text-center md:p-3 p-1 mx-1 w-14 md:w-16 bg-gray-800 text-white rounded-xl ">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
