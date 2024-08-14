import React, { useState, useEffect, useRef, useContext, useMemo, useCallback } from 'react';
import SliderBanner from './slider/index';
import CatSlider from '../../components/catSlider';

import Banners from '../../components/banners';
import './style.css';
import Product from '../../components/product';

import Slider from 'react-slick';

import { MyContext } from '../../App';

const Home = ({ data }) => {
  const [prodData, setProdData] = useState(data);
  const [catArray, setCatArray] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [bestSells, setBestSells] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const productRow = useRef();
  const context = useContext(MyContext);

  const settings = useMemo(() => ({
    dots: false,
    infinite: context.windowWidth >= 992,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth >= 992
  }), [context.windowWidth]);

  useEffect(() => {
    document.title = "Popular Products - Your Website";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover popular products and top-selling items on Your Website.");
    }

    const categories = new Set();
    prodData.forEach(item => item.items.forEach(subItem => categories.add(subItem.cat_name)));
    const uniqueCategories = Array.from(categories);
    setCatArray(uniqueCategories);
    setActiveTab(uniqueCategories[0]);
    window.scrollTo(0, 0);
  }, [prodData]);

  useEffect(() => {
    const fetchData = () => {
      const tabData = [];
      prodData.forEach(item => {
        item.items.forEach(subItem => {
          if (subItem.cat_name === activeTab) {
            subItem.products.forEach(product => {
              tabData.push({ ...product, parentCatName: item.cat_name, subCatName: subItem.cat_name });
            });
          }
        });
      });
      setActiveTabData(tabData);
      setTimeout(() => setIsLoadingProducts(false), 1000);
    };

    setActiveTabData([]);
    fetchData();
  }, [activeTab, prodData]);

  useEffect(() => {
    const fetchBestSells = () => {
      const sells = [];
      prodData.forEach(item => {
        if (item.cat_name === 'Electronics') {
          item.items.forEach(subItem => {
            subItem.products.forEach(product => {
              sells.push(product);
            });
          });
        }
      });
      setBestSells(sells);
    };

    fetchBestSells();
  }, [prodData]);

  const handleTabClick = useCallback((cat, index) => {
    setActiveTab(cat);
    setActiveTabIndex(index);
    productRow.current.scrollLeft = 0;
    setIsLoadingProducts(true);
  }, []);

  return (
    <main style={{ display: 'block' }}>
      
      <SliderBanner />
      <CatSlider data={prodData} />
      <Banners />

      <section className="homeProducts homeProductWrapper">
        <div className="container-fluid">
          <div className="d-flex align-items-center homeProductsTitleWrap">
            <h1 className="hd mb-0 mt-0 res-full">Popular Products</h1>
            <ul className="list list-inline ml-auto filterTab mb-0 res-full">
              {catArray.map((cat, index) => (
                <li className="list list-inline-item" key={cat}>
                  <button
                    className={`cursor text-capitalize ${activeTabIndex === index ? 'act' : ''}`}
                    onClick={() => handleTabClick(cat, index)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={`productRow ${isLoadingProducts && 'loading'}`} ref={productRow}>
            {activeTabData.map((item, index) => (
              <div className="item" key={index}>
                <Product tag={item.type} item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      
    </main>
  );
};

export default Home;
