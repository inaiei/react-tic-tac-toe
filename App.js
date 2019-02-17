import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './AppContainer';

import Header from './components/Header';

import { createStore } from 'redux';
import gameReducer from './Reducer/GameReducer';

const store = createStore(gameReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}