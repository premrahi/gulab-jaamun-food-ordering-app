import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },

  reducers: {
    addItem: (state: any, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
    },

    removeItem: (state: any, action: PayloadAction<any>) => {
      state.cartItems.pop();
    },

    clearCart: (state: any) => {
      state.cartItems.length = 0;
      
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;