import { CARD_VALUES, CARD_SUITS } from '@shared/enums';

export const freshDeck = () =>
  CARD_SUITS.reduce((acc, suit) => { CARD_VALUES.forEach(v => {
    let value;

    switch (v) {
      case 'jack':
        value = 11;
        break;
      case 'queen':
        value = 12;
        break;
      case 'king':
        value = 13;
        break;
      default:
        value = v;
    }

    acc.push({
      value,
      suit,
      name: `${suit}_${v}`,
      defVal: v,
      reveal: false
    });
  });

  return acc;
}, []);

export const shuffle = (deck) => {
    var ctr = deck.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = deck[ctr];
        deck[ctr] = deck[index];
        deck[index] = temp;
    }

    return deck;
}
