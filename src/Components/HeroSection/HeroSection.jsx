import React from 'react';
import "./HeroSection.css"
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <div id="HeroSection" className="container">
            <div className="sub-container">
                <div className="first-sub">
                    <h1>Hero Section Title as an Intro</h1>
                </div>

                <div className="second-sub">
                    <h2>Second statement to maintain attention </h2>
                </div>

                <div className="third-sub" >
                    <Link to="/Projects">Go to Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;