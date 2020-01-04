import {createStackNavigator} from 'react-navigation-stack';
import {Signup} from '_components';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const RegisterNavigator = createStackNavigator({
  [screenNames.SIGNUP]: {
    screen: Signup,
    navigationOptions,
  },
});

export default RegisterNavigator;
