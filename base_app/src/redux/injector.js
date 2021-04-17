import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import postsReducer from './reducers/postReducer';

// Define the Reducers that will always be present in the application
const staticReducers = {
  user: userReducer,
  posts: postsReducer
}

// Configure the store
export default function configureStore() {
  const store = createStore(createReducer());

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (reducersList) => {
    let newReducersAdded = false;
    reducersList.forEach((reducer) => {
      if (store.asyncReducers.hasOwnProperty(reducer.name)) { return; }
      newReducersAdded = true;
      store.asyncReducers[reducer.name] = reducer.content;
    });
    if (newReducersAdded) {
      console.log("putting reducers");
      store.replaceReducer(createReducer(store.asyncReducers));
    }
  }

  store.cleanReducers = (reducersList) => {
    let reducersRemoved = false;
    reducersList.forEach((reducer) => {
      if (store.asyncReducers.hasOwnProperty(reducer.name)) {
        reducersRemoved = true;
        delete store.asyncReducers[reducer.name];
      }
    });
    if (reducersRemoved) {
      console.log("cleaning reducers");
      store.replaceReducer(createReducer(store.asyncReducers));
    }
  }

  // Return the modified store
  return store
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}