import React from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from "../../assets/carousel (1).jpeg";
import cardImage1 from "../../assets/cardImage (1).jpeg";
import cardImage2 from "../../assets/cardImage (2).jpeg";
import cardImage3 from "../../assets/cardImage (3).jpeg";
import conclusionImage1 from "../../assets/conclusionImage (1).jpeg";
import conclusionImage2 from "../../assets/conclusionImage (2).jpeg";
import Card from '../../components/Card/Card.component';
import "./HomePage.Page.styles.css";

const HomePage = () => {

  return (
    <div className='home-page'>
      <div className="carousel">
          <div className="carousel-image-container display-image">
            <img src={carouselImage1} alt="" className='carousel-image' />
          </div>
          <div className="heading-text">
            <h1 className='heading-major'>A wealth creation & generation NGO.</h1>
            <Link to="/donations" className='donations-cta'>Donate to a Cause</Link>
          </div>
      </div>
      <section className="welcome">
        <h3 className="welcome-title">What We Are Doing</h3>
        <p>We are on a mission to help the helpless.</p>
        <p className="welcome-info">We are positioning ourselves to become a wealth generating network, where ordinary self driven individuals can converge and innovate, push boundaries and open doors. Hungry and Angry is attempting to bring people with diverse professions to come together under one umbrella for exchange learning.</p>
        <Link className='about-cta' to='/about'>Learn more...</Link>
      </section>
      <section className="more-info">
        <Card img={cardImage1} title={`Volunteering`} summary={`It became necessary to seek new ways to complement the efforts of government`} btnTitle={`Volunteer with Us`} link={`/volunteer`}/>
        <Card img={cardImage2} title={`Trainers`} summary={`Hungry and Angry attempts to bring together people with diverse professions under ...`} btnTitle={`Train with Us`} link={`/train`}/>
        <Card img={cardImage3} title={`Donations`} summary={`Hungry and Angry attempts to bring together people with diverse professions under ...`} btnTitle={`Donate to a Cause`} link={`/donate`}/>
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
            <img src={conclusionImage2} alt="" />
          </div>
        </article>
      </section>
    </div>
  )
};

export default HomePage;