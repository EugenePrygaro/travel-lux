
import { Link } from "react-router-dom";
import { useState } from 'react';
import '../index.css'
import burger_icon from './styles/images/icons/burger-icon.svg';
import close_icon from './styles/images/icons/close-icon.svg';


function NavBar() {
  const isAuthenticated = !!localStorage.getItem("userId"); // Перевіряємо, чи є userId у localStorage
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">TravelLux</Link>
        <button className="navbar-burger-menu" onClick={() => setIsOpen(!isOpen)}>
          <svg className="navbar-burger" width="32" height="32" fill="#d2d2d2ff">
            <use href={`${isOpen ? close_icon : burger_icon}`}></use>
          </svg>
        </button>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/loyalty" className="nav-link nav-loyalty">Loyalty Club</Link>
          <Link to="/tours" className="nav-link nav-tour">Tours</Link>
          {isAuthenticated ? (
            <Link to="/cab" className="nav-link nav-cab">My profile</Link>
          ) : (
            <>
              <Link to="/auth" className="nav-link nav-auth">Log in</Link>
              <Link to="/register" className="nav-button nav-reg">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
