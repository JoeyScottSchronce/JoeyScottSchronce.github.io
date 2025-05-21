import React from 'react';
import "./certificates.css"
import CertificatesData from "./CertificatesData.js";

export const metadata = {
    title: "Certificates - Joey Scott Schronce Portfolio",
    description: "View my professional certificates showcasing my expertise in software engineering.",
};

function Certificate({ certificate, image }) {
    return (
        <div className="certificate">
            <a href={certificate} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={"Certificate Icon"} />
            </a>

        </div>
    );
}

function Certificates() {
    return (
        <div className="certificates">
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