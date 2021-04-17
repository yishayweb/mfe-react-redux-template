import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const CustomProvider = ({ children }) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default CustomProvider;