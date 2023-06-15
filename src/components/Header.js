import React from "react";

const Header = (props) => {
    return (
        <>
        <div className="header-bg"></div>
        <div className="header">
            <div className="header-title">
                <h1>Teknolojik Yemekler</h1>
            </div>
            <div className="header-nav">
                <p>Anasayfa - Seçenekler - <span style={{ fontWeight: '700' }}>Sipariş Oluştur</span></p>
            </div>
        </div>
        </>
    )
}
export default Header