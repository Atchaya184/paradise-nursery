
import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ navigate }) {
  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleNavigation(event, path) {
    event.preventDefault();
    navigate(path);
  }

  return (
    <nav className="navbar">
      <a
        href="/"
        className="logo"
        onClick={e => handleNavigation(e, '/')}
      >
        Paradise Nursery 🌿
      </a>

      <div className="nav-links">
        <a href="/" onClick={e => handleNavigation(e, '/')}>
          Home
        </a>

        <a href="/plants" onClick={e => handleNavigation(e, '/plants')}>
          Plants
        </a>

        <a href="/cart" onClick={e => handleNavigation(e, '/cart')}>
          🛒 Cart ({cartCount})
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
