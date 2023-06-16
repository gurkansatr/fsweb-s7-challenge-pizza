import React, { useState } from "react";

const Boyut = ({boyut}) => {
  const [pizzaBoyutu, setPizzaBoyutu] = useState()

  const onSizeChanged = (e) => {		    
		setPizzaBoyutu(e.target.value); 
    boyut(e.target.value);
	}

  return (
    <>
      <div className="boyut">
        <h4>Boyut Seç <span style={{ color: "red" }}>*</span> </h4>
        <div className="radio-line">
          <input type="radio" id="kucuk" name="boyut" value={"kucuk"} onChange={onSizeChanged}></input>
          <label htmlFor="kucuk">Küçük</label>
        </div>
        <div className="radio-line">
          <input type="radio" id="orta" name="boyut" value={"orta"} onChange={onSizeChanged}></input>
          <label htmlFor="orta">Orta</label>
        </div>
        <div className="radio-line">
          <input type="radio" id="buyuk" name="boyut" value={"buyuk"} onChange={onSizeChanged}></input>
          <label htmlFor="buyuk">Büyük</label>
        </div>
      </div>
    </>
  )
}

export default Boyut;