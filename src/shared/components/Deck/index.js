import React, { Component } from 'react';
import Card from '@components/Card';
import './style.scss';

class Deck extends Component {
  render() {
    return (
      <div className="yl-deck d-flex">
        <Card />
        <div className="yl-deck-stack">
          <Card />
        </div>
      </div>
    );
  }
}

export default Deck
