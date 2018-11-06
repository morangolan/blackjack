export const cardValueTransformer = (value) => {
  switch (value) {
    case 'KING': 
      return 10;
    case 'QUEEN':
      return 10;
    case 'JACK':
      return 10;
    case 'ACE':
      return 1;
    default: return parseInt(value);
  }
};

export const cardColor = (suit) => {
  switch (suit) {
    case ('DIAMONDS'): return 'red';
    case ('HEARTS'): return 'red';
    case ('CLUBS'): return 'black';
    case ('SPADES'): return 'black';
    default: return 'black';
  }
};

export const cardShorter = (value) => {
  switch (value) {
    case 'KING': 
      return 'K';
    case 'QUEEN':
      return 'Q';
    case 'JACK':
      return 'J';
    case 'ACE':
      return 'A';
    default: return parseInt(value);
  }
};
