import {createDrawerNavigator} from 'react-navigation-drawer';

import * as screenNames from '_constants/screen_names';
import {
  Account,
  Deals,
  Delivery,
  Info,
  Live_Chat,
  Orders,
  Settings,
  Vendor,
} from '_components/Dashboard';

const DrawerNavigator = createDrawerNavigator({
  [screenNames.DRAWER_ACCOUNT]: {
    screen: Account,
  },
});

export default DrawerNavigator;
