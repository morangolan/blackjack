import { FETCH_PLAYER_CARD } from '../actions/index';

//return the card list inside the payload object
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PLAYER_CARD: {
        	let card = action.payload.data.cards[0];
        	card.face = false;
            return [...state, card];
        }
    }
    return state;
};


