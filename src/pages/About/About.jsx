import React, { useState, useEffect } from 'react';
import './about.css';
import product from '../../assets/images/product.png';
import producthover from '../../assets/images/producthover.png';
import ux from '../../assets/images/ux.png';
import uxhover from '../../assets/images/uxhover.png';
import payment from '../../assets/images/payment.png';
import paymenthover from '../../assets/images/paymenthover.png';
import delivery from '../../assets/images/delivery.png';
import deliveryhover from '../../assets/images/deliveryhover.png';

const AboutUs = () => {
  const [productHovered, setProductHovered] = useState(false);
  const [paymentHovered, setPaymentHovered] = useState(false);
  const [deliveryHovered, setDeliveryHovered] = useState(false);
  const [uxHovered, setUxHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="about-us"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '3rem'
      }}
    >
      <h1 className="about-us-heading">Features</h1>
      <div className="about-us-block">
        <div
          className="about-us-community"
          onMouseOver={() => setProductHovered(true)}
          onMouseLeave={() => setProductHovered(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={productHovered ? producthover : product}
              alt=""
              style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }}
            />
            <div className="about-us-blk-text">Diverse Product Range</div>
          </div>
          <p className="about-us-blk-para">
            EchoCart aims to revolutionize online shopping by offering a
            comprehensive and user-centric platform. With an extensive range of
            products and detailed listings, EchoCart ensures that customers can
            find exactly what they need with ease.
          </p>
        </div>
        <div
          className="about-us-product"
          onMouseOver={() => setUxHovered(true)}
          onMouseLeave={() => setUxHovered(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={uxHovered ? uxhover : ux}
              alt=""
              style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }}
            />
            <div className="about-us-blk-text">Seamless User Experience</div>
          </div>
          <p className="about-us-blk-para">
            EchoCart aims to revolutionize online shopping by offering a
            comprehensive and user-centric platform. With an extensive range of
            products and detailed listings, EchoCart ensures that customers can
            find exactly what they need with ease.
          </p>
        </div>
      </div>
      <div className="about-us-block">
        <div
          className="about-us-location"
          onMouseOver={() => setPaymentHovered(true)}
          onMouseLeave={() => setPaymentHovered(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={paymentHovered ? paymenthover : payment}
              alt=""
              style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }}
            />
            <div className="about-us-blk-text">Secure Payment Options</div>
          </div>
          <p className="about-us-blk-para">
            The website's advanced search and filtering options, coupled with
            personalized recommendations, enhance the shopping experience.
            EchoCart emphasizes convenience with a user-friendly shopping cart
            and a secure, streamlined checkout process. Real-time order tracking
            and responsive customer support further elevate the service, while
            special promotions and discounts keep the experience engaging.
            Designed to be mobile-friendly.
          </p>
        </div>
        <div
          className="about-us-event"
          onMouseOver={() => setDeliveryHovered(true)}
          onMouseLeave={() => setDeliveryHovered(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={deliveryHovered ? deliveryhover : delivery}
              alt=""
              style={{ marginLeft: '1rem', marginTop: '1rem', width: '3rem' }}
            />
            <div className="about-us-blk-text">Efficient Delivery Services</div>
          </div>
          <p className="about-us-blk-para">
            The website's advanced search and filtering options, coupled with
            personalized recommendations, enhance the shopping experience.
            EchoCart emphasizes convenience with a user-friendly shopping cart
            and a secure, streamlined checkout process. Real-time order tracking
            and responsive customer support further elevate the service, while
            special promotions and discounts keep the experience engaging.
            Designed to be mobile-friendly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
