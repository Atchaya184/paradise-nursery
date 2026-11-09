
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../CartSlice';

import './CartItem.css';

function CartItem({ navigate }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">

      <div className="cart-container">

        <h1>Shopping Cart 🛒</h1>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>Your Cart is Empty!</h2>

            <p>
              Add some beautiful plants to your cart.
            </p>

            <button
              className="continue-btn"
              onClick={() => navigate('/plants')}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <>

            {cartItems.map(item => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                  onError={e => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500';
                  }}
                />

                <div className="cart-details">

                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">

                    <button
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

            <div className="cart-summary">

              <h2>Cart Summary</h2>

              <p>Total Items: {totalItems}</p>

              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <button
                className="checkout-btn"
                onClick={() => alert('Coming Soon!')}
              >
                Checkout
              </button>

              <button
                className="continue-btn"
                onClick={() => navigate('/plants')}
              >
                Continue Shopping
              </button>

            </div>

          </>

        )}

      </div>

    </main>
  );
}

export default CartItem;



























// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart
// } from '../CartSlice';

// import './CartItem.css';

// function CartItem() {

//   const dispatch = useDispatch();

//   const cartItems = useSelector(
//     state => state.cart.cartItems
//   );

//   // Calculate total cart amount
//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // Calculate total number of items
//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <div className="cart-page">

//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <h2 className="logo">Paradise Nursery 🌿</h2>

//         <div className="nav-links">
//           <a href="/">Home</a>
//           <a href="/plants">Plants</a>
//           <a href="/cart">
//             🛒 Cart ({cartCount})
//           </a>
//         </div>
//       </nav>

//       <div className="cart-container">

//         <h1>Shopping Cart 🛒</h1>

//         {cartItems.length === 0 ? (

//           <div className="empty-cart">
//             <h2>Your cart is empty!</h2>
//             <p>Add some beautiful plants to your cart.</p>

//             <a href="/plants" className="continue-btn">
//               Continue Shopping
//             </a>
//           </div>

//         ) : (

//           <>

//             {cartItems.map(item => (

//               <div className="cart-item" key={item.id}>

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-image"
//                 />

//                 <div className="cart-details">

//                   <h3>{item.name}</h3>

//                   <p>Unit Price: ₹{item.price}</p>

//                   <p>
//                     Total: ₹{item.price * item.quantity}
//                   </p>

//                   <div className="quantity-controls">

//                     <button
//                       onClick={() =>
//                         dispatch(decreaseQuantity(item.id))
//                       }
//                     >
//                       −
//                     </button>

//                     <span>{item.quantity}</span>

//                     <button
//                       onClick={() =>
//                         dispatch(increaseQuantity(item.id))
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   <button
//                     className="delete-btn"
//                     onClick={() =>
//                       dispatch(removeFromCart(item.id))
//                     }
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             ))}

//             <div className="cart-summary">

//               <h2>Cart Summary</h2>

//               <h3>Total Items: {cartCount}</h3>

//               <h2>Total Amount: ₹{totalAmount}</h2>

//               <button
//                 className="checkout-btn"
//                 onClick={() => alert('Coming Soon!')}
//               >
//                 Checkout
//               </button>

//               <a href="/plants" className="continue-btn">
//                 Continue Shopping
//               </a>

//             </div>

//           </>

//         )}

//       </div>

//     </div>
//   );
// }

// export default CartItem;
