import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="home-page">
            <div className="home-page-content">
                <h1>Teknolojik Yemekler</h1>
                <p>KOD ACIKTIRIR <br></br> PIZZA, DOYURUR</p>
                <Link to="/orderpizza">ACIKTIM</Link>
            </div>
        </div>
    )
}

export default Home;