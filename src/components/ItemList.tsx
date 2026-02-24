import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux"; 

interface ItemListProps {
  item: any;
}

const ItemList = ({ item }: ItemListProps) => {
  // console.log(item)
  const dispatch:any = useDispatch() ;
  const handleAdd = (item:any) =>{
    dispatch(addItem(item))
    // console.log(item);
  }

  const handleRemove = (item:any) =>{
    dispatch(removeItem(item))
  }


  return (
    <div>
      {item.map((i: any) => {
        return (
          <div
          data-testid="foodItems"
            key={i.card?.info.id}
            className="m-4 bg-gray-200 rounded-2xl p-6 text-left shadow-lg"
          >
            <div className="relative">
               <img
                  src={CDN_URL + i.card?.info?.imageId}
                  alt="food image"
                  className="absolute w-26 rounded-xl right-2 h-auto "
                />
                <button className="absolute bg-green-800 text-white p-1 rounded-xl top-3/3 right-19 hover:cursor-pointer hover:bg-black" onClick={ () => handleAdd(i)}>
                  Add+
                </button>
                <button className="absolute bg-green-800 text-white p-1  rounded-xl top-3/3 right-0  hover:cursor-pointer hover:bg-black" onClick={ () => handleRemove(i)}>
                  Remove-
                </button>
              <span>
                {i.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </span>
              <div className="font-semibold text-stone-800">
                {i.card?.info?.name}
              </div>
              <div className="text-sm my-2 text-stone-600 font-medium">
                Rs.
                {i.card?.info?.price / 100 || i.card?.info?.defaultPrice / 100}
              </div>
            </div>

            <div className="font-light text-sm w-10/12">
              {i.card?.info?.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
