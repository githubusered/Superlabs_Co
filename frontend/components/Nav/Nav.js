import React from 'react';


import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import '../../styles/Nav.css';
import styles from '../../styles/Nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles['nav-content']}>
          <div className={styles['nav-content-left']}>
            <Link href="/" >
              <img src="https://superlabs.co/assets/img/logo-light@2x.png" alt="SuperLabsLogo" className={styles.img} />  
            </Link> 
          </div>          
          <div className={styles['nav-content-right']}>
              <Link href="/work" className={styles.links}><h3>Work</h3></Link>
              <Link href="/services" className={styles.links}>
                <h3 className={styles.dropDownAfter}>Services</h3>
                <div className={styles['nav-content-right-dropdownServices']}>
                  
                </div>
              </Link>
              <Link href="/strategy" className={styles['links']}>
                <h3 className={styles.dropDownAfter}>Strategy</h3>
                <div className={styles['nav-content-right-dropdownServices']}>
                  
                </div>
              </Link>
              <Link href="/careers" className={styles['links']}><h3>Careers</h3></Link>
              <h3 className={styles.hamburgerMenu}><FontAwesomeIcon icon={faBars} /></h3>
          </div>          
        </div>        
      </div>
    </nav>
  )
}

export default Nav;

