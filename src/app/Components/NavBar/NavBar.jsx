// src/app/Components/NavBar.js
import Link from "next/link";
import styles from "./NavBar.module.css"; // Use CSS Modules

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navItemsContainer}>
                <div className={styles.navItems}>
                    <Link href="/">Home</Link>
                </div>
                <div className={styles.navItems}>
                    <Link href="/about">About</Link>
                </div>
                <div className={styles.navItems}>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className={styles.navItems}>
                    <Link href="/credentials">Credentials</Link>
                </div>
            </nav>
        </div>
    );
}