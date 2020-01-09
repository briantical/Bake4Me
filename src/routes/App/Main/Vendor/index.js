import {createStackNavigator} from 'react-navigation-stack';
import {About, Cart, Vendor, Custom} from '_components';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const routeConfigs = {
  [screenNames.VENDOR]: {
    screen: Vendor,
    params: {show: false},
    navigationOptions,
  },
  [screenNames.ABOUT]: {
    screen: About,
    navigationOptions,
  },
  [screenNames.CART]: {
    screen: Cart,
    navigationOptions,
  },
  [screenNames.CUSTOM]: {
    screen: Custom,
    navigationOptions,
  },
};

const VendorNavigator = createStackNavigator(routeConfigs, {
  initialRouteName: screenNames.VENDOR,
});

export default VendorNavigator;
