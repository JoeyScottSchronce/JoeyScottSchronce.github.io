import React from 'react';
import {Link} from "react-router-dom";
import "./Credentials.css"

function Credentials() {

    return (
        <div className="credentials-main-container">
            <div className="credentials-sub-container">
                <Link to="/certificates" className="link-sub-container">
                    <h1>Certificates</h1>
                </Link>
            </div>

            <div className="credentials-sub-container">
                <Link to="/badges" className="link-sub-container">
                    <h1>Badges</h1>
                </Link>
            </div>

            <div className="credentials-sub-container">
                <Link to="/skills" className="link-sub-container">
                    <h1>Skills</h1>
                </Link>
            </div>

        </div>
    )
}

export default Credentials;