import { combineReducers } from 'redux';
import deckIDReducer from './reducer_deck';
import playerReducer from './reducer_player';
import dealerReducer from './reducer_dealer';

//Main app State is updated by child reducers
const rootReducer = combineReducers({
	deckId: deckIDReducer,
	playerCards: playerReducer,
	dealerCards: dealerReducer
});

export default rootReducer;
