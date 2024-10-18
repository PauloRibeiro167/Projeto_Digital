// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '..//src/components/navbar';
import Home from '..//src/components/body';
import Catalog from '..//views/catalog/Catalog';
import Cart from '..//views/cart/Cart';
import Profile from '..//src/components/profile';
import Login from '..//views/users/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;