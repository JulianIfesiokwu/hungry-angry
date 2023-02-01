import React, { useContext } from 'react';
import trainImage from '../../assets/trainpage_landing.jpg';
import { traineeContext } from '../../context/TraineeContext';

export default function Train() {
  const { handleInput, handleSubmit } = useContext(traineeContext);

  return (
    <div className='volunteer'>
      <div className="landing">
          <div className="landing-image-container display-image">
            <img src={trainImage} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Join our <span className='highlight'>Team</span></h1>
            <a href="#trainee-form" className='donations-cta'>Apply</a>
          </div>
      </div>
      <div className='why-us'>
        <h3 className='why-us-title'>Why work with us</h3>
        <p>Thinking of working with us? See a list of reasons that will help you make up your mind.</p>
        <ul className='volunteer-list'>
          <li>Vocational education and training, allows students to gain practical experience in their chosen career path before they even graduate.</li>
          <li>The importance of vocational development can largely be summed up as the difference between theoretical knowledge vs. practical skills.</li>
          <li>Students spend hours in the practical workshops each week learning hands-on practical skills related to their chosen field..</li>
          <li>Students have an excellent opportunity to build a strong network that will enhance their learning experience and the rest of their professional careers.</li>
        </ul>
        <p>So what are you waiting for, fill in the form and let's get started.</p>
      </div>
      <form className='volunteer-form' id="trainee-form">
        <h3 className='volunteer-form-title'>Trainee Application Form</h3>
        <p className='about-volunteering'>Our organization is looking for dynamic volunteers to coordinate and recruit fundraising teams, leverage community support, plan activities and help our great cause! Please submit your application through the Volunteer Recruitment Form below. Answering the following questions will help us match your volunteer application with a suitable volunteer role.</p>
        <p className='about-volunteering'>We thank you for your interest in volunteering and supporting our organization's cause.</p>
        <div className='personal-information'>
          <h3 className='personal-information-title'>Trainee Personal Information</h3>
          <label htmlFor='trainee-name'>Trainee Name:</label>
          <input 
            type='text' 
            placeholder='Trainee Name' 
            id='trainee-name'
            name='trainee-name'
            onChange={(e) => handleInput(e)}
            required
            />
          <label htmlFor='trainee-email'>Trainee Email:</label>
          <input 
            type='email' 
            placeholder='Email' 
            id='trainee-email'
            name='trainee-email'
            onChange={(e) => handleInput(e)}
            required />
          <label htmlFor='trainee-birth-date'>Trainee Date of Birth:</label>
          <input 
            type='date' 
            placeholder='Birth Date' 
            id='trainee-birth-date'
            name='trainee-birth-date'
            onChange={(e) => handleInput(e)}
            required />
          <label htmlFor='trainee-phone-number'>Trainee Phone Number:</label>
          <input 
            type='number' 
            placeholder='Phone' 
            name='trainee-phone-number'
            id='trainee-phone-number'
            onChange={(e) => handleInput(e)}
          />
            <label htmlFor='trainee-address'>Volunteer Address:</label>
          <input 
            type='text' 
            placeholder='Address'
            id='trainee-address'
            name='trainee-address'
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
        <button className='confirm-application' onClick={handleSubmit}>Submit Application</button>
      </form>
    </div>
  )
}
