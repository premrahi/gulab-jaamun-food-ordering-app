import { FOODFIRE_MENU_API } from "./constants";
import { useState } from "react";
import { useEffect } from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo ,setResInfo] = useState(null) ;
    // fetchData
    useEffect (()=>{
        fetchData() ;
    },[]);

    const fetchData = async () =>{
        const data = await fetch(FOODFIRE_MENU_API + resId) ;
        const json = await data.json() ; 
        setResInfo(json?.data) ;
    } ;

    return resInfo ;    
}

export default useRestaurantMenu ;  