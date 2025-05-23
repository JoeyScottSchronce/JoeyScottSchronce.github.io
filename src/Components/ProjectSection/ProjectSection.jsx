import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./ProjectSection.css";
import ProjectCardData from "./ProjectCardData.js";

const ProjectSection = () => {

    return (
        <div className="projects-container">
            <div className="projects-title-container">
                <h2>Projects</h2>
            </div>
            <h6 className="directions-header">Swipe right to see more projects</h6>
            <div className="projects-sub-container">
                {Object.values(ProjectCardData).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;
