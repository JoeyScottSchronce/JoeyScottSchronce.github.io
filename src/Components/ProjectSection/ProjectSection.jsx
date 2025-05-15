import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./ProjectSection.css";
import ProjectCardData from "./ProjectCardData.js";

const ProjectSection = () => {
    const projectEntries = Object.entries(ProjectCardData);
    const [startIndex, setStartIndex] = useState(0);

    // Number of projects displayed at a time
    const DISPLAY_COUNT = 1;

    // Next & Back button handlers
    const handleNext = () => {
        if (startIndex + DISPLAY_COUNT < projectEntries.length) {
            setStartIndex(startIndex + DISPLAY_COUNT);
        }
    };

    const handleBack = () => {
        if (startIndex - DISPLAY_COUNT >= 0) {
            setStartIndex(startIndex - DISPLAY_COUNT);
        }
    };

    return (
        <div className="projects-container">
            <div className="projects-title-container">
                <h2>Projects</h2>
            </div>
            <div className="projects-sub-container">
                {projectEntries.slice(startIndex, startIndex + DISPLAY_COUNT).map(([key, project]) => (
                    <ProjectCard key={key} {...project} />
                ))}
                <div className="project-nav-buttons">
                    <button className="project-button" onClick={handleBack} disabled={startIndex === 0}>Back</button>
                    <button className="project-button" onClick={handleNext} disabled={startIndex + DISPLAY_COUNT >= projectEntries.length}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
