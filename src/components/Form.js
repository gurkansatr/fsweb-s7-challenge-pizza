import React, { useEffect, useState } from "react";
import Boyut from "./Boyut";
import EkMalzemeler from "./EkMalzemeler";
import HamurTipi from "./HamurTipi";
import Not from "./Not";
import SiparisVer from "./SiparisVer";

const Form = (props) => {
    const [toplam, setToplam] = useState(85,50);
    const [malzemeSayisi, setMalzemeSayisi] = useState(0);
    const [siparisNotu, setSiparisNotu] = useState();

    const malzemeSayisiToplam = (x) => {
        setMalzemeSayisi(x)
    }

    const not = (not) => {
        console.log(not);
    }

    useEffect(()=> {

    },[malzemeSayisiToplam])

    function siparisGec(event) {
        event.preventDefault();
        window.location.replace("/Success")
    }

    return (
        <form id="pizza-form" onSubmit={siparisGec}>
            <div className="row">
                <Boyut></Boyut>
                <HamurTipi></HamurTipi>
            </div>
            <EkMalzemeler malzemeSayisi={malzemeSayisiToplam}></EkMalzemeler>
            <Not siparisNotu={not}></Not>
            <SiparisVer toplam={toplam} malzemeSayisi={malzemeSayisi}></SiparisVer>
        </form>
    )
}
export default Form