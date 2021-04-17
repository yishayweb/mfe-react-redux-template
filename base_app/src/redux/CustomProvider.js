import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import rootReducer from './reducers';
import storeCreator from './injector';

//const store = createStore(rootReducer);
const store = storeCreator();

const CustomProvider = ({ children }) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default CustomProvider;