import React from 'react';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="nav-content-left">
            <Link href="/" className='imgLink'>
              <img src="https://superlabs.co/assets/img/logo-light@2x.png" alt="SuperLabsLogo" />  
            </Link> 
          </div>          
          <div className="nav-content-right">
              <Link href="/work" className='links'><h3>Work</h3></Link>
              <Link href="/services" className='links'>
                <h3>Services</h3>
                <div className="nav-content-right-dropdownServices">

                </div>
              </Link>
              <Link href="/strategy" className='links'>
                <h3>Strategy</h3>
                <div className="nav-content-right-dropdownStrategy">
                  
                </div>
              </Link>
              <Link href="/careers" className='links'><h3>Carrers</h3></Link>
              <h3 className='hamburgerMenu'><FontAwesomeIcon icon={faBars}/></h3>
          </div>          
        </div>        
      </div>
    </nav>
  )
}

export default Nav;

