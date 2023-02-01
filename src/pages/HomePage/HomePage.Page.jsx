import React from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from "../../assets/homepage_landing.jpg";
import cardImage3 from "../../assets/cardImage (3).jpeg";
import volunteerImage from "../../assets/volunteer.jpg";
import donateImage from "../../assets/donate.jpg";
import trainImage from "../../assets/train.jpg";
import conclusionImage1 from "../../assets/conclusionImage (1).jpeg";
import Card from '../../components/Card/Card.component';
import "./HomePage.Page.styles.css";

const HomePage = () => {

  return (
    <div className='home-page'>
      <div className="landing">
          <div className="landing-image-container">
            <img src={carouselImage1} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Give a <span className='highlight'>helping hand</span> to those <span className='highlight'>who need it.</span></h1>
            <Link to="/donate" className='donations-cta'>Donate to a Cause</Link>
          </div>
      </div>
      <section className="welcome">
        <h2 className="welcome-header">About Us</h2>
        <div className="welcome-content">
          <div className="column-two">
          <h3 className="welcome-title">Who We Are</h3>
          <p className="welcome-info">Based in Anambra state, Nigeria, Hungry & Angry is a not for profit Non Government Organisation with the aim to empower, educate and invest in local communities to create and facilitate their development.
          </p>
          <h3 className="welcome-title">Our Aim</h3>
          <p className='welcome-info-one'>We are on a mission to help the less priviledged.</p>
          <p className="welcome-info">We seek to impact local communities with individual grants to persons seeking to develop small businesses, provide training for persons with disabilities, invest in local youths by offering business workshops, training and mentoring.
          </p>
          <Link className='about-cta' to='/about'>Learn more...</Link>
        </div>
        <div className="welcome-image-container">
          <img src={cardImage3} alt='' />
        </div>
        </div>
      </section>
      <section className="more-info">
        <h2 className="more-info-header">What We Do</h2>
        <div className="more-info-content">
          <Card img={volunteerImage} btnTitle={`Volunteer`} link={`/volunteer`}/>
          <Card img={trainImage} btnTitle={`Train`} link={`/train`}/>
          <Card img={donateImage} btnTitle={`Donate`} link={`/donate`}/>
        </div>
        </section>
      <section className='conclusion'>
        <article className='article'>
          <div className="article-img-container">
            <img src={conclusionImage1} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ullam fugit sed repudiandae illo? Beatae cumque alias, quisquam facere optio blanditiis laudantium, libero deleniti esse quam, ducimus accusantium?</p>
        </article>
        <article className='article'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ullam fugit sed repudiandae illo? Beatae cumque alias, quisquam facere optio blanditiis laudantium, libero deleniti esse quam, ducimus accusantium?</p>
          <div className="article-img-container">
            <img src={conclusionImage1} alt="" />
          </div>
        </article>
      </section>
    </div>
  )
};

export default HomePage;