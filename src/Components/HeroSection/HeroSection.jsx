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
                    <div className="intro2" >As a Software Engineer, my expertise is in building reliable and
                        efficient backend systems, APIs, and innovative software solutions.
                    </div>
                </div>

                <div className="third-sub" >
                    <Link to="/projects">Go to Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;