import { GAME } from '../constants';

const initialState = {
  items: [],
  coins: JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).coins
    : 20,
};

const gameReducer = (state = initialState, action) => {
  if (action.type === GAME.GAME_LOAD_SUCCESS) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default gameReducer;
