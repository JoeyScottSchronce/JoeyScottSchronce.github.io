import React from 'react';
import styles from "./badges.module.css"
import BadgesData from "./BadgesData.js";

export const metadata = {
    title: "Badges - Joey Scott Schronce Portfolio",
    description: "Discover my Credly Badges reflecting achievements in Software Engineering and Web Development.",
};

function Badge({ badge, image }) {
    return (
        <div className={styles.badge}>
            <a href={badge} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={"Badge Icon"} />
            </a>

        </div>
    );
}


function Badges() {
    return (
        <div className={styles.badges}>
            <h1>Badges</h1>
            <div className={styles.badgesContainer}>
                <div className={styles.badgesSubContainer}>
                    {Object.values(BadgesData).map((badges, index) => (
                        <Badge key={index} {...badges} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Badges;

