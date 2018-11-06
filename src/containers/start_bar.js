import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeckID } from '../actions/index';
import { fetchCard } from '../actions/index';

class StartBar extends Component {
    constructor (props) {
        super (props);
        this.fetchGameDeck= this.fetchGameDeck.bind(this);
    }
    
  //Fetch new Deck for the game
  fetchGameDeck () {
    this.props.fetchDeckID();
  }
    
	//return button on StartBar game header
    render(){
      return (
        <div className='game-header'>
          <div className = 'title' >
            BlackJack
            <span className = 'details'> | Developed by Moran Golan </span>
          </div>
        	<span className = 'input-group-btn'>
          	<button
              onClick = {this.fetchGameDeck} 
              className = 'btn btn-secondary'
            > Start Game 
            </button>
        	</span>
        </div>
      );
    }
}

//connect to app action creators

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDeckID, fetchCard }, dispatch);
}

export default connect (null, mapDispatchToProps)(StartBar);