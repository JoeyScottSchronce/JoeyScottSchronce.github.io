import React from "react";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav">
            <h1>Joey Scott Schronce</h1>
            <div className="nav-options">
                <h1 className="nav-items">About Me</h1>
                <h1 className="nav-items">Projects</h1>
                <h1 className="nav-items">Skills</h1>
            </div>
        </nav>
    )
}

export default NavBar;