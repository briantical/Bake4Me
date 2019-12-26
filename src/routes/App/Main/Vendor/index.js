import {createStackNavigator} from 'react-navigation-stack';
import {About, Addons, Cakes, Cart, Snacks, Vendor} from '_components';
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
  [screenNames.ADDONS]: {
    screen: Addons,
    navigationOptions,
  },
  [screenNames.CAKES]: {
    screen: Cakes,
    navigationOptions,
  },
  [screenNames.CART]: {
    screen: Cart,
    navigationOptions,
  },
  [screenNames.SNACKS]: {
    screen: Snacks,
    navigationOptions,
  },
};

const VendorNavigator = createStackNavigator(routeConfigs, {
  initialRouteName: screenNames.VENDOR,
});

export default VendorNavigator;
