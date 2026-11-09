# Paradise Nursery

## Online Plant Shopping Application

Paradise Nursery is a React-based online plant shop where customers can browse indoor plants, add plants to a shopping cart, and manage their orders.

## Features

- Landing page with a Paradise Nursery welcome message and Get Started button
- About Us page describing the company, mission, and vision
- Three plant categories with six plants in each category (18 plants total)
- Plant thumbnails, names, descriptions, and prices
- Add to Cart button that becomes disabled after a plant is added
- Navigation links for Home, Plants, and Cart
- Cart icon with a dynamically updated item count
- Increase and decrease plant quantities
- Remove plants from the cart
- Individual plant totals and overall cart total
- Cart contents saved in browser local storage
- Checkout message: Coming Soon!
- Continue Shopping button

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Redux Toolkit
- React Redux

## Run the Project Locally

1. Clone or download this repository.
2. Open the `paradise-nursery` project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal (usually `http://localhost:5173`).

## Project Structure

```text
src/
  app/store.js
  components/
    Navbar.jsx
    ProductList.jsx
    CartItem.jsx
  data/plants.js
  AboutUs.jsx
  App.jsx
  App.css
  CartSlice.jsx
  main.jsx
```
