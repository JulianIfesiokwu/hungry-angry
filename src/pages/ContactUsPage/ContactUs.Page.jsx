import React, { useContext } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneAndroid, MdArrowForward } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import './ContactUs.styles.css';
import { ContactFormContext } from '../../context/ContactFormContext';

export const ContactUs = () => {
  const { handleInput, handleSubmit } = useContext(ContactFormContext)

  return (
    <section className="contact-details">
        <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
          <h3 className="contact-title">Get in Touch</h3>
          <textarea 
            placeholder='Enter Message'  
            id="" 
            cols="30" 
            rows="5"
            name='contact-message'
            onChange={(e) => handleInput(e)}
            required
            />
          <div className="first-row">
            <input 
              type="text" 
              placeholder='Name' 
              name='contact-name'
              onChange={(e) => handleInput(e)}
              required
              />
            <input 
              type="email" 
              placeholder='Email'
              name='contact-email'
              onChange={(e) => handleInput(e)}
              required/>
          </div>
          <div className="second-row">
            <input 
              type="text" 
              placeholder='Subject' 
              name='contact-subject'
              onChange={(e) => handleInput(e)}
              required
              />
          </div>
          <button className='send-message' type='submit'>Send &nbsp;<MdArrowForward size='25' /></button>
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
