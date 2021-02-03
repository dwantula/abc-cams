import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  className,
  register,
  placeholder,
  type,
  name,
  onChange,
  isMandatory,
  value,
  errors,
}) => (
  <div className="input__container">
    <input
      name={name}
      className={className}
      ref={register}
      onChange={onChange}
      type={type}
    />
    {!value && (
      <p className="input__placeholder">
        {placeholder}
        {isMandatory && <span className="input__mandatory-mark"> *</span>}
      </p>
    )}
    {!errors.value && <p className="input__errors">{errors.message}</p>}
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  isMandatory: PropTypes.bool,
  value: PropTypes.string,
  errors: PropTypes.object.isRequired,
};

Input.defaultProps = {
  register: () => {},
  placeholder: '',
  name: '',
  className: '',
  isMandatory: false,
  value: '',
  errors: {},
};

export default Input;
