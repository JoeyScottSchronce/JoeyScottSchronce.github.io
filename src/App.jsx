import './App.css';
import Starter from './Components/starter/Starter.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <Starter />
        </>
    );
}

export default App;
