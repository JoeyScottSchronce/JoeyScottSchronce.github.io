export type ProjectAction = { label: string; href: string }

export type Project = {
  title: string
  imageSrc: string
  imageAlt: string
  description: string
  actions: ProjectAction[]
}

export const projects: Project[] = [
  // {
  //   title: 'Place Holder',
  //   imageSrc: '/assets/projects/placeholder.webp',
  //   imageAlt: 'Placeholder',
  //   description:
  //     "This is a placeholder description.",
  //   actions: [
  //     { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/placeholder' },
  //     { label: 'See the Website', href: 'https://joeyscottschronce.github.io/placeholer' },

  //   ],
  // },

  {
    title: 'BashMaster AI',
    imageSrc: '/assets/projects/BashMasterAI.webp',
    imageAlt: 'BashMaster AI',
    description:
      "BashMaster AI is an interactive Bash scripting training web application that showcasing full-stack development skills. The site presents a terminal-inspired UI with a command-line aesthetic, the use of monospace fonts, dark-mode styling, and tailwind CSS animations to mimic a real shell environment. As a training tool, it incorporates a command selection interface, real-time feedback validation logic, and an AI backend, integrating the Goggle Gemini language model to evaluate or guide user input via API. The project showcases skills in UI/UX design, TypeScript-based frameworks React with Vite. This piece demonstrates both creative design sensibility and technical depth in building developer-focused tooling.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/bash-scripting-trainer' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/bash-scripting-trainer' },

    ],
  },
  {
    title: 'Portfolio Project',
    imageSrc: '/assets/projects/portfolio.webp',
    imageAlt: 'Portfolio Project Screenshot',
    description:
      "This is my portfolio website project, built using vite and react, using HTML and CSS as a template. This project showcases my journey in software development, applying the web development skills I've been honing throughout the IBM Frontend Development Professional Certificate and beyond. From structuring the layout to refining the user experience, this portfolio website reflects my dedication to continuing to practice everything I've learned and to continue to build responsive and functional websites, apps, and other programming projects.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/JoeyScottSchronce.github.io' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/' },
    ],
  },
  {
    title: 'Learn Go with Test-Driven Development',
    imageSrc: '/assets/projects/go_with_tdd.webp',
    imageAlt: 'Frontend Project Screenshot',
    description:
      "I created a 'Go Fundamentals' repository to continue to learn Go and Test-Driven Development with 'quii/learn-go-with-tests' course. I've practiced many of the Golang fundamentals and iterated on my knowledge of TDD while studying the assignments. At the completion of this course, I have now become familiar with Go syntax, Go's concurrency abilities, the concept of Go routines with channels, and how to use the Go testing package in order to create several implementations of testing components such as Benchmarks, Examples, Fuzzing, Mocking, & a number of other useful TDD practices to create effective testing strategies.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/golang-practice-with-TDD' },
    ],
  },
  {
    title: 'Frontend Development Capstone Project',
    imageSrc: '/assets/projects/frontend.webp',
    imageAlt: 'Frontend Project Screenshot',
    description:
      "I created a desktop-only medical appointment booking website called Stay Healthy, to provide access to medical care in remote areas. This desktop website is designed to allow patients to schedule appointments with healthcare providers easily. The platform enables users to view available slots, select providers, manage their appointments through their online accounts, and give feedback to the doctors about their care. Built using the React framework, this project initially relied on a pre-existing back end, which I later restructured using Vite. Throughout the development process, I've gained hands-on experience with Linux commands, JSX, and React. I've honed my skills in HTML, CSS with Bootstrap, Docker, using Git & GitHub, and creating UI/UX designs, both with Figma in theory and in practice.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/frontend_developer_capstone_project' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/frontend_developer_capstone_project/' },
    ],
  },
  {
    title: 'DevOps & Software Engineering Capstone',
    imageSrc: '/assets/projects/DevOps.webp',
    imageAlt: 'DevOps Project Screenshot',
    description:
      'I built an Accounts microservice to manage customer data for an e-commerce platform, applying Test-Driven and Behavior-Driven Development. Using Flask and a Tekton pipeline, I automated workflows while structuring development via a Kanban board and milestone-based sprints. The service features a PostgreSQL database with RESTful APIs for CRUD and list operations, achieving 95% code coverage using Factory Boy and Unittest. Following the Model-View-Controller pattern, I ensured a clear separation of concerns between business logic and routing. The project includes a Dockerfile, CI/CD pipeline, and was deployed to IBM Registry, demonstrating my ability to develop scalable, well-tested microservices.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/devops-capstone-project' }],
  },
  {
    title: 'Backend Development Capstone Project',
    imageSrc: '/assets/projects/backend.webp',
    imageAlt: 'Backend Project Screenshot',
    description:
      'I created a Django-based web app designed to serve as the main website for a band that integrates with the Pictures and Songs services from the two other IBM Backend Capstone Projects. This app features dynamic web pages, including a home page, a songs page listing all song titles, and a photos page displaying images from past events. It incorporates user authentication, allowing users to log in and access personalized features, while admins have the ability to create, edit, and delete concerts. The project involves data modeling using Django models and migrations to establish tables and relationships, along with the implementation of business logic through controllers that manage interactions between data models and templates. Finally, this app was then deployed on IBM Kubernetes Services during the final phase of the Capstone Project.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-end-Development-Capstone' }],
  },
  {
    title: 'Songs Project for Backend Capstone',
    imageSrc: '/assets/projects/Songs.webp',
    imageAlt: 'Songs Project Screenshot',
    description:
      "I developed a Flask-based web service for retrieving song data, integrating MongoDB for efficient storage and retrieval. Deployed on IBM Code Engine using IBM Cloud, the service provides a RESTful API and includes Python unit tests to ensure reliability. Through this capstone, I gained insights into NoSQL databases, datastore architectures, and MongoDB's features. I also performed CRUD operations via the MongoDB shell, connected Flask with MongoDB using Python SDKs, and built a scalable web service. This project strengthened my understanding of NoSQL databases and their role in robust application development.",
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-End-Development-Songs' }],
  },
  {
    title: 'Pictures Project for Backend Capstone',
    imageSrc: '/assets/projects/Pictures.webp',
    imageAlt: 'Pictures Project Screenshot',
    description:
      'I built a Flask-based service to retrieve concert event images from cloud storage, ensuring reliability with Python unit tests. Using a GitHub template, I developed RESTful APIs for handling picture URLs, implemented robust error handling, and integrated external APIs within Flask. The service was successfully deployed to IBM Code Engine. Through this project, I gained hands-on experience in cloud storage retrieval, API development, and Flask-based web services, strengthening my skills in backend development and cloud deployment.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-End-Development-Pictures' }],
  },
  {
    title: 'Test-driven & Behavior-driven Development',
    imageSrc: '/assets/projects/TDD_BDD.webp',
    imageAlt: 'TDD and BDD Project screenshot',
    description:
      'I developed a microservice for managing an eCommerce product catalog, applying Test-Driven and Behavior-Driven Development to ensure reliability. The RESTful API supports full CRUD functionality and advanced product search by category, availability, and name. BDD-based testing validates the administrative UI using Behave, with automated background data loading for scenario execution. I implemented unit tests for the Product model, built a well-tested API, and ensured seamless integration within the system. This project strengthened my technical skills in scalable, testable microservice development.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/bdd_and_tdd_final_project' }],
  },
]
