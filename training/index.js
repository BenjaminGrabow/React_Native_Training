import { AppRegistry } from 'react-native';
import App from './components/App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/Store/reducers/counterReducer';

const store = createStore(reducer);

const AppContainer = () => 
  <Provider store={store} >
  <App />
  </Provider>;


AppRegistry.registerComponent('training', () => AppContainer);
