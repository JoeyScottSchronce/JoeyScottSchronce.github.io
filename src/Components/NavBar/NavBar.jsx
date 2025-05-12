import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div id="NavBar">
            <nav className="nav">
                <div>
                    <Link to="/" className="nav-main">Joey Scott Schronce</Link>
                </div>
                <div className="nav-options">
                    <Link to="/About" className="nav-items">About</Link>
                    <Link to="/Projects" className="nav-items">Projects</Link>
                    <Link to="/Skills" className="nav-items">Skills</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;