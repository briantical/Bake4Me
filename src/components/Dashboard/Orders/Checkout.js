import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Button} from 'react-native-elements';
export class Checkout extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          backgroundColor="#C50069"
          leftComponent={
            <Icon
              name="arrow-back"
              color="#fff"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={{
            text: 'Checkout',
            style: {color: '#fff', fontWeight: 'bold'},
          }}
        />
        <Text> Checkout </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
