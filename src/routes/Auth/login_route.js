import {createStackNavigator} from 'react-navigation-stack';
import {Login, Profile, ChangePassword} from '_components';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const LoginNavigator = createStackNavigator(
  {
    [screenNames.LOGIN]: {
      screen: Login,
      navigationOptions,
    },
    [screenNames.PROFILE]: {
      screen: Profile,
      navigationOptions,
    },
    [screenNames.CHANGEPASSWORD]: {
      screen: ChangePassword,
      navigationOptions,
    },
  },
  {
    initialRouteName: screenNames.LOGIN,
  },
);

export default LoginNavigator;
