
import Link from "next/link";
import ProjectCard from "./ProjectCard.jsx";
import "./ProjectSection.css";
import ProjectCardData from "./ProjectCardData.js";

const ProjectSection = ({ startIndex }) => {
    const projectEntries = Object.entries(ProjectCardData);

    // Number of projects displayed at a time
    const DISPLAY_COUNT = 1;

    // Calculate the current page and total pages
    const currentPage = Math.floor(startIndex / DISPLAY_COUNT) + 1;
    const totalPages = Math.ceil(projectEntries.length / DISPLAY_COUNT);


    return (
        <div className="projects-container">
            <div className="projects-title-container">
                <h2>Projects</h2>
            </div>
            <div className="projects-sub-container">
                {projectEntries
                    .slice(startIndex, startIndex + DISPLAY_COUNT)
                    .map(([key, project]) => (
                        <ProjectCard key={key} {...project} />
                    ))}

                <div className="project-nav-buttons">
                    <Link
                        href={`/projects?page=${currentPage - 1}`}
                        className={`project-button ${currentPage === 1 ? "disabled" : ""}`}
                        shallow
                    >
                        Back
                    </Link>
                    <Link
                        href={`/projects?page=${currentPage + 1}`}
                        className={`project-button ${currentPage === totalPages ? "disabled" : ""}`}
                        shallow
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
