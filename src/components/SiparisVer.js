import React, { useEffect, useState } from "react";

const SiparisVer = (props) => {

    function adetAzalt() {
        if (adet > 1) {
            setAdet(adet -1);
        }
    }

    function adetArttir() {
        setAdet(adet +1);
    }

    const [adet, setAdet] = useState(1);
    console.log(props)
    useEffect(()=> {

    },[props.malzemeSayisi])
    return (
        <div className="siparisver">
            <div className="adet">
                <span className="reduce" onClick={adetAzalt} style={{cursor:"pointer"}}>-</span>
                <span className="quantity">{adet}</span>
                <span className="increase" onClick={adetArttir} style={{cursor:"pointer"}}>+</span>
            </div>
            <div className="checkout">
                <h4>Sipariş Toplamı</h4>
                <div className="secimler">
                    <p>Seçimler</p>
                    <span>{props.malzemeSayisi}.00₺</span>
                </div>
                <div className="toplam">
                    <p>Toplam</p>
                    <span>{props.toplam}.50₺</span>
                </div>
                <input type="submit" id="order-button" value="SİPARİŞ VER"></input>
            </div>
        </div>
    )
};
export default SiparisVer;