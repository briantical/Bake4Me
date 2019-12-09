import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {DrawerActions} from 'react-navigation-drawer';

export class Account extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Account </Text>
        <Button
          title="REGISTER"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
