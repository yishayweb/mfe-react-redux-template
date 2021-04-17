import { LOGIN_USER } from '../constants';

const initialState = {
  username: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload };
    default:
      return state;
  }
}