import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import DrawerNavigator from '_routes/dashboard_routes';

import {DrawerItems} from 'react-navigation-drawer';

import * as screenNames from '_constants/screen_names';
import DashboardNavigator from '_routes';

export class Account extends Component {
  routes = ['hjkl', 'ghjkl'];
  render() {
    return (
      <SafeAreaView>
        <Text> Account </Text>
        <DrawerItems items={[DashboardNavigator]} />
        <Button
          title="REGISTER"
          onPress={() => this.props.navigation.navigate(screenNames.REGISTER)}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
