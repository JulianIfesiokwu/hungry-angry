import React, { useContext } from 'react';
import { SubscribeContext } from '../../context/SubscribeContext';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png"
import "./Footer.styles.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  const { handleInput, handleSubmit } = useContext(SubscribeContext);

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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/volunteer">Volunteer</NavLink>
          <NavLink to="/train">Train</NavLink>
          <NavLink to="/donate">Donations</NavLink>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="newsletter">
          <div className='newsletter-title'>
            <p>Subscribe to our newsletters</p>
          </div>
          <input 
            type="text" 
            placeholder="Name" 
            name='subscriber-name' 
            onChange={(e) => handleInput(e)}
            required/>
          <input 
            type="email" 
            placeholder='Email' 
            name='subscriber-email' 
            onChange={(e) => handleInput(e)}
            required/>
          <button type="submit" className='newsletter-btn'>Submit</button>
        </form>
    </section>
    <p className='copyright'>Copyright &copy;{year} www.hungryangry.com</p>
  </div>
  );
};

export default Footer;