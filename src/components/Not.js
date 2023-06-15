import React from "react";
import {useState} from 'react';


const Not = (props) => {

    return (
        <div className="siparisnotu">
            <h4>Sipariş Notu</h4>
            <input type="text" id="name-input" placeholder="Lütfen isminizi giriniz."></input>
            <input type="text" name="not" id="not" placeholder="Siparişine eklemek istediğin bir not var mı?"></input>
            <hr></hr>
        </div>
    )
};
export default Not;