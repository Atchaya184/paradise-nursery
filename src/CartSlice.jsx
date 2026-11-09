

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;

      const existingPlant = state.cartItems.find(
        item => item.id === plant.id
      );

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.cartItems.push({
          ...plant,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const plant = state.cartItems.find(
        item => item.id === action.payload
      );

      if (plant) {
        plant.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const plant = state.cartItems.find(
        item => item.id === action.payload
      );

      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;































// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: []
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {

//     // Add a plant to the cart
//     addToCart: (state, action) => {
//       const plant = action.payload;

//       const existingPlant = state.cartItems.find(
//         item => item.id === plant.id
//       );

//       if (existingPlant) {
//         existingPlant.quantity += 1;
//       } else {
//         state.cartItems.push({
//           ...plant,
//           quantity: 1
//         });
//       }
//     },

//     // Remove a plant completely
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         item => item.id !== action.payload
//       );
//     },

//     // Increase plant quantity
//     increaseQuantity: (state, action) => {
//       const plant = state.cartItems.find(
//         item => item.id === action.payload
//       );

//       if (plant) {
//         plant.quantity += 1;
//       }
//     },

//     // Decrease plant quantity
//     decreaseQuantity: (state, action) => {
//       const plant = state.cartItems.find(
//         item => item.id === action.payload
//       );

//       if (plant && plant.quantity > 1) {
//         plant.quantity -= 1;
//       }
//     }
//   }
// });

// export const {
//   addToCart,
//   removeFromCart,
//   increaseQuantity,
//   decreaseQuantity
// } = cartSlice.actions;

// export default cartSlice.reducer;
