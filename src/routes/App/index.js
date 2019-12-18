import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

import {Drawer, Account, Deals, Live_Chat, Orders, Settings} from '_components';

import {DeliveryNavigator, InfoNavigator, VendorNavigator} from './Main/';

import * as screenNames from '_constants/screen_names';

const RouteConfigs = {
  [screenNames.DELIVERY]: {
    screen: DeliveryNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="bike" type="material-community" color={tintColor} />
      ),
    },
  },
  [screenNames.VENDOR]: {
    screen: VendorNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="restaurant" type="material" color={tintColor} />
      ),
    },
  },
  [screenNames.DEALS]: {
    screen: Deals,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="percent" type="feather" color={tintColor} />
      ),
    },
  },
  [screenNames.ACCOUNT]: {
    screen: Account,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="user" type="evilicon" color={tintColor} />
      ),
    },
  },
  [screenNames.ORDERS]: {
    screen: Orders,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="page" type="foundation" color={tintColor} />
      ),
    },
  },

  [screenNames.SETTINGS]: {
    screen: Settings,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="setting" type="antdesign" color={tintColor} />
      ),
    },
  },
  [screenNames.LIVE_CHAT]: {
    screen: Live_Chat,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="customerservice" type="antdesign" color={tintColor} />
      ),
    },
  },
  [screenNames.INFO]: {
    screen: InfoNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon
          name="information-outline"
          type="material-community"
          color={tintColor}
        />
      ),
    },
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
