import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Invertory from './components/Inventory/Invertory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  children: [
    {
      path: "/",
      element: <Shop/>,
    },
    {
      path: "/orders",
      element: <Orders/>,
      loader: cartProductsLoader
    },
    {
      path: "/inventory",
      element: <Invertory/>,
    },
    {
      path: "/chackout",
      element: <Checkout/>,
    },

    {
      path: "/login",
      element: <Login/>,
    },
  ],
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
