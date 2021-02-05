import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

function Button({ type = 'submit', onClick, text }) {
  return (
    <button
      className="button"
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: '',
  text: '',
  onClick: () => {},
};

export default Button;
