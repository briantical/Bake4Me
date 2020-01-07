import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {setToken, setUser} from '_actions';
import * as screenNames from '_constants/screen_names';

class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let {setToken, setUser} = this.props;

    AsyncStorage.multiGet(['token', 'user'], (error, results) => {
      if (error) {
        console.log(error);
        return error;
      }
      let [token, user] = results;
      setToken(token[1]);
      setUser(JSON.parse(user[1]));

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(
        token[1] && user[1] ? screenNames.DRAWER : screenNames.AUTH,
        //token ? screenNames.AUTH : screenNames.DRAWER,
      );
    });
  };

  // Render any loading content that you like here
  render() {
    SplashScreen.hide();
    return null;
  }
}

const mapStateToProps = state => {
  let {user, token} = state;
  return {token, user};
};

const mapDispatchToProps = {setToken, setUser};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
