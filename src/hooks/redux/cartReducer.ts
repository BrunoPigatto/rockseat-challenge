// reducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  quantity: number;
}

export interface CartState {
  cartItems: {
    items: CartItem[];
  };
}

const initialState: CartState = {
  cartItems: {
    items: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProductIndex = state.cartItems.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cartItems.items[existingProductIndex].quantity +=
          action.payload.quantity;
      } else {
        state.cartItems.items.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;