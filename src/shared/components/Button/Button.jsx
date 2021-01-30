import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

function Button({ type = 'submit', onClick }) {
  return (
    <button
      className="button"
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      SEND
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: '',
};

export default Button;
