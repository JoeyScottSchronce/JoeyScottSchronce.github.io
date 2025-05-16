import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div id="NavBar" className="nav-container">
            <nav className="nav-items-container">
                <div className="nav-items"><Link to="/">Home</Link></div>
                <div className="nav-items"><Link to="/about">About</Link></div>
                <div className="nav-items"><Link to="/projects">Projects</Link></div>
                <div className="nav-items"><Link to="/credentials">Credentials</Link></div>
            </nav>
        </div>
    )
}

export default NavBar;