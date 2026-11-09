

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../CartSlice';

import plants from '../data/plants';

import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const categories = [
    ...new Set(plants.map(plant => plant.category))
  ];

  return (
    <main className="product-page">

      <header className="product-header">
        <h1>Our Beautiful Plants</h1>
        <p>
          Bring freshness and beauty into your home.
        </p>
      </header>

      {categories.map(category => (

        <section
          className="category-section"
          key={category}
        >

          <h2 className="category-title">
            {category}
          </h2>

          <div className="product-grid">

            {plants
              .filter(plant => plant.category === category)
              .map(plant => {

                const isAdded = cartItems.some(
                  item => item.id === plant.id
                );

                return (

                  <div
                    className="product-card"
                    key={plant.id}
                  >

                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500';
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p className="plant-description">
                      {plant.description}
                    </p>

                    <h4>₹{plant.price}</h4>

                    <button
                      className="add-button"
                      disabled={isAdded}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isAdded
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>

                  </div>
                );
              })}

          </div>

        </section>
      ))}

    </main>
  );
}

export default ProductList;


























// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../CartSlice';
// import plants from '../data/plants';
// import './ProductList.css';

// function ProductList() {
//   const dispatch = useDispatch();

//   const cartItems = useSelector(
//     state => state.cart.cartItems
//   );

//   // Calculate total number of items in cart
//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   // Get unique plant categories
//   const categories = [...new Set(
//     plants.map(plant => plant.category)
//   )];

//   return (
//     <div className="product-page">

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

//       {/* Page Heading */}
//       <header className="product-header">
//         <h1>Our Beautiful Plants</h1>
//         <p>Bring freshness and beauty into your home.</p>
//       </header>

//       {/* Display Plant Categories */}
//       {categories.map(category => (

//         <section className="category-section" key={category}>

//           <h2 className="category-title">
//             {category}
//           </h2>

//           <div className="product-grid">

//             {plants
//               .filter(plant => plant.category === category)
//               .map(plant => {

//                 const isAdded = cartItems.some(
//                   item => item.id === plant.id
//                 );

//                 return (
//                   <div className="product-card" key={plant.id}>

//                     <img
//                       src={plant.image}
//                       alt={plant.name}
//                       className="plant-image"
//                     />

//                     <h3>{plant.name}</h3>

//                     <p className="plant-description">
//                       {plant.description}
//                     </p>

//                     <h4>₹{plant.price}</h4>

//                     <button
//                       className="add-button"
//                       disabled={isAdded}
//                       onClick={() => dispatch(addToCart(plant))}
//                     >
//                       {isAdded ? 'Added to Cart' : 'Add to Cart'}
//                     </button>

//                   </div>
//                 );
//               })}

//           </div>
//         </section>
//       ))}

//     </div>
//   );
// }

// export default ProductList;
