import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

import * as screenNames from '_constants/screen_names';

class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('token');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(
      //userToken ? screenNames.AUTH : screenNames.DRAWER,
      token ? screenNames.DRAWER : screenNames.AUTH,
    );
  };

  // Render any loading content that you like here
  render() {
    SplashScreen.hide();
    return null;
  }
}

export default AuthLoading;
