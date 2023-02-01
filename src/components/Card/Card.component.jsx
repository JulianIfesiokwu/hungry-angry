import React from 'react';
import { Link } from 'react-router-dom';
import './Card.styles.css';

const Card = ({ img, btnTitle, link }) => {
  return (
    <Link to={link} className='card'>
      <img src={img} alt="" />
      <div className="content">
        <h3 className='card-title'>{btnTitle}</h3>
      </div>
    </Link>
  )
};

export default Card;