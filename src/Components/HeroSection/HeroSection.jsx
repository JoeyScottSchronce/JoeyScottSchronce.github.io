import React from 'react';
import "./HeroSection.css"

function HeroSection() {
    return (
        <>
            <section id="HeroSection" className="container">
            <div>
                <img
                    src="/assets/Professional%20Photo%20(2020).jpg"
                    className="profile_image"
                    alt="photo of Joey Schronce"
                />
            </div>
            <div>
                <h1 className="title">
                    Welcome to <br/> my portfolio!
                </h1>
                <p>Secondary heading to add attention to the Hero Section</p>
                <div className="Social-Media">
                    <a href="https://github.com/JoeyScottSchronce" rel="noopener noreferrer">
                        <button className="button">GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/joeyscottschronce/" rel="noopener noreferrer">
                        <button className="button">LinkedIn</button>
                    </a>
                    <a href="https://x.com/CodeQuestBlog" rel="noopener noreferrer">
                        <button className="button">X</button>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroSection;