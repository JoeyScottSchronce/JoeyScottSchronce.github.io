import React from "react";
import "./Skills.css";
import SkillsData from "./SkillsData.js";

function Skills() {
    const calculateDuration = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const years = now.getFullYear() - start.getFullYear();
        const months = now.getMonth() - start.getMonth();

        // Adjust for negative months (when the current month is before the start month)
        const adjustedYears = months < 0 ? years - 1 : years;
        const adjustedMonths = months < 0 ? months + 12 : months;

        return `${adjustedYears} yrs, ${adjustedMonths} mts`;
    };

    const Skill = ({ title, image, start_date }) => {
        const duration = calculateDuration(start_date);

        return (
            <div className="skill">
                <img src={image} alt={title} />
                <h6>{title}</h6>
                <div>{duration}</div>
            </div>
        );
    };

    return (
        <div id="Skills" className="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skills-sub-container">
                    {Object.values(SkillsData).map((skill, index) => (
                        <Skill key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
