import './App.css';
import Starter from './Components/starter/Starter.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import HeroSection from "./Components/HeroSection/HeroSection.jsx";

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Starter />
        </>
    );
}

export default App;
