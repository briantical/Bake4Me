import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as screenNames from '_constants/screen_names';
import AuthNavigator from './Auth';
import DrawerNavigator from './App';

import AuthLoading from './AuthLoading';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      [screenNames.DRAWER]: DrawerNavigator,
      [screenNames.AUTH]: AuthNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppNavigator;
