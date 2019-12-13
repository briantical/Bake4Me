import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

import * as screenNames from '_constants/screen_names';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
    SplashScreen.hide();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(
      userToken ? screenNames.AUTH : screenNames.DRAWER,
    );
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
