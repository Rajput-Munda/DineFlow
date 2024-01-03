import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './State/Store'; // Import your Redux store

import App from './App'; // Your root component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
