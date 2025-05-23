import React from 'react';
import "./ProjectCard.css"

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

export default ProjectCard;