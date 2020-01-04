import {createStackNavigator} from 'react-navigation-stack';

import RegisterNavigator from './registration_routes';
import LoginNavigator from './login_route';

import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const AuthNavigator = createStackNavigator(
  {
    [screenNames.LOGIN]: {
      screen: LoginNavigator,
      navigationOptions,
    },
    [screenNames.REGISTER]: {
      screen: RegisterNavigator,
      navigationOptions,
    },
  },
  {
    initialRouteName: screenNames.REGISTER,
  },
);

export default AuthNavigator;
