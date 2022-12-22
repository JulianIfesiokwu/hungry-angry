import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import './ContactUs.styles.css';

export const ContactUs = () => {
  return (
    <section className="details">
        <form className='contact-form'>
          <h3 className="contact-title">Get in Touch</h3>
          <textarea placeholder='Enter Message' id="" cols="30" rows="10"></textarea>
          <div className="first-row">
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Email'/>
          </div>
          <div className="second-row">
            <input type="text" placeholder='Subject' />
          </div>
          <button className='send-message'>send</button>
        </form>
        <div className="business-info">
          <p><BsFillHouseFill /> 21 Aguegbe Street, Amikwo, Awka, Anambra State.</p>
          <p><AiOutlineMail />  info@hungryangry.com</p>
          <p className='phone-no'><MdPhoneAndroid />: &nbsp; &nbsp;<span>(+44) 778 4840 281</span></p>
          <p className='phone-no'><MdPhoneAndroid />: &nbsp; &nbsp;<span>(+234) 802 3199 234</span></p>
          <p className='phone-no'><MdPhoneAndroid />: &nbsp; &nbsp;<span>(+23) 324 1210 463</span></p>
        </div>
    </section>
  );
};

export default ContactUs;
