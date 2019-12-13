import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as screenNames from '_constants/screen_names';
import AuthNavigator from './Auth';
import DrawerNavigator from './App';

import AuthLoadingScreen from './Auth/AuthLoadingScreen';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      [screenNames.DRAWER]: DrawerNavigator,
      [screenNames.AUTH]: AuthNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppNavigator;
