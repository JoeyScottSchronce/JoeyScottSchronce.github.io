import React from "react";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav">
            <a href="#Hero-Section" className="nav-main">Joey Scott Schronce</a>
            <div className="nav-options">
                <a href="#About" className="nav-items">About</a>
                <a href="#Projects" className="nav-items">Projects</a>
                <a href="#Skills" className="nav-items">Skills</a>
            </div>
        </nav>
    )
}

export default NavBar;