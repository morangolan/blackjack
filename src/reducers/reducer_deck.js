import { FETCH_DECK } from '../actions/index';

//return the card list inside the payload object
export default function (state = '', action){

    switch (action.type){
        case FETCH_DECK: {
            return action.payload.data.deck_id;
        }
    }
    return state;
}
