import React from 'react';
import "./ProjectSection.css"

function ProjectSection() {
    return (
        <div id="ProjectSection">
            {/* Projects */}
            <section>
                <h2>Projects</h2>
                <div style={{ clear: 'both' }}></div>

                <div id="projects-container" className="projects-container">
                    <div className="project-card">
                        <h3>DevOps and Software Engineering Capstone Project</h3>
                        <ul>
                            <li>
                                I developed an Accounts microservice to efficiently manage customer data
                                for an e-commerce platform, following Test-Driven Development (TDD) and
                                Behavior-Driven Development (BDD) principles. The service is built
                                using the Flask framework, incorporating a Tekton pipeline for automated workflows.
                                To ensure a structured development process, I utilized a Kanban board and
                                created detailed user stories, simulating a milestone-based approach with
                                four sprints. The microservice features a PostgreSQL database, with RESTful APIs
                                for create, read, update, delete, and list operations, maintaining 95% code coverage
                                through rigorous unit tests written with Factory Boy and Unittest. The codebase
                                adheres to the Model-View-Controller (MVC) pattern, ensuring clean separation
                                between business logic (models.py) and routing (routes.py). Additionally, the
                                project includes a Dockerfile, CI/CD pipeline, and was successfully deployed
                                to IBM Registry. This comprehensive implementation showcases my ability to build
                                scalable, well-tested, and deployment-ready microservices.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/devops-capstone-project">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Frontend Development Capstone Project</h3>
                        <ul>
                            <li>
                                I created a medical appointment booking website called Stay Healthy, to provide access
                                to medical care in remote areas. This website is designed to allow patients to schedule
                                appointments with healthcare providers easily. The platform enables users to view
                                available slots, select providers, manage their appointments through their online
                                accounts, and give feedback to the doctor's about their care. Built using the
                                React framework, this project initially relied on a pre-existing back end, which
                                I later restructured using Vite. Throughout the development process, I gained
                                hands-on experience with Linux commands, JSX, and React, as well as further honed
                                my skills in HTML, CSS with Bootstrap, Docker, using Git & GitHub,
                                and creating UI/UX designs, both with Figma in theory and in practice.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/frontend_developer_capstone_project">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Backend Development Capstone Project</h3>
                        <ul>
                            <li>
                                I created a ...
                            </li>
                        </ul>
                        <a href="">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Backend Development Songs Project</h3>
                        <ul>
                            <li>
                                I created a ...
                            </li>
                        </ul>
                        <a href="">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Backend Development Pictures Project</h3>
                        <ul>
                            <li>
                                I created a ...
                            </li>
                        </ul>
                        <a href="">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSection;