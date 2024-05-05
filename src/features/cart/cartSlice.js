import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deteleItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const itemToUpdate = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      itemToUpdate.quantity++;
      itemToUpdate.totalPrice = itemToUpdate.quantity * itemToUpdate.unitPrice;
    },
    decreaseQuantity(state, action) {
      const itemToUpdate = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      itemToUpdate.quantity--;
      itemToUpdate.totalPrice = itemToUpdate.quantity * itemToUpdate.unitPrice;

      if (itemToUpdate.quantity === 0)
        cartSlice.caseReducers.deteleItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deteleItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
