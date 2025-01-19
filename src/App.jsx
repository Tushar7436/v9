import { StrictMode,useEffect,useState} from 'react';
import "./App.css";
import InfinityColorPreloader from './components/InfinityColorPreloader.jsx';
import ParticlesComponent from "./components/Particles.jsx"
import  Home  from "./pages/Home";
import  Navbar  from "./components/Navbar";
import { Footer } from './components/Footer.jsx';

function App() {         
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <InfinityColorPreloader />;
  }
  return(
    <StrictMode>
      <div className="App">
        <ParticlesComponent id="tsparticles"/>
        <Navbar />
        <div className="page-content">
          <Home />
          <Footer />
        </div>
      </div>
    </StrictMode>
  )
}

export default App;