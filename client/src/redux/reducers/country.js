import { COUNTRIES } from '../constants';

const initialState = {
    country: {}
}

const countryReducer = (state = initialState, action) => {
	if(action.type === COUNTRIES.LOAD_SUCCESS) {
		return {...state.country, ...action.payload.country};
	}
	return state;
}

export default countryReducer;