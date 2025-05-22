import React from "react";
import styles from "../styles/SocialMediaLinks.module.css";

// Define your social media links
const socialMediaData = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/joeyscottschronce/",
        icon: "/assets/icons/linkedin.svg",
    },
    {
        platform: "Twitter",
        url: "https://x.com/CodeQuestBlog",
        icon: "/assets/icons/twitter.svg",
    },
    {
        platform: "GitHub",
        url: "https://github.com/JoeyScottSchronce",
        icon: "/assets/icons/github.svg",
    },
];

export const metadata = {
    title: "Software Developer Portfolio by Joey Scott Schronce",
    description:
        "Explore Joey Scott Schronce's portfolio: skills, projects, credentials, and connect via LinkedIn, Twitter, GitHub.",
    openGraph: {
        title: "Software Developer Portfolio by Joey Scott Schronce",
        description:
            "Explore Joey Scott Schronce's portfolio: skills, projects, credentials, and connect via LinkedIn, Twitter, GitHub.",
        url: "https://joeyscottschronce.github.io/",
        images: [
            {
                url: "/assets/summary_large_image.webp",
                width: 1200,
                height: 600,
            },
        ],
        siteName: "Joey Scott Schronce Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Developer Portfolio by Joey Scott Schronce",
        description:
            "Explore Joey Scott Schronce's portfolio: skills, projects, credentials, and connect via LinkedIn, Twitter, GitHub.",
        images: ["/assets/summary_large_image.webp"],
        creator: "@CodeQuestBlog",
    },
};

const SocialMediaLinks = () => {
    return (
        <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaLinks}>
                {socialMediaData.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`Visit my ${social.platform} profile`}
                    >
                        <img src={social.icon} alt={`${social.platform} Icon`} className={styles.socialIcon} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaLinks;