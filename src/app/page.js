// src/app/page.jsx
import Link from "next/link";
import styles from "@/app/home.module.css";
import SocialMediaLinks from "./Components/SocialMediaLinks/SocialMediaLinks";

export const metadata = {
  title: "Joey Scott Schronce - Software Developer Portfolio",
  description: "Explore Joey Scott Schronce's portfolio showcasing skills, projects, and credentials in software engineering.",
};

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.firstSub}>
            <h1 className={styles.intro1}>Welcome to my Portfolio!</h1>
          </div>

          <div className={styles.secondSub}>
            <div className={styles.intro2}>
              As a Software Engineer, my expertise is in building reliable and
              efficient backend systems, APIs, and innovative software solutions.
            </div>
          </div>

          <div className={styles.thirdSub}>
            <Link href="/projects">Explore My Projects</Link>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
  );
}