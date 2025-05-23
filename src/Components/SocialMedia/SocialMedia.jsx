import React from "react";
import "./SocialMedia.css";

const socialMediaData = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/joeyscottschronce/",
        icon: "/assets/icons/linkedin.svg",
    },
    {
        platform: "X",
        url: "https://x.com/CodeQuestBlog",
        icon: "/assets/icons/X.svg",
    },
    {
        platform: "GitHub",
        url: "https://github.com/JoeyScottSchronce",
        icon: "/assets/icons/github.svg",
    },
];

function SocialMedia() {
    return (
        <div className="social-media-container">
            <div className="social-media-links">
                {socialMediaData.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={`Visit my ${social.platform} profile`}
                    >
                        <img src={social.icon} alt={`${social.platform} Icon`} className="social-icon" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;