import {createStackNavigator} from 'react-navigation-stack';
import {Delivery, Area, City} from '_components/Dashboard';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const routeConfigs = {
  [screenNames.DELIVERY]: {
    screen: Delivery,
    navigationOptions,
  },
  [screenNames.CITY]: {
    screen: City,
    navigationOptions,
  },
  [screenNames.AREA]: {
    screen: Area,
    navigationOptions,
  },
};

const DeliveryNavigator = createStackNavigator(routeConfigs, {
  initialRouteName: screenNames.DELIVERY,
});

export default DeliveryNavigator;
