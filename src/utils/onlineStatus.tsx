import { useState, useEffect } from "react";

const useOnlineStatus = () =>{
    const [status , setStatus] = useState<boolean>(true) ;

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setStatus(true) ;
        })
        window.addEventListener("offline",()=>{
            setStatus(false) ;
        })
    },[]);

    return status ;
}

export default useOnlineStatus ;