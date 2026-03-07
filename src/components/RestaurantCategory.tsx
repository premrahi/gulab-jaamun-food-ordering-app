import ItemList from "./ItemList";


interface restaurantCategoryProps {
  data: any;
  showItem :boolean ;
  setShowItem : any ;
}


const RestaurantCategory = ({ data ,showItem , setShowItem}: restaurantCategoryProps) => {

  const clickHandle = ():void=>{
    setShowItem() ;
  }

  return (
    <div>
      {/**Header */}
      <div className="md:w-1/2 w-5/6 bg-gray-100 mx-auto my-8 p-4 shadow-lg ">
        <div className="flex justify-between  cursor-pointer" onClick={clickHandle} >
          <span className="md:mx-6 mx-2 font-semibold text-sm md:text-lg ">{data.title} ({data.itemCards.length})</span>
          <span className="mx-6 font-semibold text-lg hover:cursor-pointer"> ⬇️ </span>
        </div>

      {/**this says that if showItem is true then only show the Itemlist*/} 
      { showItem && <ItemList item ={data.itemCards} />}   
      </div>
    </div>
  );
};

export default RestaurantCategory;
