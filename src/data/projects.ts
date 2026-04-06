export type ProjectAction = { label: string; href: string }

export type ProjectImage = { src: string; alt: string }

export type Project = {
  title: string
  images: ProjectImage[]
  description: string
  actions: ProjectAction[]
}

export const projects: Project[] = [
  {
    title: 'Ankiugen - Flashcard Deck Generator',
    images: [
      { src: '/assets/projects/ankideck.webp', alt: 'Ankiugen project screenshot' },
      { src: '/assets/projects/ankideck-2.webp', alt: 'Ankiugen project screenshot (2)' },
    ],
    description:
      "Ankiugen is a full-stack AI-powered flashcard generator that allows users to create and export Anki-compatible .apkg decks directly from the app or browser. The frontend is a React + TypeScript SPA built with Vite, deployed to Cloudflare, and configured as a PWA with Android support via Trusted Web Activity. The backend is written in Go, integrating Google's Gemini AI for card generation and text-only-apkgwriter for native Anki file export. The backend is deployed on Google Cloud Run with a Cloud Build CI/CD pipeline and secrets managed through Google Secret Manager. Additional highlights include JWT authentication, Stripe billing integration, sanitized API error handling, Docker support across both services, and a clean CORS configuration bridging the SPA and API. The project reflects strong full-stack fundamentals and production-ready deployment practices across the entire application lifecycle.",
    actions: [{ label: 'See the Website', href: 'https://joeyscottschronce.github.io/ankideck' }],
  },

  {
    title: 'Text-only apkg Writer',
    images: [
      { src: '/assets/projects/textonlyapkgwriter.webp', alt: 'Text-only .apkg Writer' },
      { src: '/assets/projects/textonlyapkgwriter-2.webp', alt: 'Text-only .apkg Writer (2)' },
    ],
    description:
      "The text-only apkg Writer is a lightweight Go library that programmatically generates Anki .apkg flashcard packages (ZIP archives containing a SQLite database) exposing a minimal API of just a Card struct and a single WriteApkg function that writes a complete deck to any io.Writer. The project demonstrates strong Go fundamentals including idiomatic package design, interface-driven I/O, and deliberate separation of concerns, with zero dependencies on HTTP servers or UI layers. Built with Go modules, semantic versioning, and a full test suite, the library was architected with extensibility in mind. Version one is intentionally text-only, but the design accommodates future media support without breaking existing callers.",
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/placeholder' }],
  },
  {
    title: 'Go Concurrency Lab',
    images: [
      { src: '/assets/projects/goconcurrencylab.webp', alt: 'Go Concurrency Lab' },
      { src: '/assets/projects/goconcurrencylab-2.webp', alt: 'Go Concurrency Lab (2)' },
    ],
    description:
      "Go Concurrency Lab is an AI-powered coding challenge platform that dynamically generates Go concurrency exercises. It covers goroutines, channels, select, sync, and context using the Google Gemini API. The frontend is built with React, TypeScript, and Vite, while the app is containerized via Docker and automatically deployed to GitHub Pages through a GitHub Actions CI/CD pipeline. API keys are injected securely at build time and never committed to source. The project demonstrates practical skills in frontend development, LLM API integration, containerization, CI/CD automation, and secure configuration management.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/go-concurrency-lab' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/go-concurrency-lab/' },
    ],
  },
  {
    title: 'Python Training Grounds',
    images: [
      { src: '/assets/projects/pythontraininggrounds.webp', alt: 'Python Training Grounds' },
      { src: '/assets/projects/pythontraininggrounds-2.webp', alt: 'Python Training Grounds (2)' },
    ],
    description:
      "Python Training Grounds is an AI-powered interactive platform that helps developers of all skill levels advance their Python abilities through dynamically generated coding challenges. It leverages the Google Gemini API to produce unique, topic-specific exercises on demand. Built with React 19 and TypeScript, the project demonstrates strong modern frontend proficiency, including component architecture, type safety, and state management, while Tailwind CSS delivers a sleek, terminal-inspired UI and the Motion library adds polished animations. The project also reflects solid DevOps awareness through its Dockerfile and GitHub Actions CI/CD configuration, showcasing familiarity with containerization and automated deployment. Altogether, it highlights the developer's ability to integrate third-party AI APIs, architect a full-featured SPA, and deliver a production-ready educational tool from the ground up.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/python-training-grounds' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/python-training-grounds/' },
    ],
  },
  {
    title: 'BashMaster AI',
    images: [
      { src: '/assets/projects/BashMasterAI.webp', alt: 'BashMaster AI' },
      { src: '/assets/projects/BashMasterAI-2.webp', alt: 'BashMaster AI (2)' },
    ],
    description:
      "BashMaster AI is an interactive Bash scripting trainer web application that showcases full-stack development skills. The site presents a terminal-inspired UI with a command-line aesthetic, the use of monospace fonts, dark-mode styling, and tailwind CSS animations to mimic a real shell environment. As a training tool, it incorporates a command selection interface, real-time feedback validation logic, and integrates with the Goggle Gemini language model to evaluate or guide user input via API. The project showcases skills in UI/UX design, TypeScript-based frameworks React with Vite. This piece demonstrates both creative design sensibility and technical depth in building developer-focused tooling.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/bash-scripting-trainer' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/bash-scripting-trainer' },
    ],
  },
  {
    title: 'Portfolio Project',
    images: [
      { src: '/assets/projects/portfolio.webp', alt: 'Portfolio Project Screenshot' },
      { src: '/assets/projects/portfolio-2.webp', alt: 'Portfolio Project Screenshot (2)' },
    ],
    description:
      "This is my portfolio website project, built using vite and react, using HTML and CSS as a template. This project showcases my journey in software development, applying the web development skills I've been honing through ongoing study and practice. From structuring the layout to refining the user experience, this portfolio website reflects my dedication to continuing to practice everything I've learned and to continue to build responsive and functional websites, apps, and other programming projects.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/JoeyScottSchronce.github.io' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/' },
    ],
  },
  {
    title: 'Learn Go with Test-Driven Development',
    images: [
      { src: '/assets/projects/go_with_tdd.webp', alt: 'Learn Go with TDD screenshot' },
      { src: '/assets/projects/go_with_tdd-2.webp', alt: 'Learn Go with TDD screenshot (2)' },
    ],
    description:
      "I created a 'Go Fundamentals' repository to continue to learn Go and Test-Driven Development with 'quii/learn-go-with-tests' course. I've practiced many of the Golang fundamentals and iterated on my knowledge of TDD while studying the assignments. At the completion of this course, I have now become familiar with Go syntax, Go's concurrency abilities, the concept of Go routines with channels, and how to use the Go testing package in order to create several implementations of testing components such as Benchmarks, Examples, Fuzzing, Mocking, & a number of other useful TDD practices to create effective testing strategies.",
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/golang-practice-with-TDD' }],
  },
  {
    title: 'Frontend Development Capstone Project',
    images: [
      { src: '/assets/projects/frontend.webp', alt: 'Frontend Project Screenshot' },
      { src: '/assets/projects/frontend-2.webp', alt: 'Frontend Project Screenshot (2)' },
    ],
    description:
      "I created a desktop-only medical appointment booking website called Stay Healthy, to provide access to medical care in remote areas. This desktop website is designed to allow patients to schedule appointments with healthcare providers easily. The platform enables users to view available slots, select providers, manage their appointments through their online accounts, and give feedback to the doctors about their care. Built using the React framework, this project initially relied on a pre-existing back end, which I later restructured using Vite. Throughout the development process, I've gained hands-on experience with Linux commands, JSX, and React. I've honed my skills in HTML, CSS with Bootstrap, Docker, using Git & GitHub, and creating UI/UX designs, both with Figma in theory and in practice.",
    actions: [
      { label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/frontend_developer_capstone_project' },
      { label: 'See the Website', href: 'https://joeyscottschronce.github.io/frontend_developer_capstone_project/' },
    ],
  },
  {
    title: 'DevOps & Software Engineering Capstone',
    images: [
      { src: '/assets/projects/DevOps.webp', alt: 'DevOps Project Screenshot' },
      { src: '/assets/projects/DevOps-2.webp', alt: 'DevOps Project Screenshot (2)' },
    ],
    description:
      'I built an Accounts microservice to manage customer data for an e-commerce platform, applying Test-Driven and Behavior-Driven Development. Using Flask and a Tekton pipeline, I automated workflows while structuring development via a Kanban board and milestone-based sprints. The service features a PostgreSQL database with RESTful APIs for CRUD and list operations, achieving 95% code coverage using Factory Boy and Unittest. Following the Model-View-Controller pattern, I ensured a clear separation of concerns between business logic and routing. The project includes a Dockerfile, CI/CD pipeline, and was deployed to IBM Registry, demonstrating my ability to develop scalable, well-tested microservices.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/devops-capstone-project' }],
  },
  {
    title: 'Backend Development Capstone Project',
    images: [
      { src: '/assets/projects/backend.webp', alt: 'Backend Project Screenshot' },
      { src: '/assets/projects/backend-2.webp', alt: 'Backend Project Screenshot (2)' },
    ],
    description:
      'I created a Django-based web app designed to serve as the main website for a band that integrates with the Pictures and Songs services from the two other IBM Backend Capstone Projects. This app features dynamic web pages, including a home page, a songs page listing all song titles, and a photos page displaying images from past events. It incorporates user authentication, allowing users to log in and access personalized features, while admins have the ability to create, edit, and delete concerts. The project involves data modeling using Django models and migrations to establish tables and relationships, along with the implementation of business logic through controllers that manage interactions between data models and templates. Finally, this app was then deployed on IBM Kubernetes Services during the final phase of the Capstone Project.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-end-Development-Capstone' }],
  },
  {
    title: 'Songs Project for Backend Capstone',
    images: [
      { src: '/assets/projects/Songs.webp', alt: 'Songs Project Screenshot' },
      { src: '/assets/projects/Songs-2.webp', alt: 'Songs Project Screenshot (2)' },
    ],
    description:
      "I developed a Flask-based web service for retrieving song data, integrating MongoDB for efficient storage and retrieval. Deployed on IBM Code Engine using IBM Cloud, the service provides a RESTful API and includes Python unit tests to ensure reliability. Through this capstone, I gained insights into NoSQL databases, datastore architectures, and MongoDB's features. I also performed CRUD operations via the MongoDB shell, connected Flask with MongoDB using Python SDKs, and built a scalable web service. This project strengthened my understanding of NoSQL databases and their role in robust application development.",
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-End-Development-Songs' }],
  },
  {
    title: 'Pictures Project for Backend Capstone',
    images: [
      { src: '/assets/projects/Pictures.webp', alt: 'Pictures Project Screenshot' },
      { src: '/assets/projects/Pictures-2.webp', alt: 'Pictures Project Screenshot (2)' },
    ],
    description:
      'I built a Flask-based service to retrieve concert event images from cloud storage, ensuring reliability with Python unit tests. Using a GitHub template, I developed RESTful APIs for handling picture URLs, implemented robust error handling, and integrated external APIs within Flask. The service was successfully deployed to IBM Code Engine. Through this project, I gained hands-on experience in cloud storage retrieval, API development, and Flask-based web services, strengthening my skills in backend development and cloud deployment.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/Back-End-Development-Pictures' }],
  },
  {
    title: 'Test-driven & Behavior-driven Development',
    images: [
      { src: '/assets/projects/TDD_BDD.webp', alt: 'TDD and BDD Project screenshot' },
      { src: '/assets/projects/TDD_BDD-2.webp', alt: 'TDD and BDD Project screenshot (2)' },
    ],
    description:
      'I developed a microservice for managing an eCommerce product catalog, applying Test-Driven and Behavior-Driven Development to ensure reliability. The RESTful API supports full CRUD functionality and advanced product search by category, availability, and name. BDD-based testing validates the administrative UI using Behave, with automated background data loading for scenario execution. I implemented unit tests for the Product model, built a well-tested API, and ensured seamless integration within the system. This project strengthened my technical skills in scalable, testable microservice development.',
    actions: [{ label: 'Project Repository', href: 'https://github.com/JoeyScottSchronce/bdd_and_tdd_final_project' }],
  },
]
