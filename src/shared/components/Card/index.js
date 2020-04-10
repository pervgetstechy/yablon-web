import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { valuePropValidator, suitPropValidator, sizePropValidator } from './validators';
import svgCards from 'svg-cards/svg-cards-indented.svg';
import './style.scss';

export const suits = ['club', 'diamond', 'heart', 'spade'];
export const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
export const sizes = ['sm', 'lg'];

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
  value: valuePropValidator,
  suit: suitPropValidator,
  reveal: PropTypes.bool,
  size: suitPropValidator
};

Card.defaultProps = {
  reveal: false,
  size: 'sm'
};

export default Card
