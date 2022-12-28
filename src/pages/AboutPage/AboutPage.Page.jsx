import React from 'react';
import { Link } from 'react-router-dom';
import carouselImage3 from "../../assets/carousel (3).jpeg";
import AboutImage from "../../assets/about-us.jpeg";
import './AboutPage.styles.css';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className="landing">
          <div className="landing-image-container">
            <img src={carouselImage3} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Converge & innovate, push boundaries and open doors.</h1>
            <Link to="/donations" className='donations-cta'>Donate to a Cause</Link>
          </div>
      </div>
            <section className='about-us'>
                <h1 className='about-title'>About Us</h1>
                <div className="about-all">
                    <div className="about-details">
                        <article className="vision">
                            <h3 className="vision-title">Our Vision</h3>
                            <div className="line"></div>
                            <p className="vision-statement">Our collective little efforts, make all the huge difference in the world.</p>
                        </article>
                        <article className="mission">
                            <h3 className="mission-title">Our Mission</h3>
                            <div className="line"></div>
                            <p className='mission-statement'>We exist, so that we can collaborate with different stakeholders in changing lives to give every individual opportunities to live a dignified life. We bridge the gap bewteeen non resource areas and the surplus resource areas in our world.</p>
                        </article>
                        <article className="we-are">
                            <h3 className="we-are-title">Who We Are</h3>
                            <div className="line"></div>
                            <p className="we-are-statement">We are positioning ourselves to becoming a wealth generation network, where ordinary self driven individuals can converge, innovate, push boundaries and open doors. Hungry & Angry brings people together from diverse professions under one umbrella for exchange learning.</p>
                        </article>
                    </div>
                    <div className="about-image">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default AboutPage;