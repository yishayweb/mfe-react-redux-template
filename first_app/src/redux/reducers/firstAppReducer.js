import { FIRST_APP_DATA_FETCH } from '../constants';

const initialState = {
  firstAppData: null
}

export default function firstAppReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_APP_DATA_FETCH:
      console.log("hi");
      return { ...state, firstAppData: ["first app data"] };
    default:
      return state;
  }
}