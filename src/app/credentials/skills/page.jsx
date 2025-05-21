import React from "react";
import "./skills.css";
import SkillsData from "./SkillsData.js";

export const metadata = {
    title: "Skills - Joey Scott Schronce Portfolio",
    description: "Explore my software engineering skills with duration of experience.",
};

function Skills() {
    const calculateDuration = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const years = now.getFullYear() - start.getFullYear();
        const months = now.getMonth() - start.getMonth();

        // Adjust for negative months (when the current month is before the start month)
        const adjustedYears = months < 0 ? years - 1 : years;
        const adjustedMonths = months < 0 ? months + 12 : months;

        return <div className="duration">
            <div> { adjustedYears === 0 ? "" : `${adjustedYears} ${adjustedYears === 1 ? "year" : "years"}` } </div>
            <div> { adjustedMonths === 0 ? "" : `${adjustedMonths} ${adjustedMonths === 1 ? "month" : "months"}` } </div>
        </div>;
    };

    const Skill = ({ title, image, start_date }) => {
        const duration = calculateDuration(start_date);

        return (
            <div className="skill">
                <h6>{title}</h6>
                <img src={image} alt={title} />
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
