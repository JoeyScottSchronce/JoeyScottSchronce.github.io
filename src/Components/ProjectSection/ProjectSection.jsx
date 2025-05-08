import React from 'react';
import "./ProjectSection.css"

function ProjectSection() {
    return (
        <div className="ProjectSection">
            {/* Projects */}
            <section className="projects" id="Projects">
                <h2>Projects</h2>
                <div style={{ clear: 'both' }}></div>

                <div id="projects-container" className="projects-container">
                    <div className="project-card">
                        <h3>Speed Reader Program</h3>
                        <ul>
                            <li>
                                I developed a speed reading Windows program using Python and the Tinker library. It allows you to upload text
                                from a file or the clipboard, then it displays one word at a time. It has several features including a go and
                                back button, slow down and speed up buttons, and even displays a percentage of 'text completed' as you read.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Unit Conversions website</h3>
                        <ul>
                            <li>
                                I developed a 'unit conversion' website, using HTML, CSS, and javascript, that converts temperature, weight,
                                and distance. It changes Celsius to Fahrenheit, Kilograms to Pounds, and Kilometers to Miles.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="project-card">
                        <h3>Simple Interest Calculator</h3>
                        <ul>
                            <li>
                                I developed a simple interest calculator that takes an amount, a rate, and a year, then returns a statement: "If
                                you deposit an amount, at an interest rate of rate %, You will receive an amount of total, in the year
                                timeline".
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSection;