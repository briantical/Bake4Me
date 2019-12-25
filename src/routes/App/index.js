import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

import {Drawer, Account, Deals, Live_Chat, Settings} from '_components';

import {
  DeliveryNavigator,
  InfoNavigator,
  VendorNavigator,
  OrdersNavigator,
} from './Main/';

import * as screenNames from '_constants/screen_names';

const RouteConfigs = {
  [screenNames.DELIVERY_NAVIGATOR]: {
    screen: DeliveryNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="bike" type="material-community" color={tintColor} />
      ),
    },
  },
  [screenNames.VENDOR_NAVIGATOR]: {
    screen: VendorNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="restaurant" type="material" color={tintColor} />
      ),
    },
  },
  [screenNames.DEALS_NAVIGATOR]: {
    screen: Deals,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="percent" type="feather" color={tintColor} />
      ),
    },
  },
  [screenNames.ACCOUNT_NAVIGATOR]: {
    screen: Account,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="account" type="material-community" color={tintColor} />
      ),
    },
  },
  [screenNames.ORDERS_NAVIGATOR]: {
    screen: OrdersNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="page" type="foundation" color={tintColor} />
      ),
    },
  },

  [screenNames.SETTINGS_NAVIGATOR]: {
    screen: Settings,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="setting" type="antdesign" color={tintColor} />
      ),
    },
  },
  [screenNames.LIVECHAT_NAVIGATOR]: {
    screen: Live_Chat,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="customerservice" type="antdesign" color={tintColor} />
      ),
    },
  },
  [screenNames.INFO_NAVIGATOR]: {
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
