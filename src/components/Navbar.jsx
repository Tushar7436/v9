import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          logo
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`ul ${isMenuOpen ? 'active' : ''}`}>
          <li className="li">
            <NavLink to='/Home' className={(isActive) => isActive ? "active-link" : ""} onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="li">
            <NavLink to='/About' className={(isActive) => isActive ? "active-link" : ""} onClick={closeMenu}>About</NavLink>
          </li>
          <li className="li">
            <NavLink to='/Team' className={(isActive) => isActive ? "active-link" : ""} onClick={closeMenu}>Team</NavLink>
          </li>
          <li className="li">
            <NavLink to='/login' className={(isActive) => isActive ? "active-link" : ""} onClick={closeMenu}>LogIn</NavLink>
          </li>
        </ul>
      </nav>
      </>
  );
}

export default Navbar;






