import { combineReducers } from 'redux';

import countriesReducer from './country';
import gameReducer from './game';
import loginReducer from './login';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  game: gameReducer,
  login: loginReducer,
  countryObj: countriesReducer,
  registration: registrationReducer,
});

export default rootReducer;
