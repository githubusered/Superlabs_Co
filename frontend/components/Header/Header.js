"use client"
import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(3);

  const handleSlideChange = (destination) => {
    if (destination === 'next') {
      setCurrentSlide((nextSlide) => (nextSlide === 4 ? 1 : nextSlide + 1));
    } else {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
    }
  };
  const handleDotClicks = (slideNumber) =>{
    setCurrentSlide(slideNumber)
  }
  const renderDots = () => {
    const dots =[];
    for (let i = 1; i <= 4; i++) {
      dots.push(
        <span 
        key={i}
        className={`${styles.dot} ${currentSlide === i ? styles.activeDot : ''}`}
          onClick={()=>handleDotClicks(i)}
        ></span>
      )
    }
    return dots;
  }
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentSlide((nextSlide) => (nextSlide === 4 ? 1 : nextSlide + 1));
    }, 2000);
    return ()=>{clearInterval(interval)}
  },[])

  return (
    <header className={`${styles.header} ${styles[`slide${currentSlide}`]}`}>
      <Nav />
      <div className={styles.sliderTotalText}>
         <div className={styles.textsOnSlider}>
          <h3 className={styles.sliderTitle3}>Engineering</h3>
          <h2 className={styles.sliderTitle2}>Prototyping for the most complex components</h2>
          <Link href='/engineering-services' className={styles.sliderTitle4}>Learn more </Link>
         </div>
      </div>
      <div className={styles.sliderRightArrow} onClick={() => handleSlideChange('prev')}>
        <div className={styles.arrowL}></div>
      </div>
      <div className={styles.sliderLeftArrow} onClick={() => handleSlideChange('next')}>
        <div className={styles.arrowR}></div>
      </div>

      <div className={styles.pagination}>
        {renderDots()}    
      </div>
    </header>
  );
};

export default Header;

