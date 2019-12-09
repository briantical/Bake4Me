import React, {Component} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from '_store';
import AppNavigator from '_routes';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    console.log('Store' + JSON.stringify(store));
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
