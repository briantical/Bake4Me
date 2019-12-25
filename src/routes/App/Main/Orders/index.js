import {createStackNavigator} from 'react-navigation-stack';
import {Orders, OrderDetails, NoOrders} from '_components';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const routeConfigs = {
  [screenNames.ORDERS]: {
    screen: Orders,
    navigationOptions,
  },
  [screenNames.ORDER_DETAILS]: {
    screen: OrderDetails,
    navigationOptions,
  },
  [screenNames.NOORDERS]: {
    screen: NoOrders,
    navigationOptions,
  },
};

const OrdersNavigator = createStackNavigator(routeConfigs, {
  initialRouteName: screenNames.ORDER,
});

export default OrdersNavigator;
