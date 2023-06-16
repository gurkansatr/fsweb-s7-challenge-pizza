import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
        <div className="header-bg"></div>
        <div className="header">
            <div className="header-title">
                <h1>Teknolojik Yemekler</h1>
            </div>
            <div className="header-nav">
                <Link to="/">Anasayfa  </Link> - <Link to="/">  Seçenekler </Link> - <Link to="#"><span style={{ fontWeight: '700' }}>Sipariş Oluştur</span></Link>
            </div>
        </div>
        </>
    )
}
export default Header