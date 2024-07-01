import { createSlice } from "@reduxjs/toolkit";

const calculateCartTotal = (products) =>
  products.reduce((total, item) => total + item.price * item.quantity, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], cartTotal: 0 },
  reducers: {
    add(state, action) {
      //find if the item is already in the cart
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // update the cart total
      state.cartTotal = calculateCartTotal(state.products);
    },
    remove(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      // update the cart total
      state.cartTotal = calculateCartTotal(state.products);
    },
    incrementQuantity(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      // update the cart total
      state.cartTotal = calculateCartTotal(state.products);
    },
    decrementQuantity(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      // update the cart total
      state.cartTotal = calculateCartTotal(state.products);
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
