import "./AboutSection.css"
import React from "react";

function AboutSection() {
    return (
        <div className="AboutSection">
            {/* About Me */}
            <section>
                <h2>About</h2>
                <div style={{ clear: 'both' }}></div>
                <p className="main-p">
                    I'm searching for an entry-level position in Software Engineering.
                    I currently have experience in creating front-end applications using React with Vite,
                    Express apps with Node.js, Python apps with Flask & MongoDB, and full-stack apps with Django.
                    I've also learned how to create unit tests in Python with unittests, and JavaScript with Jasmine,
                    for test-driven and behavior-driven development. I'm familiar with containerization using Docker,
                    Kubernetes, & OpenShift, as well as building CI/CD pipelines.
                    I also have an understanding of Agile & how to practice DevOps.
                </p>
            </section>
        </div>
    )
}

export default AboutSection;