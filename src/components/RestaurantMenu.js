import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestauranMenu";
import { useEffect } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();


  const resInfo = useRestaurantMenu(resId) ; 

  // useEffect(() => {
  //   fetchMenu();
  // }, [resId]); // it has empty dependency array this means it will be called once after initial rendering

  // const fetchMenu = async () => {
  //   const data = await fetch(FOODFIRE_MENU_API + resId);

  //   const json = await data.json();

  //   setResInfo(json?.data);
  //   console.log("API URL => ", FOODFIRE_MENU_API + resId);
  // };

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
      <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
      <h2>MENU</h2>

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
