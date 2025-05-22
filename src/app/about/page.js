import styles from "../styles/about.module.css"

export const metadata = {
    title: "About Me - Joey Scott Schronce Portfolio",
    description: "Learn about Joey Scott Schronce, a dedicated software developer with a passion for innovative solutions.",
};

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h2>Joey Scott Schronce</h2>
            <div className={styles.aboutMainSub}>
                <img className={styles.profile} src="/assets/about/Profile.webp" alt="image of Joey Scott Schronce" />
                <h6 className={styles.mainP}>
                    I’m a dedicated and detail-oriented software developer with a strong foundation in
                    web development and software engineering. I have experience in building scalable backend
                    applications using Python with the Flask and Django frameworks, as well as frontend
                    development with JavaScript using the React and Vite frameworks. I am proficient in
                    creating and managing CI/CD pipelines using Tekton, and deploying containerized
                    applications to IBM Cloud Container Registry, using tools like Docker, Kubernetes,
                    and OpenShift. I’ve also been taught how to use version control with Git/GitHub,
                    cloud-native technologies, and NoSQL databases such as MongoDB. I have a solid
                    understanding of Test-Driven and Behavior-Driven Development, along with the DevOps,
                    Agile, and Scrum methodologies.
                </h6>
            </div>
        </div>
    )
}
