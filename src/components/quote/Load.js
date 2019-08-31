import React from 'react';
import PropTypes from 'prop-types';

function Load({ handleClick }) {
  return (
    <button onClick={handleClick}>Summon Forth</button>
  );
}

Load.propTypes = {
  handleClick: PropTypes.func.isRequired
};


export default Load;
