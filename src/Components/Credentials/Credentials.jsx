import React from 'react';
import {Link} from "react-router-dom";
import "./Credentials.css"

function Credentials() {

    return (
        <div className="credentials-main-container">
            <div className="credentials-sub-container">
                <Link to="/certificates" className="link-sub-container">
                    <img src="https://www.centroarbitrajeconciliacion.com/var/ccb/storage/images/media/cac/ejemplos-de-contenido/kitchen-sink-lavaplatos/1283-40-esl-CO/Kitchen-sink-Lavaplatos.png" className="button-image" alt="" />
                    <h3>Certificates</h3>
                </Link>
            </div>

            <div className="credentials-sub-container">
                <Link to="/badges" className="link-sub-container">
                    <img src="https://www.centroarbitrajeconciliacion.com/var/ccb/storage/images/media/cac/ejemplos-de-contenido/kitchen-sink-lavaplatos/1283-40-esl-CO/Kitchen-sink-Lavaplatos.png" className="button-image" alt="" />
                    <h3>Badges</h3>
                </Link>
            </div>

            <div className="credentials-sub-container">
                <Link to="/skills" className="link-sub-container">
                    <img src="https://www.centroarbitrajeconciliacion.com/var/ccb/storage/images/media/cac/ejemplos-de-contenido/kitchen-sink-lavaplatos/1283-40-esl-CO/Kitchen-sink-Lavaplatos.png" className="button-image" alt="" />
                    <h3>Skills</h3>
                </Link>
            </div>

        </div>
    )
}

export default Credentials;