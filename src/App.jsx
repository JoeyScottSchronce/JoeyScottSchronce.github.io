import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import ProjectSection from "./Components/ProjectSection/ProjectSection.jsx";
import SkillsSection from "./Components/SkillsSection/SkillsSection.jsx";

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <section id="About"><div className="spacer"></div></section>
            <AboutSection />
            <section id="Projects"><div className="spacer"></div></section>
            <ProjectSection />
            <section id="Skills"><div className="spacer"></div></section>
            <SkillsSection />
            <div className="spacer"></div>
        </>
    );
}

export default App;
