import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Settings extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Settings </Text>
        <Button
          title="LIVE CHAT"
          onPress={() => this.props.navigation.navigate('Live Chat')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
