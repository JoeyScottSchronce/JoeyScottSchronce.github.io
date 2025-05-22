import React from 'react';
import styles from "./certificates.module.css"
import CertificatesData from "./CertificatesData.js";

export const metadata = {
    title: "Certificates - Joey Scott Schronce Portfolio",
    description: "View my professional certificates showcasing my expertise in software engineering.",
};

function Certificate({ certificate, image }) {
    return (
        <div className={styles.certificate}>
            <a href={certificate} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={"Certificate Icon"} />
            </a>

        </div>
    );
}

function Certificates() {
    return (
        <div className={styles.certificates}>
            <h1>Certificates</h1>
            <div className={styles.certificatesContainer}>
                <div className={styles.certificatesSubContainer}>
                    {Object.values(CertificatesData).map((certificate, index) => (
                        <Certificate key={index} {...certificate} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certificates;