import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
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
    if(window.pageYOffset > 50) {
      setPageOffset(true)
    } else {
      setPageOffset(false)
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    return () => window.removeEventListener("scroll", stickyNav);    
  }, []);

  return (
    <header className='header'>
        <div className="row-one">
            <div className="logo-container">
              <img src={Logo} alt="logo" className='logo'/>
            </div>
            <div className="social-media">
                <FaFacebook className='media-icon' size="25" color="#4267B2" />
                <AiFillTwitterCircle className='media-icon' size="25" color="#1DA1F2" />
                <FaInstagram className='media-icon instagram' size="25" />
            </div>
        </div>
        <div className={pageOffset ? "row-two fixed-to-top" : "row-two"}>
            <div className="search-section">
                <form className="search-container">
                <input type="search" className='search-input' placeholder='Search...'/>
                <button type='button' className='search-btn'><FaSearch size="17" /></button>
            </form>
            {menu ? <MdMenu size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/> : <MdClose size="35" onClick={toggleMenu} color="#FFF" className='menu-icon'/>}
            </div>
            <div className={menu ? "nav-links" : "nav-links show"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
            </div>
        </div>
    </header>
  )
};

export default HeaderAndNavigation;