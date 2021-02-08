import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

function Card({ children, cardClass }) {
  const classValue = classNames({ card: true, about__card: cardClass });
  return <div className={classValue}>{children}</div>;
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  cardClass: PropTypes.bool,
};
export default Card;
