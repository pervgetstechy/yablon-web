import React, { Component } from 'react';
import Card from '@components/Card';
import { freshDeck, shuffle } from '@utils/cardHelpers';
import './style.scss';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: shuffle(freshDeck()),
      stack: null
    };
  }

  pickStack = () => {
    const { deck, stack } = this.state;
    const collection = [...deck];

    if (collection.length) {
      const index = collection.length - 1;
      collection.splice(index, 1);
      this.setState({ stack: deck[index], deck: collection });
    }
  }

  componentDidMount() {
    this.pickStack();
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    const { stack } = this.state;

    return (
      <div className={`yl-deck d-flex ${!stack && 'unstacked' }`}>
        <Card />
        {stack &&
          <div className="yl-deck-stack">
            <Card reveal={stack.reveal} value={stack.defVal} suit={stack.suit} />
          </div>
        }
      </div>
    );
  }
}

export default Deck
