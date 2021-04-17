import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import CustomProvider from './redux/CustomProvider';

ReactDom.render(
  <CustomProvider>
    <Root />
  </CustomProvider>,
  document.getElementById('root')
);

module.hot.accept();