// src/components/Banners.js
import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Banner1 from '../../assets/images/banner1.jpeg';
import Banner2 from '../../assets/images/banner2.jpeg';
import Banner3 from '../../assets/images/banner3.jpeg';
import './style.css';

const Banners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={500} />
              ) : (
                <img src={Banner1} className="w-100 transition" alt="Banner 1" />
              )}
            </div>
          </div>

          <div className="col">
            <div className="box">
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={500} />
              ) : (
                <img src={Banner2} className="w-100 transition" alt="Banner 2" />
              )}
            </div>
          </div>

          <div className="col">
            <div className="box">
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={500} />
              ) : (
                <img src={Banner3} className="w-100 transition" alt="Banner 3" />
              )}
            </div>
          </div>
        </div>
        <div className="subscribe-container">
          <button className="subscribe-now-button">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
