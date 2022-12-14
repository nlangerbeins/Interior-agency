import React, { useEffect } from "react";
import { useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Navbar() {

  // navbar bg change on scroll 
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor, true);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={color ? "navbar" : "navbarScrolled"}>
      <nav className="navbar_container">
        <div className={`nav_items ${isOpen && "open"}`}>
          <Link to='/' className='nav_link' onClick={toggleMenu}>Home</Link>
          <Link to='/Personality' className='nav_link' onClick={toggleMenu}>Personality</Link>
          <Link to='/Projects' className='nav_link' onClick={toggleMenu}>Projects</Link>
          <Link to='/Services' className='nav_link' onClick={toggleMenu}>Services</Link>
        </div>
        <Link to='/' className='nav_logo'>
          <span className='logo_top'>NewL</span>
          <span className='logo_bottom'>Düsseldorf</span>
        </Link>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;