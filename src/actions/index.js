import axios from 'axios';
const ROOT_URL_DECK='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

export const FETCH_DECK = 'FETCH_DECK';
export const FETCH_PLAYER_CARD = 'FETCH_PLAYER_CARD';
export const FETCH_DEALER_CARD = 'FETCH_DEALER_CARD';

//Action Creator- Fetch deck of cards
export function fetchDeckID() {
    const request = axios.get(ROOT_URL_DECK);
    return {
      type: FETCH_DECK,
      payload: request
    };
}


//Action Creator- Fetch a card for player/dealer
export function fetchCard(deck_id, fetch_type) {
    const request = axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    return {
      type: fetch_type,
      payload: request
    };
}
