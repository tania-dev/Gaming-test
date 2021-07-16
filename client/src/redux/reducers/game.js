import { GAME } from '../constants';

const initialState = {
    items: [],
    coins: []
}

const gameReducer = (state = initialState, action) => {
	if(action.type === GAME.GAME_LOAD_SUCCESS) {
		return {...state.items, ...action.payload.coins};
	}
	return state;
}

export default gameReducer;