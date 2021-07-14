import { USER } from '../constants';

const initialState = {
  isAuthenticated: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER.LOGIN_REQUEST:
      return { registering: true };
    case USER.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case USER.LOGIN_FAILURE:
      return {};
    case USER.LOGOUT:
      localStorage.removeItem('user')
      return state.isAuthenticated = null;
    default:
      return state
  }
}

export default loginReducer;