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
            <AboutSection />
            <ProjectSection />
            <SkillsSection />
        </>
    );
}

export default App;
