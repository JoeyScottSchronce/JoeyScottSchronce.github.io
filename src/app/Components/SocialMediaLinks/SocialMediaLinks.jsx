import React from "react";
import styles from "./SocialMediaLinks.module.css";

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
        icon: "/assets/icons/twitter.jpg",
    },
    {
        platform: "GitHub",
        url: "https://github.com/JoeyScottSchronce",
        icon: "/assets/icons/github.svg",
    },
];

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