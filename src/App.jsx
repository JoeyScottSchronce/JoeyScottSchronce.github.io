import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import ProjectSection from "./Components/ProjectSection/ProjectSection.jsx";
import Credentials from "./Components/Credentials/Credentials.jsx";
import Certificates from "./Components/Credentials/Certificates/Certificates.jsx";
import Badges from "./Components/Credentials/Badges/Badges.jsx";
import Skills from "./Components/Credentials/Skills/Skills.jsx";

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
                    <Route path="/credentials" element={<Credentials />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/badges" element={<Badges />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;
