import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import './CartItem.css';

function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const changeQuantity = (item, amount) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + amount
    }));
  };

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart 🛒</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty!</h2>
            <p>Add some beautiful plants to your cart.</p>
            <button
              type="button"
              className="continue-btn"
              onClick={() => navigate('/plants')}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <article className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>Plant Total: ₹{Number(item.price) * item.quantity}</p>

                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() => changeQuantity(item, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => changeQuantity(item, 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}

            <section className="cart-summary">
              <h2>Cart Summary</h2>
              <p>Total Items: {totalItems}</p>
              <h2>Total Amount: ₹{totalAmount}</h2>
              <button
                type="button"
                className="checkout-btn"
                onClick={() => window.alert('Coming Soon!')}
              >
                Checkout
              </button>
              <button
                type="button"
                className="continue-btn"
                onClick={() => navigate('/plants')}
              >
                Continue Shopping
              </button>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default CartItem;
