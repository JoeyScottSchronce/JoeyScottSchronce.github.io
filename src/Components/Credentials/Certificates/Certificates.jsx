import React from 'react';
import "./Certificates.css"
import CertificatesData from "./CertificatesData.js";

function Certificate({ certificate, backup, image }) {
    return (
        <div className="certificate">
            <a href={certificate ? certificate : backup } target="_blank" rel="noopener noreferrer">
                <img src={image} alt={"Certificate Icon"} />
            </a>

        </div>
    );
}

function Certificates() {
    return (
        <div id="Certificates" className="certificates">
            <h1>Certificates</h1>
            <div className="certificates-container">
                <div className="certificates-sub-container">
                    {Object.values(CertificatesData).map((certificate, index) => (
                        <Certificate key={index} {...certificate} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certificates;