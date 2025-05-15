
// content must be less than 750 characters long!

const ProjectCardData = {
    DevOpsCapstone: {
        title: "DevOps and Software Engineering Capstone Project",
        image: "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg",
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
        image: "/assets/frontend.webp",
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
        website: "https://joeyscottschronce.github.io/frontend_developer_capstone_project/",
        github: "https://github.com/JoeyScottSchronce/frontend_developer_capstone_project"
    },
    BackendCapstone: {
        title: "Backend Development Capstone Project",
        image: "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg",
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
        image: "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg",
        content: "I developed a Flask-based web service for retrieving song data, integrating MongoDB for efficient" +
            " storage and retrieval. Deployed on IBM Code Engine using IBM Cloud, the service provides a RESTful API" +
            " and includes Python unit tests to ensure reliability. Through this capstone, I gained insights into " +
            "NoSQL databases, datastore architectures, and MongoDB’s features. I also performed CRUD operations via" +
            " the MongoDB shell, connected Flask with MongoDB using Python SDKs, and built a scalable web service." +
            " This project strengthened my understanding of NoSQL databases and their role in robust application " +
            "development.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/Back-End-Development-Songs"
    },
    BackendPictures: {
        title: "Pictures Project for Backend Capstone",
        image: "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg",
        content: "I built a Flask-based service to retrieve concert event images from cloud storage, ensuring " +
            "reliability with Python unit tests. Using a GitHub template, I developed RESTful APIs for handling " +
            "picture URLs, implemented robust error handling, and integrated external APIs within Flask. The " +
            "service was successfully deployed to IBM Code Engine. Through this project, I gained hands-on " +
            "experience in cloud storage retrieval, API development, and Flask-based web services, strengthening" +
            " my skills in backend development and cloud deployment.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/Back-End-Development-Pictures"
    },
    TestingAndBehavior: {
        title: "Test-driven & Behavior-driven Development Project",
        image: "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg",
        content: "I developed a microservice for managing an eCommerce product catalog, applying Test-Driven " +
            "and Behavior-Driven Development to ensure reliability. The RESTful API supports full CRUD functionality" +
            " and advanced product search by category, availability, and name. BDD-based testing validates the" +
            " administrative UI using Behave, with automated background data loading for scenario execution. I " +
            "implemented unit tests for the Product model, built a well-tested API, and ensured seamless integration" +
            " within the system. This project strengthened my technical skills in scalable, testable microservice " +
            "development.",
        website: null,
        github: "https://github.com/JoeyScottSchronce/bdd_and_tdd_final_project",
    }
};

export default ProjectCardData;