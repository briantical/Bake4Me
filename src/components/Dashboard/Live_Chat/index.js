import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';

export class Live_Chat extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Live Chat </Text>
        <Button
          title="INFO"
          onPress={() => this.props.navigation.navigate('Info')}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Live_Chat);
