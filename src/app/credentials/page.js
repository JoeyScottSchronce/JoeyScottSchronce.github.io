import Link from "next/link";
import styles from "./credentials.module.css"

export default function Credentials() {

    return (
        <div className={styles.credentialsMainContainer}>
            <div className={styles.credentialsSubContainer}>
                <Link href="/credentials/certificates" className={styles.linkSubContainer}>
                    <h1>Certificates</h1>
                </Link>
            </div>

            <div className={styles.credentialsSubContainer}>
                <Link href="/credentials/badges" className={styles.linkSubContainer}>
                    <h1>Badges</h1>
                </Link>
            </div>

            <div className={styles.credentialsSubContainer}>
                <Link href="/credentials/skills" className={styles.linkSubContainer}>
                    <h1>Skills</h1>
                </Link>
            </div>

        </div>
    )
}
