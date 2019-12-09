import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import * as screenNames from '_constants/screen_names';
import {
  Drawer,
  Account,
  Deals,
  Delivery,
  Info,
  Live_Chat,
  Orders,
  Settings,
  Vendor,
} from '_components/Dashboard';

const DrawerNavigator = createDrawerNavigator(
  {
    [screenNames.DRAWER_ACCOUNT]: {
      screen: Account,
    },
  },
  {
    contentComponent: props => <Drawer {...props} />,
  },
);

export default DrawerNavigator;
