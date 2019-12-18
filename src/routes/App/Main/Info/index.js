import {createStackNavigator} from 'react-navigation-stack';
import {Info, Contact, Policy, Press, Terms, Works} from '_components';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const routeConfigs = {
  [screenNames.INFO]: {
    screen: Info,
    navigationOptions,
  },
  [screenNames.CONTACT]: {
    screen: Contact,
    navigationOptions,
  },
  [screenNames.POLICY]: {
    screen: Policy,
    navigationOptions,
  },
  [screenNames.PRESS]: {
    screen: Press,
    navigationOptions,
  },
  [screenNames.TERMS]: {
    screen: Terms,
    navigationOptions,
  },
  [screenNames.WORKS]: {
    screen: Works,
    navigationOptions,
  },
};

const InfoNavigator = createStackNavigator(routeConfigs, {
  initialRouteName: screenNames.INFO,
});

export default InfoNavigator;
