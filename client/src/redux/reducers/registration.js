import { USER } from '../constants';

const initialState = {
  isAuthenticated: null,
};

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case USER.REGISTER_REQUEST:
      return { registering: true };
    case USER.REGISTER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case USER.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export default registrationReducer;
