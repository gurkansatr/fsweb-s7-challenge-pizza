import React from "react";
import './App.css'
import Home from "./pages/Home"
import OrderPizza from "./pages/OrderPizza"
import Success from "./pages/Success"
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/orderpizza" component={OrderPizza} />
        <Route path="/success" component={Success} />
      </Router>
  );
};

export default App;