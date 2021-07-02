import React from 'react';
import Logo from '../Logo.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={styles.container}> {/* id="divNav"> */}
      <Link to='/'>
        <span className={styles.titulo}>
          <img className={styles.logo} src={Logo} alt="No se encuentra" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className={styles.titulo}>About</span>
      </Link>  
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
