import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Navbar from '..//src/components/navbar';
import Footer from '..//src/components/footer';
import Body from '..//src/components/body';
import Dashboard from '..//src/components/dashboard';
import Profile from '..//src/components/Profile';
import Home from './views/home/Home';
import Catalog from '..//views/catalog/Catalog';
import ProductDetails from '..//views/catalog/ProductDetails';
import Cart from '..//views/cart/Cart';
import Checkout from '..//views/orders/Checkout';
import Login from '..//views/users/Login';
import Register from '...//views/users/Register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);