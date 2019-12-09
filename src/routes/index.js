import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import RegisterNavigator from './registration_routes';
import LoginNavigator from './login_route';
import DashboardNavigator from './dashboard_routes';
import DrawerNavigator from './drawer_routes';

import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const AppNavigator = createStackNavigator({
  [screenNames.HOME]: {
    screen: DashboardNavigator,
    navigationOptions,
  },
  [screenNames.REGISTER]: {
    screen: RegisterNavigator,
    navigationOptions,
  },
  [screenNames.LOGIN]: {
    screen: LoginNavigator,
    navigationOptions,
  },
  [screenNames.DRAWER]: {
    screen: DrawerNavigator,
  },
});

export default createAppContainer(AppNavigator);
