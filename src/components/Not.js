import React, { useState } from "react";

const Not = ({siparisNotu}) => {
    const [not, setNot] = useState('');
    siparisNotu(not);
    return (
        <div className="siparisnotu">
            <h4>Sipariş Notu</h4>
            <input type="text" name="not" id="not" placeholder="Siparişine eklemek istediğin bir not var mı?" onChange={e => setNot(e.target.value)} />             
            <hr></hr>
        </div>
    )
};
export default Not;