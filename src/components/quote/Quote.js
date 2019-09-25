import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

function Quote({ quote, character, image }) {
  return (
    <section className={styles.section}>
      <h2>{character}</h2>
      <img src={image}></img>
      <h4>{quote}</h4>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
