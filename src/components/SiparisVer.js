import React, { useEffect, useState } from "react";

const SiparisVer = (props) => {
    const [adet, setAdet] = useState(1);
    console.log(props)
    useEffect(()=> {

    },[props.malzemeSayisi])
    return (
        <div className="siparisver">
            <div className="adet">
                <span className="reduce" onClick={(e)=> setAdet(adet -1 )} style={{cursor:"pointer"}}>-</span>
                <span className="quantity">{adet}</span>
                <span className="increase" onClick={(e)=> setAdet(adet +1 )} style={{cursor:"pointer"}}>+</span>
            </div>
            <div className="checkout">
                <h4>Sipariş Toplamı</h4>
                <div className="secimler">
                    <p>Seçimler</p>
                    <span>{props.malzemeSayisi}</span>
                </div>
                <div className="toplam">
                    <p>Toplam</p>
                    <span>{props.toplam}</span>
                </div>
                <input type="submit" id="order-button" value="SİPARİŞ VER"></input> 
            </div>
        </div>
    )
};
export default SiparisVer;