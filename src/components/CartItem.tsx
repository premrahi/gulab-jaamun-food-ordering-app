import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import del from "url:../assets/delete.png";

interface item {
  item: any;
}

const cartItem = ({ item }: item) => {
  const dispatch = useDispatch() ;

  const handleDelete = (item:any) => {
    dispatch(removeItem(item));
  }

  return (
    <div>
      {item.map((i: any) => {
        return (
          <>
            <div
              className="flex w-180  shadow-lg bg-gray-50 rounded-3xl  my-4 m-auto"
              key={i.card?.info.id}
            >
              <div className="">
                <img
                  className="w-30 shadow-lg h-28 rounded-3xl m-2 p-2"
                  src={CDN_URL + i.card?.info?.imageId}
                ></img>
              </div>

              <div className="flex m-6 w-150 items-center justify-between">
                <div className="font-bold text-lg text-stone-800">
                  {i.card?.info?.name}
                </div>
                <span className="mx-4 ">
                  {i.card?.info?.itemAttribute?.vegClassifier === "VEG"
                    ? "🟢"
                    : "🔴"}
                </span>

                <div className="flex flex-col ">
                  <button className="justify-center cursor-pointer" onClick={() => handleDelete(i)}>
                    <img
                      src={del}
                      className="w-6 m-2.5 hover:cursor-pointer"
                      alt="delete"
                    />
                  </button>
                  <div className=" text-lg  text-black font-semibold ">
                    Rs.
                    {i.card?.info?.price / 100 ||
                      i.card?.info?.defaultPrice / 100}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

       
      })}
    </div>
  );
};

export default cartItem;
