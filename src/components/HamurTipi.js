import React, { useState } from "react";

const HamurTipi = ({hamurTipi}) => {
  const [value, setValue] = useState("default");
  const handleChange = (e) => {
    setValue(e.target.value)
    hamurTipi(e.target.value)
  };

  return (
    <>
      <div className="hamurtipi" onChange={null}>
        <h4>Hamur Seç  <span style={{ color: "red" }}>*</span> </h4>
        <select onChange={e => {handleChange(e)}} defaultValue={value} name="cars" id="cars">
          <option disabled={true} value="default" hidden>Hamur Kalınlığı</option>
          <option value="ince">İnce Hamur</option>
          <option value="normal">Normal Hamur</option>
          <option value="kalın">Kalın hamur</option>
        </select>

      </div>
    </>
  )
};
export default HamurTipi;