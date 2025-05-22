
import styles from "./projects.module.css";
import ProjectCardData from "./ProjectCardData.js";
import React from "react";

function ProjectCard({ title, image, content, website, github }) {

    return (
        <div className={styles.slideBox}>
            <div className={styles.cardContainer}>
                <h3 className={image ? styles.cardTitle : styles.largeTitle}>{title}</h3>
                <div className={styles.cardContentContainer}>
                    {image && (
                        <div className={styles.cardImage} ><img src={image} alt={title}/></div>
                    )}
                    <div>
                        <div className={image ? styles.cardContent : styles.largeContent}>
                            <h6 className={styles.cardDescription}>{content}</h6>
                        </div>
                        <div className={styles.cardButtonContainer}>
                            <a href={github}><button className={styles.cardButton}>Project Repository</button></a>
                            {website && (
                                <a href={website}><button className={styles.cardButton}>See the Website</button></a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectSection = () => {

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsTitleContainer}>
                <h2>Projects</h2>
            </div>
            <div className={styles.projectsSubContainer}>
                {Object.values(ProjectCardData).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <h6 className={styles.directionsHeader}>Swipe right to see more projects</h6>
        </div>
    );
};

export default ProjectSection;
