import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneAndroid, MdArrowForward } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import './ContactUs.styles.css';

export const ContactUs = () => {
  return (
    <section className="contact-details">
        <form className='contact-form'>
          <h3 className="contact-title">Get in Touch</h3>
          <textarea placeholder='Enter Message' id="" cols="30" rows="5"></textarea>
          <div className="first-row">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
          </div>
          <div className="second-row">
            <input type="text" placeholder='Subject' />
          </div>
          <button className='send-message'>Send &nbsp;<MdArrowForward size='25' /></button>
        </form>
        <div className="business-info">
          <p><FaHome size='30' color='#4CAF50'/><span>21 Aguegbe Street, Amikwo, Awka, Anambra State.</span></p>
          <p><AiOutlineMail size='30' color='#4CAF50'/>info@hungryangry.com</p>
          <p className='phone-no'><MdPhoneAndroid size='30' color='#4CAF50'/><span>(+44) 778 4840 281</span></p>
          <p className='phone-no'><MdPhoneAndroid size='30' color='#4CAF50'/><span>(+234) 802 3199 234</span></p>
          <p className='phone-no'><MdPhoneAndroid size='30' color='#4CAF50'/><span>(+23) 324 1210 463</span></p>
        </div>
    </section>
  );
};

export default ContactUs;
