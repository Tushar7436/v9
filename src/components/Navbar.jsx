import { NavLink } from 'react-router-dom';
import ParticlesComponent from "./Particles.jsx";
import "../Styles/Navbar.css";


function Navbar() {
  return (
    <div>
    <ParticlesComponent id="tsparticles"/>
    <nav className="navbar">
      <div className ="logo">
        logo
      </div>
          <ul className ="ul">
            <li className ="li">
              <NavLink to ='/LandingPage' className={(isActive) => isActive ? "active-link": ""}>Home</NavLink>
            </li>
            <li className ="li">
              <NavLink to ='/About' className={(isActive) => isActive ? "active-link": ""}>About</NavLink>
            </li>
            <li className ="li">
              <NavLink to ='/Team' className={(isActive) => isActive ? "active-link": ""}>Team</NavLink>
            </li>
            <li className ="li">
              <NavLink to ='/Signup' className={(isActive) => isActive ? "active-link": ""}>Signup</NavLink>
            </li>
            <li className ="li">
              <NavLink to ='/login' className={(isActive) => isActive ? "active-link": ""}>Login</NavLink>
            </li>
          </ul>
        <div className= "blank-space">
          ----
        </div>
    </nav>
    </div>
  );
}

export default Navbar;






