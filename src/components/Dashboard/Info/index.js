import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Info extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Info </Text>
        <Button
          title="DELIVERY"
          onPress={() => this.props.navigation.navigate('Delivery')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
