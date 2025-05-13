import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import ProjectSection from "./Components/ProjectSection/ProjectSection.jsx";
import SkillsSection from "./Components/SkillsSection/SkillsSection.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="blobs">

                    <div className="blobTwo"></div>
                    <div className="blobTwo"></div>
                    <div className="blobTwo"></div>
                    <div className="blobTwo"></div>

                    <div className="blobOne" ></div>
                    <div className="blobOne" ></div>
                    <div className="blobOne" ></div>
                    <div className="blobOne" ></div>

                </div>

                <NavBar />

                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/projects" element={<ProjectSection />} />
                    <Route path="/skills" element={<SkillsSection />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;
