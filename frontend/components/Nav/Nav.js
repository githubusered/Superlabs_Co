"use client"
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
              <div  className={`${styles.links} ${styles.forDropDownHover}`}>
                <h3 className={`${styles.dropDownAfter} ${styles.cursorPointer}`}>Services</h3>
                <div className={styles['nav-content-right-dropdownServices']}>
                  <div className={styles['resource-augmentation']}>
                    <Link href='/resource-augmentation' className={styles['resource-augmentation-title']}>RESOURCE AUGMENTATION</Link>
                    <ul className={styles['resource-augmentation-list']}>
                      <li>
                        <ul>
                          <Link href='/dotnet-developer.php' className={styles['resource-augmentation-list-devs']}>Dot Net Developer</Link>
                          <Link href='/full-stack-developer.php' className={styles['resource-augmentation-list-devs']}>Full Stack Developer</Link>
                          <Link href='/web-developer.php' className={styles['resource-augmentation-list-devs']}>Web Developer</Link>
                          <Link href='/angularjs-developer.php' className={styles['resource-augmentation-list-devs']}>Angular JS Developer</Link>
                          <Link href='/ios-developer.php' className={styles['resource-augmentation-list-devs']}>IOS Developer</Link>
                          <Link href='/android-developer.php' className={styles['resource-augmentation-list-devs']}>Android Developer</Link>
                          <Link href='/java-developer.php' className={styles['resource-augmentation-list-devs']}>Java Developer</Link>
                          <Link href='/flutter-developer.php' className={styles['resource-augmentation-list-devs']}>Flutter Developer</Link>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <Link href='/nodejs-developer.php' className={styles['resource-augmentation-list-devs']}>NodeJS Developer</Link>
                          <Link href='/javascript-developer.php' className={styles['resource-augmentation-list-devs']}>Javascript Developer</Link>
                          <Link href='/app-developer.php' className={styles['resource-augmentation-list-devs']}>App Developer</Link>
                          <Link href='/machine-learning-developer.php' className={styles['resource-augmentation-list-devs']}>Machine Learning Developer</Link>
                          <Link href='/back-end-developer.php' className={styles['resource-augmentation-list-devs']}>Backend Developer</Link>
                          <Link href='/front-end-developer.php' className={styles['resource-augmentation-list-devs']}>Frontend Developer</Link>
                          <Link href='/quality-assurance-specialist.php' className={styles['resource-augmentation-list-devs']}>Quality Assurance Developer</Link>
                          <Link href='/security-engineers.php' className={styles['resource-augmentation-list-devs']}>Security Engineers</Link>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className={styles['it-services']}>
                    <Link href='/it-services' className={styles['resource-augmentation-title']}>IT SERVICES</Link>
                    <ul className={styles['resource-augmentation-services']}>
                        <Link href='/cloud-infrastructure.php' className={styles['resource-augmentation-list-devs']}>Cloud Infrastrucutre</Link>
                        <Link href='/machine-learning.php' className={styles['resource-augmentation-list-devs']}>Machine Learning</Link>
                        <Link href='/enterprise-technology.php' className={styles['resource-augmentation-list-devs']}>Enterprise Technology</Link>
                        <Link href='/payments.php' className={styles['resource-augmentation-list-devs']}>Payments</Link>
                        <Link href='/security.php' className={styles['resource-augmentation-list-devs']}>Security</Link>
                        <Link href='/blockchainenterprise.php' className={styles['resource-augmentation-list-devs']}>Blockchain</Link>
                        <Link href='/application-development.php' className={styles['resource-augmentation-list-devs']}>Application Development</Link>
                    </ul>
                    <Link href='/engineering-services.php' className={styles['resource-augmentation-title']}>Engineering Services</Link>
                    <ul className={styles['resource-augmentation-services']}>
                        <Link href='/industrial-products.php' className={styles['resource-augmentation-list-devs']}>Industrial Products</Link>
                        <Link href='/machine-design.php' className={styles['resource-augmentation-list-devs']}>Machine Design</Link>
                        <Link href='/special-devices.php' className={styles['resource-augmentation-list-devs']}>Special Devices</Link>
                        <Link href='/technical.php' className={styles['resource-augmentation-list-devs']}>Technical Documentation</Link>
                        <Link href='/concept-visualizing.php' className={styles['resource-augmentation-list-devs']}>Concept Visualizing</Link>
                        <Link href='/mechanical-engineeing-prototyping.php' className={styles['resource-augmentation-list-devs']}>Mechanical Engineering & Prototyping</Link>
                        <Link href='/research-and-development.php' className={styles['resource-augmentation-list-devs']}>Research and Development</Link>
                    </ul>
                    <Link href='/' className={styles['resource-augmentation-title']}>Design</Link>
                    <ul className={styles['resource-augmentation-services']}>
                        <Link href='/visual-identity-design' className={styles['resource-augmentation-list-devs']}>Visual Identity</Link>
                        <Link href='/ux-and-ui-design.php' className={styles['resource-augmentation-list-devs']}>UX & UI</Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div  className={styles['links']}>
                <h3 className={styles.dropDownAfter}>Strategy</h3>
                <div className={styles['nav-content-right-dropdownStrategy']}>
                  <ul className={styles['posRelative']}>
                    <li className={`${styles['resource-augmentation-list-devs']} ${styles['afterArrowRight']}`}>
                      Operations
                      <div className={styles['doubleDropDown']}>
                          <ul>
                            <Link className={styles.doubleDropDownLi} href='/data-strategy.php'>Data Strategy</Link>
                            <Link className={styles.doubleDropDownLi} href='/organizational-design.php'>Organizational Design</Link>
                            <Link className={styles.doubleDropDownLi} href='/price-modeling.php'>Price Modeling</Link>
                          </ul>
                      </div>
                      </li>
                    <li className={`${styles['resource-augmentation-list-devs']} ${styles['afterArrowRight']}`}>
                      Business
                    <div className={styles['doubleDropDown']}>
                          <ul>
                            <Link className={styles.doubleDropDownLi} href='/new-digital.php'>New Ventures</Link>
                            <Link className={styles.doubleDropDownLi} href='/cost-reduction.php'>Cost Reduction</Link>
                          </ul>
                      </div>
                      </li>
                    <li className={`${styles['resource-augmentation-list-devs']} ${styles['afterArrowRight']}`}>
                      Transformation
                      <div className={styles['doubleDropDown']}>
                          <ul>
                            <Link className={styles.doubleDropDownLi} href='/change-implementation.php'>Change Implementation</Link>
                            <Link className={styles.doubleDropDownLi} href='/product-and-experience.php'>Product Innovation</Link>
                          </ul>
                      </div>
                      </li>
                    <Link href='/intellectual-property' className={styles['resource-augmentation-list-devs']}>Intellectual  Property</Link>
                  </ul>
                </div>
              </div>
              <Link href="/careers" className={styles['links']}><h3>Careers</h3></Link>
              <h3 className={styles.hamburgerMenu}><FontAwesomeIcon icon={faBars} /></h3>
          </div>          
        </div>        
      </div>
    </nav>
  )
}

export default Nav;

