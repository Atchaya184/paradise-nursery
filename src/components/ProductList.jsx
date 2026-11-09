import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import plants from '../data/plants';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <main className="product-page">
      <header className="product-header">
        <h1>Our Beautiful Plants</h1>
        <p>Bring freshness and beauty into your home.</p>
      </header>

      {categories.map(category => (
        <section className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const isAdded = cartItems.some(item => item.id === plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      loading="lazy"
                    />
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <h4>₹{plant.price}</h4>
                    <button
                      type="button"
                      className="add-button"
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
