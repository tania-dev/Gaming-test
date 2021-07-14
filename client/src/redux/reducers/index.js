import { combineReducers } from 'redux';

import countriesReducer from './country';
import loginReducer from './login';
import registrationReducer from './registration';

const rootReducer = combineReducers({
	login: loginReducer,
	countryObj: countriesReducer,
	registration: registrationReducer
});

export default rootReducer;