import React, { useEffect, useState } from "react";


const SiparisVer = (props) => {
const [adetliToplam,setAdetliToplam]= useState(0);
const [toplam,setToplam] = useState(0)
const [malzemeToplam,setMalzemeToplam]= useState(0)
const malzemeTotal = ()=>{
setMalzemeToplam(props.secilenMalzemeler.length*5)
}
const siparisTotal = ()=>{
    if(adet == 1){
        setToplam(props.pFiyat+malzemeToplam)
        
    }else{
       
        setToplam((props.pFiyat+malzemeToplam)*adet)
       
    }


}
    function adetAzalt() {
        if (adet > 1) {
            setAdet(adet -1);
        }
    }

    function adetArttir() {
        setAdet(adet +1);
    }

    const [adet, setAdet] = useState(1);
   
    useEffect(()=> {
malzemeTotal()
siparisTotal()
    },[props.malzemeSayisi,siparisTotal])
    const click = (e) => {
        e.preventDefault();
        console.log(props)
        window.location.replace("/success")
    }
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
                    <span>{malzemeToplam}.00₺</span>
                </div>
                <div className="toplam">
                    <p>Toplam</p>
                    <span>{toplam}₺</span>
                </div>
                <input type="submit" id="order-button" value="SİPARİŞ VER" onClick={e=> {click(e)}}></input>
            </div>
        </div>
    )
};
export default SiparisVer;