
import React, { useState, useEffect } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './AboutUs';

function App() {
  const [path, setPath] = useState(
    window.location.pathname
  );

  function navigate(newPath) {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    function handleBackButton() {
      setPath(window.location.pathname);
    }

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  let page;

  if (path === '/plants') {
    page = <ProductList />;
  } else if (path === '/cart') {
    page = <CartItem navigate={navigate} />;
  } else if (path === '/about') {
    page = <AboutUs />;
  } else {
    page = (
      <div className="home-container">
        <div className="home-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful indoor plants and make
            your living space fresh, green and peaceful.
          </p>

          <button
            className="get-started-btn"
            onClick={() => navigate('/plants')}
          >
            Get Started
          </button>

          <button
            className="about-link"
            onClick={() => navigate('/about')}
          >
            About Us
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {path !== '/' && <Navbar navigate={navigate} />}
      {page}
    </>
  );
}

export default App;


































// import React, { useState, useEffect } from 'react';
// import './App.css';

// import ProductList from './components/ProductList';
// import CartItem from './components/CartItem';
// import AboutUs from './AboutUs';

// function App() {
//   const [path, setPath] = useState(window.location.pathname);

//   useEffect(() => {
//     const handleNavigation = (event) => {
//       const link = event.target.closest('a');

//       if (
//         link &&
//         link.origin === window.location.origin &&
//         link.pathname.startsWith('/')
//       ) {
//         event.preventDefault();

//         window.history.pushState({}, '', link.pathname);
//         setPath(link.pathname);

//         window.scrollTo(0, 0);
//       }
//     };

//     const handleBack = () => {
//       setPath(window.location.pathname);
//     };

//     document.addEventListener('click', handleNavigation);
//     window.addEventListener('popstate', handleBack);

//     return () => {
//       document.removeEventListener('click', handleNavigation);
//       window.removeEventListener('popstate', handleBack);
//     };
//   }, []);

//   if (path === '/plants') {
//     return <ProductList />;
//   }

//   if (path === '/cart') {
//     return <CartItem />;
//   }

//   if (path === '/about') {
//     return <AboutUs />;
//   }

//   return (
//     <div className="home-container">
//       <div className="home-content">

//         <h1>Paradise Nursery</h1>

//         <h2>Bring Nature Into Your Home</h2>

//         <p>
//           Discover beautiful indoor plants and make
//           your living space fresh, green and peaceful.
//         </p>

//         <a href="/plants" className="get-started-btn">
//           Get Started
//         </a>

//       </div>
//     </div>
//   );
// }

// export default App;
