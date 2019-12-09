import {createStackNavigator} from 'react-navigation-stack';
import {Signup, Profile} from '_components/Register';
import * as screenNames from '_constants/screen_names';

const navigationOptions = {
  header: null,
};

const RegisterNavigator = createStackNavigator({
  [screenNames.SIGNUP]: {
    screen: Signup,
    navigationOptions,
  },
  [screenNames.PROFILE]: {
    screen: Profile,
    navigationOptions,
  },
});

export default RegisterNavigator;
