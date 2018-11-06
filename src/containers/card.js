import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { cardColor, cardShorter } from '../utils/card_util'

class Card extends Component {
	constructor(props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.props.onCardClick(this.props.card.code, this.props.type);
	}
	
	//return card item
  render(){
    const card = this.props.card;
    const type = this.props.type;
    const color = cardColor(card.suit);
    const shorter = cardShorter(card.value);
    return ( 
      <li 
        key = {card.code}
        className = {`list-unstyled ${card.face}`}
    		onClick={this.handleClick}
    	> 
        <div className = {color}> 
          <span className = 'top'> {shorter} </span>
          <span className = 'bottum'> {shorter} </span>
        </div>
      </li>
    );
  }
}


export default Card;
