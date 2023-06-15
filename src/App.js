import React from "react";
import Header from "./components/Header";
import './App.css'
import Pizza from "./components/Pizza";
import Boyut from "./components/Boyut";
import Form from "./components/Form";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="order-page">
        <div className="order-page-content">
          <Header></Header>
          <Pizza></Pizza>
          <Form></Form>
        </div>
      </div>
    </>
  );
};
export default App;
