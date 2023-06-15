import React from "react";
import Header from "../components/Header";
import Pizza from "../components/Pizza";
import Form from "../components/Form";

const OrderPizza = (props) => {
    return (
        <div className="order-page">
        <div className="order-page-content">
          <Header></Header>
          <Pizza></Pizza>
          <Form></Form>
        </div>
      </div>
    )
}

export default OrderPizza;