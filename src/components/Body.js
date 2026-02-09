import ResCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { resList } from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  // local state variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);  // this line here uses the dummy data

  const [listOfRestaurants, setListOfRestaurants] = useState([]); // now we use api data
  const [filteredRestaurant , setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // normal js variable
  // let listOfRestaurants = [] ;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=28.60090200875999&lng=77.08098202943802&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering - rendering on the basis of condition
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="what you want?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

           <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>{
                //to make it case insensitive we must convert both the text into lowercase
                return  res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ;
              })
              console.log(searchText);  
              setFilterRestaurant(filteredRestaurants) ;
            }}
          >
            {" "}
            search
          </button>



        </div>
        {console.log(listOfRestaurants)}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const newListOfRestaurants = listOfRestaurants.filter(
                (res) => (res = res.info.avgRating >= 4.3),
              );
              setListOfRestaurants(newListOfRestaurants);
            }}
          >
            {" "}
            Top rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} /> */}

        {filteredRestaurant.map((rest) => {
          return <ResCard key={rest.info.id} resData={rest} />;
        })}
      </div>
    </div>
  );
};
export default Body;
