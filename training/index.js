import { AppRegistry } from 'react-native';
import App from './components/App';
import React from 'react';
import { Provider } from 'react-redux';

const AppContainer = () => 
  // <Provider store={} >
  <App />;
  {/* </Provider> */}


AppRegistry.registerComponent('training', () => AppContainer);
