// index.js

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './index';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
