import React from "react";
import {useState} from 'react';
import * as Yup from "yup";
import siparisSchema from "../Validations/SiparisValidation";

const Not = ({siparisNotu}) => {
    const [not, setNot] = useState('');
    siparisNotu(not);
    const [formState,setFormState] = useState({isim:"" });
    const [formErrors,setformErrors] = useState({isim:""})

    const inputChange= e=>{
        setNot(e.target.value)
        const {name, value}=e.target;
        Yup.reach(siparisSchema,name)
            .validate(value)
            .then(valid=>{setformErrors({...formErrors,[name]:""});})
            .catch(err=>{setformErrors({...formErrors,[name]:err.errors[0]});})
        setFormState({...formState,[name]:value})
    }

    return (
        <div className="siparisnotu">
            <h4>Sipariş Notu</h4>
            <input name="isim" type="text" id="name-input" placeholder="Lütfen isminizi giriniz." onChange={(e)=>inputChange(e)}></input>
            <input type="text" name="not" id="special-text" placeholder="Siparişine eklemek istediğin bir not var mı?"></input>
            <hr></hr>
        </div>
    )
};
export default Not;