import React, { useEffect, useState } from "react";
import Boyut from "./Boyut";
import EkMalzemeler from "./EkMalzemeler";
import HamurTipi from "./HamurTipi";
import Not from "./Not";
import SiparisVer from "./SiparisVer";

const Form = (props) => {
    const [toplam, setToplam] = useState();
    const [malzemeSayisi, setMalzemeSayisi] = useState(0);
    const [malzemeler, setMalzemeler] = useState([]);
    const [pizzaBoyut, setPizzaBoyut] = useState();
    const [pizzaTipi, setPizzaTipi] = useState();
    const [siparisNotu, setSiparisNotu] = useState();
    const [toplamFiyat, setToplamFiyat] = useState();

    const malzemeSayisiToplam = (x) => {
        setMalzemeSayisi(x)
        
    }
    const secilenMalzemeler = (m) => {
        setMalzemeler(m)
    }
    const not = (not) => {
        setSiparisNotu(not);      
    }
    const secilenBoyut = (b) => {
        setPizzaBoyut(b);
    }
    const secilenTip = (t) => {
        setPizzaTipi(t)
    }
    

    return (
        <form id="pizza-form">
            <div className="row">
                <Boyut boyut={secilenBoyut}></Boyut>
                <HamurTipi hamurTipi={secilenTip}></HamurTipi>
            </div>
            <EkMalzemeler malzemeSayisi={malzemeSayisiToplam} secilenMalzemeler={malzemeler}></EkMalzemeler>
            <Not siparisNotu={not}></Not>
            <SiparisVer pFiyat={props.pizzaFiyat}  secilenMalzemeler={malzemeler} secilenBoyut={pizzaBoyut} secilenTip={pizzaTipi} not={siparisNotu}></SiparisVer>
        </form>
    )
}
export default Form