import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import del from "url:../assets/delete.png";

interface item {
  item: any;
}

const CartItem = ({ item }: item) => {
  const dispatch = useDispatch();

  const handleDelete = (item: any) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {item.map((i: any) => {
        return (
          <div
            className="flex flex-row w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] shadow-lg bg-gray-50 rounded-3xl my-4 p-2"
            key={i.card?.info.id}
          >
            {/* Image */}
            <div>
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shadow-lg rounded-3xl m-2 p-2 object-cover"
                src={CDN_URL + i.card?.info?.imageId}
                alt="food"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 items-center justify-between px-2 sm:px-4">

              {/* Name */}
              <div className="font-bold text-sm sm:text-base md:text-lg text-stone-800">
                {i.card?.info?.name}
              </div>

              {/* Veg / Non Veg */}
              <span className="mx-2 text-lg">
                {i.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </span>

              {/* Price + Delete */}
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(i)}
                >
                  <img
                    src={del}
                    className="w-5 sm:w-6 m-2 hover:cursor-pointer"
                    alt="delete"
                  />
                </button>

                <div className="text-sm sm:text-base md:text-lg text-black font-semibold">
                  Rs.
                  {i.card?.info?.price / 100 ||
                    i.card?.info?.defaultPrice / 100}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;