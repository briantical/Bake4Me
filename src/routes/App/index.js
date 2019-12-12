import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

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

import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
  drawerIcon: ({tintColor}) => <Icon name="navigation" type="feather" />,
};

const RouteConfigs = {
  [screenNames.ACCOUNT]: {
    screen: Account,
    navigationOptions,
  },
  [screenNames.DEALS]: {
    screen: Deals,
    navigationOptions,
  },
  [screenNames.DELIVERY]: {
    screen: Delivery,
    navigationOptions,
  },
  [screenNames.INFO]: {
    screen: Info,
    navigationOptions,
  },
  [screenNames.LIVE_CHAT]: {
    screen: Live_Chat,
    navigationOptions,
  },
  [screenNames.ORDERS]: {
    screen: Orders,
    navigationOptions,
  },
  [screenNames.SETTINGS]: {
    screen: Settings,
    navigationOptions,
  },
  [screenNames.VENDOR]: {
    screen: Vendor,
    navigationOptions,
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  contentComponent: props => <Drawer {...props} />,
  contentOptions: {
    activeTintColor: '#C50069',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
};

const DrawerNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig,
);

export default DrawerNavigator;
