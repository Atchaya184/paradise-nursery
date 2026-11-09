
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartSlice';

const STORAGE_KEY = 'paradise-nursery-cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const items = saved ? JSON.parse(saved) : [];
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState: {
    cart: {
      cartItems: loadCart()
    }
  }
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(store.getState().cart.cartItems)
    );
  } catch (error) {
    console.error('Unable to save cart:', error);
  }
});

export default store;
























// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../CartSlice';

// const STORAGE_KEY = 'paradise-nursery-cart';

// const loadCart = () => {
//   try {
//     const savedCart = localStorage.getItem(STORAGE_KEY);
//     return savedCart ? JSON.parse(savedCart) : [];
//   } catch {
//     return [];
//   }
// };

// const store = configureStore({
//   reducer: {
//     cart: cartReducer
//   },
//   preloadedState: {
//     cart: {
//       cartItems: loadCart()
//     }
//   }
// });

// store.subscribe(() => {
//   localStorage.setItem(
//     STORAGE_KEY,
//     JSON.stringify(store.getState().cart.cartItems)
//   );
// });

// export default store;
