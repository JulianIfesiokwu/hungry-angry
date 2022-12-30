import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../../assets/logo.png";
import './Header.styles.css';

const HeaderAndNavigation = () => {
  const [menu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!menu);
  };

  return (
    <header className='header dark'>
        <div className="row-two fixed-to-top">
            <div className="search-section">              
              <Link to='/'>
                <div className="logo-container">
                <img src={Logo} alt="logo" className='logo'/>
                </div>
              </Link>
            <span className='company-name'>Hungry & Angry</span>
            {menu ? <MdClose size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/> : <MdMenu size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/>}
            </div>
            <div className={menu ? "nav-links show" : "nav-links"}>
                <NavLink to="/" onClick={() => showMenu(!menu)}>Home</NavLink>
                <NavLink to="/about" onClick={() => showMenu(!menu)}>About</NavLink>
                <NavLink to="/contact-us" onClick={() => showMenu(!menu)}>Contact</NavLink>
                <NavLink to="/gallery" onClick={() => showMenu(!menu)}>Gallery</NavLink>
                <NavLink to="/volunteer" onClick={() => showMenu(!menu)}>Volunteer</NavLink>
                <NavLink to="/train" onClick={() => showMenu(!menu)}>Train</NavLink>
                <NavLink to="/donate" onClick={() => showMenu(!menu)}>Donations</NavLink>
            </div>
        </div>
    </header>
  )
};

export default HeaderAndNavigation;