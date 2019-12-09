import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '_components/Login';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const LoginNavigator = createStackNavigator({
  [screenNames.LOGIN]: {
    screen: Login,
    navigationOptions,
  },
});

export default LoginNavigator;
