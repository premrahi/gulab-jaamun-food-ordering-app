import ResCard , { OpenOrNot } from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { FOODFIRE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/onlineStatus";

interface Restaurant {
  info: {
    isOpen : boolean
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

  const OpenRes = OpenOrNot(ResCard) ;

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

  // conditional rendering - rendering on the basis of condition
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  const onlineStatus: boolean = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="off-div">
        <h1>please check your internet connection !!!</h1>
      </div>
    );
  }

  // console.log(listOfRestaurants)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="p-4 mx-14">
          <input
            className="p-4 border-2 rounded-xl "
            type="text"
            placeholder="what you want?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="mx-4 p-4 rounded-lg text-white bg-orange-500 hover:cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                //to make it case insensitive we must convert both the text into lowercase
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              // console.log(searchText);
              setFilterRestaurant(filteredRestaurants);
            }}
          >
            {" "}
            search
          </button>

          <button
            className="mx-24 p-4 rounded-lg text-white bg-green-800 hover:cursor-pointer"
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
             { rest.info.isOpen ? <OpenRes resData={rest}/> :  <ResCard resData={rest}/> }
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
