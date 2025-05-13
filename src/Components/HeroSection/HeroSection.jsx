import React from 'react';
import "./HeroSection.css"
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <div id="HeroSection" className="container">
            <div className="sub-container">
                <div className="first-sub">
                    <h1 className="intro1">Welcome to my Portfolio!</h1>
                </div>

                <div className="second-sub">
                    <div className="intro2" >I have no idea what to say right here so I'm just
                        gonna fill it in with a bunch of words to make this paragraph longer
                        to see what it looks like.</div>
                </div>

                <div className="third-sub" >
                    <Link to="/projects">Go to Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;