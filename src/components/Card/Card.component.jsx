import React from 'react';
import './Card.styles.css';

const Card = ({img,title,summary}) => {
  return (
    <div className='card'>
      <div className="front">
        <div className="card-image-container">
            <img src={img} alt="" />
        </div>
        <div className="card-details">
            <h3 className='card-title'>{title}</h3>
            <p className="summary">{summary}</p>
            <button className='learn-more-btn' type='button'><span className='red'>Click here</span> to learn more...</button>
        </div>
      </div>
        <div className="back">
          <p>Use your time to serve the world and you will find that the world serves you.</p>
        </div>
    </div>
  )
};

export default Card;