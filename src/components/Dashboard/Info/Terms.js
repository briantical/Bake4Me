import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

export class Terms extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text> Terms </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
