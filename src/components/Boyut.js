import React, { useState } from "react";

const Boyut = (props) => {
  const [pizzaBoyutu, setPizzaBoyutu] = useState()
  const handleChange = (e) => {
    setPizzaBoyutu(e.target.value);
  }
  return (
    <>
      <div className="boyut" onChange={setPizzaBoyutu}>
        <h4>Boyut Seç <span style={{ color: "red" }}>*</span> </h4>
        <div className="radio-line">
          <input type="radio" id="kucuk" name="boyut"></input>
          <label htmlFor="kucuk">Küçük</label>
        </div>
        <div className="radio-line">
          <input 
          type="radio" 
          id="orta" 
          name="boyut"
          ></input>
          <label htmlFor="orta">Orta</label>
        </div>
        <div className="radio-line">
          <input type="radio" id="buyuk" name="boyut"></input>
          <label htmlFor="buyuk">Büyük</label>
        </div>
      </div>
    </>
  )
}

export default Boyut;