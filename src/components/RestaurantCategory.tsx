import ItemList from "./ItemList";
import { useState } from "react";


interface restaurantCategoryProps {
  data: any;
  showItem :boolean ;
  setShowItem : any ;
}


const RestaurantCategory = ({ data ,showItem ,setShowItem}: restaurantCategoryProps) => {

  const clickHandle = ():void=>{
    setShowItem() ;

  }

//   console.log(data);
  return (
    <div>
      {/**Header */}
      <div className="w-6/12 bg-gray-100 mx-auto my-8 p-4 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={clickHandle} >
          <span className="mx-6 font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
          <span className="mx-6 font-semibold text-lg hover:cursor-pointer"> ⬇️ </span>
        </div>

      {/**this says that if showItem is true then only show the Itemlist*/} 
      { showItem && <ItemList item ={data.itemCards} />}   
      </div>
      {/*accordion body */}
    </div>
  );
};

export default RestaurantCategory;
