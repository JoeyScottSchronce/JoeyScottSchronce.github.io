
import "./ProjectSection.css";
import ProjectCardData from "./ProjectCardData.js";
import React from "react";

function ProjectCard({ title, image, content, website, github }) {

    return (
        <div className="slide-box">
            <div className="card-container">
                <h3 className={image ? "card-title" : "large-title"}>{title}</h3>
                <div className="card-content-container">
                    {image && (
                        <div className="card-image" ><img src={image} alt={title}/></div>
                    )}
                    <div>
                        <div className={image ? "card-content" : "large-content"}>
                            <h6 className="card-description">{content}</h6>
                        </div>
                        <div className="card-button-container">
                            <a href={github}><button className="card-button">Project Repository</button></a>
                            {website && (
                                <a href={website}><button className="card-button">See the Website</button></a>
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
        <div className="projects-container">
            <div className="projects-title-container">
                <h2>Projects</h2>
            </div>
            <div className="projects-sub-container">
                {Object.values(ProjectCardData).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <h6 className="directions-header">Swipe right to see more projects</h6>
        </div>
    );
};

export default ProjectSection;
