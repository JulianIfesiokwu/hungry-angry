import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import carouselImage1 from "../../assets/carousel (1).jpeg";
import carouselImage2 from "../../assets/carousel (2).jpeg";
import carouselImage3 from "../../assets/carousel (3).jpeg";
import cardImage1 from "../../assets/cardImage (1).jpeg";
import cardImage2 from "../../assets/cardImage (2).jpeg";
import cardImage3 from "../../assets/cardImage (3).jpeg";
import conclusionImage1 from "../../assets/conclusionImage (1).jpeg";
import conclusionImage2 from "../../assets/conclusionImage (2).jpeg";
import Card from '../../components/Card/Card.component';
import "./HomePage.Page.styles.css";

const HomePage = () => {

  // Carousel
  const carouselImages = [carouselImage1, carouselImage2, carouselImage3];
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;

  const nextImage = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevImage = () => setCurrent(current === 0 ? length - 1 : current - 1);

  // infinte scroll carousel
  const infinteScroll = () => {
    if(current === carouselImages.length - 1) {
      return (setCurrent(0))
    }
    return setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {infinteScroll()}, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className='home-page'>
      <div className="carousel">
        <button className="prev-container carousel-btn" type="button">
          <MdChevronLeft size="90" onClick={prevImage} color="white" />
        </button>
        {
          carouselImages.map((carouselImage, index) => {
            return  <div key={index}>
                      <div className={index === current ? "carousel-image-container display-image" : "carousel-image-container hide-image"} >
                        <img src={carouselImage} alt="" className='carousel-image' />
                      </div>
                      <button className='carousel-cta' type='button'>Click here to learn more...</button>
                    </div>
          })
        }
          <button type='button' className="next-container carousel-btn">
            <MdChevronRight size="90" onClick={nextImage} color="white" />
          </button>          
      </div>
      <section className="welcome">
        <h1 className="welcome-title">Welcome to Hungry & Angry Foundation</h1>
        <p className="welcome-info">We are positioning ourselves to become a wealth generating network, where ordinary self driven individuals can converge and innovate, push boundaries and open doors. Hungry and Angry is attempting to bring people with diverse professions to come together under one umbrella for exchange learning.</p>
        <button className='learn-more-btn' type='button'><span className='red'>Click here</span> to learn more...</button>
      </section>
      <section className="more-info">
        <Card img={cardImage1} title={`volunteers`} summary={`It became necessary to seek new ways to complement the efforts of government`} />
        <Card img={cardImage2} title={`trainers`} summary={`Hungry and Angry attempts to bring together people with diverse professions under ...`} />
        <Card img={cardImage3} title={`donations`} summary={`Hungry and Angry attempts to bring together people with diverse professions under ...`} />
        <Card img={cardImage3} title={`donations`} summary={`Hungry and Angry attempts to bring together people with diverse professions under ...`} />
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