import React from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from '../../assets/carousel (1).jpeg';

export default function Train() {
  return (
    <div className='volunteer'>
      <div className="landing">
          <div className="landing-image-container display-image">
            <img src={carouselImage1} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Work with Us</h1>
            <p className='landing-minor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia et possimus aspernatur totam exercitationem reiciendis explicabo dolor.</p>
            <Link to="/donations" className='donations-cta'>Apply</Link>
          </div>
      </div>
      <div className='why-us'>
        <h3 className='why-us-title'>Why work with us</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nobis, incidunt suscipit laborum nulla, minus at voluptas debitis voluptates exercitationem ut consequatur officia reiciendis soluta, iusto placeat deserunt eveniet ullam.</p>
      </div>
      <form className='volunteer-form'>
        <h3 className='volunteer-form-title'>Trainee Application Form</h3>
        <p className='about-volunteering'>Our organization is looking for dynamic volunteers to coordinate and recruit fundraising teams, leverage community support, plan activities and help our great cause! Please submit your application through the Volunteer Recruitment Form below. Answering the following questions will help us match your volunteer application with a suitable volunteer role.</p>
        <p className='about-volunteering'>We thank you for your interest in volunteering and supporting our organization's cause.</p>
        <div className='personal-information'>
          <h3 className='personal-information-title'>Trainee Personal Information</h3>
          <input type='text' placeholder='Trainee Name' />
          <input type='email' placeholder='Email' />
          <input type='date' placeholder='Birth Date' />
          <input type='number' placeholder='Phone' />
          <input type='text' placeholder='Address' />
        </div>
        <div className='availability'>
          <h3 className='availability-title'>How often could you spare your time to work with us?</h3>  
          <label className="container">
            <input type="checkbox" />
            Full Time
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input type="checkbox" />
            Part Time
            <span className="checkmark"></span>
          </label>  
        </div>
        <div className='roles'>
          <h3 className='roles-title'>Which of the following volunteering position do you want to apply for?</h3>
          <label className="container">
          <input type="checkbox" />
          Hospitals
          <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="checkbox" />
            Orphanages
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input type="checkbox" />
            Schools
            <span className="checkmark"></span>
          </label>  
          <label className="container">
            <input type="checkbox" />
            Community Services
            <span className="checkmark"></span>
          </label> 
          <p>Mention the experiences -if any- you find relevant for any of the above programs.</p>
          <textarea placeholder='Enter Message' id="" cols="30" rows="5" className='experiences'></textarea>
        </div>
        <button className='confirm-application'>Submit Application</button>
      </form>
    </div>
  )
}
