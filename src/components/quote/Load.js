import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/homer-head.png';
import styles from './Load.css';

function Load({ handleClick }) {
  return (
    <section className={styles.center}>
      <section className={styles.container}>
        <img className={styles.img} onClick={handleClick} src={logo}></img>
        <h3 className={styles.h3} onClick={handleClick}>Mmmmore!</h3>
      </section>
    </section>
  );
}

Load.propTypes = {
  handleClick: PropTypes.func.isRequired
};


export default Load;
