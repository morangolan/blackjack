import React, { Component } from 'react';
import Card from './card';
import { cardValueTransformer } from '../utils/card_util'

class Hand extends Component {
  constructor(props) {
    super (props);
    this.state = {
      sum: 0,
      cards : this.props.cards
    };
    this.updateSum= this.updateSum.bind(this);
    this.handleCardClick= this.handleCardClick.bind(this);
  }

  componentDidMount() {
    const cards = this.props.cards;
    this.setState({ cards });
    this.updateSum();
  }

  componentWillReceiveProps(nextProps) {
    // Any time props.cards changes, update state.
    if (nextProps.cards !== this.props.cards) {
      this.setState({ cards: nextProps.cards });
    }
  }

  updateSum() {
    let sum = 0;
    this.state.cards.map(card => {
      if (card.face) {
        const value = cardValueTransformer(card.value);
        sum = sum+ value;
      }
    });
    this.setState({ sum });
  };

  handleCardClick(cardCode, type) {
    let cards = this.state.cards;
    const index = cards.findIndex(card => card.code === cardCode);
    cards[index].face = !cards[index].face;
    const cardValue = cardValueTransformer(cards[index].value);
    

    this.setState({ cards });
    this.updateSum();
  };

  handleRestartClick() {
    location.reload();
  }

  //return hand of player with current cards
  render() {
    const type = this.props.type;
    const cards = this.state.cards;

    const CardItems = this.state.cards.map(
      (card) => {
        return <Card 
          card = {card} 
          key = {card.code} 
          type = {type} 
          onCardClick = {this.handleCardClick} 
        />; 
      }
    );

    const result = () => {
      const sum = this.state.sum;
      const restart = <button
            onClick = {this.handleRestartClick}
            className="btn btn-secondary"
          > Restart Game 
          </button>
      if (sum >= 21) {
        if (sum > 21) {
          return <div className='result-msg'> {type} Lost! {restart} </div>;
        }
        if (sum === 21) {
          return <div className='result-msg'> {type} Won - Blackjack! {restart} </div>;
        }

      }
    }

    return(
        <div className = 'player-bar'>
          <div className = {type}> 
            <div className = 'player-title'> {type} 
              <span className = 'sum'>{this.state.sum} </span>
            </div>
            <ul className = 'card-list'>
              {CardItems}
            </ul>
          </div>
          <div>
            {result()}
          </div>
        </div>
    );
  }
}

export default Hand;