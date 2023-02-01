import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from "../../assets/aboutpage_landing.jpeg";
import AboutImage from "../../assets/about-us.jpeg";
import './AboutPage.styles.css';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className="landing">
          <div className="landing-image-container">
            <img src={aboutImage} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'><span className='highlight'>Doing nothing</span> is not an <span className='highlight'>option.</span></h1>
            <Link to="/donate" className='donations-cta'>Donate to a Cause</Link>
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
                            <p className='mission-statement'>We exist, so that we can collaborate with different stakeholders in changing lives to give every individual opportunities to live a dignified life.</p>
                        </article>
                        <article className="we-are">
                            <h3 className="we-are-title">Who We Are</h3>
                            <div className="line"></div>
                            <p className="we-are-statement">Based in Anambra state, Nigeria, Hungry & Angry is a not for profit Non Government Organisation with the aim to empower, educate and invest in local communities to create and facilitate their development.</p>
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