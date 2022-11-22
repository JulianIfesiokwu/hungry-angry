import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./ErrorPage.styles.css";

const ErrorPage = () => {
  const Navigate = useNavigate();

  return (
    <div className='error-page'>
      <section className="section-one">
        <p className="error-code">404</p>
        <p className="error-message">Sorry the page you requested may have been deleted or does not exist.</p>
      </section>
      <section className="section-two">
        <button className='home-btn'><Link to="/">Back Home</Link></button>
        <button className='prev-btn' onClick={() => Navigate(-1)}>previous page</button>
      </section>
    </div>
  )
};

export default ErrorPage;