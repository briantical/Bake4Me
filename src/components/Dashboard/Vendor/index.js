import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Vendor extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Vendor </Text>
        <Button
          title="DEALS"
          onPress={() => this.props.navigation.navigate('Deals')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
