import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../../assets/logo.png";
import './Header.styles.css';

const HeaderAndNavigation = () => {
  const [menu, showMenu] = useState(false);
  const [pageOffset, setPageOffset] = useState(false);

  const toggleMenu = () => {
    showMenu(!menu);
  };

  const stickyNav = () => {
    if(window.pageYOffset > 300) {
      setPageOffset(true)
    } else {
      setPageOffset(false)
    };
  };

  return (
    <header className={pageOffset ? 'header dark' : 'header'}>
        <div className="row-two fixed-to-top">
            <div className="search-section">
              <div className="logo-container">
              <img src={Logo} alt="logo" className='logo'/>
            </div>
            <span className='company-name'>Hungry & Angry</span>
            {menu ? <MdMenu size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/> : <MdClose size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/>}
            </div>
            <div className={menu ? "nav-links" : "nav-links show"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/volunteer">Volunteer</NavLink>
                <NavLink to="/train">Train</NavLink>
                <NavLink to="/donations">Donations</NavLink>
            </div>
        </div>
    </header>
  )
};

export default HeaderAndNavigation;