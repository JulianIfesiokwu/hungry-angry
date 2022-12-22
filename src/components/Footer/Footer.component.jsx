import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png"
import "./Footer.styles.css";

const Footer = () => {
  return (
    <div className='footer'>
      <section className="details">
        <div className="footer-name">
          <img src={Logo} alt="logo" className='logo' />
          <p>Hungry & Angry</p>
        </div>
        <div className="address">
          <h3>Contact Information</h3>
          <p className='location-info'>Address: 21 Aguegbe Street, Amikwo, Awka, Anambra State.</p>
          <p className='phone-no'>Phone: &nbsp; &nbsp;<span>(+44) 778 4840 281</span></p>
          <p className='phone-no'>Phone: &nbsp; &nbsp;<span>(+234) 802 3199 234</span></p>
          <p className='phone-no'>Phone: &nbsp; &nbsp;<span>(+23) 324 1210 463</span></p>
          <p className="email">Email:&nbsp; &nbsp;<span>info@hungryangry.com</span></p>
          <p className="website">Website: &nbsp; &nbsp;www.hungryangry.com</p>
        </div>
        <div className="explore">
          <h3 className='explore-title'>Explore</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/volunteer">Volunteers</NavLink>
          <NavLink to="/trainers">Trainers</NavLink>
          <NavLink to="/donations">Donations</NavLink>
        </div>
        <form action="" className="newsletter">
          <div className='newsletter-title'>
            <p>Subscribe to our newsletters</p>
          </div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder='Email' />
          <button type="submit" className='newsletter-btn'>Submit</button>
        </form>
    </section>
    <p className='copyright'>Copyright &copy;2022 www.hungryangry.com</p>
  </div>
  );
};

export default Footer;