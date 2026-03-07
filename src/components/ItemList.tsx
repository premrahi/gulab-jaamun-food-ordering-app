import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

interface ItemListProps {
  item: any;
}

const ItemList = ({ item }: ItemListProps) => {
  // console.log(item)
  const dispatch: any = useDispatch();
  const handleAdd = (item: any) => {
    dispatch(addItem(item));
    // console.log(item);
  };

  const handleRemove = (item: any) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {item.map((i: any) => {
        return (
          <div
            data-testid="foodItems"
            key={i.card?.info.id}
            className="md:m-4 bg-gray-200 my-2 rounded-2xl md:p-6 p-2 text-left shadow-lg"
          >
            <div className="relative">
              <img
                src={CDN_URL + i.card?.info?.imageId}
                alt="food image"
                className="absolute w-16 md:w-26 rounded-xl md:right-1 right-0 h-16 md:h-26  "
              />
              <div className=" absolute m-2 md:font-extrabold md:left-10/12 left-2/5 md:text-2xl top-1/3 text-white rounded-lg md:top-1/1">
                <button
                  className=" bg-gray-700 m-2 px-2  hover:cursor-pointer hover:bg-black  rounded-lg"
                  onClick={() => handleAdd(i)}
                >
                  +
                </button>
                <button
                  className="  right-3 bg-gray-700 px-3  hover:cursor-pointer hover:bg-black  rounded-lg"
                  onClick={() => handleRemove(i)}
                >
                  -
                </button>
              </div>
              <span className="absolute left-4/6  md:left-6/8">
                {i.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </span>
              <div className="font-semibold text-sm md:text-lg w-3/5 md:w-4/5 text-stone-800">
                {i.card?.info?.name}
              </div>
              <div className="text-sm my-2 text-stone-600 font-medium">
                Rs.
                {i.card?.info?.price / 100 || i.card?.info?.defaultPrice / 100}
              </div>
            </div>

            <div className="font-light text-sm md:w-10/12">
              {i.card?.info?.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
