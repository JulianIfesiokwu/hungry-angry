import React from 'react';
import donateImage from "../../assets/donatepage_landing.jpg";

export default function Donate() {
  return (
    <div className='volunteer'>
      <div className="landing">
          <div className="landing-image-container">
            <img src={donateImage} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'><span className='highlight'>Your donation</span> is others <span className='highlight'>inspiration.</span></h1>
          </div>
      </div>
      <div className='why-us'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nobis, incidunt suscipit laborum nulla, minus at voluptas debitis voluptates exercitationem ut consequatur officia reiciendis soluta, iusto placeat deserunt eveniet ullam.</p>
      </div>
      <form className='volunteer-form'>
        <h3 className='volunteer-form-title'>Donation Form</h3>
        <p className='about-volunteering'></p>
        <p className='about-volunteering'>We thank you for your donations and support.</p>
        <div className='personal-information'>
          <h3 className='personal-information-title'>Volunteer Personal Information</h3>
          <input type='text' placeholder='Volunteers Name' />
          <input type='email' placeholder='Email' />
          <input type='date' placeholder='Birth Date' />
          <input type='number' placeholder='Phone' />
          <input type='text' placeholder='Address' />
        </div>
        <div className="card-information">
          <input type="number" placeholder='16 digit number' />
          <div className="card-expiry-date">
            <input type="number" />
            /
            <input type="number" />
          </div>
          <input type="number" placeholder="CVV" />
          <input type="text" placeholder="Name on Card" />
          <input type="text" placeholder='Billing Address' />
        </div>
        <button className='confirm-application'>Donate</button>
      </form>
    </div>
  )
}
