import {createStackNavigator} from 'react-navigation-stack';
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
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const DashboardNavigator = createStackNavigator({
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
});

export default DashboardNavigator;
