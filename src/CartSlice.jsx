import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a plant or increase its quantity if it is already in the cart.
    addItem: (state, action) => {
      const plant = action.payload;
      const existingPlant = state.cartItems.find(
        item => item.id === plant.id
      );

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.cartItems.push({ ...plant, quantity: 1 });
      }
    },

    // Remove a plant completely from the cart.
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    // Set a plant's quantity. A quantity below 1 is not allowed.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const plant = state.cartItems.find(item => item.id === id);

      if (plant && Number.isInteger(quantity) && quantity >= 1) {
        plant.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
