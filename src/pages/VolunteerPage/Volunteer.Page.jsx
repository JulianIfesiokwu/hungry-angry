import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from '../../assets/carousel (1).jpeg';
import { VolunteerContext } from '../../context/VolunteerContext';
import './VolunteerPage.styles.css';

export default function Volunteer() {
  const { handleInput, handleSubmit } = useContext(VolunteerContext)

  return (
    <div className='volunteer'>
      <div className="landing">
          <div className="landing-image-container">
            <img src={carouselImage1} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Join our <span className='highlight'>team</span></h1>
            <p className='landing-minor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia et possimus aspernatur totam exercitationem reiciendis explicabo dolor.</p>
            <Link to="/donations" className='landing-cta'>Join Us</Link>
          </div>
      </div>
      <div className='why-us'>
        <h3 className='why-us-title'>Why volunteer with us</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nobis, incidunt suscipit laborum nulla, minus at voluptas debitis voluptates exercitationem ut consequatur officia reiciendis soluta, iusto placeat deserunt eveniet ullam.</p>
      </div>
      <form className='volunteer-form' onSubmit={(e) => handleSubmit(e)}>
        <h3 className='volunteer-form-title'>Volunteer Recruitment Application Form</h3>
        <p className='about-volunteering'>Our organization is looking for dynamic volunteers to coordinate and recruit fundraising teams, leverage community support, plan activities and help our great cause! Please submit your application through the Volunteer Recruitment Form below. Answering the following questions will help us match your volunteer application with a suitable volunteer role.</p>
        <p className='about-volunteering'>We thank you for your interest in volunteering and supporting our organization's cause.</p>
        <div className='personal-information'>
          <h3 className='personal-information-title'>Volunteer Personal Information</h3>
          <input 
            type='text' 
            placeholder='Volunteers Name' 
            name='volunteer-name'
            onChange={(e) => handleInput(e)}
            required
            />
          <input 
            type='email' 
            placeholder='Email' 
            name='volunteer-email'
            onChange={(e) => handleInput(e)}
            required/>
          <input 
            type='date' 
            placeholder='Birth Date' 
            name='volunteer-birth-date'
            onChange={(e) => handleInput(e)}
            required />
          <input 
            type='number' 
            placeholder='Phone' 
            name='volunteer-phone-number'
            onChange={(e) => handleInput(e)}
            />
          <input type='text' placeholder='Address' />
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
        <button className='confirm-application' type='submit'>Submit Application</button>
      </form>
    </div>
  )
};
