import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ name, options, value, onChange, placeholder }) => {
  return (
    <select className="select" name={name} value={value} onChange={onChange}>
      <option className="select__option" hidden disabled value="">
        {placeholder}
      </option>
      {options.map(({ value, label }) => (
        <option className="select__option" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  placeholder: '',
  value: '',
};

export default Select;
