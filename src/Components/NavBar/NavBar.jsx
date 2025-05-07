import React from "react";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav">
            <h1>Joey Scott Schronce</h1>
            <div className="nav-options">
                <h2 className="nav-items">About</h2>
                <h2 className="nav-items">Projects</h2>
                <h2 className="nav-items">Skills</h2>
                <h2 className="nav-items">X</h2>
                <h2 className="nav-items">L</h2>
                <h2 className="nav-items">G</h2>
            </div>
        </nav>
    )
}

export default NavBar;