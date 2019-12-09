import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import RegisterNavigator from './registration_routes';
import LoginNavigator from './login_route';
import DashboardNavigator from './dashboard_routes';
import DrawerNavigator from './drawer_routes';
import React, {Component} from 'react';

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
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, Text} from 'react-native';

const navigationOptions = {
  header: null,
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
};

const AppNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(AppNavigator);
