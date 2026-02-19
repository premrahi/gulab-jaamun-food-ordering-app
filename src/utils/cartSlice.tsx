import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart" ,
    initialState:{
        items:[] ,
    },
    reducers:{
        // mutating the state here
        addItem:(state:any,action:PayloadAction<any>) =>{
            state.items.push(action.payload) ;
        },
        removeItem:(state:any ,action:PayloadAction<any>)=>{
            state.items.pop() ;
            // state.items =  state.items.filter( item => item !== action.payload)
        },
        clearCart:(state:any)=>{
            state.items.length = 0 ;
        }
    }
})

export const { addItem , removeItem ,clearCart } = cartSlice.actions

export default cartSlice.reducer ;