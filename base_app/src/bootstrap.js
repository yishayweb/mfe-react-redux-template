import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import CustomProvider from './redux/CustomProvider';
import { Provider } from 'react-redux';
import storeCreator from './redux/injector';

const store = storeCreator();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//module.hot.accept();