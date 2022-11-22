import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Logo from "../../assets/logo.png"
import "./Footer.styles.css";

const Footer = () => {
  return (
    <div className='footer'>
      <p>copyright &copy;2022 www.hungryangry.com</p>
      <section className="details">
        <div className="address">
          <img src={Logo} alt="logo" className='logo' />
          <p className='address-title'>Hungry & Angry Foundation</p>
          <p><IoLocation /> 21 Aguegbe Street, Amikwo, Awka, Anambra State.</p>
          <p><BsFillTelephoneFill />&nbsp; &nbsp;(+44) 778 4840 281</p>
          <p><BsFillTelephoneFill />&nbsp; &nbsp;(+234) 802 3199 234</p>
          <p><BsFillTelephoneFill />&nbsp; &nbsp;(+23) 324 1210 463</p>
          <p className="email"><MdEmail size="25"/>&nbsp; &nbsp;<span>info@hungryangry.com</span></p>
          <p className="website"><CgWebsite size="25"/>&nbsp; &nbsp;www.hungryangry.com</p>
        </div>
        <div className="explore">
          <p className='explore-title'>Explore</p>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <a rel="noopener noreferrer" href='#'>Volunteers</a>
          <a rel="noopener noreferrer" href='#'>Trainers</a>
          <a rel="noopener noreferrer" href='#'>Donations</a>
        </div>
        <form action="" className="newsletter">
          <div className='newsletter-title'>
            <p>Subscribe to our newsletters</p>
          </div>
          <input type="text" placeholder="your fullnames" />
          <input type="email" placeholder='your email' />
          <button type="submit" className='newsletter-btn'>Submit</button>
          <div className="social-media footer-social-media">
            <FaFacebook className='media-icon' size="25" color="#4267B2" />
            <AiFillTwitterCircle className='media-icon' size="25" color="#1DA1F2" />
            <FaInstagram className='media-icon instagram' size="25" />
          </div>
        </form>
    </section>
  </div>
  );
};

export default Footer;