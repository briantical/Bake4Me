import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

export class Live_Chat extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Live Chat </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Live_Chat);
