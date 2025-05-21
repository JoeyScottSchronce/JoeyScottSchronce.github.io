import React from 'react';
import "./badges.css"
import BadgesData from "./BadgesData.js";

function Badge({ badge, image }) {
    return (
        <div className="badge">
            <a href={badge} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={"Badge Icon"} />
            </a>

        </div>
    );
}


function Badges() {
    return (
        <div id="Badges" className="badges">
            <h1>Badges</h1>
            <div className="badges-container">
                <div className="badges-sub-container">
                    {Object.values(BadgesData).map((badges, index) => (
                        <Badge key={index} {...badges} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Badges;

