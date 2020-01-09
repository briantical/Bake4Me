import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';

export class ChangePassword extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header
            backgroundColor="#C50069"
            leftComponent={
              <Icon
                name="arrow-back"
                color="#fff"
                onPress={() => this.props.navigation.navigate('Account')}
              />
            }
            centerComponent={{
              text: 'Reset Password',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
