import React, { useContext } from 'react';
import volunteerImage from "../../assets/volunteerpage_landing.jpg";
import { VolunteerContext } from '../../context/VolunteerContext';
import './VolunteerPage.styles.css';

export default function Volunteer() {
  const { handleInput, handleSubmit } = useContext(VolunteerContext)

  return (
    <div className='volunteer'>
      <div className="landing">
          <div className="landing-image-container">
            <img src={volunteerImage} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Work with <span className='highlight'>Us</span></h1>
            <a href="#volunteer-form" className='landing-cta'>Get started</a>
          </div>
      </div>
      <div className='why-us'>
        <h3 className='why-us-title'>Why volunteer with us</h3>
        <p>Thinking of becoming a volunteer? See a list of reasons that will help you make up your mind.</p>
        <ul className='volunteer-list'>
          <li>As a volunteer you assist in uniting people from diverse backgrounds to work toward a common goal thereby building camaraderie and teamwork.</li>
          <li>As a volunteer you help support families, improve schools (tutoring, literacy), support youth (mentoring and after-school programs).</li>
          <li>Volunteering encourages civic responsibility. Community service and volunteerism are an investment in our community and the people who live in it.</li>
          <li>Volunteers gain professional experience. You can test out a career.</li>
          <li>You make a difference. Every person counts!</li>
        </ul>
        <p>So what are you waiting for, fill in the form and let's get started.</p>
      </div>
      <form className='volunteer-form' onSubmit={(e) => handleSubmit(e)} id="volunteer-form">
        <h3 className='volunteer-form-title'>Volunteer Recruitment Application Form</h3>
        <p className='about-volunteering'>Our organization is looking for dynamic volunteers to coordinate and recruit fundraising teams, leverage community support, plan activities and help our great cause! Please submit your application through the Volunteer Recruitment Form below. Answering the following questions will help us match your volunteer application with a suitable volunteer role.</p>
        <p className='about-volunteering'>We thank you for your interest in volunteering and supporting our organization's cause.</p>
        <div className='personal-information'>
          <h3 className='personal-information-title'>Volunteer Personal Information</h3>
          <label htmlFor='vounteer-name'>Volunteer Name:</label>
          <input 
            type='text' 
            placeholder='Volunteers Name' 
            id='vounteer-name'
            name='volunteer-name'
            onChange={(e) => handleInput(e)}
            required
            />
          <label htmlFor='volunteer-email'>Volunteer Email:</label>
          <input 
            type='email' 
            placeholder='Email' 
            id='volunteer-email'
            name='volunteer-email'
            onChange={(e) => handleInput(e)}
            required />
          <label htmlFor='volunteer-birth-date'>Volunteer Date of Birth:</label>
          <input 
            type='date' 
            placeholder='Birth Date' 
            id='volunteer-birth-date'
            name='volunteer-birth-date'
            onChange={(e) => handleInput(e)}
            required />
          <label htmlFor='volunteer-phone-number'>Volunteer Phone Number:</label>
          <input 
            type='number' 
            placeholder='Phone' 
            name='volunteer-phone-number'
            id='volunteer-phone-number'
            onChange={(e) => handleInput(e)}
          />
            <label htmlFor='volunteer-address'>Volunteer Address:</label>
          <input 
            type='text' 
            placeholder='Address'
            id='volunteer-address'
            name='volunteer-address'
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className='availability'>
          <h3 className='availability-title'>How often could you spare your time to volunteer with us?</h3>
          <label className="container">
          <input 
            type="checkbox"
            name='Once-a-week'
            onChange={(e) => handleInput(e)} />
          Once a Week
          <span className="checkmark"></span>
          </label>
          <label className="container">
            <input 
            type="checkbox"
            name='Once-a-month'
            onChange={(e) => handleInput(e)} />
            Once a Month
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input 
              type="checkbox" 
              name='Full Time'
              onChange={(e) => handleInput(e)}/>
            Full Time
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input 
              type="checkbox" 
              name='Part Time'
              onChange={(e) => handleInput(e)}/>
            Part Time
            <span className="checkmark"></span>
          </label>  
        </div>
        <div className='roles'>
          <h3 className='roles-title'>Which of the following volunteering position(s) do you want to apply for?</h3>
          <label className="container">
          <input 
            type="checkbox" 
            name='Hospitals'
            onChange={(e) => handleInput(e)}/>
          Hospitals
          <span className="checkmark"></span>
          </label>
          <label className="container">
            <input 
              type="checkbox" 
              name='Orphanages'
              onChange={(e) => handleInput(e)}/>
            Orphanages
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input 
              type="checkbox" 
              name='Schools'
              onChange={(e) => handleInput(e)}/>
            Schools
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input 
              type="checkbox" 
              name='Community Projects'
              onChange={(e) => handleInput(e)}/>
            Community Projects
            <span className="checkmark"></span>
          </label> 
          <h3 className='experiences-title'>Mention the experiences -if any- you find relevant for any of the above programs.</h3>
          <textarea 
            placeholder='Enter Message' 
            id="" 
            cols="30" 
            rows="5"
            name='Volunteer-Previous-Experience'
            onChange={(e) => handleInput(e)}
            className='experiences' />
        </div>
        <button className='confirm-application' type='submit'>Submit Form</button>
      </form>
    </div>
  )
};
