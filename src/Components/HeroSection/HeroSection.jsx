import React from 'react';
import "./HeroSection.css"

function HeroSection() {
    return (
        <>
            <div className="top"></div>
            <section id="hero-section" className="container">
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
                <button id="hero-section" className="button">Click me</button>
            </div>
        </section>
        </>
    )
}

export default HeroSection;