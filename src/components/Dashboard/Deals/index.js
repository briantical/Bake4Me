import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Deals extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Deals </Text>
        <Button
          title="ACCOUNT"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
