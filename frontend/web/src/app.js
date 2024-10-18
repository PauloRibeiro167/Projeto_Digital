// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/home/Home';
import Catalog from './views/catalog/Catalog';
import ProductDetails from './views/catalog/ProductDetails';
import Cart from './views/cart/Cart';
import Checkout from './views/orders/Checkout';
import Login from './views/users/Login';
import Register from './views/users/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;