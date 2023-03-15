import React from 'react';
import styles from './navbar.module.scss';
import CartWidget from '../CartWidget/cartwidget';

const Navbar = ({logoIcon}) => {
  return (
    <nav className= {styles.navbarcontainer}>
        <p><img className={styles.brandicon} src={logoIcon} />Tenth Player</p>
        <a href="#">Home</a>
        <a href="#">All The Shirts</a>
        <a href="#">Branch Offices</a>

        <CartWidget icon='https://cdn-icons-png.flaticon.com/512/5087/5087847.png'/>
    </nav>
  )
}

export default Navbar