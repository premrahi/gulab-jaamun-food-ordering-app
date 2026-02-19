import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // this is the global reducer which contains reducer of all slices.
    reducer:{
        cart : cartReducer 
    }
}) ;

export default appStore ;

