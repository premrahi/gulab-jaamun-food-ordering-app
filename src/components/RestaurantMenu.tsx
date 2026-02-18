import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestauranMenu";
import RestaurantCategory from "./RestaurantCategory";
import { ShimmerMenu } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();

  const [showItem, setShowItem] = useState<null | number>(null);

  if (!resId) {
    return <div>Invalid Restaurant Id.</div>;
  }

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return < ShimmerMenu />;

  const restaurantInfo = resInfo?.cards
    ?.map((c: any) => c?.card?.card?.info)
    ?.find((info: any) => info?.name);

  const regularCards = resInfo?.cards?.find((c: any) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems = regularCards
    ?.filter((c: any) => c?.card?.card?.itemCards)
    ?.flatMap((c: any) => c.card.card.itemCards);

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  // console.log(regularCards) ;

  const categories: [] = regularCards?.filter(
    (c: any) => 
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  // console.log(categories) ;

  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-4 y-4 font-semibold ">{name}</h1>
      <h3 className="text-lg font-semibold">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>

      {/**  categories accordions */}

      {categories.map((category: any, index: number) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItem={index === showItem ? true : false}
          setShowItem={() =>
            setShowItem((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
