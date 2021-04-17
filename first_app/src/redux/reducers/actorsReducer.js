import { FETCH_ACTORS } from '../constants';

const initialState = {
  actors: []
}

export default function actorsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTORS:
      console.log("actors");
      return { ...state, actors: ["actor to"] };
    default:
      return state;
  }
}