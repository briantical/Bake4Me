import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './Auth/';
import DashboardNavigator from './dashboard_routes';

import AuthLoadingScreen from './Auth/AuthLoadingScreen';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DashboardNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppNavigator;
