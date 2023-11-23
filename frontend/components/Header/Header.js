import React from 'react'
import Nav from '../Nav/Nav'
import styles from '../../styles/Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <Nav />
    </header>
  )
}

export default Header
