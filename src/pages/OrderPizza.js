import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Pizza from "../components/Pizza";
import Form from "../components/Form";

const OrderPizza = (props) => {
  const [fiyat,setFiyat] = useState(0);
  const belirlenenFiyat =(p)=>{
    setFiyat(p)
  }
  useEffect(()=>{

  },[])
    return (
        <div className="order-page">
        <div className="order-page-content">
          <Header></Header>
          <Pizza pizzaFiyat={belirlenenFiyat}></Pizza>
          <Form pizzaFiyat={fiyat}></Form>
        </div>
      </div>
    )
}

export default OrderPizza;