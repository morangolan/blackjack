import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeckID, fetchCard, FETCH_PLAYER_CARD, FETCH_DEALER_CARD } from '../actions/index';
import Hand from './hand';
import { cardValueTransformer } from '../utils/card_util'

class GameBar extends Component {
  constructor(props) {
    super (props);
    this.state = {
      round: 0
    };
    this.handleDealClick = this.handleDealClick.bind(this);
    this.fetchCardsToProps= this.fetchCardsToProps.bind(this);
  }
    
	//Fetch Deck id through action creator
  handleDealClick(event) {
    this.fetchCardsToProps();
  }

  fetchCardsToProps() {
    const id = this.props.deckId;
    let round = this.state.round;
    round = round + 1;
    this.props.fetchCard(id, FETCH_PLAYER_CARD);
    this.props.fetchCard(id, FETCH_DEALER_CARD);
    this.setState({ round });
  }

	//return 'deal' button and two hands 
  render() {
    if (this.props.deckId === '') {
      return <div></div>;
    }
    const playerCards = this.props.playerCards;
    const dealerCards = this.props.dealerCards;

    return(
      <div className='game-bar'>
      	<span className = "input-group-btn">
        	<button
            onClick = {this.handleDealClick}
            className="btn btn-secondary"
          > Deal 
          </button>
      	</span>
        <Hand type = 'player' cards = { playerCards } />
        <Hand type = 'dealer' cards = { dealerCards } />
      </div>
    );
  }
}

//connect to app state
function mapStateToProps ({ deckId, playerCards, dealerCards }) {
  return { deckId, playerCards, dealerCards };
}

//connect to app action creators

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDeckID, fetchCard }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(GameBar);