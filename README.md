# Ecommerce_website

A simple e-commerce website built using React that allows users to view products, view product details, and add products to the cart. The website fetches product data from a mock API (FakeStoreAPI) and stores the cart data in local storage to persist even after a page reload.

## Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone the Repository

Clone the repository to your local machine

### 2. Install Dependencies
Install the necessary dependencies using npm:

npm install
### 3. Start the Development Server

To start the project locally, run:
npm start


### Tools Used
React: A JavaScript library for building user interfaces.
React Router: Used to handle dynamic routing for the product details page.
FakeStoreAPI: A mock API to fetch product data dynamically.
CSS: Custom styling for visual enhancement.

### Features
### 1. Homepage:
Displays a list of products fetched from the FakeStoreAPI.
Each product shows its name, price, image, and a "View Details" button.
Clicking "View Details" navigates to the product's details page.
### 2. Product Details Page:
Displays detailed information about the selected product.
Includes a button to "Add to Cart" which stores the product data in local storage.
### 3. Cart Functionality:
The cart is stored in local storage, so even after a page reload, the cart persists.
Allows adding multiple quantities of a product to the cart.
### 4. Responsive Design:
The application is responsive and adjusts its layout for different screen sizes using custom CSS.
### Approach
### 1. Fetching Data:
The product data is fetched from the FakeStoreAPI using the fetch API.
The product list is displayed on the homepage, and the product details are dynamically shown when a user clicks "View Details".
### 2. State Management:
React’s useState hook is used to manage the state for products, cart, and other UI elements.
The useEffect hook is used to fetch product data when the component mounts.
### 3. Routing:
React Router is used to create dynamic routes for the product details page. The URL is structured as /product/:id, where id is the product ID.
### 4. Local Storage:
Cart data is stored in the browser's local storage to persist the cart items even when the page is refreshed.
The cart allows users to add, remove, and update quantities of products.

### Screenshots
![Homepage](https://github.com/Pranavbankar/Ecommerce_website/blob/main/screenshots/Screenshot_1.png?raw=true)

![Product Details](https://github.com/Pranavbankar/Ecommerce_website/blob/main/screenshots/Screenshot_2.png?raw=true)

![My Cart](https://github.com/Pranavbankar/Ecommerce_website/blob/main/screenshots/Screenshot_3.png?raw=true)

