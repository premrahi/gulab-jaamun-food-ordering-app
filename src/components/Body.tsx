import ResCard, { OpenOrNot } from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { FOODFIRE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

interface Restaurant {
  info: {
    isOpen: boolean;
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
}

const Body = () => {
  // local state variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);  // this line here uses the dummy data

  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]); // now we use api data
  const [filteredRestaurant, setFilterRestaurant] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const OpenRes = OpenOrNot(ResCard);

  // normal js variable
  // let listOfRestaurants = [] ;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?" + encodeURIComponent(FOODFIRE_API),
      );

      const json = await data.json();

      const restaurants: Restaurant[] =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilterRestaurant(restaurants);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);

    const filteredRestaurants = listOfRestaurants.filter((res) => {
      //to make it case insensitive we must convert both the text into lowercase
      return res.info.name
        .toLowerCase()
        .includes(value.toLocaleLowerCase());
    });
    // console.log(searchText);
    setFilterRestaurant(filteredRestaurants);
  };

  const onlineStatus: boolean = useOnlineStatus();

  if(onlineStatus === false) {
    return <OfflinePage />
  }

  // console.log(listOfRestaurants)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-col p-4 mx-auto items-center">
        <input
          className="p-4 border-1 border-gray-400  shadow-lg  bg-white rounded-4xl  text-center w-160"
          type="text"
          placeholder="what you want?"
          value={searchText}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        

        <button
          className="mx-24 p-4 w-70 mt-3 rounded-4xl text-white bg-amber-700 shadow-lg hover:cursor-pointer"
          onClick={() => {
            const newListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3,
            );
            setFilterRestaurant(newListOfRestaurants);
          }}
        >
          {" "}
          Top rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap ">
        {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} /> */}

        {filteredRestaurant.map((rest) => {
          return (
            <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
              {rest.info.isOpen ? (
                <OpenRes resData={rest} />
              ) : (
                <ResCard resData={rest} />
              )}
            </Link>
          );
          {
            /* return (
            <ResCard resData = {rest}  key={rest.info.id}/>
          ) */
          }
        })}
      </div>
    </div>
  );
};
export default Body;
