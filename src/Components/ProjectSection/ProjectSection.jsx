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
                                I created a Django-based web application designed to serve as the main website
                                for a band that integrates with the Pictures and Songs services from the two other
                                IBM Backend Capstone Projects. This application features dynamic web pages,
                                including a home page, a songs page listing all song titles, and a photos page
                                displaying images from past events. It incorporates user authentication, allowing
                                users to log in and access personalized features, while administrators have the
                                ability to create, edit, and delete concerts. The project involves data modeling
                                using Django models and migrations to establish tables and relationships, along
                                with the implementation of business logic through controllers that manage
                                interactions between data models and templates. Finally, this application was then
                                deployed on IBM Kubernetes Services during the final phase of the Capstone Project.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/Back-end-Development-Capstone">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Backend Development Songs Project</h3>
                        <ul>
                            <li>
                                This repository is part of the Backend Capstone Project that comprised of a Flask-based web
                                service designed to interact with a MongoDB database for retrieving song data, developed
                                using the provided template. The service is deployed on IBM Code Engine using IBM Cloud
                                infrastructure, integrating MongoDB for efficient song data storage and retrieval while
                                providing a RESTful interface through Flask. It includes Python unit tests to ensure code
                                reliability and correctness, which helped me validate my implementations. During this
                                section of the capstone I gained valuable insights into NoSQL databases, their characteristics,
                                and different datastore architectures, with a specific focus on MongoDB's features and benefits.
                                I've also gained hands-on experience performing CRUD operations via the MongoDB shell,
                                connecting to and interacting with MongoDB through Flask and Python SDKs, and developing
                                a scalable and efficient web service. This Capstone served as a foundational resource
                                for my understanding of NoSQL databases and build robust applications using Flask and MongoDB.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/Back-End-Development-Songs">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Backend Development Pictures Project</h3>
                        <ul>
                            <li>
                                This repository is part of the Backend Capstone Project that comprised of building a Flask-based
                                service that retrieves pictures from past concert events stored in cloud object storage.
                                With the GitHub template repository, I developed the application with Python unit tests to
                                ensure the code functions correctly. As part of the project, I have also developed RESTful APIs
                                to handle picture URL resources, implement robust error handling for both server and user-side
                                issues, and integrated external APIs within the Flask application. Additionally, the completed
                                service was be deployed to IBM Code Engine. Throughout this process, I have gained experience
                                in building a service that retrieves images from cloud storage, creating a Flask application
                                that efficiently responds to user requests, and ensured API reliability through comprehensive
                                testing. In completing this project, I have gained valuable hands-on experience in Flask
                                development and cloud deployment.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/Back-End-Development-Pictures">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Test-driven & Behavior-driven Development Project </h3>
                        <ul>
                            <li>
                                This repository contains a microservice for managing a product catalog, designed as
                                the backend for an eCommerce application. It follows Test Driven Development (TDD) and
                                Behavior Driven Development (BDD) methodologies to ensure reliability and maintainability.
                                The microservice features a RESTful API that supports full CRUD (Create, Read, Update,
                                Delete) functionality for product management while also enabling advanced product search
                                by category, availability, and name. The project integrates BDD-based testing to verify
                                that the administrative UI behaves as expected, utilizing a feature file to validate
                                UI functionality with Behave and a steps file to load background data from BDD scenarios
                                before each scenario executes. Throughout this project, I worked toward key learning
                                objectives that strengthened my technical skills. I developed unit test cases for the
                                Product model, implemented a well-tested REST API, integrated BDD scenarios for UI
                                validation, and automated background data loading to streamline scenario execution.
                                By applying both TDD and BDD, I ensured that this microservice was robust, highly testable,
                                and seamlessly integrated within an eCommerce system.
                            </li>
                        </ul>
                        <a href="https://github.com/JoeyScottSchronce/bdd_and_tdd_final_project">
                            <button id="Project-button" className="button">Project Repository</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSection;