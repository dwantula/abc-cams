import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  value,
  className,
  register,
  placeholder,
  type,
  name,
  onChange,
}) => (
  <input
    placeholder={placeholder}
    name={name}
    className={className}
    ref={register}
    onChange={onChange}
    type={type}
    value={value}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  register: () => {},
  placeholder: '',
  name: '',
  value: '',
  className: '',
};

export default Input;
