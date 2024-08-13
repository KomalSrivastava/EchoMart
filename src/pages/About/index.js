import React from 'react';
import './about.css';
import About from './About';

function Tes() {
  return (
    <div style={{ margin: '10px auto 10px auto' }}>
      <div className="about-container background">
        <h1 className="contributor-text">About Us</h1>
        <hr></hr>
        <p className="desc">
          EchoCart aims to revolutionize online shopping by offering a
            comprehensive and user-centric platform. With an extensive range of
            products and detailed listings, EchoCart ensures that customers can
            find exactly what they need with ease.
        </p>
        <p className="desc">
          The website's advanced search and filtering options, coupled with
            personalized recommendations, enhance the shopping experience.
            EchoCart emphasizes convenience with a user-friendly shopping cart
            and a secure, streamlined checkout process. Real-time order tracking
            and responsive customer support further elevate the service, while
            special promotions and discounts keep the experience engaging.
            Designed to be mobile-friendly, EchoCart delivers a seamless
            shopping experience across all devices, combining convenience,
            security, and a commitment to customer satisfaction.
        </p>
      </div>
      <About />
    </div>
  );
}

export default Tes;
