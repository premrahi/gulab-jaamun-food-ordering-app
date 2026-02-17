interface restaurantCategoryProps {
    data: any ,
}


const RestaurantCategory = ({data}: restaurantCategoryProps) => {
    console.log(data);
    return <div >
        {/**Header */}
        <div className="w-6/12 bg-gray-100 mx-auto my-8 p-4 shadow-lg flex justify-between">
            <span className="mx-6 font-semibold text-lg">{data.title}{" "}({data.itemCards.length})</span>
            <span className="mx-6 font-semibold text-lg hover:cursor-pointer">⬇️</span>
        </div>

        {/*accordion body */}
    </div>
}

export default RestaurantCategory ;