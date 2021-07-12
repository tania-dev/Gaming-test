import { combineReducers } from 'redux';

import countriesReducer from './country';

const rootReducer = combineReducers({
	country: countriesReducer,
});

export default rootReducer;