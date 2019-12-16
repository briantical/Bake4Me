import React, {Component} from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import store from '_store';
import AppNavigator from '_routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
