import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FOODFIRE_MENU_API, SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); // it has empty dependency array this means it will be called once after initial rendering

  const fetchMenu = async () => {
    const data = await fetch(FOODFIRE_MENU_API + resId);

    const json = await data.json();

    setResInfo(json?.data);
    console.log("API URL => ", FOODFIRE_MENU_API + resId);
  };

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards
    ?.map((c) => c?.card?.card?.info)
    ?.find((info) => info?.name);

  const regularCards = resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards;

  const menuItems = regularCards
    ?.filter((c) => c?.card?.card?.itemCards)
    ?.flatMap((c) => c.card.card.itemCards);

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")} </h3>
      <h3>{costForTwoMessage}</h3>

      <ul>
        {menuItems?.map((item, index) => (
          <li key={index}>
            {item.card.info.name} – Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
