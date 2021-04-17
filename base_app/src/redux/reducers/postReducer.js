import { FETCH_TODOS } from '../constants';

const initialState = {
  todos: null
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: [] };
    default:
      return state;
  }
}