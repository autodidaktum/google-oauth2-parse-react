import { REDIRECT_SUCCESS, LOGIN_SUCCESS, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: null,
  oauth: null,
  errors: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REDIRECT_SUCCESS:
      return {
        ...state,
        oauth: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
