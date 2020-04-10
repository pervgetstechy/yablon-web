import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svgCards from 'svg-cards/svg-cards-indented.svg';
import './style.scss';

class Card extends Component {
  render() {
    const { reveal, size, suit, value } = this.props
    const cardName = reveal ? `${suit}_${value}` : 'back';

    return (
      <svg
        className={`yl-card ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <use xlinkHref={`${svgCards}#${cardName}`} x="0" y="0"/>
      </svg>
    );
  }
}

Card.propTypes = {
  reveal: PropTypes.bool,
  size: PropTypes.string
};

Card.defaultProps = {
  reveal: false,
  size: 'sm'
};

export default Card
