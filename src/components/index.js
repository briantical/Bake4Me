import React, {Component, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import * as screenNames from '_constants/screen_names';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text> Hello world </Text>
        <Button
          title="REGISTER"
          onPress={() => this.props.navigation.navigate(screenNames.REGISTER)}
        />
      </View>
    );
  }
}
