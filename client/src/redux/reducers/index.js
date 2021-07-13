import { combineReducers } from 'redux';

import countriesReducer from './country';
import registrationReducer from './registration';

const rootReducer = combineReducers({
	country: countriesReducer,
	registration: registrationReducer
});

export default rootReducer;