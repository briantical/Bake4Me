import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Account extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Account </Text>
        <Button
          title="ORDERS"
          onPress={() => this.props.navigation.navigate('Orders')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
