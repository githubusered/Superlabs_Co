import React from 'react'
import Nav from '../Nav/Nav'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import { url } from 'inspector'
const Header = () => {
  return (
    <header className={styles.header}>
        <Nav />
        <div className={styles.sliderRightArrow}>
        <div className={styles.arrowL}></div>
        </div>
        <div className={styles.sliderLeftArrow}>
          <div className={styles.arrowR}></div>
        </div>
    </header>
  )
}

export default Header
