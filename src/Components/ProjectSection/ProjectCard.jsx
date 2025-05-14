import React from 'react';
import "./ProjectCard.css"

function ProjectCard({ title, image, content, website, github }) {

    return (
        <div className="card-container">
            <h3 className="card-title" >{title}</h3>
            <img className="card-image" src={image} alt={title}/>
            <p className="card-description">{content}</p>
            <div className="card-button-container">
                <a href={github}><button className="card-button">Project Repository</button></a>
                <a href={website}><button className="card-button">See the Website</button></a>
            </div>
        </div>
    )
}

export default ProjectCard;