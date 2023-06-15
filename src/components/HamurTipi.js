import React from "react";

const HamurTipi = (props) => {
    return (
        <>
            <div className="hamurtipi" onChange={null}>
                <h4>Hamur Seç  <span style={{ color: "red" }}>*</span> </h4>
                <select name="cars" id="cars">
                    <option value="default">Hamur Kalınlığı</option>
                    <option value="ince">İnce Hamur</option>
                    <option value="kalın">Kalın hamur</option>
                </select>
            </div>
        </>
    )
};
export default HamurTipi;