import ResCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // normal js variable
  // let listOfRestaurants = [] ;

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="what you want?"
          ></input>
          <button className="search-btn">search</button>
        </div>
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

        {listOfRestaurants.map((rest) => {
          return <ResCard key={rest.info.id} resData={rest} />;
        })}
      </div>
    </div>
  );
};
export default Body;
