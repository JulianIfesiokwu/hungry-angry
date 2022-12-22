import React from 'react';
import { Link } from 'react-router-dom';
import './Card.styles.css';

const Card = ({img,title,summary,btnTitle,link}) => {
  return (
    <div className='card'>
      <div className="front">
        <div className="card-image-container">
            <img src={img} alt="" />
        </div>
        <div className="card-details">
            <h3 className='card-title'>{title}</h3>
            <p className="summary">{summary}</p>
            <Link className='card-btn' type='button' to={link}>{btnTitle}</Link>
        </div>
      </div>
    </div>
  )
};

export default Card;