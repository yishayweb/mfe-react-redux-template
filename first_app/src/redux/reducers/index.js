import { combineReducers } from 'redux';
import firstAppReducer from './firstAppReducer';
import actorsReducer from './actorsReducer';

const rootReducer = combineReducers({
  firstAppReducer: firstAppReducer,
  actorsReducer: actorsReducer
});

export default rootReducer;