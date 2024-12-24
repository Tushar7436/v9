import "./App.css";
import ParticlesComponent from "./components/Particles.jsx"
import { LandingPage } from "./pages/LandingPage";

function App() {                                                                 
  return(
    <div className="App">
    <ParticlesComponent id="tsparticles"/>
    <LandingPage />
    </div>
  )
}



export default App;