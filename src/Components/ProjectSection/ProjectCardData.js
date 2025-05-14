const ProjectCardData = {
    DevOpsCapstone: {
        title: "DevOps and Software Engineering Capstone Project",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "I built an Accounts microservice to manage customer data for an e-commerce platform, " +
            "applying Test-Driven and Behavior-Driven Development. Using Flask and a Tekton pipeline, I " +
            "automated workflows while structuring development via a Kanban board and milestone-based sprints." +
            " The service features a PostgreSQL database with RESTful APIs for CRUD and list operations, " +
            "achieving 95% code coverage using Factory Boy and Unittest. Following the Model-View-Controller" +
            " pattern, I ensured a clear separation of concerns between business logic and routing. The project" +
            " includes a Dockerfile, CI/CD pipeline, and was deployed to IBM Registry, demonstrating my ability" +
            " to develop scalable, well-tested microservices.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/devops-capstone-project"
    },
    FrontendCapstone: {
        title: "Frontend Development Capstone Project",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "I created a medical appointment booking website called Stay Healthy, to provide" +
            " access to medical care in remote areas. This website is designed to allow patients " +
            "to schedule appointments with healthcare providers easily. The platform enables users " +
            "to view available slots, select providers, manage their appointments through their online" +
            " accounts, and give feedback to the doctor's about their care. Built using the React " +
            "framework, this project initially relied on a pre-existing back end, which I later " +
            "restructured using Vite. Throughout the development process, I gained hands-on experience " +
            "with Linux commands, JSX, and React, as well as further honed my skills in HTML, CSS " +
            "with Bootstrap, Docker, using Git & GitHub, and creating UI/UX designs, both with Figma " +
            "in theory and in practice.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/frontend_developer_capstone_project"
    },
    BackendCapstone: {
        title: "Backend Development Capstone Project",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "I created a Django-based web application designed to serve as the main website for a " +
            "band that integrates with the Pictures and Songs services from the two other IBM Backend " +
            "Capstone Projects. This application features dynamic web pages, including a home page, a songs" +
            " page listing all song titles, and a photos page displaying images from past events. It " +
            "incorporates user authentication, allowing users to log in and access personalized features," +
            " while administrators have the ability to create, edit, and delete concerts. The project " +
            "involves data modeling using Django models and migrations to establish tables and relationships," +
            " along with the implementation of business logic through controllers that manage interactions" +
            " between data models and templates. Finally, this application was then deployed on IBM Kubernetes" +
            " Services during the final phase of the Capstone Project.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/Back-end-Development-Capstone"
    },
    BackendSongs: {
        title: "Songs Project for Backend Capstone",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "This repository is part of the Backend Capstone Project that comprised of a Flask-based web service" +
            " designed to interact with a MongoDB database for retrieving song data, developed using the provided " +
            "template. The service is deployed on IBM Code Engine using IBM Cloud infrastructure, integrating MongoDB" +
            " for efficient song data storage and retrieval while providing a RESTful interface through Flask. It " +
            "includes Python unit tests to ensure code reliability and correctness, which helped me validate my " +
            "implementations. During this section of the capstone I gained valuable insights into NoSQL databases, " +
            "their characteristics, and different datastore architectures, with a specific focus on MongoDB's features " +
            "and benefits. I've also gained hands-on experience performing CRUD operations via the MongoDB shell, " +
            "connecting to and interacting with MongoDB through Flask and Python SDKs, and developing a scalable and " +
            "efficient web service. This Capstone served as a foundational resource for my understanding of NoSQL databases" +
            " and build robust applications using Flask and MongoDB.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/Back-End-Development-Songs"
    },
    BackendPictures: {
        title: "Pictures Project for Backend Capstone",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "This repository is part of the Backend Capstone Project that comprised of building a Flask-based service" +
            " that retrieves pictures from past concert events stored in cloud object storage. With the GitHub template " +
            "repository, I developed the application with Python unit tests to ensure the code functions correctly. As part" +
            " of the project, I have also developed RESTful APIs to handle picture URL resources, implement robust error " +
            "handling for both server and user-side issues, and integrated external APIs within the Flask application. " +
            "Additionally, the completed service was be deployed to IBM Code Engine. Throughout this process, I have gained " +
            "experience in building a service that retrieves images from cloud storage, creating a Flask application that " +
            "efficiently responds to user requests, and ensured API reliability through comprehensive testing. In completing" +
            " this project, I have gained valuable hands-on experience in Flask development and cloud deployment.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/Back-End-Development-Pictures"
    },
    TestingAndBehavior: {
        title: "Test-driven & Behavior-driven Development Project",
        image: "https://wallpaperaccess.com/full/86289.jpg",
        content: "This repository contains a microservice for managing a product catalog, designed as the backend for an " +
            "eCommerce application. It follows Test Driven Development (TDD) and Behavior Driven Development (BDD) " +
            "methodologies to ensure reliability and maintainability. The microservice features a RESTful API that supports" +
            " full CRUD (Create, Read, Update, Delete) functionality for product management while also enabling advanced " +
            "product search by category, availability, and name. The project integrates BDD-based testing to verify that " +
            "the administrative UI behaves as expected, utilizing a feature file to validate UI functionality with Behave " +
            "and a steps file to load background data from BDD scenarios before each scenario executes. Throughout this " +
            "project, I worked toward key learning objectives that strengthened my technical skills. I developed unit test " +
            "cases for the Product model, implemented a well-tested REST API, integrated BDD scenarios for UI validation, " +
            "and automated background data loading to streamline scenario execution. By applying both TDD and BDD, I ensured" +
            " that this microservice was robust, highly testable, and seamlessly integrated within an eCommerce system.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/bdd_and_tdd_final_project",
    }
};

export default ProjectCardData;