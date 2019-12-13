import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Orders extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Orders </Text>
        <Button
          title="SETTINGS"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
