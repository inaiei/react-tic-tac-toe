import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import gameReducer from './Reducer/GameReducer';

const store = createStore(gameReducer);

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent("tictactoe", () => RNRedux);